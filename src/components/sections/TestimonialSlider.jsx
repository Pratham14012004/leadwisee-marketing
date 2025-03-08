
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SliderContainer = styled.div`
  position: relative;
  max-width: 900px;
  margin: 3rem auto 0;
  overflow: hidden;
`;

const SliderTrack = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const SliderControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  gap: 1rem;
`;

const SliderDots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const SliderDot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => 
    props.active ? props.theme.colors.primary : "rgba(0, 0, 0, 0.1)"};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${(props) => 
      props.active ? props.theme.colors.primary : "rgba(0, 0, 0, 0.2)"};
  }
`;

const SliderButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  color: ${(props) => props.theme.colors.text};
  border: 1px solid ${(props) => props.theme.colors.border};
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${(props) => props.theme.colors.bgAlt};
    transform: translateY(-2px);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: translateY(0);
  }
`;

const Testimonial = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 12px;
  padding: 2.5rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  position: relative;
  
  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const QuoteIcon = styled.div`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primary};
  opacity: 0.2;
  position: absolute;
  top: 2rem;
  left: 2rem;
`;

const TestimonialText = styled.div`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ClientDetails = styled.div`
  display: flex;
  align-items: center;
`;

const ClientImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.bgAlt};
  margin-right: 1rem;
  overflow: hidden;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ClientInfo = styled.div`
  flex: 1;
`;

const ClientName = styled.div`
  font-weight: 600;
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
`;

const ClientPosition = styled.div`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 0.9rem;
`;

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
};

const TestimonialSlider = ({ testimonials = [] }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [touchStart, setTouchStart] = useState(null);
  
  const paginate = (newDirection) => {
    const newPage = page + newDirection;
    
    if (newPage >= 0 && newPage < testimonials.length) {
      setPage([newPage, newDirection]);
    }
  };
  
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    if (!touchStart) return;
    
    const touchEnd = e.touches[0].clientX;
    const diff = touchStart - touchEnd;
    
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left
        paginate(1);
      } else {
        // Swipe right
        paginate(-1);
      }
      setTouchStart(null);
    }
  };
  
  // Automatic slide change
  useEffect(() => {
    if (!testimonials.length) return;
    
    const interval = setInterval(() => {
      if (page < testimonials.length - 1) {
        setPage([page + 1, 1]);
      } else {
        setPage([0, -1]);
      }
    }, 8000);
    
    return () => clearInterval(interval);
  }, [page, testimonials.length]);
  
  if (!testimonials.length) return null;
  
  const testimonial = testimonials[page];
  
  return (
    <SliderContainer
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <SliderTrack>
        <AnimatePresence initial={false} custom={direction}>
          <Testimonial
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
          >
            <QuoteIcon>
              <FaQuoteLeft />
            </QuoteIcon>
            <TestimonialText>
              {testimonial.quote}
            </TestimonialText>
            <ClientDetails>
              <ClientImage>
                {testimonial.image && (
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    loading="lazy"
                  />
                )}
              </ClientImage>
              <ClientInfo>
                <ClientName>{testimonial.name}</ClientName>
                <ClientPosition>
                  {testimonial.position}{testimonial.company && `, ${testimonial.company}`}
                </ClientPosition>
              </ClientInfo>
            </ClientDetails>
          </Testimonial>
        </AnimatePresence>
      </SliderTrack>
      
      <SliderControls>
        <SliderButton 
          onClick={() => paginate(-1)} 
          disabled={page === 0}
          aria-label="Previous testimonial"
        >
          <FaChevronLeft />
        </SliderButton>
        
        <SliderDots>
          {testimonials.map((_, index) => (
            <SliderDot 
              key={index}
              active={index === page}
              onClick={() => setPage([index, index > page ? 1 : -1])}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </SliderDots>
        
        <SliderButton 
          onClick={() => paginate(1)} 
          disabled={page === testimonials.length - 1}
          aria-label="Next testimonial"
        >
          <FaChevronRight />
        </SliderButton>
      </SliderControls>
    </SliderContainer>
  );
};

export default TestimonialSlider;
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
