/* eslint-disable react/jsx-pascal-case */
import React from "react";
import Carousel from "./Carousel";
import { FaCalendarAlt, FaFileAlt, FaPenNib } from "react-icons/fa";
import Poster_Sub_Temp from "./components/Poster_Sub_Temp";
import Paper_Sub_Temp from "./components/Paper_Sub_Temp";
import Timeline from "./components/Timeline";

const Submission = () => {
  return (
    <>
      <Carousel img="bg5.jpeg" />
      <hr />
      <div className="container py-5">
        <h1 className="text-center mb-4">Submission & Registration Timeline</h1>

        <ul
          className="nav nav-tabs justify-content-center mb-4"
          id="timelineTabs"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="timeline-tab"
              data-bs-toggle="tab"
              data-bs-target="#timeline"
              type="button"
              role="tab"
            >
              <FaCalendarAlt className="me-2" /> Timeline
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="paper-tab"
              data-bs-toggle="tab"
              data-bs-target="#paper"
              type="button"
              role="tab"
            >
              <FaFileAlt className="me-2" /> Paper Submission & Templates
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="poster-tab"
              data-bs-toggle="tab"
              data-bs-target="#poster"
              type="button"
              role="tab"
            >
              <FaPenNib className="me-2" /> Poster Submission & Templates
            </button>
          </li>
        </ul>

        <div className="tab-content" id="timelineTabsContent">
          {/* Timeline Tab */}
          <div
            className="tab-pane fade show active"
            id="timeline"
            role="tabpanel"
          >
            <Timeline />
          </div>

          {/* Paper Submission Tab */}
          <div className="tab-pane fade" id="paper" role="tabpanel">
            <Paper_Sub_Temp />
          </div>

          {/* Poster Submission Tab */}
          <div className="tab-pane fade" id="poster" role="tabpanel">
            <Poster_Sub_Temp />
          </div>
        </div>
      </div>
    </>
  );
};

export default Submission;
