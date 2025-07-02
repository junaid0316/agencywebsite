import React from 'react'

const RecentWork = ({ serviceType = "general" }) => {

    const getServiceData = (type) => {
        switch(type) {
            case 'web-development':
                return {
                    title: 'Web Development Projects',
                    description: 'Stunning websites that combine beautiful design with powerful functionality.',
                    projects: [
                        { img: '/images/showcase-1.jpg', tag: 'E-COMMERCE', title: 'Modern Online Store with Advanced Features' },
                        { img: '/images/showcase-1.jpg', tag: 'CORPORATE', title: 'Professional Business Website' },
                        { img: '/images/showcase-1.jpg', tag: 'PORTFOLIO', title: 'Creative Portfolio Website' },
                        { img: '/images/showcase-1.jpg', tag: 'LANDING PAGE', title: 'High-Converting Landing Page' },
                    ]
                };
            case 'digital-marketing':
                return {
                    title: 'Digital Marketing Campaigns',
                    description: 'Successful marketing campaigns that drive real results and ROI.',
                    projects: [
                        { img: '/images/showcase-1.jpg', tag: 'SEO CAMPAIGN', title: 'Organic Traffic Growth by 300%' },
                        { img: '/images/showcase-1.jpg', tag: 'SOCIAL MEDIA', title: 'Viral Social Media Campaign' },
                        { img: '/images/showcase-1.jpg', tag: 'PPC ADVERTISING', title: 'High-Converting Ad Campaign' },
                        { img: '/images/showcase-1.jpg', tag: 'CONTENT MARKETING', title: 'Brand Awareness Campaign' },
                    ]
                };
            case 'app-development':
                return {
                    title: 'Mobile App Development',
                    description: 'Innovative mobile applications with exceptional user experiences.',
                    projects: [
                        { img: '/images/showcase-1.jpg', tag: 'iOS APP', title: 'Native iOS Application' },
                        { img: '/images/showcase-1.jpg', tag: 'ANDROID APP', title: 'Android Mobile App' },
                        { img: '/images/showcase-1.jpg', tag: 'CROSS-PLATFORM', title: 'React Native App' },
                        { img: '/images/showcase-1.jpg', tag: 'MOBILE GAME', title: 'Interactive Mobile Game' },
                    ]
                };
            case 'software-development':
                return {
                    title: 'Software Development Solutions',
                    description: 'Custom software solutions that solve complex business challenges.',
                    projects: [
                        { img: '/images/showcase-1.jpg', tag: 'ENTERPRISE', title: 'Enterprise Management System' },
                        { img: '/images/showcase-1.jpg', tag: 'SaaS PLATFORM', title: 'Cloud-Based SaaS Solution' },
                        { img: '/images/showcase-1.jpg', tag: 'API DEVELOPMENT', title: 'RESTful API Integration' },
                        { img: '/images/showcase-1.jpg', tag: 'AUTOMATION', title: 'Business Process Automation' },
                    ]
                };
            default:
                return {
                    title: 'Recent Work',
                    description: 'From bold website redesigns to high-converting ad campaigns, discover how we turn ideas into measurable outcomes.',
                    projects: [
                        { img: '/images/showcase-1.jpg', tag: 'SPOTLIMO', title: 'Luxurious Limousine and Black Car Service Everyone Can Afford' },
                        { img: '/images/showcase-1.jpg', tag: 'SPOTLIMO', title: 'Luxurious Limousine and Black Car Service Everyone Can Afford' },
                        { img: '/images/showcase-1.jpg', tag: 'SPOTLIMO', title: 'Luxurious Limousine and Black Car Service Everyone Can Afford' },
                        { img: '/images/showcase-1.jpg', tag: 'SPOTLIMO', title: 'Luxurious Limousine and Black Car Service Everyone Can Afford' },
                    ]
                };
        }
    };

    const serviceData = getServiceData(serviceType);
    const recentWork = [
        {
            img: '/images/showcase-1.jpg',
            tag: 'SPOTLIMO',
            title: 'Luxurious Limousine and Black Car Service Everyone Can Afford'
        },
        {
            img: '/images/showcase-1.jpg',
            tag: 'SPOTLIMO',
            title: 'Luxurious Limousine and Black Car Service Everyone Can Afford'
        },
        {
            img: '/images/showcase-1.jpg',
            tag: 'SPOTLIMO',
            title: 'Luxurious Limousine and Black Car Service Everyone Can Afford'
        },
        {
            img: '/images/showcase-1.jpg',
            tag: 'SPOTLIMO',
            title: 'Luxurious Limousine and Black Car Service Everyone Can Afford'
        },
        {
            img: '/images/showcase-1.jpg',
            tag: 'SPOTLIMO',
            title: 'Luxurious Limousine and Black Car Service Everyone Can Afford'
        },
        {
            img: '/images/showcase-1.jpg',
            tag: 'SPOTLIMO',
            title: 'Luxurious Limousine and Black Car Service Everyone Can Afford'
        },
        {
            img: '/images/showcase-1.jpg',
            tag: 'SPOTLIMO',
            title: 'Luxurious Limousine and Black Car Service Everyone Can Afford'
        },
        {
            img: '/images/showcase-1.jpg',
            tag: 'SPOTLIMO',
            title: 'Luxurious Limousine and Black Car Service Everyone Can Afford'
        },
        {
            img: '/images/showcase-1.jpg',
            tag: 'SPOTLIMO',
            title: 'Luxurious Limousine and Black Car Service Everyone Can Afford'
        },
        {
            img: '/images/showcase-1.jpg',
            tag: 'SPOTLIMO',
            title: 'Luxurious Limousine and Black Car Service Everyone Can Afford'
        },
        {
            img: '/images/showcase-1.jpg',
            tag: 'SPOTLIMO',
            title: 'Luxurious Limousine and Black Car Service Everyone Can Afford'
        },
        {
            img: '/images/showcase-1.jpg',
            tag: 'SPOTLIMO',
            title: 'Luxurious Limousine and Black Car Service Everyone Can Afford'
        }
    ]

    return (
        <div className='recent-work-section'>
            <div className="container">
                <div className="head-cont max-w-[890px]">
                    <div className="head-pill">
                        <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                        {serviceType !== "general" ? serviceData.title : "Recent Work"}
                    </div>
                    <h2 className="head-h2">
                        Transformations That <span className="text-orange">Speak for Themselves</span>
                    </h2>
                    <p className="text-gray-900 text-center max-w-[710px] mx-auto">
                        {serviceData.description}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-5 lg:mt-16 mt-10">
                    {
                        (serviceType !== "general" ? serviceData.projects : recentWork)?.map((work, index) => {
                            return (
                                <div className='recent-work-card' key={index}>
                                    <img src={work?.img} alt="" />
                                    <div className="recent-content">
                                        <span>
                                            <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                                            {work?.tag}
                                        </span>
                                        <h4>
                                            {
                                                work?.title
                                            }
                                        </h4>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default RecentWork