import React from "react";
import Carousel from "./Carousel";

const sponsors = {
  gold: [
    { name: "Gold Sponsor 1", img: require("../image/bg1.png") },
    { name: "Gold Sponsor 2", img: require("../image/bg2.jpg") },
  ],
  silver: [
    { name: "Silver Sponsor 1", img: require("../image/bg3.jpeg") },
    { name: "Silver Sponsor 2", img: require("../image/bg4.png") },
    { name: "Silver Sponsor 3", img: require("../image/bg5.jpeg") },
  ],
  bronze: [
    { name: "Bronze Sponsor 1", img: require("../image/bg6.jpg") },
    { name: "Bronze Sponsor 2", img: require("../image/bg7.jpg") },
    { name: "Bronze Sponsor 3", img: require("../image/bg8.png") },
    { name: "Bronze Sponsor 4", img: require("../image/bg2.jpg") },
  ],
};

const SponsorCard = ({ tier, name, img }) => {
  const tierClass = {
    gold: "border-warning",
    silver: "border-secondary",
    bronze: "border-orange-500",
  }[tier];

  return (
    <div className="col-md-3 my-3 d-flex justify-content-center">
      <div className={`card border-3 ${tierClass}`} style={{ width: "16rem" }}>
        <img src={img} className="card-img-top" alt={`${name} logo`} />
        <div className="card-body text-center">
          <h5 className="card-title fw-bold">{name}</h5>
          <p className="text-muted text-capitalize">{tier} Sponsor</p>
        </div>
      </div>
    </div>
  );
};

const Sponsor = () => {
  return (
    <>
      <Carousel img="bg7.jpg" />
      <div className="container py-5">
        <h1 className="text-center mb-5">Our Sponsors</h1>

        {/* Gold Sponsors */}
        <section className="mb-5">
          <h2 className="text-warning text-center mb-4">Gold Sponsors</h2>
          <div className="row justify-content-center">
            {sponsors.gold.map((s, idx) => (
              <SponsorCard key={idx} tier="gold" name={s.name} img={s.img} />
            ))}
          </div>
        </section>

        {/* Silver Sponsors */}
        <section className="mb-5">
          <h2 className="text-secondary text-center mb-4">Silver Sponsors</h2>
          <div className="row justify-content-center">
            {sponsors.silver.map((s, idx) => (
              <SponsorCard key={idx} tier="silver" name={s.name} img={s.img} />
            ))}
          </div>
        </section>

        {/* Bronze Sponsors */}
        <section className="mb-5">
          <h2 className="text-muted text-center mb-4">Bronze Sponsors</h2>
          <div className="row justify-content-center">
            {sponsors.bronze.map((s, idx) => (
              <SponsorCard key={idx} tier="bronze" name={s.name} img={s.img} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Sponsor;
