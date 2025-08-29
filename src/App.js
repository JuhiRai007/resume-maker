import React, { useState } from "react";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";
import PDFExportButton from "./components/PDFExportButton";
import "./App.css";

function App() {
  const [resumeData, setResumeData] = useState({});

  return (
    <div className="app-container">
      <h1>Resume Maker</h1>
      <div className="main-content">
        <ResumeForm resumeData={resumeData} setResumeData={setResumeData} />
        <div>
          <ResumePreview resumeData={resumeData} />
          <PDFExportButton resumeData={resumeData} />
        </div>
      </div>
    </div>
  );
}

export default App;
