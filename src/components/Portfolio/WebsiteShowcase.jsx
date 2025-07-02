import React from 'react'

const WebsiteShowcase = () => {
    const showcaseData = [
        {
            id: 1,
            title: "SEO Campaign Success",
            category: "SEARCH ENGINE OPTIMIZATION",
            description: "Increased organic traffic by 300% through strategic SEO optimization and content marketing.",
            image: "/images/showcase-1.jpg",
            tags: ["SEO", "Content", "Analytics"],
            link: "#"
        },
        {
            id: 2,
            title: "Social Media Growth",
            category: "SOCIAL MEDIA MARKETING",
            description: "Built engaged community of 50K+ followers with targeted social media campaigns.",
            image: "/images/web-design-2.jpg",
            tags: ["Social Media", "Engagement", "Growth"],
            link: "#"
        },
        {
            id: 3,
            title: "PPC Campaign ROI",
            category: "PAY-PER-CLICK ADVERTISING",
            description: "Achieved 400% ROI through optimized Google Ads and Facebook advertising campaigns.",
            image: "/images/web-design-3.jpg",
            tags: ["PPC", "Google Ads", "ROI"],
            link: "#"
        },
        {
            id: 4,
            title: "Email Marketing Success",
            category: "EMAIL CAMPAIGNS",
            description: "Generated $2M+ revenue through strategic email marketing and automation sequences.",
            image: "/images/web-design-4.jpg",
            tags: ["Email", "Automation", "Revenue"],
            link: "#"
        },
        {
            id: 5,
            title: "Brand Identity Design",
            category: "BRAND DEVELOPMENT",
            description: "Complete brand transformation that increased brand recognition by 250%.",
            image: "/images/web-design-5.jpg",
            tags: ["Branding", "Identity", "Recognition"],
            link: "#"
        },
        {
            id: 6,
            title: "Content Strategy",
            category: "CONTENT MARKETING",
            description: "Content strategy that drove 500% increase in qualified leads and conversions.",
            image: "/images/web-design-6.jpg",
            tags: ["Content", "Strategy", "Leads"],
            link: "#"
        }
    ]

    return (
        <div className="website-showcase bg-brand-dark py-16">
            <div className="container">
                <div className="head-cont max-w-[890px]">
                    <div className="head-pill" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="200">
                        <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                        Digital Marketing
                    </div>
                    <h2 className="head-h2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                        Digital Marketing <span className="text-orange">Portfolio</span>
                    </h2>
                    <p className="text-gray-400 text-center max-w-[710px] mx-auto" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                        Discover our successful digital marketing campaigns and strategies that have driven measurable results and business growth for our clients.
                    </p>
                </div>

                <div className="showcase-grid grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:mt-16 mt-10">
                    {showcaseData.map((item, index) => (
                        <div 
                            key={item.id} 
                            className="showcase-item group"
                            data-aos="fade-up"
                            data-aos-duration="800"
                            data-aos-delay={800 + (index * 100)}
                        >
                            <div className="showcase-image-container relative overflow-hidden rounded-lg mb-6">
                                <img 
                                    src={item.image} 
                                    alt={item.title}
                                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="showcase-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {item.tags.map((tag, tagIndex) => (
                                                <span 
                                                    key={tagIndex}
                                                    className="px-2 py-1 bg-orange-500 text-white text-xs rounded-full"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <a 
                                            href={item.link}
                                            className="inline-flex items-center gap-2 text-white hover:text-orange-500 transition-colors duration-300"
                                        >
                                            <span>View Project</span>
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M8.5 3L13.5 8L8.5 13M13 8H2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="showcase-content">
                                <div className="showcase-category text-orange-500 text-sm font-semibold mb-2 uppercase tracking-wide">
                                    {item.category}
                                </div>
                                <h3 className="showcase-title text-white text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="showcase-description text-gray-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1200">
                    <a
                        href="/portfolio/digital-marketing"
                        className="btn-orange inline-flex items-center gap-2 smooth-hover pulse-animation"
                    >
                        <span>View All Marketing Projects</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.5 3L13.5 8L8.5 13M13 8H2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default WebsiteShowcase
