import React from 'react';

const wellnessPrograms = [
  'Mental Health Support',
  'Nutrition Counseling',
  'Exercise Programs',
  'Stress Management Workshops'
];

const WellnessPrograms = () => {
  return (
    <div>
      <ul>
        {wellnessPrograms.map((program, index) => (
          <li key={index}>{program}</li>
        ))}
      </ul>
    </div>
  );
};

export default WellnessPrograms;
