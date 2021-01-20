import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Card from "../UI/Card";
import "./style.css";

/**
 * @author
 * @function Logo
 **/

const Logo = (props) => {
  return (
    <Card>
      <div style={{ padding: "20px 0" }}>
        <div className="logo">
          <Link to="/">Personel Blogs</Link>
        </div>
      </div>
      <Navbar />
    </Card>
  );
};

export default Logo;
