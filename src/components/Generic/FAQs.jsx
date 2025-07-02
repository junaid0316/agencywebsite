import React, { useState } from 'react'
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const FAQs = () => {
    const [expanded, setExpanded] = useState(0) // Track which accordion is expanded

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false)
    }

    const faqData = [
        {
            id: 1,
            question: "What services do you offer for digital marketing?",
            answer: "We offer comprehensive digital marketing services including SEO, social media marketing, content marketing, PPC advertising, email marketing, and web analytics. Our team creates customized strategies to help your business grow online and reach your target audience effectively."
        },
        {
            id: 2,
            question: "How long does it take to see results from SEO?",
            answer: "SEO results typically start showing within 3-6 months, but this can vary depending on your industry, competition, and current website status. We provide regular reports and updates to track progress and ensure you're seeing continuous improvement in your search rankings."
        },
        {
            id: 3,
            question: "Do you provide website design and development services?",
            answer: "Yes, we offer full-service web design and development including responsive design, e-commerce solutions, CMS development, and website maintenance. Our team ensures your website is not only visually appealing but also optimized for performance and user experience."
        },
        {
            id: 4,
            question: "What is your pricing structure for marketing services?",
            answer: "Our pricing is customized based on your specific needs, goals, and budget. We offer flexible packages ranging from basic SEO and social media management to comprehensive digital marketing campaigns. Contact us for a free consultation and personalized quote."
        },
        {
            id: 5,
            question: "How do you measure the success of marketing campaigns?",
            answer: "We use advanced analytics tools to track key performance indicators (KPIs) such as website traffic, conversion rates, lead generation, social media engagement, and ROI. You'll receive detailed monthly reports showing the progress and success of your campaigns."
        },
        {
            id: 6,
            question: "Do you work with businesses in all industries?",
            answer: "Yes, we have experience working with businesses across various industries including healthcare, e-commerce, technology, real estate, hospitality, and professional services. Our team adapts strategies to meet the unique needs and challenges of each industry."
        }
    ]

    return (
        <div className="faqs-section">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12 gap-8 items-start">
                    <div className="lg:col-span-1" data-aos="fade-right" data-aos-duration="1000">
                        <div className="head-cont justify-start items-start text-left">
                            <div className="head-pill" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="200">
                                <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                                Faqs
                            </div>
                            <h2 className="head-h2" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                                FREQUENTLY<br />
                                ASKED<br />
                                <span className="text-orange gradient-text">QUESTIONS</span>
                            </h2>
                            <p className="text-gray-400 text-left max-w-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                                If you're new to Scalar or looking to optimize team workflows,
                                these answers will help you get the most out of our platform.
                            </p>
                        </div>

                        <div className="mt-8" data-aos="scale-up" data-aos-duration="1000" data-aos-delay="800">
                            <img
                                src="/images/faqs.jpg"
                                alt="Team collaboration"
                                className="rounded-xl aspect-video smooth-hover"
                            />
                        </div>
                    </div>

                    <div className="space-y-4 lg:col-span-2" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
                        {faqData.map((faq, index) => (
                            <div
                                key={faq.id}
                                data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-delay={400 + (index * 100)}
                            >
                                <Accordion
                                    expanded={expanded === index}
                                    onChange={handleChange(index)}
                                    className="smooth-hover"
                                sx={{
                                    backgroundColor: expanded === index ? '#FC5E14' : '#1B1B1B',
                                    color: 'white',
                                    border: '1px solid #333',
                                    borderRadius: '12px !important',
                                    marginBottom: '16px',
                                    '&:before': {
                                        display: 'none',
                                    },
                                    '&.Mui-expanded': {
                                        margin: '0 0 16px 0',
                                    },
                                    boxShadow: 'none',
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon sx={{ color: 'white' }} />}
                                    sx={{
                                        // backgroundColor: expanded === index ? '#FC5E14' : '##1B1B1B',
                                        borderRadius: '12px',
                                        padding: '16px 20px',
                                        transition: 'background-color 0.3s ease',
                                        margin: '0',
                                        '&.Mui-expanded': {
                                            minHeight: 'auto',
                                            borderBottomLeftRadius: '0',
                                            borderBottomRightRadius: '0',
                                        },
                                        '& .MuiAccordionSummary-content': {
                                            margin: '0px 0',
                                        },
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontWeight: '600',
                                            color: 'white',
                                            lineHeight: '1.4',
                                            margin: '0'
                                        }}
                                        className='md:text-xl text-base font-space-grotesk !m-0'
                                    >
                                        {faq.question}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails
                                    sx={{
                                        // backgroundColor: expanded === index ? '#FC5E14' : '#1B1B1B',
                                        padding: '0 24px 16px',
                                        borderBottomLeftRadius: '12px',
                                        borderBottomRightRadius: '12px',
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            // color: '#d1d5db',
                                            lineHeight: '1.6',
                                            fontSize: '18px'
                                        }}
                                    >
                                        {faq.answer}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQs