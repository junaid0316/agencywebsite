import React from 'react'
import Footer from '../Generic/Footer'

const TravelicaStudy = () => {
    return (
        <>

            <div className='travelica-study'>
                <div className="container">
                    <div className="head-cont">
                        <div className="head-pill w-fit">
                            <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                            Our Top Rated Designs
                        </div>
                        <h2 className='text-5xl font-semibold text-white'>
                            Travelica – Case Study
                        </h2>
                        <p className="text-gray-800">
                            Dive into real-world examples of how we've helped brands boost visibility, drive conversions, and scale with confidence.
                        </p>
                    </div>

                    <img src='/images/case-study-travelica.webp' className='w-full' />

                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-8">
                        <div className='lg:col-span-2'>
                            <h3 className='inner-head'>PROJECT OVERVIEW</h3>
                        </div>
                        <div className='lg:col-span-3'>
                            <p className='text-xl text-white mb-5'>
                                Travelica is a thoughtfully designed mobile app concept aimed at simplifying the way people plan their travels. In a world full of overwhelming options and scattered resources, Travelica brings everything into one place—allowing users to discover exciting destinations, craft personalized itineraries, and receive timely updates for a smooth and stress-free journey.
                            </p>
                            <p className='text-xl text-white'>
                                Whether it's a weekend getaway or a month-long adventure, Travelica helps users make smarter travel choices with confidence. The app focuses on providing a visually immersive experience paired with intuitive navigation, ensuring users feel inspired and in control from the very first tap.
                            </p>
                        </div>
                    </div>

                    <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-6 lg:my-28 my-16'>
                        <video
                            src="/images/travelica-vid-1.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-auto lg:col-span-2 travelica-vid"
                        >
                            Your browser does not support the video tag.
                        </video>
                        <img src="/images/travelica-vid-2.webp" alt="" className='travelica-img' />
                        <img src="/images/travelica-vid-3.webp" alt="" className='travelica-img' />
                    </div>

                    <div className="grid lg:grid-cols-5 grid-cols-1 gap-8 lg:mb-28 mb-16">
                        <div className='lg:col-span-2 '>
                            <h3 className='inner-head'>THE GOAL</h3>
                        </div>
                        <div className='lg:col-span-3'>
                            <p className='text-xl text-white mb-5'>
                                Travelica was designed to solve this problem by creating a clean, modern interface that's not only visually inspiring but also deeply user-centric. The aim was to give users full control over how they discover destinations, organize itineraries, and manage travel details—all within a single, intuitive platform. From the very first screen, the experience encourages exploration while reducing the friction often associated with travel planning.
                            </p>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-6">
                        <div>
                            <img src="/images/the-goal-mob.webp" alt="" />
                            <p className='text-3xl text-white'>
                                Many travel apps offer generic suggestions and lack personalization. The goal was to create a sleek, intuitive interface that feels inspiring and gives users control over how they discover and organize their trips.
                            </p>
                        </div>
                        <div className="grid grid-flow-row lg:gap-10 gap-6">
                            <img src="/images/goal-2.webp" alt="" className='travelica-img' />
                            <img src="/images/goal-3.webp" alt="" className='travelica-img' />
                        </div>
                    </div>

                    <div className='lg:py-28 py-16'>
                        <h3 className='text-center text-5xl uppercase font-semibold font-space-grotesk text-white lg:mb-28 mb-16'>
                            Ensuring trust in the TRaveling world
                        </h3>
                        <video
                            src="/images/travelica-vid-4.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-auto travelica-vid"
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default TravelicaStudy