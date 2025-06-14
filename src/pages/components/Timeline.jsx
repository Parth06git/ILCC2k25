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
          {/* Paper Section */}
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

          {/* Poster Section */}
          <tr className="table-secondary">
            <td colSpan="2" className="fw-bold">
              🖼️ Poster
            </td>
          </tr>
          <tr>
            <td>📝 Poster Opening</td>
            <td>June 20, 2025</td>
          </tr>
          <tr>
            <td>🛑 Poster Closing</td>
            <td>July 30, 2025</td>
          </tr>
          <tr>
            <td>📤 Full Poster Submission</td>
            <td>September 15, 2025</td>
          </tr>
          <tr>
            <td>✅ Camera-Ready Submission</td>
            <td>October 31, 2025</td>
          </tr>

          {/* Rolling Trophy Section */}
          <tr className="table-secondary">
            <td colSpan="2" className="fw-bold">
              🏆 Rolling Trophy
            </td>
          </tr>
          <tr>
            <td>🔔 Notification</td>
            <td>July 1, 2025</td>
          </tr>
          <tr>
            <td>📝 Abstract Submission</td>
            <td>July 30, 2025</td>
          </tr>
          <tr>
            <td>✅ Abstract Acceptance</td>
            <td>August 15, 2025</td>
          </tr>
          <tr>
            <td>📑 Interim Report Submission</td>
            <td>September 15, 2025</td>
          </tr>
          <tr>
            <td>🔍 Interim Review Assessment</td>
            <td>September 30, 2025</td>
          </tr>
          <tr>
            <td>📄 Final Report Submission</td>
            <td>October 31, 2025</td>
          </tr>
          <tr>
            <td>🎤 Final Presentation</td>
            <td>During Conference Days</td>
          </tr>
        </tbody>
      </table>
      <p className="text-muted mt-2">
        * May be extended by a week or two if required
      </p>
    </div>
  );
};

export default Timeline;
