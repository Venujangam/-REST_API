import React, { useState } from 'react';

function ApplyIPO() {
  const [formData, setFormData] = useState({
    company: '',
    shares: '',
    price: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`IPO Application Submitted:\nCompany: ${formData.company}\nShares: ${formData.shares}\nPrice: ${formData.price}`);
  };

  return (
    <div>
      <h2>Apply for IPO</h2>
      <p>Fill in the details below to apply for an IPO.</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Company Name</label>
          <input
            type="text"
            name="company"
            className="form-control"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Number of Shares</label>
          <input
            type="number"
            name="shares"
            className="form-control"
            value={formData.shares}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label>Price per Share</label>
          <input
            type="number"
            name="price"
            className="form-control"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Submit Application</button>
      </form>
    </div>
  );
}

export default ApplyIPO;
