import jsPDF from "jspdf";

export function exportPDF(resumeData) {
  const doc = new jsPDF();
  let y = 20;

  doc.setFontSize(18);
  doc.text(resumeData.name || "", 10, y);
  y += 10;

  doc.setFontSize(12);
  if (resumeData.email) {
    doc.text(`Email: ${resumeData.email}`, 10, y);
    y += 7;
  }
  if (resumeData.phone) {
    doc.text(`Phone: ${resumeData.phone}`, 10, y);
    y += 7;
  }
  if (resumeData.location) {
    doc.text(`Location: ${resumeData.location}`, 10, y);
    y += 7;
  }
  if (resumeData.linkedin) {
    doc.text(`LinkedIn: ${resumeData.linkedin}`, 10, y);
    y += 7;
  }
  if (resumeData.github) {
    doc.text(`GitHub: ${resumeData.github}`, 10, y);
    y += 7;
  }
  if (resumeData.portfolio) {
    doc.text(`Portfolio: ${resumeData.portfolio}`, 10, y);
    y += 10;
  }

  if (resumeData.summary) {
    doc.setFontSize(14);
    doc.text("Summary:", 10, y);
    y += 7;
    doc.setFontSize(12);
    doc.text(doc.splitTextToSize(resumeData.summary, 180), 10, y);
    y += doc.splitTextToSize(resumeData.summary, 180).length * 7 + 5;
  }

  if (resumeData.skills) {
    doc.setFontSize(14);
    doc.text("Technical Skills:", 10, y);
    y += 7;
    doc.setFontSize(12);
    doc.text(resumeData.skills, 10, y);
    y += 15;
  }

  if (resumeData.projects) {
    doc.setFontSize(14);
    doc.text("Projects:", 10, y);
    y += 7;
    doc.setFontSize(12);
    doc.text(doc.splitTextToSize(resumeData.projects, 180), 10, y);
    y += doc.splitTextToSize(resumeData.projects, 180).length * 7 + 5;
  }

  if (resumeData.education) {
    doc.setFontSize(14);
    doc.text("Education:", 10, y);
    y += 7;
    doc.setFontSize(12);
    doc.text(doc.splitTextToSize(resumeData.education, 180), 10, y);
    y += doc.splitTextToSize(resumeData.education, 180).length * 7 + 5;
  }

  if (resumeData.experience) {
    doc.setFontSize(14);
    doc.text("Experience:", 10, y);
    y += 7;
    doc.setFontSize(12);
    doc.text(doc.splitTextToSize(resumeData.experience, 180), 10, y);
    y += doc.splitTextToSize(resumeData.experience, 180).length * 7 + 5;
  }

  if (resumeData.certifications) {
    doc.setFontSize(14);
    doc.text("Certifications:", 10, y);
    y += 7;
    doc.setFontSize(12);
    doc.text(resumeData.certifications, 10, y);
    y += 15;
  }

  if (resumeData.achievements) {
    doc.setFontSize(14);
    doc.text("Achievements / Awards:", 10, y);
    y += 7;
    doc.setFontSize(12);
    doc.text(resumeData.achievements, 10, y);
    y += 15;
  }

  doc.save("resume.pdf");
}
