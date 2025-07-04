import React from 'react'
import Navbar from '../../components/Generic/Navbar'
import ServiceHeader from '../../components/Services/ServiceHeader'
import TrustedBy from '../../components/Generic/TrustedBy'
import Footer from '../../components/Generic/Footer'
import RecentWork from '../../components/Portfolio/RecentWork'

const OurPortfolio = () => {
    const data = {
        pill: "Our Work",
        titleOrange: "CREATIVE",
        title: "PORTFOLIO",
        description: "Feeling invisible online? A well-designed website gets you noticed and builds trust and credibility. See how we’ve transformed businesses with growth-driven website designs. "
    }
    return (
        <>
            <div className="service-page portfolio">
                <Navbar />
                <div className="container lg:mt-16 md:mt-12 mt-8">
                    <div className='service-header'>
                        <div className="head-pill">
                            <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                            {data?.pill}
                        </div>
                        <h1>
                            OUR{" "}
                            <span className={`text-orange !inline`}>
                                {data?.titleOrange}
                            </span>
                            {" "}
                            {
                                data?.title
                            }
                        </h1>
                        <p>
                            {
                                data?.description
                            }
                        </p>
                    </div>
                </div>
                <img src="/images/headerCurveLeft.svg" alt="" className="" />
                <img src="/images/headerRectangleMd.svg" alt="" className="" />
                <img src="/images/headerRectangleSm.svg" alt="" className="" />
            </div>
            {/* <TrustedBy /> */}
            <RecentWork />
            <Footer />
        </>
    )
}

export { OurPortfolio }