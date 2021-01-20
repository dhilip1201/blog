import React from "react";
import Card from "../../components/UI/Card";

/**
 * @author
 * @function AboutUs
 **/

const AboutUs = (props) => {
  return (
    <Card
      style={{ marginBottom: "20px", padding: "20px", boxSizing: "border-box" }}
    >
      <div className="cardHeader">
        <span>About Us</span>
      </div>
      <div className="profileImageContainer">
        <img
          src="https://raw.githubusercontent.com/dhilip1201/images/master/dhilip.jpg"
          alt=""
        />
      </div>
      <div className="cardBody">
        <p className="personalBio" >
          My name is Dhilip Kumar.
        </p>
        <p className="personalBio">
          I am a MERN Full Stack developer specialization in Front end
          developement & Back end Development....:)
        </p>
      </div>
    </Card>
  );
};

export default AboutUs;
