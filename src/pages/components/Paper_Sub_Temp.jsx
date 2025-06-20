import React from "react";
import { FaFileAlt, FaDownload, FaExternalLinkAlt } from "react-icons/fa";

const Paper_Sub_Temp = () => {
  return (
    <div className="p-4 border rounded bg-light shadow-sm">
      <h5 className="mb-3 text-primary">
        <FaFileAlt className="me-2" /> Paper Submission Guidelines
      </h5>
      <ul className="list-group list-group-flush mb-3">
        {/* Abstract Template Overview */}
        <li className="list-group-item bg-light mt-3">
          📄 <strong>Abstract Template Overview:</strong>
          <p className="mt-2 mb-2 text-muted">
            Use the abstract template to ensure proper formatting of your paper
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

        {/* Paper Template Overview */}
        <li className="list-group-item bg-light">
          📝 <strong>Paper Template Overview:</strong>
          <p className="mt-2 mb-2 text-muted">
            This document contains the official format required for paper
            submissions at ILCC 2025. It provides section-wise instructions such
            as Title, Abstract, Keywords, Introduction, Methodology, Results,
            Conclusion, and References. Authors are expected to strictly follow
            this format to ensure uniformity in all accepted papers.
          </p>
          <a
            href="/templates/ILCC-2025-Paper-Template-for-Call-for-Papers.docx"
            className="btn btn-outline-primary btn-sm"
            download
          >
            <FaDownload className="me-1" /> Download Paper Template
          </a>
        </li>

        {/* Presentation Template Overview */}
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
            href="/templates/Paper Presentation Template - 2025.pptx"
            className="btn btn-outline-success btn-sm"
            download
          >
            <FaDownload className="me-1" /> Download Presentation Template
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
        ⚠️ Please ensure that you strictly follow the templates provided.
        Non-compliance with formatting instructions may result in rejection of
        your submission.
      </p>

      {/* New Note: Theme Relevance */}
      <p className="text-dark mt-3 fw-semibold">
        📌 Note: All submitted papers must be aligned with the conference themes
        as listed on the website. Papers outside the scope of the themes may not
        be considered for review.
      </p>
    </div>
  );
};

export default Paper_Sub_Temp;
