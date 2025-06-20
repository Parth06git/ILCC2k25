import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Organizers from "./pages/Organizers";
import Schedule from "./pages/Schedule";
import Submission from "./pages/Submission";
import Registration from "./pages/Registration";
import Sponsor from "./pages/Sponsor";
import Contact from "./pages/Contact";

// ALL CSS Files
import "./css/home.css";
import "./css/footer.css";
import "./css/header.css";
import "./css/about.css";
import "./css/organizers.css";
import "./css/contact.css";

function App() {
  return (
    <>
      <BrowserRouter basename="/ilcc2025">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/organizers" element={<Organizers />} />
          <Route exact path="/schedule" element={<Schedule />} />
          <Route exact path="/submission" element={<Submission />} />
          <Route exact path="/registration" element={<Registration />} />
          <Route exact path="/sponsors" element={<Sponsor />} />
          <Route exact path="/contactUs" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
