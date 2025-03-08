
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const ConsentContainer = styled(motion.div)`
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 500px;
  background-color: ${props => props.theme.body};
  border-radius: 0.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  padding: 1.5rem;
  z-index: 9999;
  display: flex;
  flex-direction: column;
`;

const ConsentTitle = styled.h4`
  font-size: 1.125rem;
  margin-bottom: 0.75rem;
`;

const ConsentText = styled.p`
  font-size: 0.875rem;
  color: ${props => props.theme.textLight};
  margin-bottom: 1.5rem;
  
  a {
    color: ${props => props.theme.primary};
    text-decoration: underline;
    
    &:hover {
      color: ${props => props.theme.primaryDark};
    }
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const AcceptButton = styled.button`
  background-color: ${props => props.theme.primary};
  color: white;
  border: none;
  padding: 0.5rem 1.25rem;
  border-radius: 0.25rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.primaryDark};
  }
`;

const RejectButton = styled.button`
  background-color: transparent;
  color: ${props => props.theme.textLight};
  border: 1px solid ${props => props.theme.border};
  padding: 0.5rem 1.25rem;
  border-radius: 0.25rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.theme.backgroundSecondary};
  }
`;

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    // Check if user has already made a cookie choice
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      // Show cookie consent after 2 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      
      return () => clearTimeout(timer);
    }
  }, []);
  
  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };
  
  const handleReject = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };
  
  return (
    <AnimatePresence>
      {isVisible && (
        <ConsentContainer
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
        >
          <ConsentTitle>Cookie Consent</ConsentTitle>
          <ConsentText>
            We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. Read our{' '}
            <Link to="/privacy-policy">Privacy Policy</Link> for more information.
          </ConsentText>
          <ButtonsContainer>
            <RejectButton onClick={handleReject}>Reject All</RejectButton>
            <AcceptButton onClick={handleAccept}>Accept All</AcceptButton>
          </ButtonsContainer>
        </ConsentContainer>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
