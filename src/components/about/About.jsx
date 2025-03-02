import React from "react";
import "./About.css";

function About() {
  const cardsData = [
    {
      id: 0,
      heading: "CATCH THEM YOUNG",
      imgurl:
        "https://infyspringboard.onwingspan.com/assets/instances/InfosysSpringboard/images/landing/Cards/Catch_them_young_en.png",
      content:
        "Program to introduce young minds to new technologies and its application in business and day-to-day life.",
    },
    {
      id: 1,
      heading: "CATCH THEM YOUNG",
      imgurl:
        "https://infyspringboard.onwingspan.com/assets/instances/InfosysSpringboard/images/landing/Cards/Catch_them_young_en.png",
      content:
        "Program to introduce young minds to new technologies and its application in business and day-to-day life.",
    },
    {
      id: 2,
      heading: "CATCH THEM YOUNG",
      imgurl:
        "https://infyspringboard.onwingspan.com/assets/instances/InfosysSpringboard/images/landing/Cards/Catch_them_young_en.png",
      content:
        "Program to introduce young minds to new technologies and its application in business and day-to-day life.",
    },
    {
      id: 3,
      heading: "CATCH THEM YOUNG",
      imgurl:
        "https://infyspringboard.onwingspan.com/assets/instances/InfosysSpringboard/images/landing/Cards/Catch_them_young_en.png",
      content:
        "Program to introduce young minds to new technologies and its application in business and day-to-day life.",
    },
  ];

  return (
    <div className="about-main-con">
      <div className="about-heading-con">
        <p className="heading">About Infosys Springboard</p>
        <p className="about-content">
          Infosys Springboard is a Digital literacy program launched as part of
          the Infosys ESG Tech for Good charter. It aims to enable students and
          associated communities from early education to lifelong learners by
          imparting digital and life skills through curated content &
          interventions, free of cost. Catch them young Catch them young Program
          to introduce young minds to new technologies and its application in
          business and day-to-day life.
        </p>
      </div>
      <div className="cards-main-con">
        {cardsData.map((item) => (
          <div key={item.id} className="card-item">
            <div className="card-inner">
              <div className="card-front">
                <img className="card-img" src={item.imgurl} alt={item.heading} />
              </div>
              <div className="card-back">
                <h3>{item.heading}</h3>
                <p>{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
