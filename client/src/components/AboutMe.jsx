
import React from "react";

function AboutMe() {
  return (
    <div className="section">
      <h2>About Me</h2>
      
      {/* Profile Image
      <div style={styles.imageContainer}>
        <img 
          src="/images/profile.jpg"  // Path to your profile image in the public/images folder
          alt="Profile" 
          style={styles.profileImage}  // Apply styles to the image
        />
      </div> */}

      <p>
        I’m Vaishnavi Liladhar Ambadkar, a passionate Computer Engineering student from Dhule, currently pursuing my B.Tech at SVKM’s Institute of Technology. With a strong foundation in Java, MySQL, and hands-on experience in projects like the Smart Warehouse System and University Management System, I am always eager to apply my technical skills to real-world challenges. I’ve competed in national hackathons, such as Athan Hack, where my team reached the finals, and I continue to build on my knowledge through certifications in Java and Compiler Design. My creativity, honed through hobbies like drawing, complements my technical expertise, allowing me to think outside the box. With a strong drive for continuous learning and adaptability, I’m excited to contribute to innovative solutions and collaborate on impactful projects.
      </p>

      {/* Download Resume Button */}
      <a 
        href="/images/vaishnaviambadkar.pdf"  // Path to your resume file in the public/images folder
        download="Vaishnavi_Ambadkar_Resume"  // File name when downloaded
        className="download-btn"
        style={styles.downloadButton}
      >
        Download Resume
      </a>
    </div>
  );
}

// Inline CSS for the profile image and button
const styles = {
  imageContainer: {
    textAlign: 'center',  // Center the image
    marginBottom: '20px', // Space below the image
  },
  profileImage: {
    width: '150px',  // Decrease the image size (adjust as needed)
    height: 'auto',  // Maintain aspect ratio
    borderRadius: '50%',  // Make it circular
    border: '2px solid #ddd', // Optional border for the image
  },
  downloadButton: {
    display: 'inline-block',
    backgroundColor: '#32CD32',
    color: '#fff',
    padding: '12px 24px',
    fontSize: '16px',
    borderRadius: '8px',
    textDecoration: 'none',
    marginTop: '20px',
    textAlign: 'center',
    transition: 'background-color 0.3s ease',
  },
};

export default AboutMe;
