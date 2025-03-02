import React from "react";
import "./Feature.css";
function Features() {
  return (
    <div className="features-con">
      <div className="feature-one feature">
        <img  className="img"
          src="https://infyspringboard.onwingspan.com/web/assets/images/infosysheadstart/landing/settings.svg"
          alt=""
        />

        <p>Core Skills Digital Skills</p>
      </div>
      <div className="feature-two feature">
        <img className="img"
          src="https://infyspringboard.onwingspan.com/web/assets/images/infosysheadstart/landing/rating.svg"
          alt=""
        />
        <p>Life Skills Behavioral Skills</p>
      </div>
      <div className="feature-three feature">
        <img className="img"
          src="https://infyspringboard.onwingspan.com/web/assets/images/infosysheadstart/landing/time.svg"
          alt=""
        />
        <p>Life Long Learning Continuous Education</p>
      </div>
    </div>
  );
}

export default Features;
