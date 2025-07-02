import React from 'react'
import Slider from 'react-slick'

const CaseStudies = () => {

    const settings = {
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000
    }

    const data = [
        {
            img: '/images/casestudy-1.jpg',
            title: 'Infinite REI Group',
            description: "Let's inspire the future with a Home Selling",
            link: '/digital-marketing-case-study'
        },
        {
            img: '/images/casestudy-1.jpg',
            title: 'Prince House',
            description: "Let' us Find Your Dream Home",
            link: '/digital-marketing-case-study'
        },
        {
            img: '/images/casestudy-1.jpg',
            title: '8 min away',
            description: "Delicious Food at your Door Step",
            link: '/digital-marketing-case-study'
        },
        {
            img: '/images/casestudy-1.jpg',
            title: 'The Art of Living',
            description: "A Home for the Soul",
            link: '/digital-marketing-case-study'
        },
        {
            img: '/images/casestudy-1.jpg',
            title: 'Infinite REI Group',
            description: "Let's inspire the future with a Home Selling",
            link: '/digital-marketing-case-study'
        },
        {
            img: '/images/casestudy-1.jpg',
            title: '8 min away',
            description: "Delicious Food at your Door Step",
            link: '/digital-marketing-case-study'
        },
    ]

    return (
        <div className='case-studies-section overflow-hidden'>
            <div className="container">
                <div className="head-cont">
                    <div className="head-pill">
                        <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                        Our Top Rated Designs
                    </div>
                    <h2 className="head-h2">
                        digital marketing <span className="text-orange">case studies</span>
                    </h2>
                    <p className="text-gray-900 text-center">
                        Dive into real-world examples of how we’ve helped brands boost visibility, drive conversions, and scale with confidence.
                    </p>
                </div>

                <div className="case-slider lg:my-16 my-10 w-[2490px]">
                    <Slider {...settings}>
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
                    </Slider>
                </div>
            </div>

            <a href="/portfolio/web-development" className="btn-white w-fit mx-auto px-5">
                View More Web Projects
            </a>
        </div>
    )
}

export default CaseStudies