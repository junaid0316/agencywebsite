import React from 'react'
import Marquee from 'react-fast-marquee'

const Logos = () => {
    const logos = [
        {
            img: '/images/logos-1.png',
            title: 'Logo 1',
        },
        {
            img: '/images/logos-2.png',
            title: 'Logo 2',
        },
        {
            img: '/images/logos-3.png',
            title: 'Logo 3',
        },
        {
            img: '/images/logos-4.png',
            title: 'Logo 4',
        },
        {
            img: '/images/logos-5.png',
            title: 'Logo 5',
        },

    ]
    return (
        <div className='logos-section'>
            <div className="container">
                <div className="head-cont">
                    <div className="head-pill">
                        <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                        Let Professionals Design Your Logo
                    </div>
                    <h2 className="head-h2">
                        Stand Out with a <span className="text-orange">Unique Logo</span>
                    </h2>
                    <p className="text-gray-900 text-center">
                        As you’re giving your website a fresh look, have you considered if your logo is still the right fit? A strong logo can make a lasting impression and help you connect with your target audience.
                    </p>
                </div>
            </div>
            <div className="sm:mt-[50px] mt-[32px]">
                <Marquee speed={20} gradient={false} pauseOnHover={true} autoFill={true}>
                    {logos.map((src, index) => (
                        <div key={index} className='logos-img'>
                            <img
                                src={src?.img}
                                alt={src?.title}
                                className=""
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
            <div className="">
                <Marquee speed={20} gradient={false} pauseOnHover={true} autoFill={true} direction='right'>
                    {logos.map((src, index) => (
                        <div key={index} className='logos-img'>
                            <img
                                src={src?.img}
                                alt={src?.title}
                                className=""
                            />
                        </div>
                    ))}
                </Marquee>
            </div>
            <div className="flex justify-center mt-12">
                <a
                    href="/portfolio/digital-marketing"
                    className="btn-white w-fit mx-auto px-5"
                >
                    View More Marketing Projects
                </a>
            </div>
        </div>
    )
}

export default Logos