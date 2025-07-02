import React from 'react'
import Navbar from '../../components/Generic/Navbar'
import ServiceHeader from '../../components/Services/ServiceHeader'
import TrustedBy from '../../components/Generic/TrustedBy'
import SoftwareDevelopment from '../../components/Portfolio/SoftwareDevelopment'
import Footer from '../../components/Generic/Footer'
import RecentWork from '../../components/Portfolio/RecentWork'

const SoftwareDevelopmentPortfolio = () => {
    const data = {
        pill: "Software Development Portfolio",
        titleOrange: "SOFTWARE DEVELOPMENT",
        title: "PORTFOLIO",
        description: "Discover our custom software solutions that solve complex business challenges. From enterprise applications to innovative software products."
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
                <SoftwareDevelopment />
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
                <RecentWork serviceType="software-development" />
            </div>
            <Footer />
        </>
    )
}

export { SoftwareDevelopmentPortfolio }
