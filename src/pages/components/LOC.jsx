import React from "react";

const locMembers = [
  {
    title: "Conference Chair",
    name: "",
    description: "Indian Institute of Technology Tirupati",
    img: require("../../image/bg1.png"),
  },
  {
    title: "Other Committees",
    name: "",
    description: "Leads and Supports - Indian Institute of Technology Tirupati",
    img: require("../../image/bg1.png"),
  },
  {
    title: "Technical Committee Lead - Academia",
    name: "Dr. Santhosh Loganathan",
    description: "NIT Trichy",
    img: require("../../image/bg1.png"),
  },
  {
    title: "Technical Committee Lead - Industry",
    name: "Dr. Marimuthu K",
    description: "Technical Secretary, ILCE",
    img: require("../../image/bg1.png"),
  },
];

const LOC = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center my-4">
        Local Organising Committee
      </h1>
      <div className="row">
        {locMembers.map((member, index) => (
          <div
            className="col-md-3 my-3 d-flex justify-content-center"
            key={index}
          >
            <div
              className="card shadow-sm border-0 rounded-4 overflow-hidden"
              style={{ width: "18rem" }}
            >
              <img
                src={member.img}
                className="card-img-top"
                alt={member.name || member.title}
                style={{ objectFit: "cover", height: "220px" }}
              />
              <div className="card-body text-center bg-light">
                <h5 className="card-title fw-bold">{member.title}</h5>
                {member.name && (
                  <p className="card-text mb-1">
                    <strong>{member.name}</strong>
                  </p>
                )}
                <p className="text-muted small">{member.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LOC;
