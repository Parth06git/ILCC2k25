import React from "react";
import Carousel from "./Carousel";

const About = () => {
  return (
    <>
      <Carousel img="bg2.jpg" />
      <div className="container" style={{ textAlign: "justify" }}>
        <h2 className="text-2xl font-bold text-center my-4">About ILCE</h2>
        <p className="text-lg text-gray-700 mb-4">
          <strong>Institute for Lean Construction Excellence (ILCE)</strong> is
          a not-for-profit company established in November 2008 and registered
          u/s 12AA of the Income Tax Act, 1961, which exists to facilitate the
          creation of a world-class Indian construction sector and to establish
          new global benchmarks in the performance of construction projects. It
          is also the premier Institute in India for Lean Construction, its
          propagation and application and hence providing a neutral networking
          platform to all the construction sector stakeholders and academic
          professionals to discuss, develop & experiment with new ideas.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          Lean Construction is an emerging Project Management paradigm derived
          from the successful practices of Lean Manufacturing developed by
          Toyota Motors in the 1940s. Lean Construction developed around 1990
          and has now become quite popular all over the world. It came to India
          in 2008 when ILCE (Institute for Lean Construction Excellence) was
          formed.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          ILCE was founded with the help of Mr P. Sampath, who held the Director
          General position and was instrumental in driving the Lean Philosophy
          in India. The first company that helped create ILCE was Shapoorji
          Pallonji under the leadership of Mr Cyrus Mistry, followed by
          like-minded organisations such as L&T, Tata, Godrej and the other
          founder companies Afcons, URC, Arcop, KPMG with knowledge partner IIT
          Madras.
        </p>

        <div className="ilceDev">
          <h2 className="text-2xl font-bold text-center my-4">
            ILCE Developments
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Since 2008, ILCE has organised seminars, workshops, and webinars in
            the country, featuring expert international speakers such as Dr.
            Lauri Koskela, Gregg Howell, Dr Glenn Ballard, Dr Iris Tommelein, Dr
            Tariq Abdelhamid, Alan Mossman, Dr Zofia K. Rybkowski, Mr Amr
            Abdel-Azim and many others.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Lean Construction has also become a part of the curriculum in many
            leading Project Management institutes in India and worldwide. In
            2013, a Lean Training Program was arranged for coaching and training
            teams from all founding companies and member organisations.
            IIT-Madras designed the Lean Modules and selected eight pilot
            projects for the Lean implementation program. The basic Lean
            philosophy of partnering and collaboration was driven among the
            project teams and vendors to improve flow and create trust and
            transparency. At the end of this training, a Lean Competition was
            conducted at IIT Madras wherein each of the 8 companies presented
            their Lean journey, learnings, and results in the form of
            interesting case studies on Lean implementation in their respective
            projects. Similar training programs have been revamped with the
            title, “Integrated Lean Training and Implementation Programme
            (ILTIP)” in the last couple of years to support project teams by
            introducing lean, hands-on sessions on lean methods, support in
            implementation at their project sites, and maturity assessment
            towards the end. The industry stakeholders have very well received
            this programme to make a venture in the Lean journey and strive to
            improve for the betterment in the long term.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            To popularise the concept of Lean Construction in India, ILCE made a
            beginning with ILCC 2015 held in Mumbai in 2015. Further to this,
            ILCC 2017, ILCC 2019 and, the international conference IGLC 2018,
            LIPS 2019 (Lean in Public Sector), ILCC 2021, and ILCC 2022, ILCC
            2023, ILCC 2024 were organised.
          </p>
        </div>

        <h2 className="text-2xl font-bold text-center my-4">Role of ILCE</h2>
        <p className="text-lg text-gray-700 mb-4">
          In India, ILCE has taken up the mantle of Lean Construction Management
          and has been engaged in several ways to popularise the same. ILCE has
          organised several major Lean Construction Management Conferences,
          including international events, many webinars and workshops,
          site-based training programmes, etc., to help construction companies
          and professionals gain knowledge on Lean concepts and practices. ILCE
          engages with several international thought leaders in Lean
          Construction Management and constantly endeavours to enhance the
          deployment of Lean practices in the country. The ILCE Charter Member
          organisations lead by setting examples in Lean Construction
          Management. Several leading technology institutions led by IIT Madras,
          NICMAR, and CEPT teach graduate and post-graduate levels of
          Construction Management incorporating Lean Construction Management.
        </p>

        <div className="text-center mt-4">
          <a
            href="https://www.ilce.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="readLink"
          >
            Read more about ILCE
          </a>
        </div>
      </div>
    </>
  );
};

export default About;
