
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

const Card = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.bgAlt};
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const CardHeader = styled.div`
  padding: 1.5rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }
  
  .client {
    font-size: 0.9rem;
    opacity: 0.9;
  }
`;

const CardBody = styled.div`
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  
  p {
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
`;

const ResultsList = styled.div`
  margin-top: auto;
  
  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
  
  ul {
    list-style: none;
    padding: 0;
    
    li {
      display: flex;
      align-items: flex-start;
      margin-bottom: 0.8rem;
      
      svg {
        color: ${(props) => props.theme.colors.primary};
        margin-right: 0.8rem;
        margin-top: 0.2rem;
        flex-shrink: 0;
      }
    }
  }
`;

const CaseStudyCard = ({ title, description, results, delay = 0 }) => {
  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <CardHeader>
        <h3>{title}</h3>
      </CardHeader>
      <CardBody>
        <p>{description}</p>
        <ResultsList>
          <h4>Results:</h4>
          <ul>
            {results.map((result, index) => (
              <li key={index}>
                <FaCheckCircle />
                <span>{result}</span>
              </li>
            ))}
          </ul>
        </ResultsList>
      </CardBody>
    </Card>
  );
};

export default CaseStudyCard;
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "./Button";

const Card = styled(motion.div)`
  background-color: ${(props) => props.theme.body};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 220px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${Card}:hover & img {
    transform: scale(1.05);
  }
`;

const Content = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: ${(props) => props.theme.text};
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.textLight};
  flex-grow: 1;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const Tag = styled.span`
  background-color: ${(props) => props.theme.backgroundSecondary};
  color: ${(props) => props.theme.textLight};
  padding: 0.25rem 0.75rem;
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 500;
`;

const ResultsList = styled.ul`
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
  
  li {
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme.text};
    font-size: 0.95rem;
  }
`;

const CaseStudyCard = ({ 
  id, 
  title, 
  description, 
  industry, 
  services = [], 
  results = [], 
  image = "https://via.placeholder.com/600x400?text=Case+Study", 
  featured = false,
  delay = 0 
}) => {
  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
    >
      <ImageContainer>
        <img src={image} alt={title} />
      </ImageContainer>
      <Content>
        <Tags>
          <Tag>{industry}</Tag>
          {services.slice(0, 2).map((service, index) => (
            <Tag key={index}>{service}</Tag>
          ))}
        </Tags>
        <Title>{title}</Title>
        <Description>{description}</Description>
        
        {results.length > 0 && (
          <ResultsList>
            {results.slice(0, 3).map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ResultsList>
        )}
        
        <Button 
          to={`/case-studies/${id}`} 
          variant="secondary"
        >
          View Case Study
        </Button>
      </Content>
    </Card>
  );
};

export default CaseStudyCard;
