import React from 'react'
import Navbar from '../../components/Generic/Navbar'
import ServiceHeader from '../../components/Services/ServiceHeader'
import TrustedBy from '../../components/Generic/TrustedBy'
import ShowCase from '../../components/Portfolio/ShowCase'
import CaseStudies from '../../components/Portfolio/CaseStudies'
import Footer from '../../components/Generic/Footer'
import RecentWork from '../../components/Portfolio/RecentWork'

const WebDevelopmentPortfolio = () => {
    const data = {
        pill: "Web Development Portfolio",
        titleOrange: "WEB DEVELOPMENT",
        title: "PORTFOLIO",
        description: "Explore our stunning web development projects that combine beautiful design with powerful functionality. From responsive websites to complex web applications."
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
                <ShowCase />
            </div>
            <div data-aos="fade-up" data-aos-delay="200">
                <CaseStudies />
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
                <RecentWork serviceType="web-development" />
            </div>
            <Footer />
        </>
    )
}

export { WebDevelopmentPortfolio }
