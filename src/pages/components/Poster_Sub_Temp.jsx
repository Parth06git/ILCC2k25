import React from "react";
import { FaFileAlt, FaDownload, FaExternalLinkAlt } from "react-icons/fa";

const Poster_Sub_Temp = () => {
  return (
    <div className="p-4 border rounded bg-light shadow-sm">
      <h5 className="mb-3 text-primary">
        <FaFileAlt className="me-2" /> Poster Submission Guidelines
      </h5>
      <ul className="list-group list-group-flush mb-3">
        {/* Abstract Template Overview */}
        <li className="list-group-item bg-light mt-3">
          📄 <strong>Abstract Template Overview:</strong>
          <p className="mt-2 mb-2 text-muted">
            Use the abstract template to ensure proper formatting of your poster
            abstract submission. The template includes sections such as Title,
            Author Information, and Abstract.
          </p>
          <a
            href="/templates/Paper and poster abstract-Template-ILCC2025.docx"
            className="btn btn-outline-secondary btn-sm"
            download
          >
            <FaDownload className="me-1" /> Download Abstract Template
          </a>
        </li>

        {/* Copyright Form */}
        <li className="list-group-item bg-light mt-3">
          📝 <strong>Copyright Form:</strong>
          <p className="mt-2 mb-2 text-muted">
            All poster presenters are required to submit a signed copyright
            form. By submitting this form, all the authors confirm that they
            specifically agree to the ILCC2025 Copyright policy.
          </p>
          <a
            href="/templates/Paper and poster copyright-form_ILCC2025.docx"
            className="btn btn-outline-dark btn-sm"
            download
          >
            <FaDownload className="me-1" /> Download Copyright Form
          </a>
        </li>

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
            <FaDownload className="me-1" /> Download Poster Template
          </a>
        </li>

        {/* EasyChair Registration Overview */}
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
        ⚠️ Please use only the official poster and abstract templates provided.
        Custom formats or deviations may not be accepted for display during the
        conference.
      </p>
    </div>
  );
};

export default Poster_Sub_Temp;
