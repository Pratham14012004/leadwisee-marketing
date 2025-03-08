
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
import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import ContactForm from "../components/common/ContactForm";

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.1rem;
  color: ${props => props.theme.textLight};
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ContactInfoPanel = styled.div`
  border-radius: 12px;
  background-color: ${props => props.theme.backgroundSecondary};
  padding: 2.5rem;
`;

const ContactInfoTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

const ContactInfoDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${props => props.theme.textLight};
  margin-bottom: 2rem;
`;

const ContactInfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  
  svg {
    color: ${props => props.theme.primary};
    font-size: 1.25rem;
    margin-right: 1rem;
    margin-top: 0.25rem;
  }
`;

const ContactInfoContent = styled.div``;

const ContactInfoLabel = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ContactInfoValue = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.textLight};
  line-height: 1.6;
`;

const MapSection = styled.div`
  margin-top: 4rem;
`;

const MapTitle = styled.h3`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
`;

const MapContainer = styled.div`
  height: 450px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  
  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
`;

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Leadwisee Marketing Agency</title>
        <meta name="description" content="Get in touch with Leadwisee Marketing Agency. We're here to help with your marketing needs and answer your questions." />
      </Helmet>
      
      <ContactContainer>
        <PageHeader>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Title>Contact Us</Title>
            <Description>
              Have a question about our services or want to discuss how we can help grow your business? 
              Get in touch with our team today.
            </Description>
          </motion.div>
        </PageHeader>
        
        <ContactContent>
          <ContactForm 
            heading="Send Us a Message" 
            showServices={true} 
            isContactPage={true}
          />
          
          <ContactInfoPanel>
            <ContactInfoTitle>Contact Information</ContactInfoTitle>
            <ContactInfoDescription>
              Feel free to reach out to us. We're here to help answer your questions and discuss how our marketing services can help your business grow.
            </ContactInfoDescription>
            
            <ContactInfoList>
              <ContactInfoItem>
                <FiMapPin />
                <ContactInfoContent>
                  <ContactInfoLabel>Office Location</ContactInfoLabel>
                  <ContactInfoValue>
                    123 Marketing St.<br />
                    New York, NY 10001<br />
                    United States
                  </ContactInfoValue>
                </ContactInfoContent>
              </ContactInfoItem>
              
              <ContactInfoItem>
                <FiPhone />
                <ContactInfoContent>
                  <ContactInfoLabel>Phone Number</ContactInfoLabel>
                  <ContactInfoValue>(555) 123-4567</ContactInfoValue>
                </ContactInfoContent>
              </ContactInfoItem>
              
              <ContactInfoItem>
                <FiMail />
                <ContactInfoContent>
                  <ContactInfoLabel>Email Address</ContactInfoLabel>
                  <ContactInfoValue>info@leadwisee.com</ContactInfoValue>
                </ContactInfoContent>
              </ContactInfoItem>
            </ContactInfoList>
          </ContactInfoPanel>
        </ContactContent>
        
        <MapSection>
          <MapTitle>Find Us on the Map</MapTitle>
          <MapContainer>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304903!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1663614039279!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location Map"
            ></iframe>
          </MapContainer>
        </MapSection>
      </ContactContainer>
    </>
  );
};

export default Contact;
