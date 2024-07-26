import React from 'react';
import '../CSS/Education.css'; // Make sure to import the CSS file

const Education = () => {
  const educationDetails = [
    {
      qualification: 'Secondary Education (SSLC)',
      collegeName: 'PNUAPT DORAIRAJ Hr.Sec School.',
      passedOutYear: '2017',
      percentage: '71%',
    },
    {
      qualification: 'Higher Secondary Education (HSC)',
      collegeName: 'PNUAPT DORAIRAJ Hr.Sec School.',
      passedOutYear: '2019',
      percentage: '48%',
    },
    {
      qualification: 'Bachelor of Computer Application (BCA)',
      collegeName: 'Madurai Kamaraj University College',
      passedOutYear: '2022',
      percentage: '70%',
    },
    {
      qualification: 'Master of Computer Application (MCA)',
      collegeName: 'RVS College of arts and Science Sulur Coimbatore',
      passedOutYear: '2024',
      percentage: '72%',
    },
  ];

  return (
    <div className="education-container">
      <h1>Education</h1>
      <div className="education-slides">
        {educationDetails.map((detail, index) => (
          <div key={index} className="education-slide">
            <h2>{detail.qualification}</h2>
            <p><strong>Name:</strong> {detail.collegeName}</p>
            <p><strong>Passed Out Year:</strong> {detail.passedOutYear}</p>
            <p><strong>Percentage:</strong> {detail.percentage}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education;
