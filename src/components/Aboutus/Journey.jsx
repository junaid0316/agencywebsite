import React from 'react'
import AboutUsCard from '../Generic/AboutUsCard'

const Journey = () => {

    const aboutUsData = [
        {
            title: "Professional Experts",
            description: "Our team of experts is passionate about innovation and is well-versed in emerging problems, enabling you to tackle any problem efficiently.",
            imgsrc: "/images/about-1.webp"
        },
        {
            title: "Proven Results",
            description: "Relying on us means getting measurable success and growth. Our experts leave no stone unturned to ensure good returns from investment in your project.",
            imgsrc: "/images/about-2.webp"
        },
        {
            title: "High-Quality Services",
            description: "Since we offer tried-and-tested solutions you can find unparalleled services related to digital marketing and web designing under one roof.",
            imgsrc: "/images/about-3.webp"
        },
        {
            title: "Customer Support",
            description: "Our support team is ready to assist you 24/7. You can resolve your queries and get updated on your projects anytime.",
            imgsrc: "/images/about-1.webp"
        }
    ]

    return (
        <div className='about-us-main'>
            <div className="container">
                <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-6 lg:mb-28 mb-6">
                    <img src="/images/abt-1.webp" alt="" className='aspect-square rounded-xl lg:order-1 order-2' />
                    <div className='flex flex-col justify-center lg:order-2 order-1'>
                        <div className="head-pill w-fit">
                            <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                            We’ve Helped Hundreds Of Companies
                        </div>
                        <h3 className='lg:text-[56px] text-[34px] leading-[100%] font-space-grotesk font-bold text-white uppercase mt-7 lg:mb-12 mb-6'>
                            We’re only just getting started on <span className="text-orange">our journey</span>
                        </h3>
                        <div className='grid grid-cols-2 lg:gap-12 gap-6'>
                            <div>
                                <h4 className='lg:text-6xl text-3xl font-medium text-white mb-3'>
                                    400+
                                </h4>
                                <p className='text-gray-700'>
                                    Projects Delivered
                                </p>
                            </div>
                            <div>
                                <h4 className='lg:text-6xl text-3xl font-medium text-white mb-3'>
                                    100+
                                </h4>
                                <p className='text-gray-700'>
                                    Collaborations
                                </p>
                            </div>
                            <div>
                                <h4 className='lg:text-6xl text-3xl font-medium text-white mb-3'>
                                    8+
                                </h4>
                                <p className='text-gray-700'>
                                    Years of Experience
                                </p>
                            </div>
                            <div>
                                <h4 className='lg:text-6xl text-3xl font-medium text-white mb-3'>
                                    50+
                                </h4>
                                <p className='text-gray-700'>
                                    5-star reviews
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-5">
                    {
                        aboutUsData?.map((data, index) => {
                            return (
                                <AboutUsCard key={index} data={data} />
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}

export default Journey