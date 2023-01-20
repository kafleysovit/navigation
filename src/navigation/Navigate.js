import "./navigate.css";
import { Link } from "react-router-dom";
export default function Navigate() {
  return (
    <div className="navigate">
      <h1>Logo</h1>
      <nav>
        <ul>
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
        </ul>
      </nav>
    </div>
  );
}
