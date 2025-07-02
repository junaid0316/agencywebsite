import React from 'react'
import Navbar from '../../components/Generic/Navbar'
import ServiceHeader from '../../components/Services/ServiceHeader'
import TrustedBy from '../../components/Generic/TrustedBy'
import MobileApps from '../../components/Portfolio/MobileApps'
import Footer from '../../components/Generic/Footer'
import RecentWork from '../../components/Portfolio/RecentWork'

const AppDevelopmentPortfolio = () => {
    const data = {
        pill: "App Development Portfolio",
        titleOrange: "APP DEVELOPMENT",
        title: "PORTFOLIO",
        description: "Explore our innovative mobile applications that deliver exceptional user experiences. From iOS to Android and cross-platform solutions."
    }
    return (
        <>
            <div className="service-page portfolio" data-aos="fade-down">
                <Navbar />
                <div className="container lg:mt-16 md:mt-12 mt-8">
                    <ServiceHeader data={data} isSpanBlock={false} />
                    <img src="/images/headerCurveLeft.svg" alt="" className="" data-aos="fade-up" data-aos-delay="200" />
                    <img src="/images/headerRectangleMd.svg" alt="" className="" data-aos="fade-left" data-aos-delay="300" />
                    <img src="/images/headerRectangleSm.svg" alt="" className="" data-aos="fade-right" data-aos-delay="400" />
                </div>
            </div>
            <div data-aos="fade-up">
                <TrustedBy />
            </div>
            <div data-aos="fade-up" data-aos-delay="100">
                <MobileApps />
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
                <RecentWork serviceType="app-development" />
            </div>
            <Footer />
        </>
    )
}

export { AppDevelopmentPortfolio }
