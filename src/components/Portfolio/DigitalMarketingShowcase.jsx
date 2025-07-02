import React from 'react'

const DigitalMarketingShowcase = () => {
    const websiteData = [
        {
            id: 1,
            title: "E-Commerce Success",
            category: "E-COMMERCE",
            description: "Increased online sales by 400% through strategic digital marketing campaigns and website optimization.",
            image: "/images/showcase-1.jpg",
            metrics: {
                increase: "400%",
                metric: "Sales Increase"
            }
        },
        {
            id: 2,
            title: "Brand Transformation",
            category: "BRANDING",
            description: "Complete brand overhaul that resulted in 250% increase in brand recognition and customer engagement.",
            image: "/images/web-design-2.jpg",
            metrics: {
                increase: "250%",
                metric: "Brand Recognition"
            }
        },
        {
            id: 3,
            title: "Lead Generation",
            category: "LEAD GENERATION",
            description: "Generated 500+ qualified leads per month through targeted PPC and content marketing strategies.",
            image: "/images/web-design-3.jpg",
            metrics: {
                increase: "500+",
                metric: "Monthly Leads"
            }
        },
        {
            id: 4,
            title: "SEO Domination",
            category: "SEO OPTIMIZATION",
            description: "Achieved #1 rankings for 50+ keywords, resulting in 300% organic traffic growth.",
            image: "/images/web-design-4.jpg",
            metrics: {
                increase: "300%",
                metric: "Traffic Growth"
            }
        },
        {
            id: 5,
            title: "Social Media Growth",
            category: "SOCIAL MEDIA",
            description: "Built engaged community of 100K+ followers with 25% average engagement rate.",
            image: "/images/web-design-5.jpg",
            metrics: {
                increase: "100K+",
                metric: "Followers"
            }
        },
        {
            id: 6,
            title: "Conversion Optimization",
            category: "CRO",
            description: "Optimized conversion funnels resulting in 180% increase in conversion rates.",
            image: "/images/web-design-6.jpg",
            metrics: {
                increase: "180%",
                metric: "Conversion Rate"
            }
        }
    ]

    return (
        <div className="digital-marketing-showcase bg-brand-dark py-20">
            <div className="container">
                <div className="head-cont max-w-[890px]">
                    <div className="head-pill" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="200">
                        <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                        Website Showcase
                    </div>
                    <h2 className="head-h2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                        Digital Marketing <span className="text-orange">Success Stories</span>
                    </h2>
                    <p className="text-gray-400 text-center max-w-[710px] mx-auto" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                        Discover how our digital marketing strategies have transformed businesses and delivered measurable results across various industries.
                    </p>
                </div>

                <div className="showcase-grid grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 lg:mt-16 mt-10">
                    {websiteData.map((item, index) => (
                        <div 
                            key={item.id} 
                            className="showcase-card group bg-gray-900 rounded-xl overflow-hidden hover:bg-gray-800 transition-all duration-300"
                            data-aos="fade-up"
                            data-aos-duration="800"
                            data-aos-delay={800 + (index * 100)}
                        >
                            <div className="showcase-image-container relative overflow-hidden">
                                <img 
                                    src={item.image} 
                                    alt={item.title}
                                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 bg-orange-500 text-white text-xs font-semibold rounded-full uppercase tracking-wide">
                                        {item.category}
                                    </span>
                                </div>
                                <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 px-3 py-2 rounded-lg">
                                    <div className="text-orange-500 font-bold text-lg">{item.metrics.increase}</div>
                                    <div className="text-white text-xs">{item.metrics.metric}</div>
                                </div>
                            </div>
                            
                            <div className="showcase-content p-6">
                                <h3 className="text-white text-xl font-bold mb-3 group-hover:text-orange-500 transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                                    {item.description}
                                </p>
                                <div className="flex items-center justify-between">
                                    <button className="text-orange-500 hover:text-orange-400 transition-colors duration-300 font-semibold text-sm">
                                        View Case Study →
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1200">
                    <a 
                        href="/contact" 
                        className="btn-orange inline-flex items-center gap-2 smooth-hover pulse-animation"
                    >
                        <span>Start Your Success Story</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.5 3L13.5 8L8.5 13M13 8H2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default DigitalMarketingShowcase
