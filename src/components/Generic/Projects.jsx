import React, { useRef } from 'react'
import Slider from 'react-slick'
import ProjectCard from './ProjectCard'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// Custom arrow components
const PrevArrow = ({ onClick }) => (
    <button className="slick-prev-custom" onClick={onClick}>
        <BsArrowLeft />
    </button>
)

const NextArrow = ({ onClick }) => (
    <button className="slick-next-custom" onClick={onClick}>
        <BsArrowRight />
    </button>
)

const Projects = ({ className, headData = {
    title: "Our Portfolio",
    heading: "WHAT WE DO BEST",
    description: "We don't sell our digital marketing and web design services in a hit-or-miss manner. Instead, we cater to your problems through our targeted services, including:"
}, data, showAvatars = false }) => {

    const sliderRef = useRef(null)

    const sliderSettings = {
        infinite: true,
        speed: 1200,
        slidesToShow: 4,
        slidesToScroll: 1,
        // variableWidth: true,
        arrows: false,
        dots: false,
        autoplay: false,
        responsive: [
            {
                breakpoint: 1400, // For tablets and smaller desktops
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    variableWidth: false
                }
            },
            {
                breakpoint: 992, // For tablets and smaller desktops
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    variableWidth: false
                }
            },
            {
                breakpoint: 576, // For mobile devices
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: false
                }
            }
        ]
    };

    const nextSlide = () => {
        sliderRef.current?.slickNext()
    }

    const prevSlide = () => {
        sliderRef.current?.slickPrev()
    }

    return (
        <section className="projects-section">
            <div className="project-inner overflow-hidden">
                <div className="container">
                    <div className="projects-header">
                        <div>
                            <div className="projects-badge">
                                <img src="/images/flower-orange.svg" alt="" className="flwr-orange" />
                                <span>{headData?.title}</span>
                            </div>
                            <h2>{headData?.heading}</h2>
                            <p className='max-w-[690px]'>{headData?.description}</p>
                        </div>
                        <div className='flex flex-col items-end'>
                            {
                                showAvatars && (
                                    <div className="flex projects-avatar">
                                        <img src='/images/headerUser.webp' />
                                        <img src='/images/headerUser-2.webp' />
                                        <img src='/images/headerUser-3.webp' />
                                        <img src='/images/headerUser-4.webp' />
                                    </div>
                                )
                            }
                            <button className="view-all-btn w-fit">View All Projects</button>
                        </div>
                    </div>

                    <div className="projects-slider relative">
                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute md:-left-12 left-2 top-[calc(50%-60px)] -translate-y-1/2 z-10 custom-slick-arrow"
                            aria-label="Previous"
                        >
                            <FaArrowLeftLong />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute md:-right-12 right-2 top-[calc(50%-60px)] -translate-y-1/2 z-10 custom-slick-arrow"
                            aria-label="Next"
                        >
                            <FaArrowRightLong />
                        </button>
                        <Slider ref={sliderRef} {...sliderSettings}>
                            {data?.map((project) => (
                                <div key={project.id} className="project-slide">
                                    <ProjectCard project={project} />
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects