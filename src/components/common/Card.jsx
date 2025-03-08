
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Base card styles
const CardContainer = styled(motion.div)`
  background-color: ${props => props.theme.body};
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadow};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: ${props => props.height || 'auto'};
  display: flex;
  flex-direction: column;
  
  ${props => props.hoverable && `
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    }
  `}
`;

const CardImageContainer = styled.div`
  width: 100%;
  height: ${props => props.imageHeight || '200px'};
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  
  ${CardContainer}:hover & {
    transform: scale(1.05);
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: ${props => props.theme.text};
  font-weight: 600;
`;

const CardDescription = styled.p`
  color: ${props => props.theme.textLight};
  margin-bottom: 1.5rem;
  font-size: 0.9375rem;
  flex: 1;
`;

const CardFooter = styled.div`
  padding: ${props => props.withBorder ? '1rem 1.5rem' : '0 0 0.5rem'};
  border-top: ${props => props.withBorder ? `1px solid ${props.theme.border}` : 'none'};
  margin-top: ${props => props.withBorder ? '0' : 'auto'};
`;

const CardTag = styled.span`
  display: inline-block;
  background-color: ${props => props.theme.backgroundSecondary};
  color: ${props => props.theme.textLight};
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`;

const CardTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
`;

// Card Link wraps the whole card with a link
const CardLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: block;
  height: 100%;
`;

/**
 * Card component for displaying information in a card layout
 * 
 * @param {Object} props - Component props
 * @param {string} props.title - Card title
 * @param {string} props.description - Card description
 * @param {string} props.imageSrc - Image source URL
 * @param {string} props.imageAlt - Image alt text
 * @param {string} props.imageHeight - Height of the image container
 * @param {string} props.to - Link destination (optional)
 * @param {boolean} props.hoverable - Whether card should have hover effects
 * @param {string} props.height - Card height
 * @param {Array} props.tags - Array of tag labels
 * @param {React.ReactNode} props.footer - Footer content
 * @param {boolean} props.withBorderFooter - Whether footer should have a top border
 * @param {React.ReactNode} props.children - Card content if not using the predefined structure
 */
const Card = ({ 
  title, 
  description, 
  imageSrc, 
  imageAlt,
  imageHeight,
  to, 
  hoverable = true,
  height,
  tags,
  footer,
  withBorderFooter = false,
  children,
  ...rest 
}) => {
  // Card content with predefined structure
  const cardContent = children || (
    <>
      {imageSrc && (
        <CardImageContainer imageHeight={imageHeight}>
          <CardImage src={imageSrc} alt={imageAlt || title} loading="lazy" />
        </CardImageContainer>
      )}
      
      <CardContent>
        {tags && tags.length > 0 && (
          <CardTags>
            {tags.map((tag, index) => (
              <CardTag key={index}>{tag}</CardTag>
            ))}
          </CardTags>
        )}
        
        {title && <CardTitle>{title}</CardTitle>}
        {description && <CardDescription>{description}</CardDescription>}
        
        {footer && !withBorderFooter && (
          <div style={{ marginTop: 'auto' }}>{footer}</div>
        )}
      </CardContent>
      
      {footer && withBorderFooter && (
        <CardFooter withBorder={withBorderFooter}>{footer}</CardFooter>
      )}
    </>
  );
  
  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };
  
  // If card has a link
  if (to) {
    return (
      <CardContainer 
        as={motion.div}
        variants={cardVariants}
        height={height}
        hoverable={hoverable}
        {...rest}
      >
        <CardLink to={to}>
          {cardContent}
        </CardLink>
      </CardContainer>
    );
  }
  
  // Regular card without link
  return (
    <CardContainer 
      as={motion.div}
      variants={cardVariants}
      height={height}
      hoverable={hoverable}
      {...rest}
    >
      {cardContent}
    </CardContainer>
  );
};

export default Card;
