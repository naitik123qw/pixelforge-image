import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import AdBanner from "./components/AdBanner";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Download from "./pages/Dowload";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import NotFound from './components/NotFound';

const App = () => {
  return (
    <>
      <Navbar />
      <AdBanner />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/download" element={<Download />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;

