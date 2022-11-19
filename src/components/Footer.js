import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <p>Copyright &copy; 2022</p>
      <Link to="/about">About Us</Link>
    </div>
  );
};

export default Footer;
