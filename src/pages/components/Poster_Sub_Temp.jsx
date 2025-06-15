import React from "react";
import { FaFileAlt, FaDownload, FaExternalLinkAlt } from "react-icons/fa";

const Poster_Sub_Temp = () => {
  return (
    <div className="p-4 border rounded bg-light shadow-sm">
      <h5 className="mb-3 text-primary">
        <FaFileAlt className="me-2" /> Poster Submission Guidelines
      </h5>
      <ul className="list-group list-group-flush mb-3">
        {/* Poster Template Overview */}
        <li className="list-group-item bg-light">
          🖼️ <strong>Poster Template Overview:</strong>
          <p className="mt-2 mb-2 text-muted">
            The official poster template for ILCC 2025 ensures a consistent
            format across all poster submissions. It specifies poster
            dimensions, font sizes, color schemes, and content sections such as
            Introduction, Methodology, Results, and Conclusion. All presenters
            must use this format to maintain uniformity during the poster
            exhibition session.
          </p>
          <a
            href="/templates/Poster Presentation Template 2025.pptx"
            className="btn btn-outline-warning btn-sm"
            download
          >
            <FaDownload className="me-1" /> Download Poster Template (.pptx)
          </a>
        </li>

        <li className="list-group-item bg-light mt-3">
          🖼️ <strong>Presentation Template Overview:</strong>
          <p className="mt-2 mb-2 text-muted">
            This PowerPoint file serves as the official presentation template
            for ILCC 2025 paper presenters. It includes title slide, content
            layout, visual guidelines, and footer designs to maintain
            consistency during presentations. All paper presenters must use this
            format for their final conference presentation slides.
          </p>
          <a
            href="/templates/Paper-Presentation-Template-2025.pptx"
            className="btn btn-outline-success btn-sm"
            download
          >
            <FaDownload className="me-1" /> Download Presentation Template
            (.pptx)
          </a>
        </li>

        <li className="list-group-item bg-light mt-3">
          🔗 <strong>EasyChair Registration:</strong>
          <p className="mt-2 mb-2 text-muted">
            To enable all technical submissions and receive various
            conference-related communications by e-mail, all intending authors
            must first register in the Conference Submission System via
            EasyChair. The paper ID given on registration must be used for all
            future submissions and communication.
          </p>
          <a
            href="/submission"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-info btn-sm"
          >
            <FaExternalLinkAlt className="me-1" /> Register on EasyChair
          </a>
        </li>
      </ul>

      {/* Additional Notes */}
      <p className="text-muted fst-italic mt-4">
        ⚠️ Please use only the official poster template provided. Custom formats
        or deviations may not be accepted for display during the conference.
      </p>
    </div>
  );
};

export default Poster_Sub_Temp;
