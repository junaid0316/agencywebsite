import React, { useState } from 'react'
import Navbar from '../../components/Generic/Navbar'
import ServiceHeader from '../../components/Services/ServiceHeader'
import Footer from '../../components/Generic/Footer'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        
        // Simulate form submission
        setTimeout(() => {
            console.log('Form submitted:', formData)
            alert('Thank you for your message! We will get back to you soon.')
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            })
            setIsSubmitting(false)
        }, 1000)
    }

    const headerData = {
        pill: "Contact Us",
        titleOrange: "GET IN",
        title: "TOUCH",
        description: "Ready to transform your digital presence? Let's discuss your project and create something amazing together."
    }

    const contactInfo = [
        {
            icon: <FaPhone />,
            title: "Phone",
            details: ["+1 (555) 123-4567", "+1 (555) 987-6543"]
        },
        {
            icon: <FaEnvelope />,
            title: "Email",
            details: ["hello@wizspeed.com", "support@wizspeed.com"]
        },
        {
            icon: <FaMapMarkerAlt />,
            title: "Address",
            details: ["123 Business Street", "Suite 100, City, State 12345"]
        },
        {
            icon: <FaClock />,
            title: "Business Hours",
            details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"]
        }
    ]

    const socialLinks = [
        { icon: <FaFacebookF />, url: "#", name: "Facebook" },
        { icon: <FaTwitter />, url: "#", name: "Twitter" },
        { icon: <FaLinkedinIn />, url: "#", name: "LinkedIn" },
        { icon: <FaInstagram />, url: "#", name: "Instagram" }
    ]

    return (
        <>
            <div className="service-page contact-page" data-aos="fade-down">
                <Navbar />
                <div className="container lg:mt-16 md:mt-12 mt-8">
                    <ServiceHeader data={headerData} isSpanBlock={false} />
                    <img src="/images/headerCurveLeft.svg" alt="" className="" data-aos="fade-up" data-aos-delay="200" />
                    <img src="/images/headerRectangleMd.svg" alt="" className="" data-aos="fade-left" data-aos-delay="300" />
                    <img src="/images/headerRectangleSm.svg" alt="" className="" data-aos="fade-right" data-aos-delay="400" />
                </div>
            </div>

            {/* Contact Section */}
            <div className="contact-section bg-brand-dark py-16">
                <div className="container">
                    <div className="grid lg:grid-cols-2 grid-cols-1 gap-12">
                        {/* Contact Form */}
                        <div className="contact-form-container" data-aos="fade-right" data-aos-duration="1000">
                            <div className="head-pill mb-6" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="200">
                                <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                                Send us a Message
                            </div>
                            <h3 className="text-white text-3xl font-space-grotesk font-bold mb-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                                Let's Start a <span className="text-orange">Conversation</span>
                            </h3>
                            
                            <form onSubmit={handleSubmit} className="contact-form" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-4">
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            placeholder="Your Name *"
                                            required
                                            className="form-input"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            placeholder="Your Email *"
                                            required
                                            className="form-input"
                                        />
                                    </div>
                                </div>
                                
                                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-4">
                                    <div className="form-group">
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            placeholder="Your Phone"
                                            className="form-input"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleInputChange}
                                            placeholder="Subject *"
                                            required
                                            className="form-input"
                                        />
                                    </div>
                                </div>
                                
                                <div className="form-group mb-6">
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Your Message *"
                                        required
                                        rows="5"
                                        className="form-input"
                                    ></textarea>
                                </div>
                                
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn-orange w-full smooth-hover pulse-animation"
                                >
                                    <span>
                                        <FaEnvelope />
                                    </span>
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>

                        {/* Contact Information */}
                        <div className="contact-info-container" data-aos="fade-left" data-aos-duration="1000">
                            <div className="head-pill mb-6" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="200">
                                <img src="/images/flower-white.svg" alt="" className="flwr-white" />
                                Contact Information
                            </div>
                            <h3 className="text-white text-3xl font-space-grotesk font-bold mb-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                                Get in Touch <span className="text-orange">Today</span>
                            </h3>
                            <p className="text-gray-400 mb-8" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                                We're here to help you succeed. Reach out to us through any of the following channels, and let's discuss how we can bring your vision to life.
                            </p>

                            <div className="contact-info-grid space-y-6">
                                {contactInfo.map((info, index) => (
                                    <div 
                                        key={index} 
                                        className="contact-info-item"
                                        data-aos="fade-up"
                                        data-aos-duration="800"
                                        data-aos-delay={800 + (index * 100)}
                                    >
                                        <div className="contact-icon">
                                            {info.icon}
                                        </div>
                                        <div className="contact-details">
                                            <h4 className="text-white font-semibold mb-2">{info.title}</h4>
                                            {info.details.map((detail, idx) => (
                                                <p key={idx} className="text-gray-400">{detail}</p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Social Media Links */}
                            <div className="social-links mt-8" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1200">
                                <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                                <div className="flex space-x-4">
                                    {socialLinks.map((social, index) => (
                                        <a
                                            key={index}
                                            href={social.url}
                                            className="social-link"
                                            aria-label={social.name}
                                            data-aos="zoom-in"
                                            data-aos-duration="600"
                                            data-aos-delay={1400 + (index * 100)}
                                        >
                                            {social.icon}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default ContactUs
