import React from "react";

const members = [
  {
    name: "Prof. Suresh Jain",
    description:
      "Professor and HoD, Dept. of Civil and Environmental Engineering, IIT Tirupati, Conference Chair",
    img: require("../../image/Suresh.jpg"),
  },
  {
    name: "Board of Directors",
    description: "Institute for Lean Construction Excellence",
    img: require("../../image/committee.jpg"),
  },
  {
    name: "Prof. Koshy Varghese",
    description: "Director ILCE & Professor IIT Madras",
    img: require("../../image/Koshy.jpg"),
  },
  {
    name: "Mr. Kalyan Vaidyanathan",
    description: "CTO - Construction, Tvasta",
    img: require("../../image/Kalyan.jpg"),
  },
  {
    name: "Dr. Ganesh Devkar",
    description: "Sr Associate Professor, CEPT University",
    img: require("../../image/Ganesh.jpg"),
  },
  {
    name: "Dr. Laishram Boeing Singh",
    description: "Professor, IIT Guwahati",
    img: require("../../image/LBS.jpg"),
  },
  {
    name: "Dr. Parul Patel",
    description: "Professor, Nirma University",
    img: require("../../image/Parul.jpg"),
  },
  {
    name: "Mr. Kaezad Karanjawala",
    description:
      "Secretary General, ILCE; ; Vice President - Godrej Construction.",
    img: require("../../image/Kaezad.jpg"),
  },
  {
    name: "Dr. Marimuthu K",
    description: "Technical Secretary, ILCE",
    img: require("../../image/Marimuthu.jpg"),
  },
];

const NOC = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center my-4">
        National Organising Committee
      </h1>
      <div className="row">
        {members.map((member, index) => (
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

export default NOC;
