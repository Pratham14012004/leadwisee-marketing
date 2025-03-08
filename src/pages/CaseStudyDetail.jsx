
import {React, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import motion from 'framer-motion';
import Helmet from 'react-helmet';
import { FaArrowLeft, FaCheck } from 'react-icons/fa';

import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const [caseStudy, setCaseStudy] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real app, you would fetch the case study data from an API
    // For this example, we'll use mock data
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setCaseStudy({
        id: slug,
        title: 'Boosting E-commerce Revenue Through Strategic PPC Management',
        client: 'Fashion Retailer',
        industry: 'E-commerce',
        service: 'PPC Marketing',
        overview: 'Our client, a mid-sized online fashion retailer, was struggling with high ad spend and low return on ad spend (ROAS) from their Google and Facebook ad campaigns. They approached Leadwisee to optimize their PPC strategy and improve their e-commerce performance.',
        challenge: 'The client was experiencing a ROAS of only 1.8x, well below industry benchmarks. Their campaigns were broadly targeted with generic keywords, resulting in high click costs and low conversion rates. Additionally, their product feed was poorly optimized for Google Shopping, limiting their visibility for high-intent searches.',
        approach: [
          'Conducted comprehensive keyword research to identify high-converting, lower competition terms',
          'Restructured campaign architecture with tightly themed ad groups',
          'Implemented advanced audience targeting based on past purchase behavior',
          'Optimized product titles and descriptions for Google Shopping campaigns',
          'Developed a dynamic remarketing strategy to capture abandoned carts',
          'Created A/B tests for ad copy and landing pages to improve conversion rates'
        ],
        results: [
          { metric: 'ROAS', value: '4.3x', change: '+139%' },
          { metric: 'Revenue', value: '$245,000', change: '+112%' },
          { metric: 'Conversion Rate', value: '3.8%', change: '+73%' },
          { metric: 'Cost Per Acquisition', value: '$16.42', change: '-42%' }
        ],
        testimonial: {
          quote: "Leadwisee transformed our digital advertising strategy. Their methodical approach and constant optimization resulted in more than doubling our return on ad spend. We've been able to scale our business significantly as a result of their work.",
          author: "Sarah Johnson",
          position: "Marketing Director"
        },
        featuredImage: "https://via.placeholder.com/1200x600",
        images: [
          "https://via.placeholder.com/800x500",
          "https://via.placeholder.com/800x500",
          "https://via.placeholder.com/800x500"
        ]
      });
      setLoading(false);
    }, 500);
  }, [slug]);

  if (loading) {
    return (
      <Container>
        <div className="loading">Loading case study...</div>
      </Container>
    );
  }

  if (!caseStudy) {
    return (
      <Container>
        <div className="error">Case study not found</div>
        <Button to="/case-studies" leftIcon={<FaArrowLeft />}>
          Back to Case Studies
        </Button>
      </Container>
    );
  }

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>{`${caseStudy.title} | Leadwisee Case Study`}</title>
        <meta name="description" content={`Learn how Leadwisee helped ${caseStudy.client} achieve ${caseStudy.results[0].change} improvement in ${caseStudy.results[0].metric} through strategic ${caseStudy.service}.`} />
      </Helmet>

      <BackLink to="/case-studies">
        <FaArrowLeft /> Back to Case Studies
      </BackLink>

      <Hero>
        <div className="overlay"></div>
        <img src={caseStudy.featuredImage} alt={caseStudy.title} />
        <div className="content">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="meta">
              <span className="industry">{caseStudy.industry}</span>
              <span className="service">{caseStudy.service}</span>
            </div>
            <h1>{caseStudy.title}</h1>
            <p className="client">Client: {caseStudy.client}</p>
          </motion.div>
        </div>
      </Hero>

      <Content>
        <MainContent>
          <Section>
            <SectionHeading>Overview</SectionHeading>
            <p>{caseStudy.overview}</p>
          </Section>

          <Section>
            <SectionHeading>The Challenge</SectionHeading>
            <p>{caseStudy.challenge}</p>
          </Section>

          <Section>
            <SectionHeading>Our Approach</SectionHeading>
            <ApproachList>
              {caseStudy.approach.map((item, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <FaCheck />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ApproachList>
          </Section>

          <Section>
            <SectionHeading>Visual Results</SectionHeading>
            <ImageGallery>
              {caseStudy.images.map((image, index) => (
                <motion.div 
                  className="image-container" 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <img src={image} alt={`Case study visual ${index + 1}`} />
                </motion.div>
              ))}
            </ImageGallery>
          </Section>
        </MainContent>

        <Sidebar>
          <ResultsCard>
            <h3>Results</h3>
            <div className="results-grid">
              {caseStudy.results.map((result, index) => (
                <motion.div 
                  className="result-item" 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="value">{result.value}</div>
                  <div className="metric">{result.metric}</div>
                  <div className="change">{result.change}</div>
                </motion.div>
              ))}
            </div>
          </ResultsCard>

          <TestimonialCard>
            <div className="quote">"{caseStudy.testimonial.quote}"</div>
            <div className="author">
              <span className="name">{caseStudy.testimonial.author}</span>
              <span className="position">{caseStudy.testimonial.position}</span>
            </div>
          </TestimonialCard>

          <ServiceCard>
            <h3>Interested in similar results?</h3>
            <p>Learn more about our {caseStudy.service} services and how we can help your business achieve similar outcomes.</p>
            <Button 
              to={`/services/${caseStudy.service.toLowerCase().replace(/\s+/g, '-')}`}
              variant="primary"
              fullWidth
            >
              View Service Details
            </Button>
          </ServiceCard>
        </Sidebar>
      </Content>

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
  
  .loading, .error {
    text-align: center;
    padding: 5rem 0;
    font-size: 1.2rem;
  }
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  margin: 2rem 0;
  color: ${props => props.theme.textLight};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
  
  svg {
    margin-right: 0.5rem;
  }
  
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const Hero = styled.div`
  position: relative;
  height: 500px;
  border-radius: 0.5rem;
  overflow: hidden;
  margin-bottom: 3rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7));
    z-index: 1;
  }
  
  .content {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 3rem;
    color: white;
    z-index: 2;
    
    .meta {
      display: flex;
      gap: 1rem;
      margin-bottom: 1rem;
      
      span {
        background: rgba(255, 255, 255, 0.2);
        padding: 0.3rem 0.8rem;
        border-radius: 2rem;
        font-size: 0.9rem;
      }
    }
    
    h1 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      max-width: 800px;
    }
    
    .client {
      font-size: 1.2rem;
      opacity: 0.9;
    }
  }
  
  @media (max-width: 768px) {
    height: 400px;
    
    .content {
      padding: 2rem;
      
      h1 {
        font-size: 2rem;
      }
    }
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 3rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const MainContent = styled.div``;

const Sidebar = styled.div`
  @media (max-width: 1024px) {
    order: -1;
  }
`;

const Section = styled.section`
  margin-bottom: 3rem;
  
  p {
    line-height: 1.7;
    color: ${props => props.theme.textMedium};
  }
`;

const ApproachList = styled.ul`
  list-style: none;
  padding: 0;
  
  li {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1.2rem;
    
    svg {
      color: ${props => props.theme.primary};
      margin-right: 1rem;
      margin-top: 0.25rem;
      flex-shrink: 0;
    }
    
    span {
      line-height: 1.6;
    }
  }
`;

const ImageGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  
  .image-container {
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s;
    }
    
    &:hover img {
      transform: scale(1.05);
    }
  }
`;

const ResultsCard = styled.div`
  background: ${props => props.theme.background};
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
  
  h3 {
    margin-bottom: 1.5rem;
    position: relative;
    padding-bottom: 0.75rem;
    
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 50px;
      height: 3px;
      background: ${props => props.theme.primary};
    }
  }
  
  .results-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    
    .result-item {
      .value {
        font-size: 1.8rem;
        font-weight: 700;
        color: ${props => props.theme.primary};
        margin-bottom: 0.3rem;
      }
      
      .metric {
        font-weight: 500;
        margin-bottom: 0.3rem;
      }
      
      .change {
        color: #2ecc71;
        font-weight: 500;
      }
    }
  }
`;

const TestimonialCard = styled.div`
  background: ${props => props.theme.primary};
  color: white;
  border-radius: 0.5rem;
  padding: 2rem;
  margin-bottom: 2rem;
  
  .quote {
    font-style: italic;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    position: relative;
    
    &:before {
      content: '"';
      font-size: 4rem;
      position: absolute;
      top: -1.5rem;
      left: -0.5rem;
      opacity: 0.2;
    }
  }
  
  .author {
    .name {
      display: block;
      font-weight: 600;
      margin-bottom: 0.3rem;
    }
    
    .position {
      font-size: 0.9rem;
      opacity: 0.8;
    }
  }
`;

const ServiceCard = styled.div`
  background: ${props => props.theme.background};
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  
  h3 {
    margin-bottom: 1rem;
  }
  
  p {
    margin-bottom: 1.5rem;
    color: ${props => props.theme.textMedium};
  }
`;

const CTASection = styled.div`
  background: ${props => props.theme.gradient};
  border-radius: 0.5rem;
  padding: 4rem;
  margin-top: 4rem;
  text-align: center;
  
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

export default CaseStudyDetail;
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaChartLine, FaUserCheck, FaChartBar, FaCheckCircle, FaExclamationTriangle, FaTools, FaArrowRight } from 'react-icons/fa';

import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import ContactForm from '../components/common/ContactForm';

const CaseStudyContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 2rem 1.5rem 5rem;
`;

const CaseStudyHero = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  padding: 3rem 0;
`;

const HeroImage = styled.div`
  height: 400px;
  margin-bottom: 4rem;
  border-radius: 12px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const IndustriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 2rem;
`;

const IndustryTag = styled.div`
  background-color: ${props => props.theme.colors.primary};
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
`;

const ServiceTag = styled.div`
  background-color: ${props => props.theme.colors.bgAlt};
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  font-weight: 500;
`;

const Section = styled.section`
  margin-bottom: 4rem;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 2fr 1fr;
  }
`;

const Content = styled.div`
  h3 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    font-weight: 700;
  }
  
  h4 {
    font-size: 1.3rem;
    margin: 2rem 0 1rem;
    font-weight: 600;
  }
  
  p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
    font-size: 1.1rem;
  }
  
  ul {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.8rem;
      line-height: 1.6;
    }
  }
  
  .client-quote {
    background-color: ${props => props.theme.colors.bgAlt};
    padding: 2rem;
    border-radius: 12px;
    margin: 2rem 0;
    position: relative;
    font-style: italic;
    line-height: 1.8;
    
    &:before {
      content: '"';
      position: absolute;
      top: 0.5rem;
      left: 1rem;
      font-size: 4rem;
      color: ${props => props.theme.colors.primary};
      opacity: 0.2;
    }
    
    .quote-attribution {
      margin-top: 1.5rem;
      font-style: normal;
      font-weight: 600;
    }
  }
`;

const Sidebar = styled.div`
  background-color: ${props => props.theme.colors.bgAlt};
  padding: 2rem;
  border-radius: 12px;
  height: fit-content;
  
  h4 {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }
  
  .sidebar-section {
    margin-bottom: 2rem;
    
    h5 {
      font-size: 1.1rem;
      margin-bottom: 1rem;
      font-weight: 500;
      display: flex;
      align-items: center;
      
      svg {
        margin-right: 0.5rem;
        color: ${props => props.theme.colors.primary};
      }
    }
    
    ul {
      padding-left: 1.5rem;
      
      li {
        margin-bottom: 0.8rem;
      }
    }
    
    .stat {
      margin-bottom: 1.5rem;
      
      .stat-value {
        font-size: 2rem;
        font-weight: 700;
        color: ${props => props.theme.colors.primary};
        margin-bottom: 0.3rem;
      }
      
      .stat-label {
        font-size: 0.9rem;
      }
    }
  }
`;

const ResultsSection = styled.div`
  margin: 4rem 0;
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ResultCard = styled(motion.div)`
  background-color: ${props => props.theme.colors.bgAlt};
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  border-top: 4px solid ${props => props.theme.colors.primary};
  
  .result-value {
    font-size: 2.5rem;
    font-weight: 700;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 1rem;
  }
  
  .result-label {
    font-size: 1.1rem;
    line-height: 1.4;
  }
`;

const StrategySection = styled.div`
  margin: 4rem 0;
`;

const ProcessSteps = styled.div`
  margin: 3rem 0;
`;

const ProcessStep = styled(motion.div)`
  display: flex;
  margin-bottom: 2rem;
  
  .step-number {
    flex-shrink: 0;
    width: 50px;
    height: 50px;
    background-color: ${props => props.theme.colors.primary};
    color: #fff;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    font-weight: 700;
    margin-right: 1.5rem;
  }
  
  .step-content {
    padding-top: 0.5rem;
    
    h4 {
      font-size: 1.3rem;
      margin-bottom: 0.8rem;
      font-weight: 600;
    }
    
    p {
      line-height: 1.6;
    }
  }
`;

const ChallengesSection = styled.div`
  margin: 4rem 0;
`;

const ChallengesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ChallengeCard = styled(motion.div)`
  background-color: ${props => props.theme.colors.bgAlt};
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid ${props => props.theme.colors.primary};
  
  h4 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    
    svg {
      margin-right: 0.8rem;
      color: ${props => props.theme.colors.primary};
    }
  }
  
  p {
    line-height: 1.6;
  }
`;

const SolutionSection = styled.div`
  margin: 4rem 0;
`;

const TestimonialSection = styled.div`
  margin: 4rem 0;
  background-color: ${props => props.theme.colors.bgAlt};
  padding: 3rem 2rem;
  border-radius: 12px;
  text-align: center;
  
  .quote {
    font-size: 1.3rem;
    font-style: italic;
    line-height: 1.8;
    max-width: 800px;
    margin: 0 auto 2rem;
  }
  
  .client {
    .client-image {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto 1rem;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    
    .client-name {
      font-size: 1.2rem;
      font-weight: 600;
      margin-bottom: 0.3rem;
    }
    
    .client-title {
      font-size: 0.9rem;
      color: ${props => props.theme.colors.textSecondary};
    }
  }
`;

const RelatedCaseStudies = styled.div`
  margin: 4rem 0;
`;

const RelatedGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const RelatedCard = styled.div`
  background-color: ${props => props.theme.colors.bgAlt};
  border-radius: 12px;
  overflow: hidden;
  
  .related-image {
    height: 200px;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  .related-content {
    padding: 1.5rem;
    
    .industry {
      color: ${props => props.theme.colors.primary};
      font-size: 0.9rem;
      font-weight: 500;
      margin-bottom: 0.5rem;
    }
    
    h4 {
      font-size: 1.3rem;
      margin-bottom: 1rem;
      font-weight: 600;
    }
    
    p {
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }
  }
`;

const ContactSection = styled.div`
  margin-top: 6rem;
`;

// Mock case study data
const caseStudies = {
  'saas-lead-generation': {
    title: 'How We Increased Demo Bookings by 187% for a B2B SaaS Platform',
    industry: 'SaaS',
    services: ['PPC Advertising', 'Conversion Rate Optimization', 'Content Marketing'],
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    clientName: 'CloudSecure Solutions',
    clientDescription: 'Enterprise cybersecurity SaaS platform specializing in data protection and compliance solutions.',
    challenges: [
      {
        title: 'High Cost Per Acquisition',
        description: 'The client was spending an average of $370 to acquire each demo request, which was unsustainable for their growth targets.'
      },
      {
        title: 'Low Conversion Rates',
        description: 'Website traffic was healthy, but only 1.2% of visitors were converting to demo requests.'
      },
      {
        title: 'Unqualified Leads',
        description: 'Many demo requests were from companies too small to benefit from their enterprise solution, wasting sales team resources.'
      },
      {
        title: 'Unclear Messaging',
        description: 'Their value proposition wasn\'t effectively communicated, especially regarding compliance benefits.'
      }
    ],
    solutions: [
      {
        step: 1,
        title: 'Comprehensive PPC Restructuring',
        description: 'We completely restructured their Google Ads and LinkedIn campaigns, implementing tight audience targeting based on company size, industry, and job role to focus exclusively on enterprise-level prospects.'
      },
      {
        step: 2,
        title: 'Landing Page Optimization Program',
        description: 'We developed industry-specific landing pages that addressed the unique compliance challenges in finance, healthcare, and government sectors, increasing relevance for high-value prospects.'
      },
      {
        step: 3,
        title: 'Conversion Path Refinement',
        description: 'Through extensive user testing and heat mapping, we identified and removed friction points in the demo request process, reducing the form from 12 fields to 5 essential qualification questions.'
      },
      {
        step: 4,
        title: 'Authority Content Development',
        description: 'We created a series of in-depth white papers and case studies demonstrating quantifiable compliance ROI, which were used as high-value lead magnets in the marketing funnel.'
      }
    ],
    results: [
      {
        value: '187%',
        label: 'Increase in qualified demo bookings'
      },
      {
        value: '42%',
        label: 'Reduction in cost per acquisition'
      },
      {
        value: '$1.2M',
        label: 'New pipeline value generated'
      }
    ],
    stats: {
      beforeCPA: '$370',
      afterCPA: '$215',
      beforeConversion: '1.2%',
      afterConversion: '3.4%',
      beforeQualRate: '45%',
      afterQualRate: '82%'
    },
    implementation: 'The implementation phase occurred over 90 days, beginning with the PPC restructuring in the first month, followed by landing page optimization in month two, and conversion path refinement alongside content development in month three. We conducted weekly optimization sessions and A/B testing throughout the process, making data-driven adjustments to improve performance.',
    testimonial: {
      quote: 'Leadwisee's methodical approach to optimizing our entire lead generation funnel has transformed our business. Not only are we getting nearly three times the demo requests, but the quality of these leads has dramatically improved. Our sales team is now able to focus on prospects that are actually ready to buy, which has shortened our sales cycle and improved close rates.',
      name: 'Jennifer Richards',
      title: 'VP of Marketing, CloudSecure Solutions',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80'
    },
    relatedCaseStudies: [
      {
        id: 'b2b-account-based-marketing',
        title: 'Account-Based Marketing: Targeting Fortune 500 Decision-Makers',
        industry: 'B2B',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80',
        description: 'How we helped a B2B service provider reach and convert C-suite executives at target enterprise accounts.'
      },
      {
        id: 'healthcare-patient-acquisition',
        title: 'HIPAA-Compliant Marketing for Multi-Location Medical Practice',
        industry: 'Healthcare',
        image: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
        description: 'How we helped a healthcare provider improve patient acquisition while maintaining strict regulatory compliance.'
      }
    ]
  },
  'ecommerce-revenue-growth': {
    title: 'Scaling E-Commerce Revenue: $4.2M Growth in 6 Months',
    industry: 'E-Commerce',
    services: ['PPC Advertising', 'Social Media Marketing', 'Email Automation'],
    image: 'https://images.unsplash.com/photo-1522204605090-c9a2c7c8dfe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
    clientName: 'Urban Home Essentials',
    clientDescription: 'Direct-to-consumer home goods brand specializing in premium kitchenware and home décor.',
    challenges: [
      {
        title: 'Plateaued Growth',
        description: 'After initial success, the client had reached a plateau in revenue growth despite increasing ad spend.'
      },
      {
        title: 'Rising Acquisition Costs',
        description: 'Increasing competition had driven up customer acquisition costs by 47% in the previous year.'
      },
      {
        title: 'Poor ROAS',
        description: 'Return on ad spend had declined to 1.8x, threatening profitability and limiting scaling potential.'
      },
      {
        title: 'Low Repeat Purchase Rate',
        description: 'Only 24% of customers made a second purchase within 6 months of their initial order.'
      }
    ],
    solutions: [
      {
        step: 1,
        title: 'Advanced Shopping Campaign Restructure',
        description: 'We implemented a comprehensive restructuring of Google Shopping campaigns using an advanced SKU-level bidding strategy based on product margin and conversion likelihood.'
      },
      {
        step: 2,
        title: 'Dynamic Product Retargeting',
        description: 'We developed sophisticated dynamic retargeting campaigns across Facebook, Instagram, and the Google Display Network that showed visitors the exact products they viewed plus complementary items.'
      },
      {
        step: 3,
        title: 'Personalized Email Journey Development',
        description: 'We created 15 distinct email automation sequences triggered by specific customer behaviors, including browse abandonment, cart abandonment, and post-purchase sequences with personalized recommendations.'
      },
      {
        step: 4,
        title: 'Customer Lifetime Value Optimization',
        description: 'We implemented a CLV-based bidding strategy that allocated higher acquisition budgets for customer segments with historically higher lifetime value.'
      }
    ],
    results: [
      {
        value: '215%',
        label: 'Increase in monthly revenue'
      },
      {
        value: '47%',
        label: 'Improvement in ROAS'
      },
      {
        value: '32%',
        label: 'Higher average order value'
      }
    ],
    stats: {
      beforeROAS: '1.8x',
      afterROAS: '3.2x',
      beforeAOV: '$85',
      afterAOV: '$112',
      beforeRepeat: '24%',
      afterRepeat: '41%'
    },
    implementation: 'The implementation was carried out in phases over a six-month period. We began with the Shopping campaign restructure in month one, followed by dynamic retargeting implementation in months two and three. The email automation sequences were developed and launched in months three and four, with the CLV-based bidding strategy implemented in month five. Throughout the process, we conducted continuous testing and optimization, making weekly adjustments based on performance data.',
    testimonial: {
      quote: 'The strategic approach Leadwisee took with our e-commerce marketing has completely transformed our business. Not only did they significantly increase our revenue and ROAS, but they also helped us build a sustainable growth engine through improved customer retention and higher average order values. The results have exceeded our expectations in every way.',
      name: 'Michael Thompson',
      title: 'Founder & CEO, Urban Home Essentials',
      image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2570&q=80'
    },
    relatedCaseStudies: [
      {
        id: 'retail-omnichannel-strategy',
        title: 'Omnichannel Marketing Strategy for National Retail Chain',
        industry: 'Retail',
        image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
        description: 'Bridging online and offline experiences to increase both e-commerce sales and in-store foot traffic.'
      },
      {
        id: 'b2b-account-based-marketing',
        title: 'Account-Based Marketing: Targeting Fortune 500 Decision-Makers',
        industry: 'B2B',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80',
        description: 'How we helped a B2B service provider reach and convert C-suite executives at target enterprise accounts.'
      }
    ]
  },
  'real-estate-lead-generation': {
    title: 'Luxury Real Estate Marketing: 156% More Qualified Leads',
    industry: 'Real Estate',
    services: ['PPC Advertising', 'SEO', 'Social Media Marketing'],
    image: 'https://images.unsplash.com/photo-1565402170291-8491f14678db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    clientName: 'Elite Properties Group',
    clientDescription: 'Luxury real estate brokerage specializing in high-end residential properties in affluent neighborhoods.',
    challenges: [
      {
        title: 'Ineffective Targeting',
        description: 'The client was generating many leads but most were for properties far below their $1M+ sweet spot.'
      },
      {
        title: 'Poor Quality Lead Generation',
        description: 'Less than 20% of leads were converting to showings, wasting agents\' time and resources.'
      },
      {
        title: 'Limited Digital Visibility',
        description: 'Despite their strong offline reputation, they had poor visibility in organic search for luxury property terms.'
      },
      {
        title: 'Inefficient Ad Spend',
        description: 'Their previous marketing efforts had focused on quantity over quality, resulting in a high cost per qualified lead.'
      }
    ],
    solutions: [
      {
        step: 1,
        title: 'High-Net-Worth Individual Targeting',
        description: 'We developed sophisticated audience targeting across Google, Facebook, and Instagram using income thresholds, interests, and behavioral indicators associated with luxury home buyers.'
      },
      {
        step: 2,
        title: 'Luxury Property SEO Campaign',
        description: 'We implemented a comprehensive SEO strategy focused on neighborhood-specific luxury property terms, creating in-depth area guides and property showcases.'
      },
      {
        step: 3,
        title: 'Virtual Tour Lead Generation',
        description: 'We created a virtual tour lead magnet strategy, offering immersive property tours in exchange for detailed qualification information.'
      },
      {
        step: 4,
        title: 'Social Proof Marketing',
        description: 'We developed a social media campaign highlighting successful sales in target neighborhoods, including testimonials from satisfied clients in similar demographics.'
      }
    ],
    results: [
      {
        value: '156%',
        label: 'Increase in qualified property inquiries'
      },
      {
        value: '42%',
        label: 'More seller valuation requests'
      },
      {
        value: '$14.5M',
        label: 'Additional sales volume'
      }
    ],
    stats: {
      beforeQualRate: '18%',
      afterQualRate: '53%',
      beforeLeadCost: '$420',
      afterLeadCost: '$175',
      beforeShowingRate: '22%',
      afterShowingRate: '64%'
    },
    implementation: 'The implementation process spanned four months, beginning with the audience targeting refinement in Google Ads and Facebook. Concurrently, we launched the SEO campaign with the development of neighborhood guides and luxury property content. In month two, we implemented the virtual tour lead generation strategy, developing high-quality virtual experiences for selected properties. The social proof campaign was launched in month three, featuring success stories and testimonials from the client\'s luxury property transactions.',
    testimonial: {
      quote: 'The difference in lead quality has been night and day since working with Leadwisee. Before, our agents were wasting time with unqualified prospects who couldn't afford our properties. Now, almost every lead is a serious buyer or seller in our target price range. The increase in efficiency has allowed us to focus on providing exceptional service to clients who are ready to transact.',
      name: 'Alexandra Bennett',
      title: 'Managing Partner, Elite Properties Group',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2576&q=80'
    },
    relatedCaseStudies: [
      {
        id: 'healthcare-patient-acquisition',
        title: 'HIPAA-Compliant Marketing for Multi-Location Medical Practice',
        industry: 'Healthcare',
        image: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
        description: 'How we helped a healthcare provider improve patient acquisition while maintaining strict regulatory compliance.'
      },
      {
        id: 'b2b-account-based-marketing',
        title: 'Account-Based Marketing: Targeting Fortune 500 Decision-Makers',
        industry: 'B2B',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80',
        description: 'How we helped a B2B service provider reach and convert C-suite executives at target enterprise accounts.'
      }
    ]
  },
  // Additional case studies would be defined here
};

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // Scroll to top on component mount or slug change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);
  
  // Get case study data based on slug
  const caseStudy = caseStudies[slug];
  
  // If case study not found, redirect to case studies page
  if (!caseStudy) {
    useEffect(() => {
      navigate('/case-studies');
    }, []);
    return null;
  }
  
  return (
    <>
      <Helmet>
        <title>{caseStudy.title} | Leadwisee Case Study</title>
        <meta 
          name="description" 
          content={`Learn how Leadwisee helped ${caseStudy.clientName} achieve remarkable results through data-driven performance marketing strategies.`}
        />
      </Helmet>

      <CaseStudyHero>
        <SectionHeading
          subtitle={`${caseStudy.industry} Case Study`}
          title={caseStudy.title}
          description={`How we helped ${caseStudy.clientName} achieve remarkable results through data-driven performance marketing strategies.`}
          centered
        />
        
        <IndustriesContainer>
          <IndustryTag>{caseStudy.industry}</IndustryTag>
          {caseStudy.services.map((service, index) => (
            <ServiceTag key={index}>{service}</ServiceTag>
          ))}
        </IndustriesContainer>
      </CaseStudyHero>

      <CaseStudyContainer>
        <HeroImage>
          <img src={caseStudy.image} alt={caseStudy.title} />
        </HeroImage>

        <ContentGrid>
          <Content>
            <Section>
              <h3>Client Overview</h3>
              <p>
                {caseStudy.clientName} is a {caseStudy.clientDescription} Before partnering with Leadwisee, they were facing significant challenges in their digital marketing efforts that were limiting their growth potential and efficiency.
              </p>
              
              <div className="client-quote">
                "We knew we needed to transform our approach to digital marketing, but weren't sure where to start given the complexity of our goals and target audience."
                <div className="quote-attribution">— Initial client consultation</div>
              </div>
            </Section>

            <ChallengesSection>
              <h3>Challenges</h3>
              <p>
                {caseStudy.clientName} came to us with several key challenges that were hindering their marketing performance:
              </p>
              
              <ChallengesGrid>
                {caseStudy.challenges.map((challenge, index) => (
                  <ChallengeCard
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <h4>
                      <FaExclamationTriangle /> {challenge.title}
                    </h4>
                    <p>{challenge.description}</p>
                  </ChallengeCard>
                ))}
              </ChallengesGrid>
            </ChallengesSection>

            <SolutionSection>
              <h3>Our Solution</h3>
              <p>
                After a comprehensive analysis of {caseStudy.clientName}'s business, target audience, and competitive landscape, we developed a strategic marketing plan designed to overcome their specific challenges and achieve their growth objectives.
              </p>
              
              <ProcessSteps>
                {caseStudy.solutions.map((solution, index) => (
                  <ProcessStep
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="step-number">{solution.step}</div>
                    <div className="step-content">
                      <h4>{solution.title}</h4>
                      <p>{solution.description}</p>
                    </div>
                  </ProcessStep>
                ))}
              </ProcessSteps>
              
              <h4>Implementation</h4>
              <p>{caseStudy.implementation}</p>
            </SolutionSection>
          </Content>
          
          <Sidebar>
            <div className="sidebar-section">
              <h5><FaChartLine /> Results At A Glance</h5>
              {caseStudy.results.map((result, index) => (
                <div className="stat" key={index}>
                  <div className="stat-value">{result.value}</div>
                  <div className="stat-label">{result.label}</div>
                </div>
              ))}
            </div>
            
            <div className="sidebar-section">
              <h5><FaChartBar /> Before & After</h5>
              <ul>
                <li><strong>Cost Per Acquisition:</strong> {caseStudy.stats.beforeCPA} → {caseStudy.stats.afterCPA}</li>
                <li><strong>Conversion Rate:</strong> {caseStudy.stats.beforeConversion} → {caseStudy.stats.afterConversion}</li>
                <li><strong>Lead Quality Rate:</strong> {caseStudy.stats.beforeQualRate} → {caseStudy.stats.afterQualRate}</li>
              </ul>
            </div>
            
            <div className="sidebar-section">
              <h5><FaTools /> Services Utilized</h5>
              <ul>
                {caseStudy.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
            
            <div className="sidebar-section">
              <Button 
                to="/contact" 
                variant="primary"
                fullWidth
              >
                Discuss Your Project
              </Button>
            </div>
          </Sidebar>
        </ContentGrid>

        <ResultsSection>
          <SectionHeading
            subtitle="The Impact"
            title="Measurable <span>Results</span>"
            description={`Here's what our partnership helped ${caseStudy.clientName} achieve:`}
            centered
          />
          
          <ResultsGrid>
            {caseStudy.results.map((result, index) => (
              <ResultCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="result-value">{result.value}</div>
                <div className="result-label">{result.label}</div>
              </ResultCard>
            ))}
          </ResultsGrid>
        </ResultsSection>

        <TestimonialSection>
          <div className="quote">
            "{caseStudy.testimonial.quote}"
          </div>
          <div className="client">
            <div className="client-image">
              <img src={caseStudy.testimonial.image} alt={caseStudy.testimonial.name} />
            </div>
            <div className="client-name">{caseStudy.testimonial.name}</div>
            <div className="client-title">{caseStudy.testimonial.title}</div>
          </div>
        </TestimonialSection>

        <RelatedCaseStudies>
          <SectionHeading
            subtitle="Explore More"
            title="Related <span>Case Studies</span>"
            description="Discover how we've helped other organizations overcome similar challenges."
            centered
          />
          
          <RelatedGrid>
            {caseStudy.relatedCaseStudies.map((related, index) => (
              <RelatedCard key={index}>
                <div className="related-image">
                  <img src={related.image} alt={related.title} />
                </div>
                <div className="related-content">
                  <div className="industry">{related.industry}</div>
                  <h4>{related.title}</h4>
                  <p>{related.description}</p>
                  <Button 
                    to={`/case-studies/${related.id}`}
                    variant="text"
                    rightIcon={<FaArrowRight />}
                  >
                    Read Case Study
                  </Button>
                </div>
              </RelatedCard>
            ))}
          </RelatedGrid>
        </RelatedCaseStudies>

        <ContactSection>
          <SectionHeading
            subtitle="Ready for Similar Results?"
            title="Let's Create Your <span>Success Story</span>"
            description="Contact us to discuss how we can help you achieve your marketing objectives."
            centered
          />
          <ContactForm />
        </ContactSection>
      </CaseStudyContainer>
    </>
  );
};

export default CaseStudyDetail;
