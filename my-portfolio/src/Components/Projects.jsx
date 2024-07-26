import React from 'react';
import Slider from 'react-slick';
import '../CSS/Projects.css'; // Import the CSS file for custom styles
import port from '../images/folio.jpg';
import bank from '../images/bank.jpg';
import tran from '../images/tran.jpg';

const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true // Adjusts the height based on the content
  };

  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <Slider {...settings} className="carousel">
        <div className="slide-item">
          <img src={port} alt="Project 1" className="slide-image" />
          <a href="https://github.com/Ramkumarpalani2001/My-Project-portfolio" target="_blank" rel="noopener noreferrer" className="project-link">Portfolio Project 1</a>
        </div>
        <div className="slide-item">
          <img src={bank} alt="Project 2" className="slide-image" />
          <a href="https://main--statuesque-seahorse-a69c3a.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-link">BadBank Project 2</a>
        </div>
        <div className="slide-item">
          <img src={tran} alt="Project 3" className="slide-image" />
          <a href="https://github.com/Ramkumarpalani2001/TMS" target="_blank" rel="noopener noreferrer" className="project-link">TMS Project 3</a>
        </div>
      </Slider>
    </div>
  );
};

export default Projects;
