import React from "react";
import "./FirstComponent.css";
function FirstComponent() {
  return (
    <div className="Firstcomponent">
      <div className="content">
        <p className="content-text">
          {" "}
          Page Loaded Login | Infosys Springboard Infosys Head Start Application
          Logo The future of India will be shaped by today’s younger generation
          who need quality education through digital literacy, making them
          productive and self-reliant citizens. 'Digital literacy' is the skills
          required to achieve digital competence and use of Information and
          Communication Technology (ICT) for work, leisure, learning and
          communication. It does not replace traditional forms of literacy,
          instead complements and amplifies the skills that form the foundation
          of traditional forms.
        </p>
      </div>
      <div className="image-slide">
        <img className="image" src="https://infyspringboard.onwingspan.com/web/assets/images/infosysheadstart/landing/English/gallery/nandan_banner.jpg" alt="" />
      </div>
    </div>
  );
}

export default FirstComponent;
