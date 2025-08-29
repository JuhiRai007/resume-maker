import React from "react";

function ResumeForm({ resumeData, setResumeData }) {
  const handleChange = (e) => {
    setResumeData({
      ...resumeData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="resume-form">
      {/* Personal & Contact Info */}
      <fieldset>
        <legend>Personal Details</legend>
        <label>
          Full Name:
          <input name="name" value={resumeData.name || ""} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={resumeData.email || ""} onChange={handleChange} required />
        </label>
        <label>
          Phone:
          <input name="phone" value={resumeData.phone || ""} onChange={handleChange} />
        </label>
        <label>
          Location:
          <input name="location" value={resumeData.location || ""} onChange={handleChange} />
        </label>
        <label>
          LinkedIn Profile:
          <input type="url" name="linkedin" value={resumeData.linkedin || ""} onChange={handleChange} placeholder="https://linkedin.com/in/yourprofile" />
        </label>
        <label>
          GitHub Profile:
          <input type="url" name="github" value={resumeData.github || ""} onChange={handleChange} placeholder="https://github.com/yourusername" />
        </label>
        <label>
          Portfolio Website:
          <input type="url" name="portfolio" value={resumeData.portfolio || ""} onChange={handleChange} placeholder="https://yourportfolio.com" />
        </label>
      </fieldset>

      {/* Summary/About Section */}
      <fieldset>
        <legend>Professional Summary</legend>
        <textarea
          name="summary"
          value={resumeData.summary || ""}
          onChange={handleChange}
          rows={4}
          placeholder="Brief summary about your professional background and skills"
        />
      </fieldset>

      {/* Skills */}
      <fieldset>
        <legend>Technical Skills</legend>
        <input
          name="skills"
          value={resumeData.skills || ""}
          onChange={handleChange}
          placeholder="JavaScript, React, Node.js, TypeScript, CSS, etc."
        />
      </fieldset>

      {/* Projects */}
      <fieldset>
        <legend>Projects</legend>
        <textarea
          name="projects"
          value={resumeData.projects || ""}
          onChange={handleChange}
          rows={4}
          placeholder="Describe your noteworthy projects here"
        />
      </fieldset>

      {/* Education */}
      <fieldset>
        <legend>Education</legend>
        <textarea
          name="education"
          value={resumeData.education || ""}
          onChange={handleChange}
          rows={3}
          placeholder="Degree, school, and years"
        />
      </fieldset>

      {/* Experience */}
      <fieldset>
        <legend>Experience</legend>
        <textarea
          name="experience"
          value={resumeData.experience || ""}
          onChange={handleChange}
          rows={4}
          placeholder="Job title, company, duration, and key achievements"
        />
      </fieldset>

      {/* Certifications */}
      <fieldset>
        <legend>Certifications</legend>
        <input
          name="certifications"
          value={resumeData.certifications || ""}
          onChange={handleChange}
          placeholder="E.g., AWS Certified Solutions Architect, etc."
        />
      </fieldset>

      {/* Achievements */}
      <fieldset>
        <legend>Achievements / Awards</legend>
        <input
          name="achievements"
          value={resumeData.achievements || ""}
          onChange={handleChange}
          placeholder="List honors, awards or recognitions"
        />
      </fieldset>
    </form>
  );
}

export default ResumeForm;
