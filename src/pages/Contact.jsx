import { Mails, MapPin, Phone, Plane, Train } from "lucide-react";
import React from "react";
import Carousel from "./Carousel";

const Contact = () => {
  return (
    <>
      <Carousel img="bg8.png" />
      <section className="container py-5 contact" style={{ textAlign: "justify" }}>
        <h2 className="text-center mb-5">Contact Us</h2>
        <div className="row g-4 align-items-stretch">
          {/* Contact Info */}
          <div className="col-md-6">
            <div className="card shadow p-4 h-100">
              <h4 className="mb-4 text-primary">IIT Tirupati</h4>
              <ul className="list-unstyled fs-5">
                <li className="mb-4 d-flex">
                  <MapPin className="me-3 text-primary" />
                  <span>
                    Indian Institute of Technology Tirupati,
                    <br />
                    Yerpedu – Venkatagiri Road, Yerpedu Post,
                    <br />
                    Tirupati District – 517619, Andhra Pradesh, India
                  </span>
                </li>
                <li className="mb-4 d-flex">
                  <Mails className="me-3 text-success" />
                  <span>cee_office@iittp.ac.in</span>
                </li>
                <li className="mb-2 d-flex">
                  <Phone className="me-3 text-danger" />
                  <span>+91 877 250 3000</span>
                </li>
              </ul>

              <h4 className="mb-4 text-primary">How to Reach Campus</h4>
              <ul className="list-unstyled fs-5">
                <li className="mb-2 d-flex">
                  <Train size={50} className="me-3 text-danger" />
                  <span>
                    From Renigunta Railway Station(16 km) or Tirupati Railway
                    Station (27 km)
                    <ol>
                      <li>
                        you can take a bus towards Srikalahasti and get down at
                        Yerpedu, take an auto to IIT Campus or a 10 minutes walk
                      </li>
                      <li>
                        you can take a cub or auto to IIT Campus directly from
                        Renigunta Railway Station{" "}
                      </li>
                    </ol>
                  </span>
                </li>
                <li className="mb-2 d-flex">
                  <Train size={50} className="me-3 text-danger" />
                  <span>
                    From Srikalahasti Railways station (13 km)
                    <ol>
                      <li>
                        you can take a bus towards Tirupati and get down at
                        Yerpedu, take an auto to IIT Campus or a 10 minutes walk
                      </li>
                      <li>you can take a cub or auto to IIT Campus directly</li>
                    </ol>
                  </span>
                </li>
                <li className="mb-2 d-flex">
                  <Plane size={50} className="me-3 text-danger" />
                  <span>
                    From Tirupati Airport (14 km)
                    <ol>
                      <li>
                        you can take a bus towards Srikalahasti and get down at
                        Yerpedu, take an auto to IIT Campus or a 10 minutes walk
                      </li>
                      <li>you can take a cub or auto to IIT Campus directly</li>
                    </ol>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Map */}
          <div className="col-md-6">
            <div className="ratio ratio-4x3 shadow rounded-3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.3960204461605!2d79.59189707485511!3d13.707151786680063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4d4963136f08c3%3A0x5ca438a8abb2002b!2sIndian%20Institute%20Of%20Technology%20(IIT)%20Tirupati!5e1!3m2!1sen!2sin!4v1748415272814!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="IIT Tirupati Location"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
