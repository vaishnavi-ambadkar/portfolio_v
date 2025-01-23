
import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="project-description">
        <h3>Projects</h3>

        <p>1. University Management System</p>
        <p>
          The University Management System is a Java-based application designed to manage university operations,
          including student, faculty, and course management. It offers functionalities such as maintaining student records, 
          managing faculty details, assigning courses, and tracking grades. The system uses MySQL for database storage and 
          JDBC to facilitate communication between the application and the database.
        </p>
        <div className="projects-content">
          <div className="project-img">
            <img 
              src="/images/Warehouse.png"  // Add image path for the University Management System
              alt="University Management System"
              style={{ width: '60%', height: 'auto', borderRadius: '8px', margin: '0 auto', display: 'block' }}
            />
          </div>
        </div>
        <p><strong>Technologies used:</strong> Java, MySQL, JDBC</p>

        <p>2. Smart Warehouse System</p>
        <p>
          The Smart Warehouse System is an IoT-based solution that helps monitor the remaining capacity of weights 
          in warehouse racks. It integrates IoT sensors to collect data and uses machine learning algorithms to predict 
          available capacity. The system enhances warehouse management by providing real-time information on storage 
          levels and enabling better decision-making.
        </p>
        <div className="projects-content">
          <div className="project-img">
            <img 
              src="/images/University_project.png"  // Add image path for the Smart Warehouse System
              alt="Smart Warehouse System"
              style={{ width: '60%', height: 'auto', borderRadius: '8px', margin: '0 auto', display: 'block' }}
            />
          </div>
        </div>
        <p><strong>Technologies used:</strong> IoT, Machine Learning</p>
      </div>
    </section>
  );
};

export default Projects;
