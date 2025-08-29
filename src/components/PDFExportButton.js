import React from "react";
import { exportPDF } from "../utils/pdfExport";

function PDFExportButton({ resumeData }) {
  return (
    <button
      className="export-btn"
      onClick={() => exportPDF(resumeData)}
      type="button"
    >
      Export as PDF
    </button>
  );
}

export default PDFExportButton;
