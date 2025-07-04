import React from 'react'
import Slider from 'react-slick'
import ProjectCard from './ProjectCard'
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
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

    const sliderSettings = {
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        arrows: false,
        dots: false,
        autoplay: true,
        autoplaySpeed: 4000
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

                    <div className="projects-slider w-[2490px]">
                        <Slider {...sliderSettings}>
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