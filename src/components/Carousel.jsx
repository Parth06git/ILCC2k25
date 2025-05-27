import { MapPinCheckInside } from "lucide-react";
import React from "react";

const Carousel = () => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={require(`../image/bg1.png`)}
              className="d-block"
              alt="loading"
              style={{
                width: "100%",
                height: "89.5vh",
                borderRadius: "20px",
                filter: "grayscale(60%)",
              }}
            />
            <div className="carousel-caption">
              <div className="box">
                <h3>Indian Lean Construction Conference - ILCC 2025</h3>
                <p>
                  "Lean Construction 4.0: Project Delivery for Resilient
                  Infrastructure"
                </p>
                <p>
                  <b>
                    <MapPinCheckInside /> Conference held at IIT Tirupati
                  </b>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={require(`../image/bg2.jpg`)}
              className="d-block"
              alt="loading"
              style={{
                width: "100%",
                height: "89.5vh",
                borderRadius: "20px",
                filter: "grayscale(60%)",
              }}
            />
            <div className="carousel-caption">
              <div className="box">
                <h3>Indian Lean Construction Conference - ILCC 2025</h3>
                <p>
                  "Lean Construction 4.0: Project Delivery for Resilient
                  Infrastructure"
                </p>
                <p>
                  <b>
                    <MapPinCheckInside /> Conference held at IIT Tirupati
                  </b>
                </p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={require(`../image/bg3.jpeg`)}
              className="d-block "
              alt="loading"
              style={{
                width: "100%",
                height: "89.5vh",
                borderRadius: "20px",
                filter: "grayscale(60%)",
              }}
            />
            <div className="carousel-caption">
              <div className="box">
                <h3>Indian Lean Construction Conference - ILCC 2025</h3>
                <p>
                  "Lean Construction 4.0: Project Delivery for Resilient
                  Infrastructure"
                </p>
                <p>
                  <b>
                    <MapPinCheckInside /> Conference held at IIT Tirupati
                  </b>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
};

export default Carousel;
