import React from "react";

const RegistrationDetails = () => {
  return (
    <>
      <div className="bg-white p-5 rounded-4 shadow-lg mt-5 border border-info">
        <h4 className="text-center fw-bold mb-4 text-info border-bottom pb-2">
          Registration Details
        </h4>
        <ul className="list-group list-group-flush">
          <li className="list-group-item bg-light">
            💳 <strong>Payment Mode:</strong>{" "}
            <span className="text-dark">
              Online payments only (Net Banking / Credit or Debit Card).
            </span>
          </li>
          <li className="list-group-item bg-light">
            📝 <strong>Registration Includes:</strong>{" "}
            <span className="text-dark">
              Access to sessions, lunch & refreshments, conference kit.
            </span>
          </li>
          <li className="list-group-item bg-light">
            📄 <strong>Certificates:</strong>{" "}
            <span className="text-dark">
              E-certificates will be provided to all registered participants.
            </span>
          </li>
          <li className="list-group-item bg-light">
            📆 <strong>Early Registration Deadline:</strong>{" "}
            <span className="text-danger fw-bold">November 10, 2024</span>
          </li>
          <li className="list-group-item bg-light">
            📍 <strong>Note:</strong>{" "}
            <span className="text-dark">
              Limited seats available. Register early to confirm your spot!
            </span>
          </li>
        </ul>
        <div className="text-center mt-4">
          <a
            href="/registration"
            className="btn btn-outline-info btn-lg px-4 py-2 fw-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            🚀 Proceed to Registration
          </a>
        </div>
      </div>
    </>
  );
};

export default RegistrationDetails;
