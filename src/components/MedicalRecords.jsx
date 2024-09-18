import React from 'react';

const records = [
  { id: 1, date: '2024-09-20', diagnosis: 'Flu', prescription: 'Rest and Fluids' },
  { id: 2, date: '2024-09-25', diagnosis: 'Allergy', prescription: 'Antihistamines' }
];

const MedicalRecords = () => {
  return (
    <div>
      {records.length > 0 ? (
        <ul>
          {records.map((record) => (
            <li key={record.id}>
              {record.date} - {record.diagnosis} - {record.prescription}
            </li>
          ))}
        </ul>
      ) : (
        <p>No medical records available</p>
      )}
    </div>
  );
};

export default MedicalRecords;
