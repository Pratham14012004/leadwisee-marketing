
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Card = styled(motion.div)`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  height: 250px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
  
  &:hover .card-image img {
    transform: scale(1.1);
  }
  
  &:hover .card-content {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const CardImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
`;

const CardContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.5);
  transition: background-color 0.3s ease;
  padding: 1.5rem;
`;

const Title = styled.h3`
  color: white;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
`;

const StyledLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
`;

const IndustryCard = ({ title, image, link, delay = 0 }) => {
  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <CardImage className="card-image">
        <img src={image} alt={title} />
      </CardImage>
      <CardContent className="card-content">
        <Title>{title}</Title>
      </CardContent>
      <StyledLink to={link} aria-label={`Learn more about ${title}`} />
    </Card>
  );
};

export default IndustryCard;
