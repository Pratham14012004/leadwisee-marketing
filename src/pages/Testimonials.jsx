
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    // In a real app, you would fetch testimonials from an API
    // This is mock data for demonstration
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setTestimonials([
        {
          id: 1,
          name: 'James Wilson',
          position: 'Marketing Director',
          company: 'TechSolutions Inc.',
          industry: 'B2B SAAS',
          service: 'PPC Marketing',
          rating: 5,
          quote: 'Leadwisee completely transformed our lead generation strategy. Their data-driven approach to our PPC campaigns increased qualified leads by 137% while reducing our cost per acquisition by nearly half. The team is responsive, strategic, and most importantly, focused on real business outcomes.',
          image: 'https://via.placeholder.com/100'
        },
        {
          id: 2,
          name: 'Sarah Johnson',
          position: 'E-commerce Manager',
          company: 'Fashion Outlet',
          industry: 'E-commerce',
          service: 'Social Media Marketing',
          rating: 5,
          quote: 'Our Instagram and Facebook campaigns were underperforming until we partnered with Leadwisee. They restructured our entire social media strategy with a focus on conversion, not just engagement. The results have been amazing - our ROAS has more than doubled and we\'ve seen a 78% increase in new customer acquisition.',
          image: 'https://via.placeholder.com/100'
        },
        {
          id: 3,
          name: 'Michael Brown',
          position: 'CEO',
          company: 'PropertySmart',
          industry: 'Real Estate',
          service: 'Content Marketing',
          rating: 5,
          quote: 'Leadwisee\'s content strategy helped establish us as thought leaders in the real estate market. Their SEO-driven approach has dramatically increased our organic traffic and the quality of leads coming through our website. We\'re now ranking for keywords we never thought possible.',
          image: 'https://via.placeholder.com/100'
        },
        {
          id: 4,
          name: 'Jennifer Lee',
          position: 'Founder',
          company: 'Wellness Coach',
          industry: 'Coaching & Consulting',
          service: 'Website Optimization',
          rating: 4,
          quote: 'The conversion rate optimization work Leadwisee did on my coaching website was game-changing. My consultation bookings increased by 215% after implementing their recommendations. They took the time to understand my business goals and delivered results that far exceeded my expectations.',
          image: 'https://via.placeholder.com/100'
        },
        {
          id: 5,
          name: 'Robert Chen',
          position: 'Digital Marketing Manager',
          company: 'MedTech Solutions',
          industry: 'Healthcare',
          service: 'PPC Marketing',
          rating: 5,
          quote: 'In the highly regulated healthcare space, finding an agency that understands the compliance requirements while still driving results is challenging. Leadwisee excelled at this balance. Their PPC campaigns are meticulously managed and have consistently delivered a strong ROI for our medical practice.',
          image: 'https://via.placeholder.com/100'
        },
        {
          id: 6,
          name: 'Amanda Davis',
          position: 'Creative Director',
          company: 'Inspire Interiors',
          industry: 'Interior Design',
          service: 'Social Media Marketing',
          rating: 5,
          quote: 'As a visual business, our social media presence is crucial. Leadwisee developed a content strategy that showcases our work in the most engaging way possible. The results speak for themselves - our following has grown by 340% and we\'re getting high-quality client inquiries directly from Instagram.',
          image: 'https://via.placeholder.com/100'
        },
        {
          id: 7,
          name: 'David Wilson',
          position: 'Head of Growth',
          company: 'StreamFlix',
          industry: 'OTT',
          service: 'Conversion Optimization',
          rating: 5,
          quote: 'Leadwisee\'s optimization of our subscription funnel led to a 42% increase in free trial conversions. Their attention to detail and testing methodology uncovered insights we had missed for years. I highly recommend them to any subscription-based business looking to improve conversion rates.',
          image: 'https://via.placeholder.com/100'
        },
        {
          id: 8,
          name: 'Jessica Thompson',
          position: 'E-commerce Director',
          company: 'Luxury Brands Co.',
          industry: 'E-commerce',
          service: 'Email Marketing',
          rating: 4,
          quote: 'Our email marketing was basic and underperforming before working with Leadwisee. They implemented advanced segmentation and personalization strategies that have increased our email revenue by 89%. Their approach to abandoned cart recovery alone has paid for their services many times over.',
          image: 'https://via.placeholder.com/100'
        }
      ]);
      setLoading(false);
    }, 500);
  }, []);

  const filteredTestimonials = activeFilter === 'all' 
    ? testimonials 
    : testimonials.filter(testimonial => 
        testimonial.industry.toLowerCase() === activeFilter || 
        testimonial.service.toLowerCase().replace(/\s+/g, '-') === activeFilter
      );

  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, index) => (
      <StarIcon key={index} filled={index < rating} />
    ));
  };

  const industries = ['all', ...new Set(testimonials.map(t => t.industry.toLowerCase()))];
  const services = [...new Set(testimonials.map(t => t.service.toLowerCase().replace(/\s+/g, '-')))];

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Client Testimonials | Leadwisee</title>
        <meta name="description" content="Read what our clients say about working with Leadwisee. Success stories from businesses across various industries including e-commerce, B2B SaaS, real estate, and more." />
      </Helmet>

      <HeroSection>
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h1>Client Success Stories</h1>
          <p>See what our clients have to say about working with Leadwisee</p>
        </motion.div>
      </HeroSection>

      <ContentSection>
        <FilterSection>
          <SectionHeading>Filter Testimonials</SectionHeading>
          
          <FilterContainer>
            <FilterGroup>
              <label>By Industry:</label>
              <ButtonGroup>
                {industries.map((industry, index) => (
                  <FilterButton 
                    key={index}
                    active={activeFilter === industry}
                    onClick={() => setActiveFilter(industry)}
                  >
                    {industry === 'all' ? 'All Industries' : industry.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </FilterButton>
                ))}
              </ButtonGroup>
            </FilterGroup>
            
            <FilterGroup>
              <label>By Service:</label>
              <ButtonGroup>
                {services.map((service, index) => (
                  <FilterButton 
                    key={index}
                    active={activeFilter === service}
                    onClick={() => setActiveFilter(service)}
                  >
                    {service.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </FilterButton>
                ))}
              </ButtonGroup>
            </FilterGroup>
          </FilterContainer>
        </FilterSection>

        {loading ? (
          <LoadingMessage>Loading testimonials...</LoadingMessage>
        ) : (
          <TestimonialGrid>
            {filteredTestimonials.length > 0 ? (
              filteredTestimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <QuoteIcon>
                    <FaQuoteLeft />
                  </QuoteIcon>
                  <Rating>{renderStars(testimonial.rating)}</Rating>
                  <Quote>"{testimonial.quote}"</Quote>
                  <ClientInfo>
                    <Avatar>
                      <img src={testimonial.image} alt={testimonial.name} />
                    </Avatar>
                    <div>
                      <ClientName>{testimonial.name}</ClientName>
                      <ClientPosition>
                        {testimonial.position}, {testimonial.company}
                      </ClientPosition>
                      <ClientTags>
                        <Tag>{testimonial.industry}</Tag>
                        <Tag>{testimonial.service}</Tag>
                      </ClientTags>
                    </div>
                  </ClientInfo>
                </TestimonialCard>
              ))
            ) : (
              <NoResults>
                <p>No testimonials found matching your filter criteria.</p>
                <Button onClick={() => setActiveFilter('all')} variant="outline">
                  Show All Testimonials
                </Button>
              </NoResults>
            )}
          </TestimonialGrid>
        )}
      </ContentSection>

      <CTASection>
        <div className="cta-content">
          <h2>Ready to achieve similar results for your business?</h2>
          <p>Schedule a free strategy call with our team to discuss your specific goals.</p>
          <Button to="/contact" variant="primary" size="large">
            Book Your Strategy Call
          </Button>
        </div>
      </CTASection>
    </Container>
  );
};

const Container = styled(motion.div)`
  padding-bottom: 4rem;
`;

const HeroSection = styled.div`
  text-align: center;
  padding: 5rem 0 3rem;
  
  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.2rem;
    color: ${props => props.theme.textLight};
    max-width: 600px;
    margin: 0 auto;
  }
  
  @media (max-width: 768px) {
    padding: 3rem 0 2rem;
    
    h1 {
      font-size: 2.5rem;
    }
  }
`;

const ContentSection = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const FilterSection = styled.div`
  margin-bottom: 3rem;
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
  
  @media (max-width: 768px) {
    gap: 2rem;
  }
`;

const FilterGroup = styled.div`
  label {
    display: block;
    margin-bottom: 0.75rem;
    font-weight: 500;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const FilterButton = styled.button`
  background: ${props => props.active ? props.theme.primary : 'transparent'};
  color: ${props => props.active ? 'white' : props.theme.text};
  border: 1px solid ${props => props.active ? props.theme.primary : props.theme.border};
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  cursor: pointer;
  font-size: 0.9rem;
  transition: all 0.3s;
  
  &:hover {
    background: ${props => props.active ? props.theme.primary : props.theme.backgroundHover};
  }
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled(motion.div)`
  background: ${props => props.theme.background};
  border-radius: 0.5rem;
  padding: 2.5rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  position: relative;
`;

const QuoteIcon = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
  color: ${props => props.theme.primary};
  opacity: 0.2;
  font-size: 2rem;
`;

const Rating = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const StarIcon = styled(FaStar)`
  color: ${props => props.filled ? '#FFD700' : props.theme.border};
  margin-right: 0.25rem;
`;

const Quote = styled.div`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  color: ${props => props.theme.text};
`;

const ClientInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1rem;
  flex-shrink: 0;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ClientName = styled.div`
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const ClientPosition = styled.div`
  font-size: 0.9rem;
  color: ${props => props.theme.textLight};
  margin-bottom: 0.5rem;
`;

const ClientTags = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background: ${props => props.theme.backgroundHover};
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  color: ${props => props.theme.textLight};
`;

const LoadingMessage = styled.div`
  text-align: center;
  padding: 3rem 0;
  font-size: 1.2rem;
  color: ${props => props.theme.textLight};
`;

const NoResults = styled.div`
  text-align: center;
  padding: 3rem 0;
  grid-column: 1 / -1;
  
  p {
    margin-bottom: 1.5rem;
    color: ${props => props.theme.textLight};
  }
`;

const CTASection = styled.div`
  background: ${props => props.theme.gradient};
  border-radius: 0.5rem;
  padding: 4rem;
  margin: 4rem auto 0;
  text-align: center;
  max-width: 1200px;
  
  .cta-content {
    max-width: 700px;
    margin: 0 auto;
    
    h2 {
      color: white;
      margin-bottom: 1rem;
      font-size: 2rem;
    }
    
    p {
      color: rgba(255, 255, 255, 0.9);
      margin-bottom: 2rem;
      font-size: 1.2rem;
    }
  }
  
  @media (max-width: 768px) {
    padding: 3rem 2rem;
    margin: 3rem 1.5rem 0;
    
    .cta-content {
      h2 {
        font-size: 1.8rem;
      }
      
      p {
        font-size: 1.1rem;
      }
    }
  }
`;

export default Testimonials;
