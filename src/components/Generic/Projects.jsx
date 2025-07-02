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
                    <div className="projects-header" data-aos="fade-up" data-aos-duration="1000">
                        <div>
                            <div className="projects-badge" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="200">
                                <img src="/images/flower-orange.svg" alt="" className="flwr-orange" />
                                <span>{headData?.title}</span>
                            </div>
                            <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">{headData?.heading}</h2>
                            <p className='max-w-[690px]' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">{headData?.description}</p>
                        </div>
                        <div className='flex flex-col items-end' data-aos="fade-left" data-aos-duration="1000" data-aos-delay="400">
                            {
                                showAvatars && (
                                    <div className="flex projects-avatar" data-aos="fade-left" data-aos-duration="800" data-aos-delay="600">
                                        <img src='/images/headerUser.png' data-aos="zoom-in" data-aos-duration="600" data-aos-delay="800" />
                                        <img src='/images/headerUser-2.png' data-aos="zoom-in" data-aos-duration="600" data-aos-delay="900" />
                                        <img src='/images/headerUser-3.png' data-aos="zoom-in" data-aos-duration="600" data-aos-delay="1000" />
                                        <img src='/images/headerUser-4.png' data-aos="zoom-in" data-aos-duration="600" data-aos-delay="1100" />
                                    </div>
                                )
                            }
                            <a href="/portfolio" className="view-all-btn w-fit" data-aos="fade-left" data-aos-duration="800" data-aos-delay="800">View All Projects</a>
                        </div>
                    </div>

                    <div className="projects-slider w-[2490px]" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="800">
                        <Slider {...sliderSettings}>
                            {data?.map((project, index) => (
                                <div key={project.id} className="project-slide" data-aos="fade-up" data-aos-duration="800" data-aos-delay={index * 100}>
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