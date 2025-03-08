
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FaChartLine, FaFacebookF, FaShoppingCart } from 'react-icons/fa';

import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import ContactForm from '../components/common/ContactForm';

const ServicesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem 5rem;
`;

const ServicesHero = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  padding: 3rem 0;
`;

const ServicesGrid = styled.div`
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

const ServiceCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
  
  .service-icon {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.primary};
    background: ${props => props.theme.gradientLight};
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
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

const Services = () => {
  // Service data
  const services = [
    {
      id: 'ppc-marketing',
      title: 'PPC Marketing',
      description: 'Strategic pay-per-click campaigns that drive qualified traffic and maximize ROI across Google, Bing, and other platforms.',
      icon: <FaChartLine />,
    },
    {
      id: 'social-media-marketing',
      title: 'Social Media Marketing',
      description: 'Engaging social media strategies that build brand awareness, foster community, and convert followers into customers.',
      icon: <FaFacebookF />,
    },
    {
      id: 'ecommerce-marketing',
      title: 'E-commerce Marketing',
      description: 'Comprehensive e-commerce solutions to boost online sales, optimize product listings, and enhance customer experience.',
      icon: <FaShoppingCart />,
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services | Leadwisee - Performance Marketing Agency</title>
        <meta name="description" content="Discover our performance marketing services including PPC Marketing, Social Media Marketing, and E-commerce solutions designed to drive conversions." />
      </Helmet>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ServicesHero>
          <SectionHeading
            subtitle="Our Expertise"
            title="Performance Marketing Services"
            alignment="center"
          />
          <p style={{ maxWidth: '700px', margin: '0 auto' }}>
            Our data-driven approach to digital marketing helps businesses achieve measurable results through customized strategies that focus on conversion optimization and ROI.
          </p>
        </ServicesHero>
        
        <ServicesContainer>
          <ServicesGrid>
            {services.map((service) => (
              <ServiceCard key={service.id}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Button to={`/services/${service.id}`} variant="outline">
                  Learn More
                </Button>
              </ServiceCard>
            ))}
          </ServicesGrid>
          
          <CTASection>
            <h2>Not Sure Which Service You Need?</h2>
            <p>
              Our team of experts will analyze your business goals and recommend the best marketing strategy for your specific needs and budget.
            </p>
            <Button to="/contact" size="large">
              Get Free Consultation
            </Button>
          </CTASection>
          
          <FormSection>
            <ContactForm 
              heading="Ready to Grow Your Business?"
              showServices={true}
            />
          </FormSection>
        </ServicesContainer>
      </motion.div>
    </>
  );
};

export default Services;
