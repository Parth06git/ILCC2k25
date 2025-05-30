import React from "react";

const Timeline = () => {
  return (
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
            <td>June 20, 2025</td>
          </tr>
          <tr>
            <td>🛑 Abstract Closing</td>
            <td>July 20, 2025 *</td>
          </tr>
          <tr>
            <td>📤 Full Paper Closing</td>
            <td>August 31, 2025 *</td>
          </tr>
          <tr>
            <td>🔍 Review End</td>
            <td>September 30, 2025</td>
          </tr>
          <tr>
            <td>✅ Camera-Ready Submission</td>
            <td>October 31, 2025</td>
          </tr>
          <tr>
            <td>🧾 Normal Registration End</td>
            <td>November 10, 2025 *</td>
          </tr>

          <tr className="table-secondary">
            <td colSpan="2" className="fw-bold">
              🖼️ Poster
            </td>
          </tr>
          <tr>
            <td>📝 Poster Opening</td>
            <td>TBA</td>
          </tr>
          <tr>
            <td>🛑 Poster Closing</td>
            <td>TBA</td>
          </tr>
          <tr>
            <td>📤 Full Paper Submission</td>
            <td>TBA</td>
          </tr>
          <tr>
            <td>✅ Camera-Ready Submission</td>
            <td>TBA</td>
          </tr>
        </tbody>
      </table>
      <p className="text-muted mt-2">
        * May be extended by a week or two if required
      </p>
      <p className="text-muted mt-2">
        TBA: To be Announced
      </p>
    </div>
  );
};

export default Timeline;
