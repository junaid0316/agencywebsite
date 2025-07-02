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
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
            hasVideo: true,
            videoThumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop"
        },
        {
            id: 2,
            name: "Nick",
            role: "Architect",
            rating: 5,
            text: "Outstanding work! The team delivered exactly what we needed and exceeded our expectations in every way.",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
            hasVideo: false,
            videoThumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop"
        },
        {
            id: 3,
            name: "Nina",
            role: "Designer",
            rating: 5,
            text: "Professional, creative, and reliable. They transformed our vision into reality with exceptional attention to detail.",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
            hasVideo: true,
            videoThumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop"
        },
        {
            id: 4,
            name: "Tom",
            role: "Engineer",
            rating: 5,
            text: "Excellent communication and top-notch technical skills. The project was completed on time and within budget.",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
            hasVideo: false,
            videoThumbnail: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=300&fit=crop"
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
                <div className="head-cont" data-aos="fade-up" data-aos-duration="1000">
                    <div className="head-pill" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="200">
                        <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                        Testimonials
                    </div>
                    <h2 className="head-h2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                        WHAT OUR <span className="text-orange">CLIENTS SAYS</span>?
                    </h2>
                </div>
                <div className="relative md:mt-12 mt-5" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute md:-left-10 left-2  -translate-y-1/2 z-10 testimonial-arrow smooth-hover pulse-animation"
                        data-aos="fade-right"
                        data-aos-duration="800"
                        data-aos-delay="800"
                    >
                        <FaArrowLeftLong />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute md:-right-10 right-2 -translate-y-1/2 z-10 testimonial-arrow smooth-hover pulse-animation"
                        data-aos="fade-left"
                        data-aos-duration="800"
                        data-aos-delay="800"
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
                                    <div className="relative">
                                        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-orange-500 to-orange-600">
                                            <img
                                                src={testimonial.videoThumbnail}
                                                alt={`${testimonial.name} video testimonial`}
                                                className="w-full h-full object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-30"></div>

                                            {/* Play Button */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <button className="bg-brand-dark rounded-full p-6 hover:bg-opacity-30 transition-all duration-300 group hover:bg-brand-orange">
                                                    <FaPlay className="text-white text-xl group-hover:scale-110 transition-transform duration-300" />
                                                </button>
                                            </div>

                                            <span className="absolute bottom-6 left-0 right-0 mx-auto text-xl font-semibold w-fit text-white">
                                                {testimonial.name}
                                            </span>
                                        </div>
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
                                            className="size-14 rounded-full"
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