
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Button from '../components/common/Button';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  text-align: center;
  padding: 2rem;
`;

const NotFoundHeading = styled(motion.h1)`
  font-size: clamp(5rem, 15vw, 10rem);
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
`;

const NotFoundTitle = styled(motion.h2)`
  font-size: clamp(1.5rem, 5vw, 2.5rem);
  margin-bottom: 1.5rem;
`;

const NotFoundText = styled(motion.p)`
  color: var(--text-light);
  max-width: 500px;
  margin-bottom: 2rem;
  font-size: 1.125rem;
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
`;

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Leadwisee</title>
        <meta name="description" content="The page you are looking for doesn't exist or has been moved." />
      </Helmet>
      
      <NotFoundContainer>
        <NotFoundHeading
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          404
        </NotFoundHeading>
        
        <NotFoundTitle
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Page Not Found
        </NotFoundTitle>
        
        <NotFoundText
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          The page you are looking for doesn't exist or has been moved. Let's get you back on track.
        </NotFoundText>
        
        <ButtonContainer
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button to="/" size="large">
            Back to Home
          </Button>
          
          <Button to="/contact" variant="secondary" size="large">
            Contact Us
          </Button>
        </ButtonContainer>
      </NotFoundContainer>
    </>
  );
};

export default NotFound;
