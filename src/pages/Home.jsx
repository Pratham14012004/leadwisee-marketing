
import { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaChartLine, FaUsers, FaShoppingCart, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

// Components
import Button from '../components/common/Button';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import TestimonialCard from '../components/common/TestimonialCard';
import ContactForm from '../components/common/ContactForm';

// Styled components
const HeroSection = styled.section`
  padding: 8rem 0 5rem;
  background-color: ${props => props.theme.background};
  overflow: hidden;
  position: relative;
`;

const HeroGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const HeroContent = styled(motion.div)`
  z-index: 1;
`;

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 8vw, 3.5rem);
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: ${props => props.theme.text};
  
  span {
    color: ${props => props.theme.primary};
  }
`;

const HeroSubtitle = styled.p`
  font-size: clamp(1.125rem, 3vw, 1.25rem);
  color: ${props => props.theme.textLight};
  margin-bottom: 2rem;
  max-width: 540px;
`;

const HeroButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const HeroImageContainer = styled(motion.div)`
  position: relative;
  z-index: 1;
  
  img {
    width: 100%;
    border-radius: 0.5rem;
    box-shadow: ${props => props.theme.shadow};
  }
`;

const Section = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.alternate ? props.theme.background : props.theme.body};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const IndustriesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ResultCard = styled(motion.div)`
  background-color: ${props => props.theme.body};
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: ${props => props.theme.shadow};
  text-align: center;
`;

const ResultNumber = styled.h3`
  font-size: 3rem;
  font-weight: 700;
  color: ${props => props.theme.primary};
  margin-bottom: 0.5rem;
`;

const ResultLabel = styled.p`
  color: ${props => props.theme.textLight};
  font-size: 1rem;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CtaSection = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.theme.primary};
  color: white;
`;

const CtaGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const CtaContent = styled.div``;

const CtaTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 2.5rem);
  margin-bottom: 1.5rem;
  color: white;
`;

const CtaText = styled.p`
  font-size: 1.125rem;
  margin-bottom: 2rem;
  opacity: 0.9;
`;

const CtaFormContainer = styled.div`
  background-color: ${props => props.theme.body};
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
`;

const ServiceIconContainer = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${props => props.theme.backgroundSecondary};
  color: ${props => props.theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  margin-bottom: 1.25rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.75rem;
  color: ${props => props.theme.textLight};
  
  svg {
    color: ${props => props.theme.secondary};
    margin-right: 0.75rem;
    margin-top: 0.25rem;
    flex-shrink: 0;
  }
`;

// Example data for testimonials
const testimonials = [
  {
    id: 1,
    testimonial: "Leadwisee transformed our digital marketing strategy. Within just three months, we saw a 150% increase in qualified leads and a 40% reduction in cost per acquisition.",
    clientName: "Sarah Johnson",
    clientPosition: "CMO at TechStream Solutions",
    clientImage: "https://randomuser.me/api/portraits/women/23.jpg",
    rating: 5
  },
  {
    id: 2,
    testimonial: "The team at Leadwisee understands e-commerce inside and out. They optimized our product listings and PPC campaigns, resulting in a 200% increase in ROAS within just 60 days.",
    clientName: "Michael Chen",
    clientPosition: "E-commerce Director, StyleHaven",
    clientImage: "https://randomuser.me/api/portraits/men/54.jpg",
    rating: 5
  },
  {
    id: 3,
    testimonial: "As a B2B SaaS company, we struggled to generate quality leads. Leadwisee's targeted approach helped us penetrate new markets and increase our demo bookings by 85%.",
    clientName: "Jessica Williams",
    clientPosition: "Growth Lead, CloudSecure",
    clientImage: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 5
  }
];

const Home = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <Helmet>
        <title>Leadwisee - Performance Marketing Agency</title>
        <meta name="description" content="Leadwisee is a results-driven performance marketing agency specializing in PPC, social media, and e-commerce marketing strategies to drive measurable growth." />
        <meta name="keywords" content="performance marketing, PPC marketing, social media marketing, e-commerce marketing, lead generation" />
      </Helmet>
      
      {/* Hero Section */}
      <HeroSection>
        <HeroGrid>
          <HeroContent
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <HeroTitle>
              Drive <span>Measurable Growth</span> Through Performance Marketing
            </HeroTitle>
            <HeroSubtitle>
              We help businesses achieve sustainable growth through data-driven marketing strategies that deliver real, measurable results.
            </HeroSubtitle>
            <HeroButtons>
              <Button 
                to="/contact" 
                size="large"
                rightIcon={<FaArrowRight />}
              >
                Get Free Strategy Call
              </Button>
              <Button 
                to="/case-studies" 
                variant="secondary"
                size="large"
              >
                View Our Results
              </Button>
            </HeroButtons>
          </HeroContent>
          
          <HeroImageContainer
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Digital marketing dashboard with performance metrics"
              loading="eager"
            />
          </HeroImageContainer>
        </HeroGrid>
      </HeroSection>
      
      {/* Services Section */}
      <Section>
        <Container>
          <SectionHeading
            subtitle="Our Services"
            title="Performance Marketing <span>Services</span>"
            description="We deliver measurable results through data-driven strategies tailored to your business goals."
          />
          
          <ServicesGrid>
            {/* Service 1 */}
            <Card
              hoverable
              to="/services/ppc-marketing"
            >
              <div style={{ padding: '2rem' }}>
                <ServiceIconContainer>
                  <FaChartLine />
                </ServiceIconContainer>
                <h3 style={{ marginBottom: '1rem' }}>PPC Marketing</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>
                  Data-driven paid search campaigns that deliver high-quality leads and measurable ROI.
                </p>
                <FeatureList>
                  <FeatureItem>
                    <FaCheckCircle size={16} />
                    <span>Google & Microsoft Ads Management</span>
                  </FeatureItem>
                  <FeatureItem>
                    <FaCheckCircle size={16} />
                    <span>Keyword Research & Analysis</span>
                  </FeatureItem>
                  <FeatureItem>
                    <FaCheckCircle size={16} />
                    <span>Conversion Rate Optimization</span>
                  </FeatureItem>
                </FeatureList>
                <Button 
                  to="/services/ppc-marketing" 
                  variant="text"
                  rightIcon={<FaArrowRight />}
                >
                  Learn More
                </Button>
              </div>
            </Card>
            
            {/* Service 2 */}
            <Card
              hoverable
              to="/services/social-media-marketing"
            >
              <div style={{ padding: '2rem' }}>
                <ServiceIconContainer>
                  <FaUsers />
                </ServiceIconContainer>
                <h3 style={{ marginBottom: '1rem' }}>Social Media Marketing</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>
                  Strategic social campaigns that build brand awareness and drive engagement.
                </p>
                <FeatureList>
                  <FeatureItem>
                    <FaCheckCircle size={16} />
                    <span>Facebook & Instagram Ads</span>
                  </FeatureItem>
                  <FeatureItem>
                    <FaCheckCircle size={16} />
                    <span>LinkedIn & Twitter Campaigns</span>
                  </FeatureItem>
                  <FeatureItem>
                    <FaCheckCircle size={16} />
                    <span>Creative Content Development</span>
                  </FeatureItem>
                </FeatureList>
                <Button 
                  to="/services/social-media-marketing" 
                  variant="text"
                  rightIcon={<FaArrowRight />}
                >
                  Learn More
                </Button>
              </div>
            </Card>
            
            {/* Service 3 */}
            <Card
              hoverable
              to="/services/ecommerce-marketing"
            >
              <div style={{ padding: '2rem' }}>
                <ServiceIconContainer>
                  <FaShoppingCart />
                </ServiceIconContainer>
                <h3 style={{ marginBottom: '1rem' }}>E-commerce Marketing</h3>
                <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>
                  Comprehensive strategies to boost your online store's traffic, conversions, and revenue.
                </p>
                <FeatureList>
                  <FeatureItem>
                    <FaCheckCircle size={16} />
                    <span>Amazon & Marketplace Optimization</span>
                  </FeatureItem>
                  <FeatureItem>
                    <FaCheckCircle size={16} />
                    <span>Shopping Campaigns & Product Feeds</span>
                  </FeatureItem>
                  <FeatureItem>
                    <FaCheckCircle size={16} />
                    <span>Abandoned Cart Recovery</span>
                  </FeatureItem>
                </FeatureList>
                <Button 
                  to="/services/ecommerce-marketing" 
                  variant="text"
                  rightIcon={<FaArrowRight />}
                >
                  Learn More
                </Button>
              </div>
            </Card>
          </ServicesGrid>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Button to="/services" variant="secondary" size="large">
              View All Services
            </Button>
          </div>
        </Container>
      </Section>
      
      {/* Industries Section */}
      <Section alternate>
        <Container>
          <SectionHeading
            subtitle="Industries We Serve"
            title="Tailored Solutions for <span>Your Industry</span>"
            description="We understand the unique challenges and opportunities across different industries."
          />
          
          <IndustriesGrid>
            {/* <Card
              hoverable
              title="SaaS"
              description="Accelerate user acquisition and reduce churn for your software-as-a-service business with our data-driven marketing strategies."
              imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              imageAlt="SaaS Marketing"
              to="/industries/saas"
              footer={
                <Button 
                  to="/industries/saas" 
                  variant="text"
                  rightIcon={<FaArrowRight />}
                >
                  Learn More
                </Button>
              }
            /> */}
            
            {/* B2B Industry Card */}
            <Card
              hoverable
              title="B2B"
              description="Generate high-quality leads and shorten sales cycles with our strategic B2B marketing solutions focused on your business growth."
              imageSrc="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              imageAlt="B2B Marketing"
              footer={
                <Button 
                  to="/industries/b2b" 
                  variant="text"
                  rightIcon={<FaArrowRight />}
                >
                  Learn More
                </Button>
              }
            />
            
            <Card
              hoverable
              title="E-commerce"
              description="Drive more traffic, increase conversions, and boost revenue for your online store."
              imageSrc="https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              imageAlt="E-commerce Marketing"
              to="/industries/ecommerce"
              footer={
                <Button 
                  to="/industries/ecommerce" 
                  variant="text"
                  rightIcon={<FaArrowRight />}
                >
                  Learn More
                </Button>
              }
            />
            
            <Card
              hoverable
              title="Real Estate"
              description="Attract qualified property buyers and sellers with targeted digital campaigns."
              imageSrc="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
              imageAlt="Real Estate Marketing"
              footer={
                <Button 
                  to="/industries/real-estate" 
                  variant="text"
                  rightIcon={<FaArrowRight />}
                >
                  Learn More
                </Button>
              }
            />
          </IndustriesGrid>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Button to="/industries" variant="secondary" size="large">
              View All Industries
            </Button>
          </div>
        </Container>
      </Section>
      
      {/* Results Section */}
      <Section>
        <Container>
          <SectionHeading
            subtitle="Our Results"
            title="Driving <span>Measurable Results</span>"
            description="We don't just promise results. We deliver them. Here's what our clients have achieved."
          />
          
          <ResultsGrid>
            <ResultCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <ResultNumber>150%</ResultNumber>
              <ResultLabel>Average Increase in Leads</ResultLabel>
            </ResultCard>
            
            <ResultCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <ResultNumber>40%</ResultNumber>
              <ResultLabel>Reduction in Cost Per Acquisition</ResultLabel>
            </ResultCard>
            
            <ResultCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <ResultNumber>200%</ResultNumber>
              <ResultLabel>Average ROAS for E-commerce</ResultLabel>
            </ResultCard>
            
            <ResultCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ResultNumber>85%</ResultNumber>
              <ResultLabel>Boost in Conversion Rates</ResultLabel>
            </ResultCard>
          </ResultsGrid>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Button to="/case-studies" variant="secondary" size="large">
              View Our Case Studies
            </Button>
          </div>
        </Container>
      </Section>
      
      {/* Testimonials Section */}
      <Section alternate>
        <Container>
          <SectionHeading
            subtitle="Testimonials"
            title="What Our <span>Clients Say</span>"
            description="Don't just take our word for it. Hear from our clients about their experience working with us."
          />
          
          <TestimonialsGrid>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial.testimonial}
                clientName={testimonial.clientName}
                clientPosition={testimonial.clientPosition}
                clientImage={testimonial.clientImage}
                rating={testimonial.rating}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              />
            ))}
          </TestimonialsGrid>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Button to="/testimonials" variant="secondary" size="large">
              Read More Testimonials
            </Button>
          </div>
        </Container>
      </Section>
      
      {/* CTA Section */}
      <CtaSection>
        <CtaGrid>
          <CtaContent>
            <CtaTitle>Ready to Grow Your Business?</CtaTitle>
            <CtaText>
              Book a free strategy call with our experts and discover how we can help you achieve your marketing goals.
            </CtaText>
            <Button 
              to="/contact" 
              variant="secondary" 
              size="large"
              style={{ 
                backgroundColor: 'white', 
                color: 'var(--primary-color)' 
              }}
            >
              Contact Us
            </Button>
          </CtaContent>
          
          <CtaFormContainer>
            <ContactForm />
          </CtaFormContainer>
        </CtaGrid>
      </CtaSection>
    </>
  );
};

export default Home;
