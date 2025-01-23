
import React from 'react';

const Skills = () => {
  return (
    <section id="skills" style={styles.section}>
      <div style={styles.header}>
        <h2>Skills</h2>
      </div>

      <div style={styles.skillsContainer}>
        <div style={styles.skill}>
          <h3>MySQL</h3>
          <div style={styles.skillBar}>
            <div style={{ ...styles.bar, width: '85%', backgroundColor: '#1E90FF' }}></div>
          </div>
          <p style={styles.percentage}>85%</p>
        </div>

        <div style={styles.skill}>
          <h3>ReactJS</h3>
          <div style={styles.skillBar}>
            <div style={{ ...styles.bar, width: '75%', backgroundColor: '#FF6347' }}></div>
          </div>
          <p style={styles.percentage}>75%</p>
        </div>

        <div style={styles.skill}>
          <h3>NodeJS</h3>
          <div style={styles.skillBar}>
            <div style={{ ...styles.bar, width: '80%', backgroundColor: '#32CD32' }}></div>
          </div>
          <p style={styles.percentage}>80%</p>
        </div>

        <div style={styles.skill}>
          <h3>Java</h3>
          <div style={styles.skillBar}>
            <div style={{ ...styles.bar, width: '85%', backgroundColor: '#FFD700' }}></div>
          </div>
          <p style={styles.percentage}>85%</p>
        </div>

      </div>
    </section>
  );
};

// CSS styles in JS object format
const styles = {
  section: {
    padding: '40px 20px',
    backgroundColor: '#f8f8f8',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  header: {
    marginBottom: '30px',
    fontSize: '2rem',
    color: '#333',
  },
  skillsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
    alignItems: 'center', // Align bars in the center
  },
  skill: {
    width: '80%', // Ensuring that each bar is not too wide but looks balanced
    marginBottom: '10px',
  },
  skillBar: {
    width: '100%', // Full width of the container
    backgroundColor: '#e0e0e0',
    borderRadius: '5px',
    height: '30px', // Increased height for better visibility
    marginBottom: '10px',
  },
  bar: {
    height: '100%',
    borderRadius: '5px',
  },
  percentage: {
    fontSize: '1.1rem',
    color: '#555',
  },
};

export default Skills;
