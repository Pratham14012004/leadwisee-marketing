
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
