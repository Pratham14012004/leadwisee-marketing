
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaArrowRight } from 'react-icons/fa';

import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import ContactForm from '../components/common/ContactForm';

const IndustriesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem 5rem;
`;

const IndustriesHero = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  padding: 3rem 0;
`;

const IndustriesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const IndustryCard = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  height: 380px;
  background-image: ${props => `url(${props.backgroundImage})`};
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    
    .card-bg {
      opacity: 0.85;
    }
  }

  .card-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8));
    transition: opacity 0.3s ease;
    opacity: 0.7;
  }

  .card-content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 2rem;
    color: #fff;
    z-index: 2;
    
    h3 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
      font-weight: 700;
    }
    
    p {
      margin-bottom: 1.5rem;
      line-height: 1.6;
      opacity: 0.9;
    }
  }
`;

const CTASection = styled.div`
  text-align: center;
  background-color: ${props => props.theme.colors.bgAlt};
  padding: 4rem 2rem;
  border-radius: 12px;
  margin-top: 4rem;
  
  h2 {
    font-size: 2.2rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
  }
  
  p {
    font-size: 1.2rem;
    max-width: 800px;
    margin: 0 auto 2rem;
    line-height: 1.6;
  }
`;

const ContactSection = styled.div`
  margin-top: 6rem;
`;

const Industries = () => {
  // Function to get the appropriate image for each industry
  const getIndustryImage = (industry) => {
    switch(industry) {
      case 'B2B Marketing':
        return 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80';
      case 'SaaS Marketing':
        return 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
      case 'E-Commerce Marketing':
        return 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
      case 'Retail Marketing':
        return 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
      case 'Fashion & Luxury Marketing':
        return 'https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80';
      case 'Healthcare Marketing':
        return 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80';
      case 'OTT & Entertainment Marketing':
        return 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
      case 'Coaching & Consulting Marketing':
        return 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
      case 'Real Estate Marketing':
        return 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80';
      case 'Interior Design Marketing':
        return 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80';
      default:
        return 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
    }
  };

  const industries = [
    {
      id: 'b2b',
      title: 'B2B Marketing',
      description: 'Generate qualified leads and conversions for your B2B company with data-driven campaigns.'
    },
    {
      id: 'saas',
      title: 'SaaS Marketing',
      description: 'Increase demos, trials, and subscription sign-ups for your software-as-a-service business.'
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce Marketing',
      description: 'Drive more sales, increase AOV, and improve ROAS for your online store.'
    },
    {
      id: 'retail',
      title: 'Retail Marketing',
      description: 'Connect digital and physical experiences to drive foot traffic and omnichannel sales.'
    },
    {
      id: 'fashion-luxury',
      title: 'Fashion & Luxury Marketing',
      description: 'Create sophisticated campaigns that elevate your brand while driving conversions.'
    },
    {
      id: 'healthcare',
      title: 'Healthcare Marketing',
      description: 'HIPAA-compliant patient acquisition strategies for medical practices and healthcare providers.'
    },
    {
      id: 'entertainment',
      title: 'OTT & Entertainment Marketing',
      description: 'Acquire subscribers and build engaged audiences for streaming platforms and media companies.'
    },
    {
      id: 'coaching',
      title: 'Coaching & Consulting Marketing',
      description: 'Attract high-ticket clients with premium lead generation strategies for your expertise business.'
    },
    {
      id: 'real-estate',
      title: 'Real Estate Marketing',
      description: 'Generate qualified property buyers, sellers, and rentals with targeted digital campaigns.'
    },
    {
      id: 'interior-design',
      title: 'Interior Design Marketing',
      description: 'Attract high-value design projects with visual-first marketing for design professionals.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Industry-Specific Marketing Services | Leadwisee</title>
        <meta 
          name="description" 
          content="Leadwisee offers specialized marketing services for B2B, SaaS, E-commerce, Retail, Healthcare, and more. See how our industry expertise drives results."
        />
      </Helmet>

      <IndustriesHero>
        <SectionHeading
          subtitle="Industry Expertise"
          title="Performance Marketing for <span>Every Industry</span>"
          description="Leadwisee combines deep industry knowledge with marketing expertise to create strategies tailored to your specific market challenges and opportunities."
          centered
        />
      </IndustriesHero>

      <IndustriesContainer>
        <IndustriesGrid>
          {industries.map((industry) => (
            <IndustryCard 
              key={industry.id} 
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              backgroundImage={getIndustryImage(industry.title)}
            >
              <div className="card-bg"></div>
              <div className="card-content">
                <h3>{industry.title}</h3>
                <p>{industry.description}</p>
                <Button 
                  to={`/industries/${industry.id}`} 
                  variant="outline"
                  rightIcon={<FaArrowRight />}
                >
                  Learn More
                </Button>
              </div>
            </IndustryCard>
          ))}
        </IndustriesGrid>

        <CTASection>
          <h2>Don't See Your Industry?</h2>
          <p>
            Our performance marketing strategies can be adapted to virtually any industry. Contact us to discuss your specific needs and goals.
          </p>
          <Button to="/contact" size="large">
            Get in Touch
          </Button>
        </CTASection>

        <ContactSection>
          <SectionHeading
            subtitle="Contact Us"
            title="Ready to Elevate Your <span>Industry Marketing</span>?"
            description="Let's discuss how our industry-specific approach can drive results for your business."
            centered
          />
          <ContactForm />
        </ContactSection>
      </IndustriesContainer>
    </>
  );
};

export default Industries;
