import React from 'react'
import './LeadershipSection.css'
import { TbBrandLinkedin } from "react-icons/tb";
import { TiSocialLinkedinCircular } from "react-icons/ti";


const LeadershipSection = () => {

    const leaders = [
        {
            name: 'Vishal Goyal',
            position: 'Co-Founder & Chief Executive Officer (CEO)',
            image: '/images/vishal-sir.png',
            description: "As Co-Founder and CEO, Vishal Goyal drives the strategic vision and executive leadership for KloudStack's enterprise transformation initiatives."
        },
        {
            name: 'Dukhishyam Dakua',
            position: 'Co-Founder & Chief Delivery Officer (CDO)',
            image: '/images/shyaam-sir.png',
            description: "As Co-Founder and CDO, Dukhishyam Dakua spearheads KloudStack's strategic delivery, enterprise architecture, and infrastructure operations."
        },
        {
            name : "Seshagiri Iyer",
            position : "Co-Founder & Chief Technology Officer (CTO)",
            image : "/images/sheshagiri-iyer.png",
            description : "G. Seshagiri Iyer, Founder and CTO, leads KloudStack’s technological strategy and advanced engineering capabilities."
        },
        {
            name : "Jawad Shaikh",
            position : "Director - Microsoft Services",
            image : "/images/jawad-sir.png",
            description : "Jawad Shaikh is a senior enterprise architect and technology leader with over 17 years of experience driving cloud transformation, digital modernization, and enterprise IT strategy." 
        },
        {
            name : "Ritu Sharma",
            position : "Director - Digital Sales",
            image : "/images/ritu.png",
            description : "As Director - Digital Sales, Ritu Sharma leads KloudStack’s enterprise sales and digital transformation initiatives." 
        },
        {
            name : "Vivek Chandran",
            position : "Director - Cyber Security",
            image : "/images/vivek.png",
            description : "As Director - Cyber Security, Vivek Chandran leads KloudStack’s cloud infrastructure initiatives." 
        },
        
    ];







    return (
        <>
            <section className="leadership-section">
                <div className="container">
                    <div className="leadership-header text-start">
                        <h2 className='section-heading text-uppercase'>Executive Leadership</h2>
                        <p className='cap-description text-start'>
                            KloudStack is led by a team of visionary technologists and strategic advisors. Together, they bring decades of deep engineering expertise and enterprise delivery experience, guiding organizations through complex modernization and digital transformation journeys.
                        </p>
                    </div>
                </div>

                <div className="container mt-5">
                    <div className="leadership-grid">
                        {
                            leaders.map((data, i) => {
                                return (
                                    <div key={i} className="leadership-item">
                                        <div className="leadership-card">
                                            <img src={data.image} alt={data.name} />

                                            <div className="overlay-content">
                                                <p>{data.description}</p>
                                            </div>
                                        </div>
                                        <div className="leadership-content text-start mt-3">
                                            <div className="leadership-info-wrap">
                                                <h3 className='leadership-name'>{data.name}</h3>
                                                <p className='leadership-position'>{data.position}</p>
                                            </div>
                                            <div className="leadership-social">
                                                <a 
                                                    href="https://linkedin.com" 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="leadership-linkedin-link"
                                                    aria-label={`${data.name} LinkedIn Profile`}
                                                >
                                                    <TiSocialLinkedinCircular size={38} className='leadership-linkedin-icon' />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default LeadershipSection