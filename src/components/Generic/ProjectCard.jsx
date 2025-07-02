import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card smooth-hover magnetic-effect">
            <h3 data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">{project.category}</h3>
            <div className="project-details" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                <div>
                    <h4 className="gradient-text">{project.title}</h4>
                    {
                        project?.description &&
                        <p data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">{project.description}</p>
                    }
                </div>
                <span className='arrow-project pulse-animation' data-aos="zoom-in" data-aos-duration="600" data-aos-delay="400">
                    <BsArrowRight />
                </span>
            </div>
            <div className="project-image" data-aos="scale-up" data-aos-duration="800" data-aos-delay="300">
                <img src={project.image} alt={project.title} className='rounded-lg md:h-[260px] h-full w-full' />
            </div>
        </div>
    )
}

export default ProjectCard