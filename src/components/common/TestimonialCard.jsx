
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const TestimonialContainer = styled(motion.div)`
  background-color: ${props => props.theme.body};
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: ${props => props.theme.shadow};
  position: relative;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  color: ${props => props.theme.backgroundSecondary};
  font-size: 1.5rem;
  z-index: 0;
  opacity: 0.5;
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const TestimonialText = styled.p`
  color: ${props => props.theme.text};
  font-style: italic;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 1rem;
`;

const Stars = styled.div`
  display: flex;
  color: ${props => props.theme.accent};
  margin-bottom: 1.5rem;
  
  svg {
    margin-right: 0.25rem;
  }
`;

const ClientInfo = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
`;

const ClientImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 1rem;
`;

const ClientDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

const ClientName = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: ${props => props.theme.text};
`;

const ClientPosition = styled.p`
  font-size: 0.875rem;
  color: ${props => props.theme.textLight};
`;

/**
 * TestimonialCard component for displaying client testimonials
 * 
 * @param {Object} props - Component props
 * @param {string} props.testimonial - Testimonial content
 * @param {string} props.clientName - Client's name
 * @param {string} props.clientPosition - Client's position or company
 * @param {string} props.clientImage - Client's image URL
 * @param {number} props.rating - Star rating (1-5)
 */
const TestimonialCard = ({ 
  testimonial, 
  clientName, 
  clientPosition, 
  clientImage,
  rating = 5,
  ...rest 
}) => {
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  return (
    <TestimonialContainer
      variants={cardVariants}
      {...rest}
    >
      <QuoteIcon>
        <FaQuoteLeft />
      </QuoteIcon>
      
      <Content>
        {rating > 0 && (
          <Stars>
            {[...Array(Math.min(rating, 5))].map((_, i) => (
              <FaStar key={i} />
            ))}
          </Stars>
        )}
        
        <TestimonialText>"{testimonial}"</TestimonialText>
        
        <ClientInfo>
          {clientImage && (
            <ClientImage 
              src={clientImage} 
              alt={clientName} 
              loading="lazy" 
            />
          )}
          
          <ClientDetails>
            <ClientName>{clientName}</ClientName>
            <ClientPosition>{clientPosition}</ClientPosition>
          </ClientDetails>
        </ClientInfo>
      </Content>
    </TestimonialContainer>
  );
};

export default TestimonialCard;
