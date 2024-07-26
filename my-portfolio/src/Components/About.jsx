import React from 'react';
import profileLogo from '../images/rk.jpg'; // Adjust the path as needed
import '../CSS/About.css'; // Import the CSS file
import resume from '../images/RAM CV Resume new.pdf'
const About = () => {
  const details = {
    name: "RamKumar P",
    dob: "August 24, 2001",
    age: 22,
    gender: "Male",
    address: "933 TNHB COLONY Villapuram Madurai-625012",
    education: "Master Of Computer Application",
    description: "I Have Completed Three Projects During My Postgraduate Studies.I am a Fresher In My Carrer. And I Have Completed My PG Degree In (MCA) Sulur Coimbatore"
  };

  return (
    <div className="about-container">
      <img src={profileLogo} alt="Profile Logo" className="profile" />
      <div className="details">
        <h2>{details.name}</h2>
        <p><strong>Date of Birth:</strong> {details.dob}</p>
        <p><strong>Age:</strong> {details.age}</p>
        <p><strong>Gender:</strong> {details.gender}</p>
        <p><strong>Address:</strong> {details.address}</p>
        <p><strong>Education:</strong> {details.education}</p>
        <p><strong>Description:</strong> {details.description}</p>
        <a href={resume} className="resume-button" target="_blank" rel="noopener noreferrer">Download Resume</a>
      </div>
    </div>
  );
}

export default About;
