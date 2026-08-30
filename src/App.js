import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./Components/Home";
import Software_development from "./Components/Software_development";
import Website_development from "./Components/Website_development";
import Mobileapp_development from "./Components/Mobileapp_development";
import Ecommerce from "./Components/Ecommerce";
import Marketing from "./Components/Marketing";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Uiux from "./Components/uiux";




function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home />}/>
  <Route path="/About" element={<About />}/>
  <Route path="/SD" element={<Software_development />}/>
  <Route path="/WD" element={<Website_development/>}/>
  <Route path="/MD" element={<Mobileapp_development/>}/>
  <Route path="/Marketing" element={<Marketing/>}/>
  <Route path="/Ecommerce" element={<Ecommerce/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/uiux" element={<Uiux />} />
</Routes>
</BrowserRouter>
   
    </div>
  );
}

export default App;
