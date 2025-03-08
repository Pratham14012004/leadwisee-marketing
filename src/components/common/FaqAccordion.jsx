
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
