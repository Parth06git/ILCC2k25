import React from "react";

const Patrons = () => {
  return (
    <>
      <h1 className="text-4xl font-bold text-center my-3">Patrons</h1>
      <div className="row">
        <div className="col-md-6 my-2">
          <div
            className="card shadow-sm border-0 rounded-4 overflow-hidden"
            style={{ width: "18rem", transition: "transform 0.3s" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={require(`../../image/KNS.jpg`)}
              className="card-img-top img-fluid"
              alt="Academic Patron"
              style={{ objectFit: "cover", height: "220px" }}
            />
            <div className="card-body text-center bg-light">
              <h5 className="card-title fw-bold text-primary">
                Academic Patron
              </h5>
              <p className="card-text mb-1">
                <strong>Prof. K.N. Satyanarayana</strong>
              </p>
              <p className="text-muted small">
                Director, Indian Institute of Technology Tirupati
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 my-2">
          <div
            className="card shadow-sm border-0 rounded-4 overflow-hidden"
            style={{ width: "18rem", transition: "transform 0.3s" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={require(`../../image/AnupMathew.jpg`)}
              className="card-img-top img-fluid"
              alt="Academic Patron"
              style={{ objectFit: "cover", height: "220px" }}
            />
            <div className="card-body text-center bg-light">
              <h5 className="card-title fw-bold text-primary">
                Industry Patron
              </h5>
              <p className="card-text mb-1">
                <strong>Mr. Anup Mathew</strong>
              </p>
              <p className="text-muted small">
                Chairman of the Board of Directors of the Institute for Lean
                Construction Excellence
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Patrons;
