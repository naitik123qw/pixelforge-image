import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import BackButton from "./components/BackButton";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Download from "./pages/Dowload";
import NotFound from './components/NotFound';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8'>
        <BackButton />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/download" element={<Download />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;

