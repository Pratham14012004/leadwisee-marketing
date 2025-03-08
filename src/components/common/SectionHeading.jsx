
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HeadingContainer = styled(motion.div)`
  text-align: ${props => props.align || 'center'};
  max-width: ${props => props.maxWidth || '800px'};
  margin: ${props => props.align === 'left' ? '0 0 3rem 0' : props.align === 'right' ? '0 0 3rem auto' : '0 auto 3rem'};
`;

const SubHeading = styled.span`
  display: block;
  color: ${props => props.theme.primary};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

const MainHeading = styled.h2`
  font-size: clamp(2rem, 5vw, 2.5rem);
  line-height: 1.2;
  margin-bottom: 1rem;
  color: ${props => props.theme.text};
  
  span {
    color: ${props => props.theme.primary};
  }
`;

const Description = styled.p`
  color: ${props => props.theme.textLight};
  font-size: clamp(1rem, 2vw, 1.125rem);
  max-width: ${props => props.maxWidth || '600px'};
  margin: ${props => props.align === 'left' ? '0' : props.align === 'right' ? '0 0 0 auto' : '0 auto'};
`;

/**
 * SectionHeading component for consistent section headers throughout the site
 * 
 * @param {Object} props - Component props
 * @param {string} props.subtitle - Small text above the main heading
 * @param {string} props.title - Main heading text
 * @param {string} props.description - Optional description text below heading
 * @param {string} props.align - Text alignment (left, center, right)
 * @param {string} props.maxWidth - Max width of the heading container
 */
const SectionHeading = ({ 
  subtitle, 
  title, 
  description, 
  align = 'center',
  maxWidth,
  ...rest 
}) => {
  // Animation variants
  const variants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <HeadingContainer 
      align={align}
      maxWidth={maxWidth}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px 0px" }}
      variants={variants}
      {...rest}
    >
      {subtitle && (
        <SubHeading variants={itemVariants}>
          {subtitle}
        </SubHeading>
      )}
      
      <MainHeading variants={itemVariants} dangerouslySetInnerHTML={{ __html: title }} />
      
      {description && (
        <Description 
          variants={itemVariants}
          align={align}
        >
          {description}
        </Description>
      )}
    </HeadingContainer>
  );
};

export default SectionHeading;
