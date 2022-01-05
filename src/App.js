import React from "react";
import './App.css';
import { Route, Routes } from 'react-router-dom';
import SiteHolder from './Pages/SiteHolder';
import About from './Pages/About';
import Menu from './Pages/Menu';
import Contact from './Pages/Contact';
import Header from "./Components/Header";
import Specials from "./Pages/Specials";
import Downloads from "./Pages/Downloads";

export default function App(){

    return (
      <div>
        <Header />
          <Routes>
            <Route path="/" element={<SiteHolder />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/specials" element={<Specials />} />
          <Route path="/downloads" element={<Downloads />} />
          </Routes>
      </div>
  );
  }
