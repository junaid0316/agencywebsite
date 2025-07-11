import { useEffect, useState } from 'react'
import './index.css'
import './App.css'
import './style.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Home from './pages/Home'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { AppDevelopment, DigitalMarketing, SoftwareDevelopment, WebDevelopment } from './pages/Services'
import { OurPortfolio, Portfolio, SoftwareDevelopmentPage, MobileAppsPage, DigitalMarketingPage } from './pages/Portfolio'
import MobArchieves from './pages/MobileArchieves/MobArchieves'
import Travelica from './pages/MobileArchieves/Travelica'
import AboutUs from './pages/AboutUs/AboutUs'
import Scrollbar from 'smooth-scrollbar';

function App() {
  useEffect(() => {
    const element = document.querySelector('#smooth-scrollbar');
    if (element) {
      const scrollbarInstance = Scrollbar.init(element);
      // Store the scrollbar instance globally so other components can access it
      window.smoothScrollbarInstance = scrollbarInstance;
    }
  }, []);


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/web-development" element={<WebDevelopment />} />
          <Route path="/service/software-development" element={<SoftwareDevelopment />} />
          <Route path="service/digital-marketing" element={<DigitalMarketing />} />
          <Route path="service/app-development" element={<AppDevelopment />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/our-portfolio" element={<OurPortfolio />} />
          <Route path="/portfolio/software-development" element={<SoftwareDevelopmentPage />} />
          <Route path="/portfolio/mobile-apps" element={<MobileAppsPage />} />
          <Route path="/portfolio/digital-marketing" element={<DigitalMarketingPage />} />
          <Route path="/mob-archieves" element={<MobArchieves />} />
          <Route path="/mob-archieves/travelica" element={<Travelica />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
