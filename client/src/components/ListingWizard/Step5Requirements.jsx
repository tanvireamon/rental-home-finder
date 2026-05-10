import React from 'react';

const Step5Requirements = ({ data, updateData, errors }) => {
  return (
    <div className="step-form">
      <h2>👥 Tenant Requirements</h2>
      <p className="step-description">Set criteria to help attract suitable tenants</p>

      <div className="form-group">
        <label htmlFor="minCreditScore">Minimum Credit Score</label>
        <div className="credit-score-selector">
          <input
            id="minCreditScore"
            type="range"
            min="300"
            max="850"
            step="10"
            value={data.minCreditScore}
            onChange={(e) => updateData('minCreditScore', parseInt(e.target.value))}
          />
          <div className="score-display">
            <span className="score-value">{data.minCreditScore}</span>
            <span className={`score-label ${getScoreCategory(data.minCreditScore)}`}>
              {getScoreLabel(data.minCreditScore)}
            </span>
          </div>
        </div>
        <p className="info-text">National average credit score is 715</p>
      </div>

      <div className="form-group">
        <label htmlFor="minIncome">Minimum Annual Income</label>
        <div className="input-wrapper">
          <span className="currency">$</span>
          <input
            id="minIncome"
            type="number"
            min="0"
            step="1000"
            value={data.minIncome}
            onChange={(e) => updateData('minIncome', e.target.value)}
            placeholder="e.g., 45000"
          />
        </div>
        <p className="info-text">
          Recommended: At least 3x monthly rent ({data.minIncome || 'Not set'})
        </p>
      </div>

      <div className="form-group checkbox-group">
        <label htmlFor="backgroundCheck">
          <input
            id="backgroundCheck"
            type="checkbox"
            checked={data.backgroundCheck}
            onChange={(e) => updateData('backgroundCheck', e.target.checked)}
          />
          <span>Require Background Check</span>
        </label>
        <p className="info-text">Recommended for safety and property protection</p>
      </div>

      <div className="form-group">
        <label htmlFor="petPolicy">Pet Policy</label>
        <select
          id="petPolicy"
          value={data.petPolicy}
          onChange={(e) => updateData('petPolicy', e.target.value)}
        >
          <option value="no">No Pets</option>
          <option value="cats">Cats Only</option>
          <option value="dogs">Dogs Only</option>
          <option value="both">Cats and Dogs</option>
          <option value="any">Any Pets</option>
        </select>
      </div>

      {data.petPolicy !== 'no' && (
        <div className="form-group">
          <label htmlFor="maxPets">Maximum Number of Pets</label>
          <input
            id="maxPets"
            type="number"
            min="1"
            max="10"
            value={data.maxPets}
            onChange={(e) => updateData('maxPets', parseInt(e.target.value))}
            placeholder="e.g., 2"
          />
        </div>
      )}

      <div className="form-group checkbox-group">
        <label htmlFor="smokingAllowed">
          <input
            id="smokingAllowed"
            type="checkbox"
            checked={data.smokingAllowed}
            onChange={(e) => updateData('smokingAllowed', e.target.checked)}
          />
          <span>Allow Smoking</span>
        </label>
        <p className="info-text">Indoor smoking</p>
      </div>

      {/* Requirements Summary */}
      <div className="requirements-summary">
        <h3>📋 Tenant Screening Checklist</h3>
        <div className="checklist">
          <div className="checklist-item">
            <span className={data.minCreditScore > 0 ? 'checked' : ''}>✓</span>
            <span>Credit Score: {data.minCreditScore}</span>
          </div>
          <div className="checklist-item">
            <span className={data.minIncome > 0 ? 'checked' : ''}>✓</span>
            <span>Income Verification: ${data.minIncome || 'Not required'}</span>
          </div>
          <div className="checklist-item">
            <span className={data.backgroundCheck ? 'checked' : ''}>✓</span>
            <span>Background Check: {data.backgroundCheck ? 'Required' : 'Not required'}</span>
          </div>
          <div className="checklist-item">
            <span className={data.petPolicy !== 'no' ? 'checked' : ''}>✓</span>
            <span>Pets: {formatPetPolicy(data.petPolicy, data.maxPets)}</span>
          </div>
          <div className="checklist-item">
            <span className={!data.smokingAllowed ? 'checked' : ''}>✓</span>
            <span>Smoking: {data.smokingAllowed ? 'Allowed' : 'Not allowed'}</span>
          </div>
        </div>
      </div>

      {/* Tips */}
      <div className="tips-section">
        <h3>💡 Tenant Screening Tips</h3>
        <ul>
          <li>Higher credit scores indicate reliable payment history</li>
          <li>Income verification ensures tenants can afford rent</li>
          <li>Background checks reveal eviction or criminal history</li>
          <li>Clear pet policy prevents future conflicts</li>
          <li>Non-smoking properties typically maintain better condition</li>
          <li>Be consistent with your criteria across all applications</li>
        </ul>
      </div>
    </div>
  );
};

// Helper functions
const getScoreCategory = (score) => {
  if (score >= 750) return 'excellent';
  if (score >= 670) return 'good';
  if (score >= 580) return 'fair';
  return 'poor';
};

const getScoreLabel = (score) => {
  if (score >= 750) return 'Excellent';
  if (score >= 670) return 'Good';
  if (score >= 580) return 'Fair';
  return 'Poor';
};

const formatPetPolicy = (policy, maxPets) => {
  const policies = {
    no: 'No pets allowed',
    cats: `Cats only (max ${maxPets})`,
    dogs: `Dogs only (max ${maxPets})`,
    both: `Cats and dogs (max ${maxPets})`,
    any: `Any pets (max ${maxPets})`,
  };
  return policies[policy] || 'Not specified';
};

export default Step5Requirements;