import React from 'react'
import { FaPhone } from 'react-icons/fa6'

const LetsTalk = () => {
    return (
        <div className="bg-brand-dark lets-talk">
            <div className="container">
                <div className="max-w-[800px] mx-auto text-center" data-aos="fade-up" data-aos-duration="1000">
                    <h2 className="head-h2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
                        Ready to open your digital <span className="text-orange gradient-text">doors of success?</span>?
                    </h2>
                    <p className="text-gray-900 text-center max-w-[600px] mx-auto my-7" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                        Let’s make your website work harder than you do, attracting new customers, building trust and driving revenue.
                    </p>
                    <a href="/contact" className="btn-orange w-fit mx-auto smooth-hover pulse-animation magnetic-effect" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="600">
                        <span>
                            <FaPhone />
                        </span>
                        Let's Talk
                    </a>
                </div>
            </div>
        </div>
    )
}

export default LetsTalk