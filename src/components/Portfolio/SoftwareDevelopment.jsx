import React from 'react'
import Slider from 'react-slick'

const SoftwareDevelopment = () => {
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
            img: '/images/laptop.png',
            title: 'Infinite REI Group',
            description: "Let's inspire the future with a Home Selling",
            link: '/digital-marketing-case-study'
        },
        {
            img: '/images/laptop.png',
            title: 'Prince House',
            description: "Let' us Find Your Dream Home",
            link: '/digital-marketing-case-study'
        },
        {
            img: '/images/laptop.png',
            title: '8 min away',
            description: "Delicious Food at your Door Step",
            link: '/digital-marketing-case-study'
        },
        {
            img: '/images/laptop.png',
            title: 'The Art of Living',
            description: "A Home for the Soul",
            link: '/digital-marketing-case-study'
        },
        {
            img: '/images/laptop.png',
            title: 'Infinite REI Group',
            description: "Let's inspire the future with a Home Selling",
            link: '/digital-marketing-case-study'
        },
        {
            img: '/images/laptop.png',
            title: '8 min away',
            description: "Delicious Food at your Door Step",
            link: '/digital-marketing-case-study'
        },
    ]
    return (
        <div className='software-development-section overflow-hidden'>
            <div className="container">
                <div className="head-cont max-w-[890px]">
                    <div className="head-pill">
                        <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                        Software Development
                    </div>
                    <h2 className="head-h2">
                        End-to-End Software Development Excellence marketing <span className="text-orange">case studies</span>
                    </h2>
                    <p className="text-gray-900 text-center max-w-[710px] mx-auto">
                        From architecture to deployment, we turn complex problems into powerful digital tools. Reliable code. Seamless integration. Real-world results.
                    </p>
                </div>
                <div className="software-development-slider lg:my-16 my-10 w-[2490px]">
                    <Slider {...settings}>
                        {data.map((item, index) => (
                            <div key={index} className='px-5'>
                                <div className='software-development-card'>
                                    <img src={item.img} alt={item.title} className='w-full h-full object-cover' />
                                    <div className='software-development-card-content'>
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

                <a href="/portfolio/software-development" className="btn-white w-fit mx-auto px-5">
                    View More Software Projects
                </a>
            </div>
        </div>
    )
}

export default SoftwareDevelopment