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
            Over a long period of work we have provided hundres of thoudansof
            eye care services
          </h1>
          </div>
          <div className="text2-leftside">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            maiores ullam, laudantium explicabo consequatur accusantium commodi
            cupiditate harum rem. Possimus esse voluptatibus ab aliquid a
            repellat ipsum aperiam in quisquam?
          </p>
          </div>
          
          
        </div>
        <div className="right-side">
          <img src="public/img-product/med2.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}
