import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

// ALL CSS Files
import "./css/home.css";
import "./css/footer.css";
import "./css/header.css";
import Carousel from "./components/Carousel";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Carousel />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
