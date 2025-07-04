import React from 'react'
import AboutUsCard from './AboutUsCard'
import { useState } from 'react'

const AboutUs = () => {

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
            imgsrc: "/images/about-4.webp"
        }
    ]

    return (
        <div className='about-us'>
            <div className="container">
                <div className="head-cont">
                    <div className="head-pill">
                        <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                        About Us
                    </div>
                    <h2 className="head-h2">
                        INSIDE <span className="text-orange">WIZSPEED</span>
                    </h2>
                    <p className="text-gray-900 text-center">
                        Engaging stories resonate with your audience, building loyalty. Let your brand's purpose shine through compelling narratives.
                    </p>
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

                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-5'>
                    <div className='abt-insights'>
                        <h4>500+</h4>
                        <span className="abt-happy">
                            Projects Delivered
                        </span>
                    </div>
                    <div className='abt-insights'>
                        <h4>8+</h4>
                        <span className="abt-happy">
                            Years Of Experience
                        </span>
                    </div>
                    <div className='abt-insights'>
                        <h4>100+</h4>
                        <span className="abt-happy">
                            Collaboration
                        </span>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default AboutUs