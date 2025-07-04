import React from 'react'
import Navbar from '../../components/Generic/Navbar'
import ServiceHeader from '../../components/Services/ServiceHeader'
import TravelicaStudy from '../../components/MobArchieves/TravelicaStudy'

const Travelica = () => {

    const Headdata = {
        pill: "Our Work",
        titleOrange: "TRAVELICA",
        title: "MOBILE APP",
        description: "Explore new destinations with ease. Travelica helps users build custom itineraries, discover hidden gems, and get real-time travel updates—making every journey smooth, safe, and unforgettable."
    }

    return (
        <div className='travelica-page'>
            <div className="service-page">
                <Navbar />
                <div className="container lg:mt-16 md:mt-12 mt-8">
                    <ServiceHeader data={Headdata} />
                </div>
                <img src="/images/headerCurveLeft.svg" alt="" className="" />
                <img src="/images/headerRectangleMd.svg" alt="" className="" />
                <img src="/images/headerRectangleSm.svg" alt="" className="" />
            </div>

            <TravelicaStudy />
        </div>
    )
}

export default Travelica