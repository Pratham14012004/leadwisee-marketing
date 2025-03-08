
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { FaCheckCircle, FaChartLine, FaUsers } from "react-icons/fa";

import SectionHeading from "../components/common/SectionHeading";
import FeatureCard from "../components/common/FeatureCard";
import TestimonialSlider from "../components/sections/TestimonialSlider";
import CaseStudyCard from "../components/common/CaseStudyCard";
import FaqAccordion from "../components/common/FaqAccordion";
import ContactForm from "../components/common/ContactForm";
import Button from "../components/common/Button";

const PageContainer = styled.div`
  padding: 0 1.5rem;
`;

const HeroSection = styled.section`
  position: relative;
  padding: 6rem 0;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.bgAlt};
  
  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  position: relative;
  z-index: 1;
`;

const ContentSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 1.5rem;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const CtaSection = styled.section`
  background-color: ${(props) => props.theme.colors.bgAlt};
  padding: 5rem 1.5rem;
  text-align: center;
  
  .container {
    max-width: 800px;
    margin: 0 auto;
  }
  
  h2 {
    margin-bottom: 1.5rem;
    font-size: 2.5rem;
    font-weight: 700;
  }
  
  p {
    margin-bottom: 2rem;
    font-size: 1.1rem;
    opacity: 0.9;
  }
`;

const StrategySection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 1.5rem;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const StrategyCard = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.bgAlt};
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  ul {
    padding-left: 1.5rem;
    margin-bottom: 1.5rem;
    
    li {
      margin-bottom: 0.8rem;
      line-height: 1.6;
      position: relative;
    }
  }
  
  .why-section {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    
    h4 {
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    
    p {
      line-height: 1.6;
    }
  }
`;

const CaseStudySection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 1.5rem;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
  
  .case-studies-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
  }
`;

const BenefitsSection = styled.section`
  background-color: ${(props) => props.theme.colors.bgAlt};
  padding: 5rem 0;
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
  
  .benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
  }
  
  .benefit-card {
    background-color: ${(props) => props.theme.colors.background};
    border-radius: 12px;
    padding: 2rem;
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    }
    
    h3 {
      font-size: 1.3rem;
      margin-bottom: 1rem;
      font-weight: 600;
    }
    
    p {
      line-height: 1.6;
    }
  }
`;

const FaqSection = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 5rem 1.5rem;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const ContactSection = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 5rem 1.5rem;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const IndustryTemplate = ({ industry }) => {
  const { slug } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  if (!industry) {
    return (
      <PageContainer>
        <ContentSection>
          <SectionHeading
            title="Industry Not Found"
            description="The industry page you're looking for doesn't seem to exist."
            centered
          />
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Button to="/industries" variant="primary">
              View All Industries
            </Button>
          </div>
        </ContentSection>
      </PageContainer>
    );
  }
  
  return (
    <>
      <Helmet>
        <title>{industry.title} | Leadwisee</title>
        <meta name="description" content={industry.description} />
      </Helmet>
      
      <PageContainer>
        <HeroSection>
          <HeroContent>
            <SectionHeading
              subtitle={industry.subtitle}
              title={industry.title}
              description={industry.description}
              centered
            />
          </HeroContent>
        </HeroSection>
        
        <ContentSection>
          <SectionHeading
            subtitle="Our Expertise"
            title={`${industry.name} <span>Marketing Services</span>`}
            description={`Discover how our specialized ${industry.name} marketing strategies can help your business grow.`}
          />
          
          <FeatureGrid>
            {industry.services.map((service, index) => (
              <FeatureCard
                key={index}
                title={service.title}
                description={service.description}
                icon={<FaChartLine />}
                delay={index * 0.1}
              />
            ))}
          </FeatureGrid>
        </ContentSection>
        
        <BenefitsSection>
          <div className="container">
            <SectionHeading
              subtitle="Benefits"
              title={`Why Choose Us for Your <span>${industry.name}</span> Marketing`}
              description="We deliver measurable results that drive growth for your business."
              centered
            />
            
            <div className="benefits-grid">
              {industry.benefits.map((benefit, index) => (
                <motion.div
                  className="benefit-card"
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </BenefitsSection>
        
        {industry.strategies && (
          <StrategySection>
            <SectionHeading
              subtitle="Marketing Strategies"
              title={`Data-Driven ${industry.name} <span>Marketing Strategies</span>`}
              description={`Our proven marketing strategies tailored specifically for the ${industry.name} industry.`}
            />
            
            {industry.strategies.map((strategy, index) => (
              <StrategyCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3>{strategy.title}</h3>
                <ul>
                  {strategy.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                
                {strategy.why && (
                  <div className="why-section">
                    <h4>Why It Works:</h4>
                    <p>{strategy.why}</p>
                  </div>
                )}
              </StrategyCard>
            ))}
          </StrategySection>
        )}
        
        <CaseStudySection>
          <SectionHeading
            subtitle="Success Stories"
            title={`${industry.name} <span>Marketing Case Studies</span>`}
            description={`See how we've helped other ${industry.name} businesses achieve remarkable results.`}
          />
          
          <div className="case-studies-grid">
            {industry.caseStudies.map((caseStudy, index) => (
              <CaseStudyCard
                key={index}
                title={caseStudy.title}
                description={caseStudy.description}
                results={caseStudy.results}
                delay={index * 0.1}
              />
            ))}
          </div>
        </CaseStudySection>
        
        <CtaSection>
          <div className="container">
            <h2>Ready to Grow Your {industry.name} Business?</h2>
            <p>
              Let's create a customized marketing strategy that drives real results for your {industry.name} business.
            </p>
            <Button to="/contact" variant="primary" size="large">
              Get Your Free Consultation
            </Button>
          </div>
        </CtaSection>
        
        {industry.testimonials && (
          <ContentSection>
            <SectionHeading
              subtitle="Client Testimonials"
              title={`What Our ${industry.name} <span>Clients Say</span>`}
              description="Don't just take our word for it. Hear from our satisfied clients."
              centered
            />
            
            <TestimonialSlider testimonials={industry.testimonials} />
          </ContentSection>
        )}
        
        {industry.faqs && (
          <FaqSection>
            <SectionHeading
              subtitle="FAQs"
              title={`Frequently Asked <span>Questions</span>`}
              description={`Common questions about our ${industry.name} marketing services.`}
              centered
            />
            
            <FaqAccordion faqs={industry.faqs} />
          </FaqSection>
        )}
        
        <ContactSection>
          <SectionHeading
            subtitle="Let's Connect"
            title={`Grow Your ${industry.name} <span>Business Today</span>`}
            description="Fill out the form below to speak with one of our marketing experts."
            centered
          />
          
          <ContactForm />
        </ContactSection>
      </PageContainer>
    </>
  );
};

export default IndustryTemplate;
