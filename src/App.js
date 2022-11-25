import React from "react";
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SiteHolder from './Pages/SiteHolder';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Contact from './Pages/Contact';
import Gallery from './Pages/Gallery';
import Header from "./Components/Header";
import Specials from "./Pages/Specials";

export default function App(){

    return (
      <>
      <div className="content-container"> 
        <Header />
          <Routes>
            <Route exact path="/" element={<SiteHolder />}/>
            <Route path="/menu" element={<Menu />}/>
            <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/specials" element={<Specials />} />
          <Route path="/gallery" element={<Gallery />} />
          </Routes>
      </div>
      </>
  );
  }
