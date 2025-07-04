import React from 'react'
import ServiceHeader from '../../components/Services/ServiceHeader'
import Navbar from '../../components/Generic/Navbar'
import Footer from '../../components/Generic/Footer'
import { Link } from 'react-router-dom'

const MobArchieves = () => {

    const Headdata = {
        pill: "Our Work",
        titleOrange: "MOBILE",
        title: "APPLICATIONS",
        description: "Feeling invisible online? A well-designed website gets you noticed and builds trust and credibility. See how we’ve transformed businesses with growth-driven website designs. "
    }

    const data = [
        {
            img: '/images/mobile-app.webp',
            title: 'Infinite REI Group',
            description: "Let's inspire the future with a Home Selling",
            link: '/digital-marketing-case-study'
        },
        {
            img: '/images/mobile-app.webp',
            title: 'Prince House',
            description: "Let' us Find Your Dream Home",
            link: '/digital-marketing-case-study'
        },
        {
            img: '/images/mobile-app.webp',
            title: '8 min away',
            description: "Delicious Food at your Door Step",
            link: '/digital-marketing-case-study'
        },
        {
            img: '/images/mobile-app.webp',
            title: 'The Art of Living',
            description: "A Home for the Soul",
            link: '/digital-marketing-case-study'
        },
        {
            img: '/images/mobile-app.webp',
            title: 'Infinite REI Group',
            description: "Let's inspire the future with a Home Selling",
            link: '/digital-marketing-case-study'
        },
        {
            img: '/images/mobile-app.webp',
            title: '8 min away',
            description: "Delicious Food at your Door Step",
            link: '/digital-marketing-case-study'
        },
        {
            img: '/images/mobile-app.webp',
            title: 'The Art of Living',
            description: "A Home for the Soul",
            link: '/digital-marketing-case-study'
        },
        {
            img: '/images/mobile-app.webp',
            title: 'Infinite REI Group',
            description: "Let's inspire the future with a Home Selling",
            link: '/digital-marketing-case-study'
        },
        {
            img: '/images/mobile-app.webp',
            title: '8 min away',
            description: "Delicious Food at your Door Step",
            link: '/digital-marketing-case-study'
        },
    ]

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

            <div className='mob-archieve-section pb-32'>
                <div className="container">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-16 md:gap-12 gap-8">
                        {
                            data?.map((item, index) => {
                                return (
                                    <Link to="/mob-archieves/travelica" className='mobile-app-card-sub'>
                                        <img src={item.img} alt={item.title} className='w-full h-full object-cover' />
                                        <div className='mobile-app-card-content text-center'>
                                            <h3 className='text-brand-orange font-space-grotesk text-lg lg:mt-7 lg:mb-5 mt-5 mb-3 leading-[100%]'>{item.title}</h3>
                                            <h4 className='font-space-grotesk lg:text-3xl text-2xl text-white'>{item.description}</h4>
                                            {/* <a href={item.link} className='btn-white'>
                            View Case Study
                        </a> */}
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default MobArchieves