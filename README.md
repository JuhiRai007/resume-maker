# React Resume Maker

A clean, modern, and responsive Resume Maker web application built with React.js. This app lets users enter their personal and professional details through a structured form and generates a polished resume preview. Users can export their resume as a professionally styled PDF.

---

## Features

- Step-by-step form for entering developer-specific resume details (GitHub, LinkedIn, Skills, Projects, Certifications, Summary, etc.)
- Live resume preview that looks like a real professional resume
- Export resume as a downloadable PDF using jsPDF library
- Responsive design for desktop, tablet, and mobile screens
- Modular, well-commented React code for easy customization and extension

---

## Technologies Used

- React.js
- jsPDF for PDF generation
- HTML5, CSS3 (including flexbox and media queries)
- Modern JavaScript (ES6+)

---

## Installation

1. Clone the repository:
 ```
 git clone https://github.com/JuhiRai007/react-resume-maker.git
 cd react-resume-maker
 ```

2. Install dependencies:

```
npm install
```

3. Start the development server:

```
npm start
```

4. Open your browser at `http://localhost:3000` to see the app in action.

---

## Usage

- Fill in all relevant fields in the resume form.
- The live preview on the right updates as you type.
- Click **Export as PDF** button to download your resume as a PDF file.

---

## Project Structure

/src
* /components
- ResumeForm.jsx # Form component for entering resume data
- ResumePreview.jsx # Resume preview styled like a real resume
- PDFExportButton.jsx # Button to generate PDF from data
* /utils
- pdfExport.js # PDF generation logic using jsPDF
- App.js # Main component wiring everything together
- index.js # React DOM rendering
- App.css # Styling including responsive design


---

## Customization

- Extend or modify form fields in `ResumeForm.jsx`.
- Customize resume styling via CSS in `App.css`.
- Enhance PDF layout or add new sections in `pdfExport.js`.

---

## License

This project is open-source and available under the [MIT License](LICENSE).

---

## Acknowledgements

- [jsPDF](https://github.com/parallax/jsPDF) - PDF generation library
- Inspiration from open-source React resume projects on GitHub

---

Feel free to contribute by opening issues or submitting pull requests!





















