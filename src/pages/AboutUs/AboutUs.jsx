import React from 'react'
import Navbar from '../../components/Generic/Navbar'
import ServiceHeader from '../../components/Services/ServiceHeader'
import Footer from '../../components/Generic/Footer'
import TrustedBy from '../../components/Generic/TrustedBy'
import Journey from '../../components/Aboutus/Journey'
import RightWay from '../../components/Aboutus/RightWay'
import LetsTalk from '../../components/Generic/LetsTalk'

const AboutUs = () => {

    const Headdata = {
        pill: "About Us",
        titleOrange: "INSIDE",
        title: "WIZSPEED",
        description: "Engaging stories resonate with your audience, building loyalty. Let your brand's purpose shine through compelling narratives."
    }


    return (
        <>
            <div className="service-page">
                <Navbar />
                <div className="container lg:mt-16 md:mt-12 mt-8">
                    <ServiceHeader data={Headdata} />
                </div>
                <img src="/images/headerCurveLeft.svg" alt="" className="" />
                <img src="/images/headerRectangleMd.svg" alt="" className="" />
                <img src="/images/headerRectangleSm.svg" alt="" className="" />
            </div>
            <TrustedBy />
            <Journey />
            <RightWay />
            <LetsTalk />
            <Footer />
        </>
    )
}

export default AboutUs