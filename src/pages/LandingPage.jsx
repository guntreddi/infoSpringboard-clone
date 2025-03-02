import React from "react";
import Navbar from "../components/navbar/Navbar";
import './LandingPage.css'
import FirstComponent from "../components/firstComponent/FirstComponent";
import Button from "../components/button/Button";
import Features from "../components/features/Features";
import About from "../components/about/About";
import DigitalLiteracy from "../components/digitalletracy/DigitalLiteracy";
import FocusArea from "../components/focusarea/FocusArea";
import Footer from "../components/footer/Footer";
function LandingPage() {
  return (
    <div className="landigpage-container">
      <Navbar />
      <FirstComponent />
    <div className="button-con">
      <Button text={"Get Started"} wd={"300px"} />
    </div>
    <Features />
    <About />
    <DigitalLiteracy />
    <FocusArea />
    <Footer />  
    </div>
  );
}

export default LandingPage;
