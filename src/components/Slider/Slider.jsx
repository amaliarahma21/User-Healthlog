import { Link } from "react-router-dom";
import "./Slider.css";

const handleLogout = () => {
  localStorage.removeItem("token");
  console.log("Successfully logged out, Take care and come back soon!");
};

export default function Slider() {
  const token = localStorage.getItem("token");

  return (
    <div className="container1">
      <div className="header">
        <div className="left-side">
          <div className="text1-leftside">
            <h1>
              Let's start caring for our bodies by maintaining our health because that is the most important thing.
            </h1>
            <br /> <br /> 
            <p>
              A healthy lifestyle encompasses a combination of habits that
              promote physical, mental, and emotional well-being. It involves
              adopting nutritious eating habits, engaging in regular physical
              activity, managing stress effectively, prioritizing adequate
              sleep, avoiding harmful substances like tobacco and excessive
              alcohol, and fostering positive social connections. By embracing a
              healthy lifestyle, individuals can enhance their quality of life,
              reduce the risk of chronic diseases, and increase longevity,
              ultimately leading to a happier and more fulfilling existence.
            </p>
          </div>
        </div>
        {/* <div className="right-side">
          <img src="public/img-product/med2.jpg" alt="" />
        </div> */}
      </div>
    </div>
  );
}
