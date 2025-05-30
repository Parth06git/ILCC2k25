import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Organizers from "./pages/Organizers";
import Contact from "./pages/Contact";
import Submission from "./pages/Submission";

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
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/organizers" element={<Organizers />} />
          <Route exact path="/contactUs" element={<Contact />} />
          <Route exact path="/submission" element={<Submission />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
