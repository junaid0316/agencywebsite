import React from 'react'
import AboutUsCard from './AboutUsCard'
import { useState } from 'react'
import { useCounterAnimation } from '../../hooks/useScrollAnimation'

const AboutUs = () => {
    // Counter animations for statistics
    const [projectsRef, projectsCount] = useCounterAnimation(500, { duration: 2500 })
    const [experienceRef, experienceCount] = useCounterAnimation(8, { duration: 2000 })
    const [collaborationRef, collaborationCount] = useCounterAnimation(100, { duration: 2200 })

    const aboutUsData = [
        {
            title: "Professional Experts",
            description: "Our team of experts is passionate about innovation and is well-versed in emerging problems, enabling you to tackle any problem efficiently.",
            imgsrc: "/images/about-1.png"
        },
        {
            title: "Proven Results",
            description: "Relying on us means getting measurable success and growth. Our experts leave no stone unturned to ensure good returns from investment in your project.",
            imgsrc: "/images/about-2.png"
        },
        {
            title: "High-Quality Services",
            description: "Since we offer tried-and-tested solutions you can find unparalleled services related to digital marketing and web designing under one roof.",
            imgsrc: "/images/about-3.png"
        },
        {
            title: "Customer Support",
            description: "Our support team is ready to assist you 24/7. You can resolve your queries and get updated on your projects anytime.",
            imgsrc: "/images/about-4.png"
        }
    ]

    return (
        <div className='about-us'>
            <div className="container">
                <div className="head-cont" data-aos="fade-up" data-aos-duration="1000">
                    <div className="head-pill" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="200">
                        <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                        About Us
                    </div>
                    <h2 className="head-h2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                        INSIDE <span className="text-orange">WIZSPEED</span>
                    </h2>
                    <p className="text-gray-900 text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                        Engaging stories resonate with your audience, building loyalty. Let your brand's purpose shine through compelling narratives.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-5">
                    {
                        aboutUsData?.map((data, index) => {
                            return (
                                <div key={index} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={index * 200}>
                                    <AboutUsCard data={data} />
                                </div>
                            )
                        })
                    }
                </div>

                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mt-5'>
                    <div className='abt-insights' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" ref={projectsRef}>
                        <h4 data-aos="zoom-in" data-aos-duration="800" data-aos-delay="400">{projectsCount}+</h4>
                        <span className="abt-happy" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
                            Projects Delivered
                        </span>
                    </div>
                    <div className='abt-insights' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400" ref={experienceRef}>
                        <h4 data-aos="zoom-in" data-aos-duration="800" data-aos-delay="600">{experienceCount}+</h4>
                        <span className="abt-happy" data-aos="fade-up" data-aos-duration="800" data-aos-delay="800">
                            Years Of Experience
                        </span>
                    </div>
                    <div className='abt-insights' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600" ref={collaborationRef}>
                        <h4 data-aos="zoom-in" data-aos-duration="800" data-aos-delay="800">{collaborationCount}+</h4>
                        <span className="abt-happy" data-aos="fade-up" data-aos-duration="800" data-aos-delay="1000">
                            Collaboration
                        </span>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default AboutUs