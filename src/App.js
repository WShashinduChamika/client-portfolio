import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Work from "./Pages/Work/Work";
import Info from "./Pages/Info/Info";
import Loading from "./Pages/Loading/Loading";
import Projects from "./Pages/Projects/Projects";
import Projects2 from "./Pages/Projects/Projects2";
import Projects3 from "./Pages/Projects/Projects3";
import Projects4 from "./Pages/Projects/Projects4";
import Blogs from "./Pages/Blogs/Blogs";
import BlogDetail from "./Pages/Blogs/BlogDetail";
import Scrolltotop from "./Components/Scrolltotop";
import MoreProjects from "./Pages/MoreProjects/MoreProjects";
import WhatsAppIcon from "./Assets/WhatsAppIcon.png";

function App() {
  return (
    <Router>
      <div className="App">
        <Scrolltotop />
        <Routes>
          <Route path="/Work" element={<Work />} />
          <Route path="/" element={<Loading />} />
          <Route path="/Info" element={<Info />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Projects2" element={<Projects2 />} />
          <Route path="/Projects3" element={<Projects3 />} />
          <Route path="/Projects4" element={<Projects4 />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/more-projects" element={<MoreProjects />} />
        </Routes>

        <a
          href="https://wa.me/94713775404?text=Hi%20Minuri%2C%20I%20would%20like%20to%20chat%20about%20your%20services."
          target="_blank"
          rel="noreferrer"
          className="whatsapp-float"
          aria-label="Open WhatsApp chat"
        >
          <img src={WhatsAppIcon} alt="WhatsApp" className="whatsapp-float-icon" />
        </a>
      </div>
    </Router>
  );
}

export default App;
