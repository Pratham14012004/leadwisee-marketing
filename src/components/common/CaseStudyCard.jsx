
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
