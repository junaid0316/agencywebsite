import React, { useRef, useState } from 'react'
import Slider from 'react-slick'
import { FaStar, FaPlay, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'

const Testomonials = () => {
    const mainSliderRef = useRef(null)
    const avatarSliderRef = useRef(null)
    const [currentSlide, setCurrentSlide] = useState(0)

    // Sample testimonials data
    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            role: "UI UX Designer",
            rating: 5,
            text: "I have been extremely happy with the results of working with the creative agency and I would highly recommend them to anyone who is looking for high-quality design and development services.",
            avatar: "/images/john-doe.webp",
            hasVideo: true,
            videoThumbnail: "/images/travelica-vid-1.mp4"
        },
        {
            id: 2,
            name: "Nick",
            role: "Architect",
            rating: 5,
            text: "Outstanding work! The team delivered exactly what we needed and exceeded our expectations in every way.",
            avatar: "/images/nick.webp",
            hasVideo: false,
            videoThumbnail: "/images/travelica-vid-1.mp4"
        },
        {
            id: 3,
            name: "Nina",
            role: "Designer",
            rating: 5,
            text: "Professional, creative, and reliable. They transformed our vision into reality with exceptional attention to detail.",
            avatar: "/images/nina.webp",
            hasVideo: true,
            videoThumbnail: "/images/travelica-vid-1.mp4"
        },
        {
            id: 4,
            name: "Tom",
            role: "Engineer",
            rating: 5,
            text: "Excellent communication and top-notch technical skills. The project was completed on time and within budget.",
            avatar: "/images/tom.webp",
            hasVideo: false,
            videoThumbnail: "/images/travelica-vid-1.mp4"
        }
    ]

    const mainSliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        beforeChange: (current, next) => setCurrentSlide(next)
    }

    const avatarSliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    variableWidth: true,
                }
            }
        ]
    }

    const nextSlide = () => {
        mainSliderRef.current?.slickNext()
    }

    const prevSlide = () => {
        mainSliderRef.current?.slickPrev()
    }

    const goToSlide = (slideIndex) => {
        mainSliderRef.current?.slickGoTo(slideIndex)
        avatarSliderRef.current?.slickGoTo(slideIndex)
        setCurrentSlide(slideIndex)
    }

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <FaStar
                key={index}
                className={`${index < rating ? 'text-orange-500' : 'text-white'} text-sm`}
            />
        ))
    }

    return (
        <div className="testimonials">
            <div className="container">
                <div className="head-cont">
                    <div className="head-pill">
                        <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                        Testimonials
                    </div>
                    <h2 className="head-h2">
                        WHAT OUR <span className="text-orange">CLIENTS SAYS</span>?
                    </h2>
                </div>
                <div className="relative md:mt-12 mt-5">
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute md:-left-10 left-2  -translate-y-1/2 z-10 testimonial-arrow"
                    >
                        <FaArrowLeftLong />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute md:-right-10 right-2 -translate-y-1/2 z-10 testimonial-arrow"
                    >
                        <FaArrowRightLong />
                    </button>

                    {/* Main Testimonials Slider */}
                    <Slider ref={mainSliderRef} {...mainSliderSettings}>
                        {testimonials.map((testimonial) => (
                            <div key={testimonial.id} className="md:px-8">
                                <div className="grid lg:grid-cols-2 grid-cols-1 gap-7">
                                    {/* Text Testimonial */}
                                    <div className="testimonial-text">
                                        <div className="mb-6">
                                            <h3 className="text-2xl font-bold text-white mb-2">{testimonial.name}</h3>
                                            <p className="text-gray-700 mb-4">{testimonial.role}</p>
                                            <div className="flex gap-1 mb-6">
                                                {renderStars(testimonial.rating)}
                                            </div>
                                        </div>

                                        <img src="/images/Quotes.svg" alt="" className="quote-svg" />

                                        <p className="text-gray-700 text-lg leading-relaxed mt-2">
                                            {testimonial.text}
                                        </p>
                                    </div>

                                    {/* Video Testimonial */}
                                    <div className="relative max-h-[355px]">
                                        <video src={testimonial?.videoThumbnail} autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover' }} className='rounded-2xl' />
                                        {/* <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-orange-500 to-orange-600">
                                        <img
                                            src={testimonial.videoThumbnail}
                                            alt={`${testimonial.name} video testimonial`}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <button className="bg-brand-dark rounded-full p-6 hover:bg-opacity-30 transition-all duration-300 group hover:bg-brand-orange">
                                                <FaPlay className="text-white text-xl group-hover:scale-110 transition-transform duration-300" />
                                            </button>
                                        </div>

                                        <span className="absolute bottom-6 left-0 right-0 mx-auto text-xl font-semibold w-fit text-white">
                                            {testimonial.name}
                                        </span>
                                    </div> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>

                    {/* Avatar Navigation */}
                    <div className="md:mt-7 mt-14 md:px-5">
                        <Slider ref={avatarSliderRef} {...avatarSliderSettings}>
                            {testimonials.map((testimonial, index) => (
                                <div key={testimonial.id} className="px-3 w-[220px]">
                                    <div
                                        className={`testimonial-avatar ${currentSlide === index ? 'active' : ''}`}
                                        onClick={() => goToSlide(index)}
                                    >
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.name}
                                            className="size-14 rounded-full object-cover"
                                        />
                                        <div className="">
                                            <p className="text-white text-lg font-semibold">{testimonial.name}</p>
                                            <p className="text-gray-700">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testomonials