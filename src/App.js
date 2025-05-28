import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Organizers from "./components/Organizers";

// ALL CSS Files
import "./css/home.css";
import "./css/footer.css";
import "./css/header.css";
import "./css/about.css";
import "./css/organizers.css";
import Contact from "./components/Contact";

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
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
