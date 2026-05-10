import React from 'react';

const Step4Pricing = ({ data, updateData, errors }) => {
  const calculateAnnualRent = () => {
    return data.monthlyRent ? (data.monthlyRent * 12).toLocaleString() : 0;
  };

  return (
    <div className="step-form">
      <h2>💰 Pricing & Availability</h2>
      <p className="step-description">Set rental prices and when the property is available</p>

      <div className="form-group">
        <label htmlFor="monthlyRent">Monthly Rent (USD) *</label>
        <div className="input-wrapper">
          <span className="currency">$</span>
          <input
            id="monthlyRent"
            type="number"
            min="0"
            step="50"
            value={data.monthlyRent}
            onChange={(e) => updateData('monthlyRent', e.target.value)}
            placeholder="e.g., 1500"
            className={errors.monthlyRent ? 'error' : ''}
          />
        </div>
        {errors.monthlyRent && <span className="error-text">{errors.monthlyRent}</span>}
        <p className="info-text">Annual rent: ${calculateAnnualRent()}</p>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="depositAmount">Security Deposit (USD)</label>
          <div className="input-wrapper">
            <span className="currency">$</span>
            <input
              id="depositAmount"
              type="number"
              min="0"
              step="50"
              value={data.depositAmount}
              onChange={(e) => updateData('depositAmount', e.target.value)}
              placeholder="e.g., 3000"
            />
          </div>
          <p className="info-text">
            {data.depositAmount && data.monthlyRent
              ? `${(data.depositAmount / data.monthlyRent).toFixed(1)}x monthly rent`
              : 'Typically 1-2 months rent'}
          </p>
        </div>

        <div className="form-group">
          <label htmlFor="petDeposit">Pet Deposit (USD)</label>
          <div className="input-wrapper">
            <span className="currency">$</span>
            <input
              id="petDeposit"
              type="number"
              min="0"
              step="25"
              value={data.petDeposit}
              onChange={(e) => updateData('petDeposit', e.target.value)}
              placeholder="e.g., 500"
            />
          </div>
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="leaseTerm">Lease Term (Months)</label>
          <select
            id="leaseTerm"
            value={data.leaseTerm}
            onChange={(e) => updateData('leaseTerm', parseInt(e.target.value))}
          >
            <option value={3}>3 months</option>
            <option value={6}>6 months</option>
            <option value={12}>12 months (1 year)</option>
            <option value={24}>24 months (2 years)</option>
            <option value={36}>36 months (3 years)</option>
            <option value={0}>Flexible</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="availableDate">Available Date *</label>
          <input
            id="availableDate"
            type="date"
            value={data.availableDate}
            onChange={(e) => updateData('availableDate', e.target.value)}
            className={errors.availableDate ? 'error' : ''}
          />
          {errors.availableDate && <span className="error-text">{errors.availableDate}</span>}
        </div>
      </div>

      {/* Price Summary */}
      <div className="price-summary">
        <h3>💡 Price Breakdown</h3>
        <div className="summary-row">
          <span>Monthly Rent:</span>
          <span>${data.monthlyRent || 0}</span>
        </div>
        <div className="summary-row">
          <span>Security Deposit:</span>
          <span>${data.depositAmount || 0}</span>
        </div>
        <div className="summary-row">
          <span>Pet Deposit:</span>
          <span>${data.petDeposit || 0}</span>
        </div>
        <div className="summary-row total">
          <span>Total Upfront Cost:</span>
          <span>${(parseInt(data.monthlyRent || 0) + parseInt(data.depositAmount || 0) + parseInt(data.petDeposit || 0)).toLocaleString()}</span>
        </div>
      </div>

      {/* Pricing Tips */}
      <div className="tips-section">
        <h3>💡 Pricing Tips</h3>
        <ul>
          <li>Research comparable properties in your area</li>
          <li>Consider location, amenities, and condition</li>
          <li>Be competitive to attract quality tenants</li>
          <li>Security deposit typically equals 1-2 months' rent</li>
          <li>Pet deposit is optional and encourages pet owners to apply</li>
        </ul>
      </div>
    </div>
  );
};

export default Step4Pricing;