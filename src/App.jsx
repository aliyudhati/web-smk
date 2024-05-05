import { Routes, Route } from "react-router-dom";

import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";

import Homepage from "./pages/Homepage";
import KelasPage from "./pages/KelasPage";
import TestimonialPage from "./pages/TestimonialPage";
import SyaratKetenPage from "./pages/SyaratKetenPage";
import FaqPage from "./pages/FaqPage";

function App() {
  return (
    <div>
      <NavbarComponent />
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/kelas" Component={KelasPage} />
        <Route path="/testimonial" Component={TestimonialPage} />
        <Route path="/syaratketen" Component={SyaratKetenPage} />
        <Route path="/faq" Component={FaqPage} />
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;
