
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const CardContainer = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background-color: ${(props) => `rgba(${props.theme.rgbPrimary}, 0.1)`};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.primary};
`;

const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${(props) => props.theme.colors.textSecondary};
  flex-grow: 1;
`;

const FeatureCard = ({ title, description, icon, delay = 0 }) => {
  return (
    <CardContainer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <IconWrapper>{icon}</IconWrapper>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </CardContainer>
  );
};

export default FeatureCard;
