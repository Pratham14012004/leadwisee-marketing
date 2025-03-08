import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { FaArrowRight, FaChartLine, FaUsers, FaLightbulb, FaCog } from "react-icons/fa";

import SectionHeading from "../components/common/SectionHeading";
import Button from "../components/common/Button";
import FeatureCard from "../components/common/FeatureCard";
import TestimonialSlider from "../components/sections/TestimonialSlider";
import ServiceCard from "../components/common/ServiceCard";
import IndustryCard from "../components/common/IndustryCard";
import ContactForm from "../components/common/ContactForm";

// Hero Section
const HeroSection = styled.section`
  position: relative;
  padding: 7rem 0 5rem;
  background-color: ${(props) => props.theme.colors.bgAlt};
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 5rem 0 3rem;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 2;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  span {
    color: ${(props) => props.theme.colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.2rem;
  max-width: 700px;
  margin-bottom: 2.5rem;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// Services Section
const ServicesSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 1.5rem;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

// Features Section
const FeaturesSection = styled.section`
  background-color: ${(props) => props.theme.colors.bgAlt};
  padding: 5rem 0;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const FeaturesContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

// Industries Section
const IndustriesSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 1.5rem;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const IndustryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

// CTA Section
const CtaSection = styled.section`
  background-color: ${(props) => props.theme.colors.bgAlt};
  padding: 5rem 0;
  text-align: center;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;

const CtaContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const CtaTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;

  span {
    color: ${(props) => props.theme.colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CtaText = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

// Testimonials Section
const TestimonialsSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 1.5rem;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

// Contact Section
const ContactSection = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 5rem 1.5rem;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem 5rem;
  }
`;

// Testimonial data
const testimonials = [
  {
    quote: "Leadwisee transformed our marketing strategy, increasing lead generation by 175% in just 3 months. Their data-driven approach and attention to detail is unmatched.",
    name: "Michael Anderson",
    position: "CEO",
    company: "TechSolutions Inc."
  },
  {
    quote: "Our e-commerce revenue has grown by over 200% since partnering with Leadwisee. Their team's understanding of digital advertising and optimization is exceptional.",
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "ModernRetail"
  },
  {
    quote: "Leadwisee helped us achieve a 43% reduction in customer acquisition cost while simultaneously increasing conversion rates. We couldn't be happier with the results.",
    name: "David Wong",
    position: "Founder",
    company: "GrowthSaaS"
  }
];

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Leadwisee - Performance Marketing Agency</title>
        <meta name="description" content="Leadwisee is a performance marketing agency specializing in data-driven digital strategies that deliver measurable results for businesses across industries." />
      </Helmet>

      <HeroSection>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Data-Driven <span>Performance Marketing</span> That Delivers Results
          </HeroTitle>
          <HeroSubtitle
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We help businesses grow through strategic digital marketing campaigns that focus on ROI, not just impressions. Ready to transform your marketing performance?
          </HeroSubtitle>
          <HeroButtons
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button to="/contact" variant="primary" size="large">
              Get Your Free Consultation
            </Button>
            <Button to="/results" variant="secondary" size="large">
              View Our Results
            </Button>
          </HeroButtons>
        </HeroContent>
      </HeroSection>

      <ServicesSection>
        <SectionHeading
          subtitle="Our Services"
          title="Performance Marketing <span>Solutions</span>"
          description="We offer comprehensive digital marketing services designed to drive measurable growth for your business."
        />

        <ServiceGrid>
          <ServiceCard
            title="Pay-Per-Click (PPC) Advertising"
            description="Strategic paid advertising campaigns that target your ideal customers and maximize ROI."
            icon={<FaChartLine />}
            link="/services/ppc-advertising"
            delay={0}
          />

          <ServiceCard
            title="Search Engine Optimization (SEO)"
            description="Sustainable organic growth strategies that improve visibility and drive qualified traffic."
            icon={<FaLightbulb />}
            link="/services/seo"
            delay={0.1}
          />

          <ServiceCard
            title="Social Media Marketing"
            description="Engaging social campaigns that build brand awareness and drive conversions."
            icon={<FaUsers />}
            link="/services/social-media-marketing"
            delay={0.2}
          />

          <ServiceCard
            title="Conversion Rate Optimization"
            description="Data-driven improvements that turn more of your visitors into customers."
            icon={<FaCog />}
            link="/services/conversion-rate-optimization"
            delay={0.3}
          />
        </ServiceGrid>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Button to="/services" rightIcon={<FaArrowRight />}>
            View All Services
          </Button>
        </div>
      </ServicesSection>

      <FeaturesSection>
        <FeaturesContent>
          <SectionHeading
            subtitle="Why Choose Leadwisee"
            title="The Leadwisee <span>Advantage</span>"
            description="Our unique approach to performance marketing sets us apart and delivers superior results for our clients."
            centered
          />

          <FeatureGrid>
            <FeatureCard
              title="Data-Driven Strategy"
              description="We base all decisions on comprehensive data analysis, not guesswork or assumptions."
              icon={<FaChartLine />}
              delay={0}
            />

            <FeatureCard
              title="Industry Expertise"
              description="Our specialists have deep experience in your specific industry and its unique challenges."
              icon={<FaLightbulb />}
              delay={0.1}
            />

            <FeatureCard
              title="Transparent Reporting"
              description="Clear, actionable insights into your campaign performance with no hidden metrics."
              icon={<FaChartLine />}
              delay={0.2}
            />

            <FeatureCard
              title="ROI Focus"
              description="We're obsessed with generating measurable returns on your marketing investment."
              icon={<FaCog />}
              delay={0.3}
            />

            <FeatureCard
              title="Continuous Optimization"
              description="Your campaigns are never set-and-forget; we constantly refine for better results."
              icon={<FaChartLine />}
              delay={0.4}
            />

            <FeatureCard
              title="Strategic Partnership"
              description="We function as an extension of your team, aligned with your business goals."
              icon={<FaUsers />}
              delay={0.5}
            />
          </FeatureGrid>
        </FeaturesContent>
      </FeaturesSection>

      <IndustriesSection>
        <SectionHeading
          subtitle="Industries We Serve"
          title="Specialized Marketing for <span>Your Industry</span>"
          description="We understand the unique challenges and opportunities in your specific industry."
        />

        <IndustryGrid>
          <IndustryCard
            title="SaaS & Technology"
            image="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            link="/industries/saas"
            delay={0}
          />

          <IndustryCard
            title="B2B Services"
            image="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80"
            link="/industries/b2b"
            delay={0.1}
          />

          <IndustryCard
            title="E-Commerce"
            image="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            link="/industries/ecommerce"
            delay={0.2}
          />

          <IndustryCard
            title="Real Estate"
            image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80"
            link="/industries/real-estate"
            delay={0.3}
          />

          <IndustryCard
            title="Healthcare"
            image="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            link="/industries/healthcare"
            delay={0.4}
          />

          <IndustryCard
            title="Fashion & Luxury"
            image="https://images.unsplash.com/photo-1445205170230-053b83016050?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
            link="/industries/fashion-luxury"
            delay={0.5}
          />
        </IndustryGrid>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Button to="/industries" rightIcon={<FaArrowRight />}>
            View All Industries
          </Button>
        </div>
      </IndustriesSection>

      <CtaSection>
        <CtaContent>
          <CtaTitle>
            Ready for <span>Measurable Results</span>?
          </CtaTitle>
          <CtaText>
            Let's discuss how our data-driven performance marketing strategies can help you achieve your business goals.
          </CtaText>
          <Button to="/contact" variant="primary" size="large">
            Get Your Free Consultation
          </Button>
        </CtaContent>
      </CtaSection>

      <TestimonialsSection>
        <SectionHeading
          subtitle="Client Success Stories"
          title="What Our <span>Clients Say</span>"
          description="Don't just take our word for it. Hear from businesses that have transformed their results with Leadwisee."
          centered
        />

        <TestimonialSlider testimonials={testimonials} />

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Button to="/testimonials" rightIcon={<FaArrowRight />}>
            View All Testimonials
          </Button>
        </div>
      </TestimonialsSection>

      <ContactSection>
        <SectionHeading
          subtitle="Let's Connect"
          title="Ready to <span>Transform</span> Your Marketing?"
          description="Fill out the form below to discuss your goals with our team and learn how we can help."
          centered
        />

        <ContactForm />
      </ContactSection>
    </>
  );
};

export default Home;
import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import ContactForm from "../components/common/ContactForm";
import Button from "../components/common/Button";

const HeroSection = styled.section`
  padding: 6rem 0;
  background-color: ${props => props.theme.background};
`;

const HeroContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  
  @media (min-width: 1024px) {
    flex-direction: row;
    align-items: center;
  }
`;

const HeroContent = styled.div`
  flex: 1;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  
  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
  
  span {
    color: ${props => props.theme.primary};
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.125rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.textLight};
  line-height: 1.6;
  max-width: 600px;
`;

const HeroButtons = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const HeroFormContainer = styled.div`
  flex: 1;
  min-width: 300px;
  
  @media (min-width: 1024px) {
    max-width: 450px;
  }
`;

const HeroFormCard = styled(motion.div)`
  background-color: ${props => props.theme.body};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
`;

const ServicesSection = styled.section`
  padding: 5rem 0;
`;

const SectionTitle = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
`;

const SectionSubtitle = styled.p`
  font-size: 1.125rem;
  color: ${props => props.theme.textLight};
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3rem;
  line-height: 1.6;
`;

const ResultsSection = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.theme.backgroundSecondary};
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ResultCard = styled(motion.div)`
  background-color: ${props => props.theme.body};
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const ResultNumber = styled.h3`
  font-size: 3rem;
  font-weight: 700;
  color: ${props => props.theme.primary};
  margin-bottom: 1rem;
`;

const ResultText = styled.p`
  font-size: 1rem;
  color: ${props => props.theme.textLight};
`;

const CTASection = styled.section`
  padding: 5rem 0;
  background-color: ${props => props.theme.primary};
  color: white;
`;

const CTAContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 1.5rem;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-size: 2.25rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const CTADescription = styled.p`
  font-size: 1.125rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  line-height: 1.6;
`;

const FeatureSection = styled.section`
  padding: 5rem 0;
`;

const FeatureGrid = styled.div`
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

const FeatureCard = styled.div`
  padding: 1.5rem;
`;

const FeatureIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${props => `rgba(59, 130, 246, 0.1)`};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  color: ${props => props.theme.primary};
  font-size: 1.25rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${props => props.theme.textLight};
`;

const Home = () => {
  const results = [
    { number: "300%", text: "Average ROI for clients" },
    { number: "85%", text: "Increase in conversion rates" },
    { number: "150+", text: "Happy clients" },
    { number: "$5M+", text: "Ad spend managed" }
  ];
  
  return (
    <>
      <Helmet>
        <title>Leadwisee | Data-Driven Performance Marketing Agency</title>
        <meta name="description" content="Leadwisee is a performance marketing agency specializing in PPC, social media, and e-commerce marketing solutions that deliver measurable results." />
      </Helmet>
      
      {/* Hero Section */}
      <HeroSection>
        <HeroContainer>
          <HeroContent>
            <HeroTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Drive Growth with <span>Data-Driven</span> Marketing
            </HeroTitle>
            <HeroSubtitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We help businesses achieve measurable results through strategic performance marketing campaigns optimized for conversion.
            </HeroSubtitle>
            <HeroButtons
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button 
                to="/contact" 
                variant="primary" 
                size="large"
              >
                Get a Free Strategy
              </Button>
              <Button 
                to="/results" 
                variant="secondary" 
                size="large"
                rightIcon={<FiArrowRight />}
              >
                View Our Results
              </Button>
            </HeroButtons>
          </HeroContent>
          
          <HeroFormContainer>
            <HeroFormCard
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <ContactForm heading="Get a Free Marketing Audit" />
            </HeroFormCard>
          </HeroFormContainer>
        </HeroContainer>
      </HeroSection>
      
      {/* Results Section */}
      <ResultsSection>
        <div className="container">
          <SectionTitle>Proven Results</SectionTitle>
          <SectionSubtitle>
            Our data-driven approach has helped hundreds of businesses achieve exceptional growth and ROI.
          </SectionSubtitle>
          
          <ResultsGrid>
            {results.map((result, index) => (
              <ResultCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <ResultNumber>{result.number}</ResultNumber>
                <ResultText>{result.text}</ResultText>
              </ResultCard>
            ))}
          </ResultsGrid>
          
          <div className="text-center">
            <Button 
              to="/results" 
              variant="primary" 
              size="large"
              rightIcon={<FiArrowRight />}
            >
              View Detailed Results
            </Button>
          </div>
        </div>
      </ResultsSection>
      
      {/* Why Choose Us Section */}
      <FeatureSection>
        <div className="container">
          <SectionTitle>Why Choose Leadwisee</SectionTitle>
          <SectionSubtitle>
            We combine strategic thinking, creative solutions, and technical expertise to drive measurable business results.
          </SectionSubtitle>
          
          <FeatureGrid>
            <FeatureCard>
              <FeatureIcon>
                <FiCheck />
              </FeatureIcon>
              <FeatureTitle>Data-Driven Approach</FeatureTitle>
              <FeatureDescription>
                We leverage analytics and data insights to make informed decisions that maximize your marketing ROI.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>
                <FiCheck />
              </FeatureIcon>
              <FeatureTitle>Industry Expertise</FeatureTitle>
              <FeatureDescription>
                Our team has specialized experience across multiple industries, allowing us to implement proven strategies.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>
                <FiCheck />
              </FeatureIcon>
              <FeatureTitle>Transparent Reporting</FeatureTitle>
              <FeatureDescription>
                Clear, comprehensive reporting keeps you informed about your campaign performance and results.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>
                <FiCheck />
              </FeatureIcon>
              <FeatureTitle>Growth-Focused Strategy</FeatureTitle>
              <FeatureDescription>
                We focus on strategies that drive meaningful business growth, not just vanity metrics.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>
                <FiCheck />
              </FeatureIcon>
              <FeatureTitle>Continuous Optimization</FeatureTitle>
              <FeatureDescription>
                We constantly test and optimize campaigns to improve performance and adapt to market changes.
              </FeatureDescription>
            </FeatureCard>
            
            <FeatureCard>
              <FeatureIcon>
                <FiCheck />
              </FeatureIcon>
              <FeatureTitle>Dedicated Support</FeatureTitle>
              <FeatureDescription>
                Our client-focused approach ensures personalized attention and responsive communication.
              </FeatureDescription>
            </FeatureCard>
          </FeatureGrid>
        </div>
      </FeatureSection>
      
      {/* CTA Section */}
      <CTASection>
        <CTAContainer>
          <CTATitle>Ready to Transform Your Marketing?</CTATitle>
          <CTADescription>
            Let's discuss how our performance marketing strategies can help you achieve your business goals.
          </CTADescription>
          <Button 
            to="/contact" 
            variant="secondary" 
            size="large"
          >
            Schedule a Free Strategy Call
          </Button>
        </CTAContainer>
      </CTASection>
    </>
  );
};

export default Home;
