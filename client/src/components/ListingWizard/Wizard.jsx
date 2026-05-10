import Step1Basic from "./Step1Basic";
import Step2Amenities from "./Step2Amenities";
import Step3Photos from "./Step3Photos";
import Step4Pricing from "./Step4Pricing";
import Step5Requirements from "./Step5Requirements";
import Step6Payment from "./Step6Payment";

const ListingWizard = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Basic Info
    title: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    propertyType: 'apartment',
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: '',
    description: '',
    
    // Step 2: Amenities
    amenities: [],
    
    // Step 3: Photos
    photos: [],
    
    // Step 4: Pricing
    monthlyRent: '',
    depositAmount: '',
    petDeposit: 0,
    leaseTerm: 12,
    availableDate: '',
    
    // Step 5: Requirements
    minCreditScore: 650,
    minIncome: '',
    backgroundCheck: true,
    petPolicy: 'no',
    maxPets: 0,
    smokingAllowed: false,
    
    // Step 6: Payment
    bankAccount: '',
    paymentMethod: 'bank_transfer',
    autoPayment: true,
  });

  const [errors, setErrors] = useState({});

  const updateFormData = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
    // Clear error for this field
    if (errors[key]) {
      setErrors((prev) => ({
        ...prev,
        [key]: null,
      }));
    }
  };

  const updateArrayField = (key, item) => {
    setFormData((prev) => {
      const arr = prev[key];
      if (arr.includes(item)) {
        return {
          ...prev,
          [key]: arr.filter((i) => i !== item),
        };
      } else {
        return {
          ...prev,
          [key]: [...arr, item],
        };
      }
    });
  };

  const validateStep = () => {
    const newErrors = {};

    if (currentStep === 1) {
      if (!formData.title.trim()) newErrors.title = 'Property title is required';
      if (!formData.address.trim()) newErrors.address = 'Address is required';
      if (!formData.city.trim()) newErrors.city = 'City is required';
      if (!formData.description.trim()) newErrors.description = 'Description is required';
    }

    if (currentStep === 3) {
      if (formData.photos.length === 0) newErrors.photos = 'Upload at least one photo';
      if (formData.photos.length > 20) newErrors.photos = 'Maximum 20 photos allowed';
    }

    if (currentStep === 4) {
      if (!formData.monthlyRent) newErrors.monthlyRent = 'Monthly rent is required';
      if (!formData.availableDate) newErrors.availableDate = 'Available date is required';
    }

    if (currentStep === 6) {
      if (!formData.bankAccount) newErrors.bankAccount = 'Bank account is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep((prev) => Math.min(prev + 1, 6));
    }
  };

  const handlePrev = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async () => {
    if (!validateStep()) return;

    try {
      const response = await fetch('/api/listings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        onComplete(data);
      } else {
        setErrors({ submit: 'Failed to create listing' });
      }
    } catch (error) {
      console.error('Error submitting listing:', error);
      setErrors({ submit: error.message });
    }
  };

  const stepTitles = [
    'Basic Information',
    'Amenities',
    'Upload Photos',
    'Pricing & Availability',
    'Tenant Requirements',
    'Payment Settings',
  ];

  return (
    <div className="listing-wizard">
      {/* Progress Bar */}
      <div className="wizard-progress">
        <h1>Create a New Listing</h1>
        <div className="progress-track">
          {[1, 2, 3, 4, 5, 6].map((step) => (
            <div key={step} className={`progress-step ${step <= currentStep ? 'completed' : ''} ${step === currentStep ? 'active' : ''}`}>
              <div className="step-number">{step}</div>
              <div className="step-label">{stepTitles[step - 1]}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Current Step Content */}
      <div className="wizard-content">
        <div className="step-content">
          {currentStep === 1 && (
            <Step1Basic 
              data={formData} 
              updateData={updateFormData}
              errors={errors}
            />
          )}
          {currentStep === 2 && (
            <Step2Amenities 
              data={formData} 
              updateData={updateArrayField}
              errors={errors}
            />
          )}
          {currentStep === 3 && (
            <Step3Photos 
              data={formData} 
              updateData={updateFormData}
              errors={errors}
            />
          )}
          {currentStep === 4 && (
            <Step4Pricing 
              data={formData} 
              updateData={updateFormData}
              errors={errors}
            />
          )}
          {currentStep === 5 && (
            <Step5Requirements 
              data={formData} 
              updateData={updateFormData}
              errors={errors}
            />
          )}
          {currentStep === 6 && (
            <Step6Payment 
              data={formData} 
              updateData={updateFormData}
              errors={errors}
            />
          )}
        </div>

        {/* Navigation Buttons */}
        <div className="wizard-actions">
          <button 
            className="btn-prev"
            onClick={handlePrev}
            disabled={currentStep === 1}
          >
            ← Back
          </button>

          {currentStep < 6 ? (
            <button 
              className="btn-next"
              onClick={handleNext}
            >
              Next →
            </button>
          ) : (
            <button 
              className="btn-submit"
              onClick={handleSubmit}
            >
              ✓ Create Listing
            </button>
          )}
        </div>
      </div>

      {/* Error Message */}
      {errors.submit && (
        <div className="error-message">
          {errors.submit}
        </div>
      )}
    </div>
  );
};

export default ListingWizard;