import React from 'react'
import Navbar from '../../components/Generic/Navbar'
import ServiceHeader from '../../components/Services/ServiceHeader'
import TrustedBy from '../../components/Generic/TrustedBy'
import ShowCase from '../../components/Portfolio/ShowCase'
import CaseStudies from '../../components/Portfolio/CaseStudies'
import Logos from '../../components/Portfolio/Logos'
import MobileApps from '../../components/Portfolio/MobileApps'
import SoftwareDevelopment from '../../components/Portfolio/SoftwareDevelopment'
import Footer from '../../components/Generic/Footer'

const Portfolio = () => {
    const data = {
        pill: "Our Work",
        titleOrange: "OUR",
        title: "PORTFOLIO",
        description: "Feeling invisible online? A well-designed website gets you noticed and builds trust and credibility. See how we’ve transformed businesses with growth-driven website designs. "
    }
    return (
        <>
            <div className="service-page portfolio">
                <Navbar />
                <div className="container lg:mt-16 md:mt-12 mt-8">
                    <ServiceHeader data={data} isSpanBlock={false} />
                </div>
                <img src="/images/headerCurveLeft.svg" alt="" className="" />
                <img src="/images/headerRectangleMd.svg" alt="" className="" />
                <img src="/images/headerRectangleSm.svg" alt="" className="" />
            </div>
            <TrustedBy />
            <ShowCase />
            <CaseStudies />
            <MobileApps />
            <SoftwareDevelopment />
            <Logos />
            <Footer />
        </>
    )
}

export { Portfolio }