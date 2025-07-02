import { useState, useEffect } from 'react'
import './index.css'
import './App.css'
import './style.scss'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
import Home from './pages/Home'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { AppDevelopment, DigitalMarketing, SoftwareDevelopment, WebDevelopment } from './pages/Services'
import { OurPortfolio, Portfolio, WebDevelopmentPortfolio, DigitalMarketingPortfolio, AppDevelopmentPortfolio, SoftwareDevelopmentPortfolio } from './pages/Portfolio'
import MobArchieves from './pages/MobileArchieves/MobArchieves'
import SoftwareDevelopmentPage from './pages/SoftwareDevelopment/SoftwareDevelopmentPage'
import Travelica from './pages/MobileArchieves/Travelica'
import AboutUs from './pages/AboutUs/AboutUs'
import { ContactUs } from './pages/Contact'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
      delay: 100,
    })
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service/web-development" element={<WebDevelopment />} />
        <Route path="/service/software-development" element={<SoftwareDevelopment />} />
        <Route path="service/digital-marketing" element={<DigitalMarketing />} />
        <Route path="service/app-development" element={<AppDevelopment />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/our-portfolio" element={<OurPortfolio />} />
        <Route path="/portfolio/web-development" element={<WebDevelopmentPortfolio />} />
        <Route path="/portfolio/digital-marketing" element={<DigitalMarketingPortfolio />} />
        <Route path="/portfolio/app-development" element={<AppDevelopmentPortfolio />} />
        <Route path="/portfolio/software-development" element={<SoftwareDevelopmentPortfolio />} />
        <Route path="/mob-archieves" element={<MobArchieves />} />
        <Route path="/mob-archieves/travelica" element={<Travelica />} />
        <Route path="/software-development" element={<SoftwareDevelopmentPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
