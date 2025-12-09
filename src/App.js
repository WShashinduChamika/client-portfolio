import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Work from "./Pages/Work/Work";
import Info from "./Pages/Info/Info";
import Loading from "./Pages/Loading/Loading";
import Projects from "./Pages/Projects/Projects";
import Projects2 from "./Pages/Projects/Projects2";
import Projects3 from "./Pages/Projects/Projects3";
import Projects4 from "./Pages/Projects/Projects4";
import Scrolltotop from "./Components/Scrolltotop";

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
