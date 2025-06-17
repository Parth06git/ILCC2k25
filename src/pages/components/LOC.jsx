import React from "react";

const locMembers = [
  {
    name: "Prof. Suresh Jain",
    description:
      "Professor and HoD, Dept. of Civil and Environmental Engineering, IIT Tirupati, Conference Chair",
    img: require("../../image/Suresh.jpg"),
  },
  {
    name: "Dr. Prasanna Kumar Behera",
    description:
      "Assistant Professor, Dept. of Civil and Environmental Engineering, IIT Tirupati, Local Organising Committee Chair",
    img: require("../../image/Prasanna.jpg"),
  },
  {
    name: "Dr. A. V. Rahul",
    description:
      "Assistant Professor, Dept. of Civil and Environmental Engineering, IIT Tirupati, Local Organising Committee Co-Chair",
    img: require("../../image/Rahul.jpg"),
  },
  {
    name: "Dr. Santhosh Loganathan",
    description:
      "Assistant Professor, Dept. of Civil Engineering, NIT Trichy, Technical Committee Lead - Academia",
    img: require("../../image/Santosh.jpg"),
  },
  {
    name: "Dr. Marimuthu K",
    description:
      "Technical Secretary, ILCE, Technical Committee Lead - Industry",
    img: require("../../image/Marimuthu.jpg"),
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
            className="col-md-4 my-3 d-flex justify-content-center"
            key={index}
          >
            <div
              className="card shadow-sm border-0 rounded-4 overflow-hidden"
              style={{ width: "18rem", transition: "transform 0.3s" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.05)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <img
                src={member.img}
                className="card-img-top"
                alt={member.name}
                style={{ objectFit: "cover", height: "220px" }}
              />
              <div className="card-body text-center bg-light">
                <h5 className="card-title fw-bold">{member.name}</h5>
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
