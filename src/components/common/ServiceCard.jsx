
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Card = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
  
  &:hover .arrow {
    transform: translateX(5px);
  }
`;

const CardContent = styled.div`
  padding: 2rem;
  flex-grow: 1;
`;

const IconWrapper = styled.div`
  color: ${(props) => props.theme.colors.primary};
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
`;

const Title = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 500;
  text-decoration: none;
  margin-top: auto;
  
  .arrow {
    margin-left: 0.5rem;
    transition: transform 0.3s ease;
  }
`;

const ServiceCard = ({ title, description, icon, link, delay = 0 }) => {
  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <CardContent>
        <IconWrapper>{icon}</IconWrapper>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <StyledLink to={link}>
          Learn More <FaArrowRight className="arrow" />
        </StyledLink>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const Card = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  }
`;

const IconContainer = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => `rgba(59, 130, 246, 0.1)`};
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.primary};
  font-size: 1.75rem;
`;

const Content = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.text};
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${(props) => props.theme.textLight};
  margin-bottom: 1.5rem;
  flex-grow: 1;
`;

const Features = styled.ul`
  margin-bottom: 1.5rem;
  padding-left: 1.25rem;
  
  li {
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme.text};
  }
`;

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  color: ${(props) => props.theme.primary};
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  margin-top: auto;
  
  svg {
    margin-left: 0.5rem;
    transition: transform 0.2s ease;
  }
  
  &:hover svg {
    transform: translateX(5px);
  }
`;

const ServiceCard = ({ 
  title, 
  slug, 
  description, 
  features = [], 
  icon, 
  delay = 0 
}) => {
  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <Content>
        <IconContainer>{icon}</IconContainer>
        <Title>{title}</Title>
        <Description>{description}</Description>
        
        {features.length > 0 && (
          <Features>
            {features.slice(0, 3).map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </Features>
        )}
        
        <StyledLink to={`/services/${slug}`}>
          Learn more <FiArrowRight />
        </StyledLink>
      </Content>
    </Card>
  );
};

export default ServiceCard;
