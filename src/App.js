import React,{useEffect} from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import Header from "./Pages/Header";
import Footer from "./Pages/Footer";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'



function App() {
  useEffect(()=>{
    setTimeout(()=>{
      document.getElementById('isVisible').style.display='block'
    },500)
    
  },[])
  return (
    <React.Fragment>
          <Router>
          <div>
            <Header />
      <Routes>
        <Route exact path="/" element={ <Home />} ></Route>
          <Route path="/about" element={ <About />} ></Route>
          <Route path="/service" element={ <Service />} > </Route>
          <Route path="/contact" element={<Contact />} > </Route>
      </Routes>
      <Footer />
      </div>
    </Router>
    </React.Fragment>
  );
}

export default App;
