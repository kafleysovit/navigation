import "./App.css";
import Navigate from "./navigation/Navigate";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./components/Aboutme";
import ConstactUs from "./components/Contactus";
import Services from "./components/Services";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="navigation">
          <Navigate />
        </div>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="about_me" element={<AboutMe />} />
          <Route path="contact_us" element={<ConstactUs />} />
          <Route path="services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
