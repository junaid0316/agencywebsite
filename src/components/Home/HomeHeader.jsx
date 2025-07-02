import React from 'react'
import { FaArrowsAlt } from 'react-icons/fa'
import { FaArrowRight, FaArrowRightLong } from 'react-icons/fa6'

const HomeHeader = () => {
    return (
        <div className='home-header'>
            <h1>
                <span className='header-dot' data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                    DESIGN
                </span>
                <span className='flex items-center' data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="600">
                    {/* Rotating Circle + Video Behind DEVELOP */}
                    <div className='flex items-center'>
                        {/* Rotating Circle */}
                        <div className="rotating-circle-btn flex items-center justify-center relative md:w-[140px] md:h-[140px] w-[40px] h-[40px]" style={{ background: '#FC5E14', }}>
                            <svg viewBox="0 0 120 120" className="absolute top-0 left-0 right-0 bottom-0 m-auto rounded-full overflow-visible p-1 md:w-[120px] md:h-[120px] w-[34px] h-[34px]">
                                <defs>
                                    <path id="circlePath" d="M60,8 a52,52 0 1,1 0,104 a52,52 0 1,1 0,-104" />
                                </defs>
                                <text fill="#fff" fontSize="14" fontFamily="'Manrope', sans-serif">
                                    <textPath xlinkHref="#circlePath" startOffset="0%">
                                        LET'S CHAT&nbsp;&nbsp;LET'S CHAT&nbsp;&nbsp;LET'S CHAT&nbsp;&nbsp;LET'S CHAT
                                    </textPath>
                                </text>
                            </svg>
                            <div className="flex items-center justify-center -rotate-45 md:w-[60px] md:h-[60px] w-[20px] h-[20px]" style={{ borderRadius: '50%', background: 'transparent', zIndex: 1 }}>
                                <FaArrowRight className="md:text-[30px] text-[12px]" />
                            </div>
                        </div>
                        {/* Video */}
                        <div className='md:w-56 md:h-32 w-20 h-10 rounded-[50%] -ml-7'>
                            <video src="/images/travelica-vid-1.mp4" autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '60px' }} />
                        </div>
                    </div>
                    {/* DEVELOP Text (on top) */}
                    <span className='header-dot' style={{ position: 'relative', zIndex: 1 }}>
                        DEVELOP
                    </span>
                </span>
                <span className='text-orange header-dot' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="900">
                    ADVERTISE
                </span>
            </h1>
            <p className='text-gray-800 max-w-[660px] sm:mt-[40px] sm:mb-[50px] mt-[24px] mb-[32px]' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1200">
                Engaging stories resonate with your audience, building loyalty. Let your brand's purpose shine through compelling narratives.
            </p>
            <div className="hdr-btm flex justify-between items-end" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1400">
                <div className="btn-group">
                    <a href="/contact" className="btn-orange" data-aos="fade-right" data-aos-duration="800" data-aos-delay="1600">
                        <span>
                            <FaArrowsAlt />
                        </span>
                        LET'S GET STARTED
                    </a>
                    <a href="" className="btn-gray" data-aos="fade-right" data-aos-duration="800" data-aos-delay="1800">
                        SCROLL TO DISCOVER
                    </a>
                </div>
                <div className="right-hdr !hidden md:!inline-block" data-aos="fade-left" data-aos-duration="800" data-aos-delay="1600">
                    <img src="/images/flower-orange.svg" alt="" className="flwr-orange" />
                    <div className="h-px w-[60px] bg-gray-900 my-[3px]"></div>
                    <p className='text-gray-900'>Transform Your Digital <br /> Impact with Wizspeed</p>
                </div>
            </div>

            <div className="clients !hidden md:!flex" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="2000">
                <div className="flex">
                    <img src='/images/headerUser.png' data-aos="zoom-in" data-aos-duration="600" data-aos-delay="2200" />
                    <img src='/images/headerUser-2.png' data-aos="zoom-in" data-aos-duration="600" data-aos-delay="2300" />
                    <img src='/images/headerUser-3.png' data-aos="zoom-in" data-aos-duration="600" data-aos-delay="2400" />
                    <img src='/images/headerUser-4.png' data-aos="zoom-in" data-aos-duration="600" data-aos-delay="2500" />
                </div>
                <span>
                    <strong>100+</strong>
                    Satisficed clients
                </span>
            </div>

            <div className="flex md:hidden mt-4 gap-3" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="2000">
                <div className="clients">
                    <div className="flex">
                        <img src='/images/headerUser.png' data-aos="zoom-in" data-aos-duration="600" data-aos-delay="2200" />
                        <img src='/images/headerUser-2.png' data-aos="zoom-in" data-aos-duration="600" data-aos-delay="2300" />
                        <img src='/images/headerUser-3.png' data-aos="zoom-in" data-aos-duration="600" data-aos-delay="2400" />
                        <img src='/images/headerUser-4.png' data-aos="zoom-in" data-aos-duration="600" data-aos-delay="2500" />
                    </div>
                    <span>
                        <strong>100+</strong>
                        Satisficed clients
                    </span>
                </div>
                <div className="right-hdr" data-aos="fade-left" data-aos-duration="800" data-aos-delay="1600">
                    <img src="/images/flower-orange.svg" alt="" className="flwr-orange" />
                    <div className="h-px w-[60px] bg-gray-900 my-[3px]"></div>
                    <p className='text-gray-900'>Transform Your Digital <br /> Impact with Wizspeed</p>
                </div>
            </div>
        </div>
    )
}

export default HomeHeader