
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

import SectionHeading from '../components/common/SectionHeading';
import ContactForm from '../components/common/ContactForm';

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem 5rem;
`;

const ContactHero = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  padding: 3rem 0;
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ContactFormContainer = styled.div`
  background: ${props => props.theme.background};
  border-radius: 0.5rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  padding: 2rem;
`;

const ContactInfo = styled.div`
  h3 {
    margin-bottom: 1.5rem;
    font-size: 1.75rem;
  }
  
  p {
    margin-bottom: 2rem;
    color: ${props => props.theme.textLight};
    line-height: 1.7;
  }
`;

const ContactCards = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-bottom: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ContactCard = styled(motion.div)`
  background: ${props => props.theme.background};
  border-radius: 0.5rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  
  .icon {
    color: ${props => props.theme.primary};
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  h4 {
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
  }
  
  p {
    margin-bottom: 0;
    color: ${props => props.theme.textLight};
  }
  
  a {
    color: ${props => props.theme.text};
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: ${props => props.theme.primary};
    }
  }
`;

const MapContainer = styled.div`
  margin-top: 3rem;
  border-radius: 0.5rem;
  overflow: hidden;
  height: 400px;
  
  iframe {
    border: 0;
    width: 100%;
    height: 100%;
  }
`;

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Leadwisee - Performance Marketing Agency</title>
        <meta name="description" content="Get in touch with Leadwisee for a free strategy call. Our performance marketing experts are ready to help grow your business." />
      </Helmet>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ContactHero>
          <SectionHeading
            subtitle="Get In Touch"
            title="Contact Us"
            alignment="center"
          />
          <p style={{ maxWidth: '700px', margin: '0 auto' }}>
            Have a question about our services or ready to start your next project? Reach out to our team and get a free strategy call to discuss how we can help grow your business.
          </p>
        </ContactHero>
        
        <ContactContainer>
          <ContactContent>
            <ContactFormContainer>
              <ContactForm 
                heading="Request a Free Strategy Call" 
                isContactPage={true}
                showServices={true}
              />
            </ContactFormContainer>
            
            <ContactInfo>
              <h3>Our Contact Information</h3>
              <p>
                We're here to answer any questions you have about our services and how we can help your business grow. Reach out through the form or using the contact details below.
              </p>
              
              <ContactCards>
                <ContactCard
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="icon">
                    <FaPhone />
                  </div>
                  <h4>Phone</h4>
                  <p>
                    <a href="tel:+11234567890">+1 (123) 456-7890</a>
                  </p>
                </ContactCard>
                
                <ContactCard
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="icon">
                    <FaEnvelope />
                  </div>
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:hello@leadwisee.com">hello@leadwisee.com</a>
                  </p>
                </ContactCard>
                
                <ContactCard
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="icon">
                    <FaMapMarkerAlt />
                  </div>
                  <h4>Address</h4>
                  <p>
                    123 Marketing Ave<br />
                    New York, NY 10001
                  </p>
                </ContactCard>
                
                <ContactCard
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <div className="icon">
                    <FaClock />
                  </div>
                  <h4>Business Hours</h4>
                  <p>
                    Monday - Friday: 9am - 5pm<br />
                    Saturday - Sunday: Closed
                  </p>
                </ContactCard>
              </ContactCards>
              
              <MapContainer>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.3059353029!2d-74.25986548248684!3d40.69714941932609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1656431037886!5m2!1sen!2s" 
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                ></iframe>
              </MapContainer>
            </ContactInfo>
          </ContactContent>
        </ContactContainer>
      </motion.div>
    </>
  );
};

export default Contact;
