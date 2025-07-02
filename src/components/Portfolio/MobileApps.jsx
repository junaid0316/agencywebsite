import React from 'react'
import Slider from 'react-slick'

const MobileApps = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1200,
        slidesToShow: 3,
        slidesToScroll: 1,
        variableWidth: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }

    const data = [
        {
            img: '/images/mobile-app.png',
            title: 'Infinite REI Group',
            description: "Let's inspire the future with a Home Selling",
            link: '/digital-marketing-case-study'
        },
        {
            img: '/images/mobile-app.png',
            title: 'Prince House',
            description: "Let' us Find Your Dream Home",
            link: '/digital-marketing-case-study'
        },
        {
            img: '/images/mobile-app.png',
            title: '8 min away',
            description: "Delicious Food at your Door Step",
            link: '/digital-marketing-case-study'
        },
        {
            img: '/images/mobile-app.png',
            title: 'The Art of Living',
            description: "A Home for the Soul",
            link: '/digital-marketing-case-study'
        },
        {
            img: '/images/mobile-app.png',
            title: 'Infinite REI Group',
            description: "Let's inspire the future with a Home Selling",
            link: '/digital-marketing-case-study'
        },
        {
            img: '/images/mobile-app.png',
            title: '8 min away',
            description: "Delicious Food at your Door Step",
            link: '/digital-marketing-case-study'
        },
    ]

    return (
        <div className='mobile-apps-section overflow-hidden'>
            <div className="container">
                <div className="head-cont max-w-[890px]">
                    <div className="head-pill">
                        <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                        Mobile App
                    </div>
                    <h2 className="head-h2">
                        Transforming Ideas into Seamless <span className="text-orange">Mobile Experiences</span>
                    </h2>
                    <p className="text-gray-900 text-center max-w-[710px] mx-auto">
                        Our mobile app process turns ideas into elegant, high-performing digital products. We focus on clean design, smooth interactions, and measurable results.
                    </p>
                </div>
                <div className="mobile-apps-grid grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:my-16 my-10">
                    {data.map((item, index) => (
                        <div key={index} className='mobile-app-card'>
                            <img src={item.img} alt={item.title} className='w-full h-full object-cover' />
                            <div className='mobile-app-card-content'>
                                <h3 className='text-brand-orange font-space-grotesk text-lg lg:mt-7 lg:mb-5 mt-5 mb-3 leading-[100%]'>{item.title}</h3>
                                <h4 className='font-space-grotesk lg:text-3xl text-2xl text-white'>{item.description}</h4>
                            </div>
                        </div>
                    ))}
                </div>
                <a
                    href="/portfolio/app-development"
                    className="btn-white w-fit mx-auto px-5"
                >
                    View More App Projects
                </a>
            </div>
        </div>
    )
}

export default MobileApps