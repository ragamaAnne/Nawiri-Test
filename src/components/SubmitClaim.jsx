import React, { useState } from 'react';

const SubmitClaim = () => {
  const [claim, setClaim] = useState({
    claimId: '',
    amount: ''
  });

  const handleChange = (e) => {
    setClaim({ ...claim, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to submit claim to the server
    console.log('Claim Submitted:', claim);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Claim ID:
        <input type="text" name="claimId" value={claim.claimId} onChange={handleChange} />
      </label>

      <label>
        Claim Amount:
        <input type="number" name="amount" value={claim.amount} onChange={handleChange} />
      </label>

      <button type="submit">Submit Claim</button>
    </form>
  );
};

export default SubmitClaim;
