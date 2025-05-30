import React from "react";
import Carousel from "./Carousel";
import { FaCalendarAlt, FaFileAlt, FaPenNib } from "react-icons/fa";

const Submission = () => {
  return (
    <>
      <Carousel img="bg5.jpeg" />
      <hr />
      <div className="container py-5">
        <h1 className="text-center mb-4">Submission & Registration Timeline</h1>

        <ul
          className="nav nav-tabs justify-content-center mb-4"
          id="timelineTabs"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="timeline-tab"
              data-bs-toggle="tab"
              data-bs-target="#timeline"
              type="button"
              role="tab"
            >
              <FaCalendarAlt className="me-2" /> Timeline
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="paper-tab"
              data-bs-toggle="tab"
              data-bs-target="#paper"
              type="button"
              role="tab"
            >
              <FaFileAlt className="me-2" /> Paper Submission & Templates
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="poster-tab"
              data-bs-toggle="tab"
              data-bs-target="#poster"
              type="button"
              role="tab"
            >
              <FaPenNib className="me-2" /> Poster Submission & Templates
            </button>
          </li>
        </ul>

        <div className="tab-content" id="timelineTabsContent">
          {/* Timeline Tab */}
          <div
            className="tab-pane fade show active"
            id="timeline"
            role="tabpanel"
          >
            <div className="table-responsive">
              <table className="table table-bordered text-center">
                <thead className="table-light">
                  <tr>
                    <th>Event</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="table-secondary">
                    <td colSpan="2" className="fw-bold">
                      📄 Paper
                    </td>
                  </tr>
                  <tr>
                    <td>📝 Abstract Opening</td>
                    <td>June 20, 2024</td>
                  </tr>
                  <tr>
                    <td>🛑 Abstract Closing</td>
                    <td>July 20, 2024 *</td>
                  </tr>
                  <tr>
                    <td>📤 Full Paper Closing</td>
                    <td>August 31, 2024 *</td>
                  </tr>
                  <tr>
                    <td>🔍 Review End</td>
                    <td>September 30, 2024</td>
                  </tr>
                  <tr>
                    <td>✅ Camera-Ready Submission</td>
                    <td>October 31, 2024</td>
                  </tr>
                  <tr>
                    <td>🧾 Normal Registration End</td>
                    <td>November 10, 2024 *</td>
                  </tr>

                  <tr className="table-secondary">
                    <td colSpan="2" className="fw-bold">
                      🖼️ Poster
                    </td>
                  </tr>
                  <tr>
                    <td>📝 Poster Opening</td>
                    <td>June 20, 2024</td>
                  </tr>
                  <tr>
                    <td>🛑 Poster Closing</td>
                    <td>July 20, 2024 *</td>
                  </tr>
                  <tr>
                    <td>📤 Full Paper Submission</td>
                    <td>August 20, 2024</td>
                  </tr>
                  <tr>
                    <td>✅ Camera-Ready Submission</td>
                    <td>October 17, 2024</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-muted mt-2">
                * May be extended by a week or two if required
              </p>
            </div>
          </div>

          {/* Paper Submission Tab */}
          <div className="tab-pane fade" id="paper" role="tabpanel">
            <div className="p-4 border rounded">
              <h5>
                <FaFileAlt className="me-2" /> Paper Submission Guidelines
              </h5>
              <p>
                Templates, format, and submission instructions will be provided
                here. Please prepare your manuscript as per the prescribed
                format.
              </p>
            </div>
          </div>

          {/* Poster Submission Tab */}
          <div className="tab-pane fade" id="poster" role="tabpanel">
            <div className="p-4 border rounded">
              <h5>
                <FaPenNib className="me-2" /> Poster Submission Guidelines
              </h5>
              <p>
                Details and templates for poster submission will be shared soon.
                Follow standard academic formatting practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Submission;
