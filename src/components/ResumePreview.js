import React from "react";

function ResumePreview({ resumeData }) {
  return (
    <div className="resume-preview" id="resume-preview">
      <header className="resume-header">
        <h1>{resumeData.name}</h1>
        <p className="contact-info">
          {resumeData.email && <span>Email: {resumeData.email}</span>}
          {resumeData.phone && <span> | Phone: {resumeData.phone}</span>}
          {resumeData.location && <span> | {resumeData.location}</span>}
        </p>
        <p className="contact-links">
          {resumeData.linkedin && (
            <a href={resumeData.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          )}
          {resumeData.github && (
            <>
              {" "}
              |{" "}
              <a href={resumeData.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </>
          )}
          {resumeData.portfolio && (
            <>
              {" "}
              |{" "}
              <a href={resumeData.portfolio} target="_blank" rel="noopener noreferrer">
                Portfolio
              </a>
            </>
          )}
        </p>
      </header>

      {resumeData.summary && (
        <section className="resume-section summary">
          <h2>Professional Summary</h2>
          <p>{resumeData.summary}</p>
        </section>
      )}

      {resumeData.skills && (
        <section className="resume-section skills">
          <h2>Technical Skills</h2>
          <p>{resumeData.skills}</p>
        </section>
      )}

      {resumeData.projects && (
        <section className="resume-section projects">
          <h2>Projects</h2>
          <p>{resumeData.projects}</p>
        </section>
      )}

      {resumeData.experience && (
        <section className="resume-section experience">
          <h2>Experience</h2>
          <p>{resumeData.experience}</p>
        </section>
      )}

      {resumeData.education && (
        <section className="resume-section education">
          <h2>Education</h2>
          <p>{resumeData.education}</p>
        </section>
      )}

      {resumeData.certifications && (
        <section className="resume-section certifications">
          <h2>Certifications</h2>
          <p>{resumeData.certifications}</p>
        </section>
      )}

      {resumeData.achievements && (
        <section className="resume-section achievements">
          <h2>Achievements & Awards</h2>
          <p>{resumeData.achievements}</p>
        </section>
      )}
    </div>
  );
}

export default ResumePreview;
