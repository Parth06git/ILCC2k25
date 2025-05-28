import { MapPinCheckInside } from "lucide-react";
import React from "react";

const Carousel = (props) => {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={require(`../image/${props.img}`)}
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
        </div>
      </div>
    </>
  );
};

export default Carousel;
