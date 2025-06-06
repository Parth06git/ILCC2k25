import React from "react";

const feeData = [
  {
    category: "Workshop Day – 1 Day",
    fees: {
      "ILCE Member Chartered/Corporate/Associate": 4720,
      "ILCE Member Individual": 4130,
      "Non‑Member": 5310,
      "College Alumni/Faculty": 1770,
      Student: 1180,
      Faculty: 2065,
    },
  },
  {
    category: "Industry Day – 1 Day",
    fees: {
      "ILCE Member Chartered/Corporate/Associate": 4720,
      "ILCE Member Individual": 4130,
      "Non‑Member": 5310,
      "College Alumni/Faculty": 1770,
      Student: 1180,
      Faculty: 2065,
    },
  },
  {
    category: "Conference Days – 2 Days",
    fees: {
      "ILCE Member Chartered/Corporate/Associate": 9440,
      "ILCE Member Individual": 8260,
      "Non‑Member": 10620,
      "College Alumni/Faculty": 3540,
      Student: 2360,
      Faculty: 4130,
    },
  },
  {
    category: "All 4 Days",
    fees: {
      "ILCE Member Chartered/Corporate/Associate": 18880,
      "ILCE Member Individual": 16520,
      "Non‑Member": 21240,
      "College Alumni/Faculty": 7080,
      Student: 4720,
      Faculty: 8260,
    },
  },
];

const FeeTable = () => (
  <div className="container py-5">
    <h2 className="text-center mb-4">Registration Fee Structure</h2>
    {feeData.map((block, idx) => (
      <div key={idx} className="mb-5">
        <h5 className="text-primary mb-3">{block.category}</h5>
        <div className="table-responsive shadow-sm">
          <table className="table table-striped align-middle mb-0">
            <thead className="table-light">
              <tr>
                <th scope="col">Category</th>
                <th scope="col">₹ Fee (incl. GST)</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(block.fees).map(([role, amount], i) => (
                <tr key={i}>
                  <td>{role}</td>
                  <td className="fw-semibold">₹{amount.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    ))}
    <p className="text-muted fst-italic">
      Prices include 18% GST. All fees are for in-person attendance.
    </p>
  </div>
);

export default FeeTable;
