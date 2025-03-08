
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
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

const IndustryCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  overflow: hidden;
  
  &:hover .card-bg {
    transform: scale(1.05);
  }
  
  .card-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-color: ${props => props.theme.background};
    background-image: ${props => `url(${props.backgroundImage})`};
    background-size: cover;
    background-position: center;
    transition: transform 0.5s ease;
    opacity: 0.15;
  }
  
  .card-content {
    position: relative;
    z-index: 1;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  
  p {
    margin-bottom: 1.5rem;
    color: ${props => props.theme.textLight};
    flex-grow: 1;
  }
`;

const CTASection = styled.div`
  background: ${props => props.theme.gradientLight};
  padding: 3rem 2rem;
  border-radius: 1rem;
  text-align: center;
  margin: 4rem 0;
  
  h2 {
    margin-bottom: 1.5rem;
  }
  
  p {
    max-width: 700px;
    margin: 0 auto 2rem;
  }
`;

const FormSection = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

// Placeholder function to get a generic image for each industry
const getIndustryImage = (industry) => {
  // In a real app, you would have actual images for each industry
  return `https://source.unsplash.com/random/600x400/?${industry.toLowerCase().replace(/\s+/g, ',')}`;
};

const Industries = () => {
  // Industry data
  const industries = [
    {
      id: 'b2b-saas',
      title: 'B2B SaaS',
      description: 'Specialized marketing strategies for Software-as-a-Service companies, focusing on lead generation and customer acquisition.',
    },
    {
      id: 'ecommerce',
      title: 'E-commerce',
      description: 'Data-driven e-commerce marketing solutions that increase traffic, conversions, and average order value.',
    },
    {
      id: 'retail',
      title: 'Retail',
      description: 'Omnichannel marketing strategies that bridge the gap between online and offline retail experiences.',
    },
    {
      id: 'real-estate',
      title: 'Real Estate',
      description: 'Targeted digital marketing for real estate professionals, generating qualified leads for properties.',
    },
    {
      id: 'fashion',
      title: 'Fashion',
      description: 'Creative marketing solutions for fashion brands that build brand identity and drive conversions.',
    },
    {
      id: 'healthcare',
      title: 'Healthcare',
      description: 'Compliant healthcare marketing strategies that establish trust and generate patient inquiries.',
    },
    {
      id: 'ott',
      title: 'OTT & Entertainment',
      description: 'Engaging marketing campaigns for streaming services and entertainment companies to grow subscribers.',
    },
    {
      id: 'coaching-consulting',
      title: 'Coaching & Consulting',
      description: 'Lead generation strategies for coaches and consultants to attract high-value clients.',
    },
    {
      id: 'interior-design',
      title: 'Interior Design',
      description: 'Visual-focused marketing for interior designers that showcases expertise and attracts ideal clients.',
    }
  ];

  return (
    <>
      <Helmet>
        <title>Industries We Serve | Leadwisee - Performance Marketing Agency</title>
        <meta name="description" content="Discover our specialized marketing solutions for various industries including B2B SaaS, E-commerce, Healthcare, Real Estate, and more." />
      </Helmet>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <IndustriesHero>
          <SectionHeading
            subtitle="Our Expertise"
            title="Industries We Serve"
            alignment="center"
          />
          <p style={{ maxWidth: '700px', margin: '0 auto' }}>
            We understand that each industry has unique challenges and opportunities. Our specialized marketing strategies are tailored to the specific needs of your industry.
          </p>
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
          
          <FormSection>
            <ContactForm 
              heading="Ready to Dominate Your Industry?"
              showServices={true}
            />
          </FormSection>
        </IndustriesContainer>
      </motion.div>
    </>
  );
};

export default Industries;
