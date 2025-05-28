import React, { useState } from "react";
import Carousel from "./Carousel";

const Organizers = () => {
  const [activeOrganizer, setActiveOrganizer] = useState("Patrons");

  const renderOrganizers = () => {
    switch (activeOrganizer) {
      case "Patrons":
        return (
          <>
            <h1 className="text-4xl font-bold text-center my-3">Patrons</h1>
            <div className="row">
              <div className="col-md-6 my-2">
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src={require(`../image/bg1.png`)}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h4>
                      <strong>Academic Patron</strong>
                    </h4>
                    <p class="card-text">
                      <strong>Prof. K.N. Satyanarayana</strong>
                    </p>
                    <p>
                      Director of the Indian Institute of Technology Tirupati
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 my-2">
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src={require(`../image/bg1.png`)}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h4>
                      <strong>Industry Patron</strong>
                    </h4>
                    <p class="card-text">
                      <strong>Mr. Anup Mathew</strong>
                    </p>
                    <p>
                      Chairman of the Board of Directors of the Institute for
                      Lean Construction Excellence
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        );

      case "NOC":
        return (
          <>
            <h1 className="text-4xl font-bold text-center my-3">
              National Organising Committee
            </h1>
            <div className="row">
              <div className="col-md-4 my-2">
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src={require(`../image/bg1.png`)}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <p class="card-text">
                      <strong>Conference Chair</strong>
                    </p>
                    <p>Indian Institute of Technology Tirupati</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2">
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src={require(`../image/bg1.png`)}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <p class="card-text">
                      <strong>Board of Directors</strong>
                    </p>
                    <p>Institute for Lean Construction Excellence</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2">
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src={require(`../image/bg1.png`)}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <p class="card-text">
                      <strong>Prof. Koshy Varghese</strong>
                    </p>
                    <p>Director ILCE & Professor IIT Madras</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2">
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src={require(`../image/bg1.png`)}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <p class="card-text">
                      <strong>Mr. Kalyan Vaidyanathan</strong>
                    </p>
                    <p>CTO - Construction, Tvasta</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2">
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src={require(`../image/bg1.png`)}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <p class="card-text">
                      <strong>Dr. Ganesh Devkar</strong>
                    </p>
                    <p>Associate Professor, CEPT University</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2">
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src={require(`../image/bg1.png`)}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <p class="card-text">
                      <strong>Dr. Laishram Boeing Singh</strong>
                    </p>
                    <p>Professor, IIT Guwahati</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2">
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src={require(`../image/bg1.png`)}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <p class="card-text">
                      <strong>Dr. Parul Patel</strong>
                    </p>
                    <p>Professor, Nirma University</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2">
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src={require(`../image/bg1.png`)}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <p class="card-text">
                      <strong>Mr. Kaezad Karanjawala</strong>
                    </p>
                    <p>Secretary General, ILCE</p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-2">
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src={require(`../image/bg1.png`)}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <p class="card-text">
                      <strong>Dr. Marimuthu K</strong>
                    </p>
                    <p>Technical Secretary, ILCE</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        );

      case "LOC":
        return (
          <>
            <h1 className="text-4xl font-bold text-center my-3">
              Local Organising Committee
            </h1>
            <div className="row">
              <div className="col-md-3 my-2">
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src={require(`../image/bg1.png`)}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <p class="card-text">
                      <strong>Conference Chair</strong>
                    </p>
                    <p>Indian Institute of Technology Tirupati</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 my-2">
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src={require(`../image/bg1.png`)}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <p class="card-text">
                      <strong>Other Committees</strong>
                    </p>
                    <p>
                      Leads and Supports - Indian Institute of Technology
                      Tirupati
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 my-2">
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src={require(`../image/bg1.png`)}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h4>
                      <strong>Technical Committee Lead - Academia</strong>
                    </h4>
                    <p class="card-text">
                      <strong>Dr. Santhosh Loganathan</strong>
                    </p>
                    <p>NIT Trichy</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 my-2">
                <div class="card" style={{ width: "18rem" }}>
                  <img
                    src={require(`../image/bg1.png`)}
                    class="card-img-top"
                    alt="..."
                  />
                  <div class="card-body">
                    <h4>
                      <strong>Technical Committee Lead - Industry</strong>
                    </h4>
                    <p class="card-text">
                      <strong>Dr. Marimuthu K</strong>
                    </p>
                    <p>Technical Secretary, ILCE</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Carousel img="bg3.jpeg" />
      <h2 className="text-center my-2 org">Our Organizers</h2>

      <div className="container">
        <nav className="flex justify-center gap-6 mb-8 mx-2">
          <button
            onClick={() => setActiveOrganizer("Patrons")}
            className="text-blue-600 hover:underline font-medium m-2 orgButton"
          >
            Patrons
          </button>
          <button
            onClick={() => setActiveOrganizer("NOC")}
            className="text-blue-600 hover:underline font-medium m-2 orgButton"
          >
            National Organising Committee
          </button>
          <button
            onClick={() => setActiveOrganizer("LOC")}
            className="text-blue-600 hover:underline font-medium m-2 orgButton"
          >
            Local Organising Committee
          </button>
        </nav>

        {renderOrganizers()}
      </div>
    </>
  );
};

export default Organizers;
