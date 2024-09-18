import React from 'react';

const claims = [
  { claimId: '001', amount: 5000 },
  { claimId: '002', amount: 3000 },
];

const ViewClaims = () => {
  return (
    <div>
      {claims.length > 0 ? (
        <ul>
          {claims.map((claim) => (
            <li key={claim.claimId}>
              Claim ID: {claim.claimId}, Amount: ${claim.amount}
            </li>
          ))}
        </ul>
      ) : (
        <p>No claims submitted</p>
      )}
    </div>
  );
};

export default ViewClaims;
