import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const SliderContainer = styled.div`
  max-width: 1000px;
  margin: 3rem auto 0;
  position: relative;
`;

const TestimonialCard = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 12px;
  padding: 2.5rem;
  margin: 1rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  text-align: center;
  position: relative;
`;

const QuoteIcon = styled.div`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primary};
  opacity: 0.2;
  margin-bottom: 1.5rem;
`;

const QuoteText = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  font-style: italic;
  margin-bottom: 2rem;
`;

const ClientInfo = styled.div`
  margin-top: 1.5rem;
`;

const ClientName = styled.h4`
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const ClientPosition = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 0.9rem;
`;

const TestimonialSlider = ({ testimonials }) => {
  return (
    <SliderContainer>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <QuoteIcon>
            <FaQuoteLeft />
          </QuoteIcon>
          <QuoteText>{testimonial.quote}</QuoteText>
          <ClientInfo>
            <ClientName>{testimonial.name}</ClientName>
            <ClientPosition>
              {testimonial.position}, {testimonial.company}
            </ClientPosition>
          </ClientInfo>
        </TestimonialCard>
      ))}
    </SliderContainer>
  );
};

export default TestimonialSlider;
