import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import AdBanner from "./components/AdBanner";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Download from "./pages/Dowload";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import NotFound from './components/NotFound';
import HowAIImageEnhancementWorks from "./pages/HowAIImageEnhancementWorks";
import BestImageFormatsForWebsites from "./pages/BestImageFormatsForWebsites";
import HowToReduceImageSizeWithoutQualityLoss from "./pages/HowToReduceImageSizeWithoutQualityLoss";
import OptimizeImagesForFastLoading from "./pages/OptimizeImagesForFastLoading";

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
        <Route path="/terms" element={<Terms />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/how-ai-image-enhancement-works" element={<HowAIImageEnhancementWorks />} />
        <Route path="/blog/best-image-formats-for-websites" element={<BestImageFormatsForWebsites />} />
        <Route path="/blog/how-to-reduce-image-size-without-quality-loss" element={<HowToReduceImageSizeWithoutQualityLoss />} />
        <Route path="/blog/optimize-images-for-fast-loading" element={<OptimizeImagesForFastLoading />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;

