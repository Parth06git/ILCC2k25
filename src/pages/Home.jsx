import React from "react";
import {
  CalendarDays,
  CircleCheckBig,
  Handshake,
  Heart,
  Palette,
} from "lucide-react";
import Carousel from "./Carousel";

const Home = () => {
  return (
    <>
      <Carousel img="bg1.png" />
      {/* Welcome ILCC 2025 */}
      <hr />
      <div style={{ textAlign: "center" }}>
        <Handshake className="text-success" size={50} />
      </div>
      <div className="container ilcc">
        <div className="p-6 max-w-3xl mx-auto bg-white rounded-2xl shadow-md">
          <h1 className="text-3xl font-bold text-center mb-4">
            Welcome to ILCC 2025 – Tirupati, India
          </h1>
          <div className="para">
            <p className="text-lg text-gray-700 mb-4">
              We are delighted to welcome you to the{" "}
              <strong>Indian Lean Construction Conference (ILCC) 2025</strong>,
              taking place from{" "}
              <strong>30th November to 3rd December 2025</strong> in the vibrant
              city of <strong>Tirupati</strong>, India.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              ILCC 2025 continues the proud tradition of bringing together a
              dynamic community of{" "}
              <strong>
                designers, constructors, operators, and researchers
              </strong>{" "}
              committed to advancing lean practices in the construction
              industry. This year’s edition promises a rich confluence of ideas
              and innovations through its thoughtfully curated{" "}
              <strong>
                Workshop Day, Industry Day, and Academic Conference Days
              </strong>
              .
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Nestled at the foot of the Eastern Ghats, Tirupati—revered for its
              spiritual heritage and serene landscapes—offers a unique setting
              to inspire meaningful dialogue and collaboration. While the
              previous edition took place at the scenic IIT Guwahati, we are
              thrilled to host this year’s conference amidst the evolving
              academic and research environment of <strong>IIT Tirupati</strong>
              , a hub of innovation in South India.
            </p>
          </div>
          <p className="text-xl font-semibold text-center mt-6 text-blue-700">
            Join us as we build the future—leaner, smarter, together.
          </p>
        </div>
      </div>

      {/* About IITT */}
      <div className="container iitt">
        <div style={{ textAlign: "center" }}>
          <Heart size={35} className="text-danger" />
        </div>
        <h2 className="text-2xl font-bold text-center mt-2 mb-4">
          About IIT Tirupati
        </h2>
        <div className="para">
          <p className="text-lg text-gray-700 mb-4">
            Nestled at the foothills of the Eastern Ghats,{" "}
            <strong>IIT Tirupati</strong> is one of India’s youngest and
            fastest-growing IITs. Established in 2015, it blends academic
            excellence with cutting-edge research in a vibrant, eco-conscious
            campus. With a strong focus on innovation, sustainability, and
            industry collaboration, IIT Tirupati is shaping future-ready
            engineers and researchers in the heart of South India’s spiritual
            and cultural hub.
          </p>
          <p className="text-lg text-gray-700">
            The institute boasts a rapidly growing infrastructure, a diverse and
            talented student body, and an energetic research culture supported
            by world-class faculty. Strategically located near major industrial
            corridors, IIT Tirupati also fosters strong connections with
            industries and government bodies, encouraging real-world impact
            through research, entrepreneurship, and community outreach.
          </p>
        </div>
        <div className="text-center mt-4">
          <a
            href="https://www.iittp.ac.in/aboutus"
            target="_blank"
            rel="noopener noreferrer"
            className="readLink"
          >
            Read more about IIT Tirupati
          </a>
        </div>
      </div>

      {/* IMP Dates */}
      <div className="container text-center my-4 p-1">
        <h2 className="text-2xl font-bold text-center mt-2 mb-4">
          <CalendarDays className="text-primary" size={30} />
          {"   "}Important Dates <hr className="brW" />
        </h2>
        <div className="row">
          <div className="col-md-4">
            <div className="dates">
              <hr className="brMB" />
              <h4>Workshop Day</h4>
              <hr className="brW" />
              <p>
                <b>30th November 2025</b>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="dates">
              <hr className="brMB" />
              <h4>Industry Day</h4>
              <hr className="brW" />
              <p>
                <b>1st Decemebr 2025</b>
              </p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="dates">
              <hr className="brMB" />
              <h4>Conference Days</h4>
              <hr className="brW" />
              <p>
                <b>2nd-3rd December 2025</b>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Conference Theme */}
      <div className="container my-4 p-1">
        <h2 className="text-2xl font-bold text-center mt-2 mb-4">
          <Palette /> Conference Theme
        </h2>

        <div className="row">
          <div className="col-md-4 thCol">
            <div className="themes">
              <ul>
                <li>
                  <CircleCheckBig /> Contract and Cost Management (including
                  Integrated Project Delivery)
                  <hr />
                </li>
                <li>
                  <CircleCheckBig /> Digital Support for Lean Construction
                  (including BIM Integration)
                  <hr />
                </li>
                <li>
                  <CircleCheckBig /> Lean Theory
                  <hr />
                </li>
                <li>
                  <CircleCheckBig /> Health, Safety, and Quality
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 thCol">
            <div className="themes">
              <ul>
                <li>
                  <CircleCheckBig /> Product Development, Value, and Design
                  Management
                  <hr />
                </li>
                <li>
                  <CircleCheckBig /> Production Planning and Control (including
                  Last Planner® System/Collaborative Planning System, constraint
                  analysis & removal)
                  <hr />
                </li>
                <li>
                  <CircleCheckBig /> Production System Design (including Takt,
                  Location-Based Management)
                  <hr />
                </li>
                <li>
                  <CircleCheckBig /> Learning and Teaching Lean
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 thCol">
            <div className="themes">
              <ul>
                <li>
                  <CircleCheckBig /> Lean People, Culture, and Change
                  <hr />
                </li>
                <li>
                  <CircleCheckBig /> Lean and Green
                  <hr />
                </li>
                <li>
                  <CircleCheckBig /> Lean Supply Chain Management
                  <hr />
                </li>
                <li>
                  <CircleCheckBig /> Overcoming Organisational Barriers to Lean
                  Implementation
                  <hr />
                </li>
                <li>
                  <CircleCheckBig /> Modular and Off-Site Construction
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
