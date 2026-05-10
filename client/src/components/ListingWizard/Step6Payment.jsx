import React from 'react';

const Step6Payment = ({ data, updateData, errors }) => {
  return (
    <div className="step-form">
      <h2>💳 Payment Settings</h2>
      <p className="step-description">Configure how you receive rental payments</p>

      <div className="form-group">
        <label htmlFor="paymentMethod">Preferred Payment Method</label>
        <select
          id="paymentMethod"
          value={data.paymentMethod}
          onChange={(e) => updateData('paymentMethod', e.target.value)}
        >
          <option value="bank_transfer">Bank Transfer</option>
          <option value="check">Check</option>
          <option value="credit_card">Credit Card</option>
          <option value="paypal">PayPal</option>
          <option value="stripe">Stripe</option>
          <option value="venmo">Venmo</option>
          <option value="zelle">Zelle</option>
        </select>
      </div>

      {/* Bank Transfer Details */}
      {data.paymentMethod === 'bank_transfer' && (
        <div className="payment-details">
          <h3>🏦 Bank Transfer Details</h3>
          <div className="form-group">
            <label htmlFor="bankAccount">Bank Account Number *</label>
            <input
              id="bankAccount"
              type="text"
              value={data.bankAccount}
              onChange={(e) => updateData('bankAccount', e.target.value)}
              placeholder="Enter your bank account number"
              className={errors.bankAccount ? 'error' : ''}
            />
            {errors.bankAccount && <span className="error-text">{errors.bankAccount}</span>}
            <p className="info-text">Don't worry, this information is encrypted and secure</p>
          </div>
        </div>
      )}

      {/* PayPal Details */}
      {data.paymentMethod === 'paypal' && (
        <div className="payment-details">
          <h3>💻 PayPal Details</h3>
          <div className="form-group">
            <label htmlFor="paypalEmail">PayPal Email</label>
            <input
              id="paypalEmail"
              type="email"
              placeholder="your.email@example.com"
            />
          </div>
        </div>
      )}

      <div className="form-group checkbox-group">
        <label htmlFor="autoPayment">
          <input
            id="autoPayment"
            type="checkbox"
            checked={data.autoPayment}
            onChange={(e) => updateData('autoPayment', e.target.checked)}
          />
          <span>Enable Automatic Payment Collection</span>
        </label>
        <p className="info-text">Automatically charge tenants' payment method on the due date</p>
      </div>

      {/* Payment Schedule */}
      <div className="payment-schedule">
        <h3>📅 Payment Schedule</h3>
        <div className="schedule-options">
          <label className="schedule-option">
            <input type="radio" name="schedule" value="monthly" defaultChecked />
            <span>
              <strong>Monthly</strong>
              <br/>
              Payment due on the 1st of each month
            </span>
          </label>
          <label className="schedule-option">
            <input type="radio" name="schedule" value="biweekly" />
            <span>
              <strong>Bi-weekly</strong>
              <br/>
              Payment due every two weeks
            </span>
          </label>
          <label className="schedule-option">
            <input type="radio" name="schedule" value="custom" />
            <span>
              <strong>Custom</strong>
              <br/>
              Set custom payment dates with tenant
            </span>
          </label>
        </div>
      </div>

      {/* Late Payment Policy */}
      <div className="policy-section">
        <h3>⏰ Late Payment Policy</h3>
        <div className="policy-options">
          <label className="policy-option">
            <input type="checkbox" defaultChecked />
            <span>
              <strong>Grace Period:</strong> 5 days grace period before late fee applies
            </span>
          </label>
          <label className="policy-option">
            <input type="checkbox" defaultChecked />
            <span>
              <strong>Late Fee:</strong> 5% of monthly rent or $50, whichever is greater
            </span>
          </label>
          <label className="policy-option">
            <input type="checkbox" defaultChecked />
            <span>
              <strong>Returned Check Fee:</strong> $35 per returned check
            </span>
          </label>
        </div>
      </div>

      {/* Payment Methods Comparison */}
      <div className="methods-comparison">
        <h3>📊 Payment Methods Comparison</h3>
        <table className="comparison-table">
          <thead>
            <tr>
              <th>Method</th>
              <th>Processing Time</th>
              <th>Fee</th>
              <th>Security</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Bank Transfer</td>
              <td>1-2 business days</td>
              <td>None</td>
              <td>✓ High</td>
            </tr>
            <tr>
              <td>Check</td>
              <td>5-7 business days</td>
              <td>None</td>
              <td>✓ Medium</td>
            </tr>
            <tr>
              <td>Credit Card</td>
              <td>Instant</td>
              <td>2.9% + $0.30</td>
              <td>✓ High</td>
            </tr>
            <tr>
              <td>PayPal</td>
              <td>1-3 business days</td>
              <td>2.2% + $0.30</td>
              <td>✓ High</td>
            </tr>
            <tr>
              <td>Stripe</td>
              <td>1-2 business days</td>
              <td>2.9% + $0.30</td>
              <td>✓ High</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Security Notice */}
      <div className="security-notice">
        <h3>🔒 Security & Privacy</h3>
        <p>Your payment information is encrypted and protected with industry-standard security. We never store credit card information directly.</p>
        <ul>
          <li>All transactions are SSL-encrypted</li>
          <li>PCI DSS Level 1 compliant</li>
          <li>Fraud protection included</li>
          <li>Chargeback protection for merchants</li>
        </ul>
      </div>
    </div>
  );
};

export default Step6Payment;