
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
