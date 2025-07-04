import React from 'react'
import Navbar from '../../components/Generic/Navbar'
import ServiceHeader from '../../components/Services/ServiceHeader'
import Footer from '../../components/Generic/Footer'

const DigitalMarketingPage = () => {

    const Headdata = {
        pill: "Our Work",
        titleOrange: "DIGITAL",
        title: "MARKETING",
        description: "Feeling invisible online? A well-designed website gets you noticed and builds trust and credibility. See how we’ve transformed businesses with growth-driven website designs. "
    }

    const data = [
        {
            img: '/images/casestudy-1.webp',
            title: 'Infinite REI Group',
            description: "Let's inspire the future with a Home Selling",
            link: '/digital-marketing-case-study'
        },
        {
            img: '/images/casestudy-1.webp',
            title: 'Prince House',
            description: "Let' us Find Your Dream Home",
            link: '/digital-marketing-case-study'
        },
        {
            img: '/images/casestudy-1.webp',
            title: '8 min away',
            description: "Delicious Food at your Door Step",
            link: '/digital-marketing-case-study'
        },
        {
            img: '/images/casestudy-1.webp',
            title: 'The Art of Living',
            description: "A Home for the Soul",
            link: '/digital-marketing-case-study'
        },
        {
            img: '/images/casestudy-1.webp',
            title: 'Infinite REI Group',
            description: "Let's inspire the future with a Home Selling",
            link: '/digital-marketing-case-study'
        },
        {
            img: '/images/casestudy-1.webp',
            title: '8 min away',
            description: "Delicious Food at your Door Step",
            link: '/digital-marketing-case-study'
        },
        {
            img: '/images/casestudy-1.webp',
            title: 'The Art of Living',
            description: "A Home for the Soul",
            link: '/digital-marketing-case-study'
        },
        {
            img: '/images/casestudy-1.webp',
            title: 'Infinite REI Group',
            description: "Let's inspire the future with a Home Selling",
            link: '/digital-marketing-case-study'
        },
        {
            img: '/images/casestudy-1.webp',
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

            <div className="soft-dev-section">
                <div className="container">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-16 gap-10">
                        {data.map((item, index) => (
                            <div key={index} className='px-5'>
                                <div className='case-study-card'>
                                    <img src={item.img} alt={item.title} className='w-full h-full object-cover' />
                                    <div className='case-study-card-content'>
                                        <h3 className='text-brand-orange font-space-grotesk text-lg lg:mt-7 lg:mb-5 mt-5 mb-3 leading-[100%]'>{item.title}</h3>
                                        <h4 className='font-space-grotesk lg:text-3xl text-2xl text-white'>{item.description}</h4>
                                        {/* <a href={item.link} className='btn-white'>
                                    View Case Study
                                </a> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export { DigitalMarketingPage }