
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.background};
  padding: 5rem 0 2rem;
  border-top: 1px solid ${props => props.theme.border};
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled(Link)`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${props => props.theme.primary};
  margin-bottom: 1rem;
  
  span {
    color: ${props => props.theme.secondary};
  }
`;

const FooterDescription = styled.p`
  color: ${props => props.theme.textLight};
  margin-bottom: 1.5rem;
  max-width: 400px;
`;

const FooterHeading = styled.h4`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.text};
`;

const FooterLink = styled(Link)`
  color: ${props => props.theme.textLight};
  margin-bottom: 0.75rem;
  transition: color 0.3s ease;
  display: block;
  
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const FooterContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: ${props => props.theme.textLight};
  
  svg {
    margin-right: 0.75rem;
    color: ${props => props.theme.primary};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialLink = styled.a`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${props => props.theme.backgroundSecondary};
  color: ${props => props.theme.textLight};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.primary};
    color: white;
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 2rem;
  margin-top: 3rem;
  border-top: 1px solid ${props => props.theme.border};
  color: ${props => props.theme.textLight};
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterGrid>
        <FooterColumn>
          <FooterLogo to="/">
            Lead<span>wisee</span>
          </FooterLogo>
          <FooterDescription>
            We're a performance marketing agency specializing in driving measurable results through data-driven strategies across PPC, social media, and e-commerce channels.
          </FooterDescription>
          <SocialLinks>
            <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </SocialLink>
            <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialLink>
            <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialLink>
            <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </SocialLink>
            <SocialLink href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </SocialLink>
          </SocialLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterHeading>Services</FooterHeading>
          <FooterLink to="/services/ppc-marketing">PPC Marketing</FooterLink>
          <FooterLink to="/services/social-media-marketing">Social Media Marketing</FooterLink>
          <FooterLink to="/services/ecommerce-marketing">E-commerce Marketing</FooterLink>
          <FooterLink to="/services">View All Services</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterHeading>Resources</FooterHeading>
          <FooterLink to="/blog">Blog</FooterLink>
          <FooterLink to="/case-studies">Case Studies</FooterLink>
          <FooterLink to="/testimonials">Testimonials</FooterLink>
          <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
          <FooterLink to="/terms-of-service">Terms of Service</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterHeading>Contact Us</FooterHeading>
          <FooterContactItem>
            <FaPhone />
            <span>+1 (123) 456-7890</span>
          </FooterContactItem>
          <FooterContactItem>
            <FaEnvelope />
            <span>hello@leadwisee.com</span>
          </FooterContactItem>
          <FooterContactItem>
            <FaMapMarkerAlt />
            <span>123 Marketing Ave, New York, NY 10001</span>
          </FooterContactItem>
          <FooterLink to="/contact" style={{ marginTop: '1rem', fontWeight: '500' }}>
            Get Free Strategy Call
          </FooterLink>
        </FooterColumn>
      </FooterGrid>
      
      <Copyright>
        <p>&copy; {new Date().getFullYear()} Leadwisee. All rights reserved.</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { 
  FiMapPin, 
  FiPhone, 
  FiMail, 
  FiFacebook, 
  FiTwitter, 
  FiInstagram, 
  FiLinkedin 
} from "react-icons/fi";

const FooterContainer = styled.footer`
  background-color: ${props => props.theme.background};
  padding: 4rem 0 2rem;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const TopSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid ${props => props.theme.border};
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    text-align: left;
  }
`;

const Column = styled.div``;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: ${props => props.theme.primary};
`;

const Description = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.textLight};
`;

const Title = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1.25rem;
  color: ${props => props.theme.text};
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const LinkItem = styled.li`
  margin-bottom: 0.75rem;
`;

const FooterLink = styled(Link)`
  color: ${props => props.theme.textLight};
  text-decoration: none;
  font-size: 0.95rem;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  
  svg {
    margin-right: 0.75rem;
    margin-top: 0.25rem;
    color: ${props => props.theme.primary};
    flex-shrink: 0;
  }
  
  p {
    font-size: 0.95rem;
    line-height: 1.5;
    color: ${props => props.theme.textLight};
    margin: 0;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${props => props.theme.backgroundSecondary};
  color: ${props => props.theme.textLight};
  transition: all 0.2s ease;
  
  &:hover {
    background-color: ${props => props.theme.primary};
    color: white;
    transform: translateY(-3px);
  }
`;

const Copyright = styled.p`
  font-size: 0.875rem;
  color: ${props => props.theme.textLight};
  margin: 0;
`;

const PolicyLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
  
  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <TopSection>
          <Column>
            <Logo>Leadwisee</Logo>
            <Description>
              A leading performance marketing agency helping businesses drive growth through data-driven marketing strategies. We specialize in PPC, social media marketing, and e-commerce solutions.
            </Description>
            <SocialLinks>
              <SocialIcon href="#" target="_blank" aria-label="Facebook">
                <FiFacebook />
              </SocialIcon>
              <SocialIcon href="#" target="_blank" aria-label="Twitter">
                <FiTwitter />
              </SocialIcon>
              <SocialIcon href="#" target="_blank" aria-label="Instagram">
                <FiInstagram />
              </SocialIcon>
              <SocialIcon href="#" target="_blank" aria-label="LinkedIn">
                <FiLinkedin />
              </SocialIcon>
            </SocialLinks>
          </Column>
          
          <Column>
            <Title>Services</Title>
            <LinkList>
              <LinkItem>
                <FooterLink to="/services/ppc-marketing">PPC Marketing</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink to="/services/social-media-marketing">Social Media Marketing</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink to="/services/ecommerce-marketing">E-commerce Marketing</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink to="/services">View All Services</FooterLink>
              </LinkItem>
            </LinkList>
          </Column>
          
          <Column>
            <Title>Company</Title>
            <LinkList>
              <LinkItem>
                <FooterLink to="/about">About Us</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink to="/case-studies">Case Studies</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink to="/blog">Blog</FooterLink>
              </LinkItem>
              <LinkItem>
                <FooterLink to="/contact">Contact</FooterLink>
              </LinkItem>
            </LinkList>
          </Column>
          
          <Column>
            <Title>Contact</Title>
            <ContactItem>
              <FiMapPin />
              <p>123 Marketing St.<br />New York, NY 10001</p>
            </ContactItem>
            <ContactItem>
              <FiPhone />
              <p>(555) 123-4567</p>
            </ContactItem>
            <ContactItem>
              <FiMail />
              <p>info@leadwisee.com</p>
            </ContactItem>
          </Column>
        </TopSection>
        
        <BottomSection>
          <Copyright>© {currentYear} Leadwisee. All rights reserved.</Copyright>
          <PolicyLinks>
            <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
            <FooterLink to="/terms-of-service">Terms of Service</FooterLink>
          </PolicyLinks>
        </BottomSection>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
