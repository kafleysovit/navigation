import "./navigate.css";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Navigate() {
  const [hidenav, sethidenav] = useState(false);
  return (
    <div className="navigate">
      <div className="top">
        {/* <h1>Logo</h1> */}
        <h1>
          <Link to="/" className="logo">
            Logo
          </Link>
        </h1>
        {hidenav ? (
          <h3 onClick={() => sethidenav(false)}>Show</h3>
        ) : (
          <h3 onClick={() => sethidenav(true)}>Hide</h3>
        )}
      </div>
      <nav id={hidenav ? "hidden" : ""}>
        <Link to="home" className="li">
          Home
        </Link>
        <Link to="about_me" className="li">
          About Me
        </Link>
        <Link to="contact_us" className="li">
          Contact Us
        </Link>
        <Link to="services" className="li">
          Services
        </Link>
      </nav>
    </div>
  );
}
