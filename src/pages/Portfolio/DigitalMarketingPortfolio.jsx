import React from 'react'
import Navbar from '../../components/Generic/Navbar'
import ServiceHeader from '../../components/Services/ServiceHeader'
import TrustedBy from '../../components/Generic/TrustedBy'
import DigitalMarketingShowcase from '../../components/Portfolio/DigitalMarketingShowcase'
import Logos from '../../components/Portfolio/Logos'
import Footer from '../../components/Generic/Footer'
import RecentWork from '../../components/Portfolio/RecentWork'

const DigitalMarketingPortfolio = () => {
    const data = {
        pill: "Digital Marketing Portfolio",
        titleOrange: "DIGITAL MARKETING",
        title: "PORTFOLIO",
        description: "Discover our successful digital marketing campaigns that drive real results. From SEO optimization to social media marketing and PPC advertising."
    }
    return (
        <>
            <div className="service-page portfolio">
                <Navbar />
                <div className="container lg:mt-16 md:mt-12 mt-8">
                    <ServiceHeader data={data} isSpanBlock={false} />
                    <img src="/images/headerCurveLeft.svg" alt="" className="" />
                    <img src="/images/headerRectangleMd.svg" alt="" className="" />
                    <img src="/images/headerRectangleSm.svg" alt="" className="" />
                </div>
            </div>
            <TrustedBy />
            <DigitalMarketingShowcase />
            <Logos />
            <RecentWork serviceType="digital-marketing" />
            <Footer />
        </>
    )
}

export { DigitalMarketingPortfolio }
