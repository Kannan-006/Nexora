import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import SoftwareDevelopment from "./Components/Software_development";
import WebsiteDevelopment from "./Components/Website_development";
import MobileAppDevelopment from "./Components/Mobileapp_development";
import Ecommerce from "./Components/Ecommerce";
import Marketing from "./Components/Marketing";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Uiux from "./Components/uiux";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/SD" element={<SoftwareDevelopment />} />
        <Route path="/WD" element={<WebsiteDevelopment />} />
        <Route path="/MD" element={<MobileAppDevelopment />} />
        <Route path="/Marketing" element={<Marketing />} />
        <Route path="/Ecommerce" element={<Ecommerce />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/uiux" element={<Uiux />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;