
import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const AccordionContainer = styled.div`
  margin-top: 2rem;
`;

const AccordionItem = styled.div`
  margin-bottom: 1rem;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.bgAlt};
`;

const AccordionHeader = styled.div`
  padding: 1.5rem;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 1.1rem;
  
  .icon {
    transition: transform 0.3s ease;
    transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0)")};
    color: ${(props) => props.theme.colors.primary};
  }
`;

const AccordionContent = styled(motion.div)`
  padding: 0 1.5rem;
  overflow: hidden;
  
  .content-inner {
    padding-bottom: 1.5rem;
    line-height: 1.6;
    color: ${(props) => props.theme.colors.textSecondary};
  }
`;

const FaqAccordion = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <AccordionContainer>
      {faqs.map((faq, index) => (
        <AccordionItem key={index}>
          <AccordionHeader
            isOpen={openIndex === index}
            onClick={() => toggleAccordion(index)}
          >
            <div>{faq.question}</div>
            <FaChevronDown className="icon" />
          </AccordionHeader>
          <AnimatePresence>
            {openIndex === index && (
              <AccordionContent
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="content-inner">
                  {faq.answer}
                </div>
              </AccordionContent>
            )}
          </AnimatePresence>
        </AccordionItem>
      ))}
    </AccordionContainer>
  );
};

export default FaqAccordion;
import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const FaqContainer = styled.div`
  width: 100%;
  margin-bottom: 3rem;
`;

const AccordionItem = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.border};
  overflow: hidden;
  
  &:last-child {
    border-bottom: none;
  }
`;

const QuestionButton = styled.button`
  background: transparent;
  border: none;
  width: 100%;
  padding: 1.25rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  text-align: left;
  color: ${(props) => props.theme.text};
  
  &:hover h3 {
    color: ${(props) => props.theme.primary};
  }
`;

const Question = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  transition: color 0.2s ease;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.isOpen ? props.theme.primary : props.theme.textLight};
  transition: color 0.2s ease;
  margin-left: 1rem;
  flex-shrink: 0;
`;

const Answer = styled(motion.div)`
  padding-bottom: 1.25rem;
  color: ${(props) => props.theme.textLight};
  font-size: 1rem;
  line-height: 1.7;
  
  p {
    margin-top: 0;
  }
  
  p:last-child {
    margin-bottom: 0;
  }
  
  ul, ol {
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.5rem;
    }
  }
`;

const FaqAccordion = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <FaqContainer>
      {faqs.map((faq, index) => (
        <AccordionItem key={index}>
          <QuestionButton 
            onClick={() => toggleAccordion(index)}
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <Question>{faq.question}</Question>
            <IconWrapper isOpen={openIndex === index}>
              {openIndex === index ? <FiMinus size={18} /> : <FiPlus size={18} />}
            </IconWrapper>
          </QuestionButton>
          
          <AnimatePresence>
            {openIndex === index && (
              <Answer
                key={`answer-${index}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                id={`faq-answer-${index}`}
              >
                <div dangerouslySetInnerHTML={{ __html: faq.answer }} />
              </Answer>
            )}
          </AnimatePresence>
        </AccordionItem>
      ))}
    </FaqContainer>
  );
};

export default FaqAccordion;
