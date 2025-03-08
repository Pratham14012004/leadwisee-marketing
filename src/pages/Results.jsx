
import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { FaArrowRight, FaChartLine, FaLightbulb, FaUsers, FaCogs } from "react-icons/fa";

import SectionHeading from "../components/common/SectionHeading";
import Button from "../components/common/Button";
import TestimonialSlider from "../components/sections/TestimonialSlider";
import ContactForm from "../components/common/ContactForm";

const PageContainer = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

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

const ResultsSection = styled.section`
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 1.5rem;
`;

const ResultsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 3rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ResultsCard = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.bgAlt};
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  .card-header {
    background-color: ${(props) => props.theme.colors.primary};
    padding: 1.5rem;
    text-align: center;
    color: white;
    
    h3 {
      font-size: 1.6rem;
      margin-bottom: 0.5rem;
      font-weight: 700;
    }
    
    .industry {
      font-size: 0.9rem;
      opacity: 0.9;
    }
  }
  
  .card-content {
    padding: 2rem;
    
    .metrics {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1.5rem;
      margin-bottom: 2rem;
      
      .metric {
        text-align: center;
        
        .number {
          font-size: 2.2rem;
          font-weight: 700;
          color: ${(props) => props.theme.colors.primary};
          margin-bottom: 0.5rem;
        }
        
        .label {
          font-size: 0.9rem;
          color: ${(props) => props.theme.colors.textSecondary};
        }
      }
    }
    
    p {
      margin-bottom: 1.5rem;
      line-height: 1.7;
    }
  }
  
  .card-footer {
    padding: 0 2rem 2rem;
    text-align: center;
  }
`;

const CaseStudiesSection = styled.section`
  background-color: ${(props) => props.theme.colors.bgAlt};
  padding: 5rem 0;
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
`;

const CaseStudiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  
  .case-study-card {
    background-color: ${(props) => props.theme.colors.background};
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    
    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
    }
    
    .image {
      height: 200px;
      overflow: hidden;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.5s ease;
      }
      
      &:hover img {
        transform: scale(1.1);
      }
    }
    
    .content {
      padding: 2rem;
      
      .tag {
        display: inline-block;
        background-color: rgba(0, 151, 251, 0.1);
        color: ${(props) => props.theme.colors.primary};
        padding: 0.3rem 0.8rem;
        border-radius: 50px;
        font-size: 0.8rem;
        font-weight: 500;
        margin-bottom: 1rem;
      }
      
      h3 {
        font-size: 1.4rem;
        margin-bottom: 1rem;
        font-weight: 600;
      }
      
      p {
        margin-bottom: 1.5rem;
        line-height: 1.6;
        color: ${(props) => props.theme.colors.textSecondary};
      }
    }
  }
`;

const MetricsSection = styled.section`
  max-width: 1200px;
  margin: 5rem auto;
  padding: 0 1.5rem;
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
  
  .metric-card {
    background-color: ${(props) => props.theme.colors.bgAlt};
    border-radius: 12px;
    padding: 2rem;
    text-align: center;
    
    .icon {
      font-size: 2.5rem;
      color: ${(props) => props.theme.colors.primary};
      margin-bottom: 1.5rem;
    }
    
    .number {
      font-size: 2.8rem;
      font-weight: 700;
      margin-bottom: 1rem;
    }
    
    .label {
      font-size: 1.1rem;
    }
  }
`;

const MethodologySection = styled.section`
  background-color: ${(props) => props.theme.colors.bgAlt};
  padding: 5rem 0;
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
  
  .content-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    margin-top: 3rem;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
    
    .steps {
      .step {
        display: flex;
        margin-bottom: 2rem;
        
        .step-number {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: ${(props) => props.theme.colors.primary};
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          margin-right: 1.5rem;
          margin-top: 0.5rem;
        }
        
        .step-content {
          h4 {
            font-size: 1.3rem;
            margin-bottom: 0.8rem;
            font-weight: 600;
          }
          
          p {
            line-height: 1.7;
            color: ${(props) => props.theme.colors.textSecondary};
          }
        }
      }
    }
    
    .image {
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

const TestimonialsSection = styled.section`
  max-width: 1200px;
  margin: 5rem auto;
  padding: 0 1.5rem;
`;

const CtaSection = styled.section`
  background-color: ${(props) => props.theme.colors.bgAlt};
  padding: 5rem 0;
  text-align: center;
  
  .container {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
  
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    
    span {
      color: ${(props) => props.theme.colors.primary};
    }
  }
  
  p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    line-height: 1.6;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ContactSection = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 5rem 1.5rem;
  
  @media (max-width: 768px) {
    padding: 3rem 1.5rem 5rem;
  }
`;

// Client testimonials data
const testimonials = [
  {
    quote: "Leadwisee completely transformed our marketing performance. In just 6 months, they helped us achieve a 215% increase in qualified leads while reducing our cost per acquisition by 32%.",
    name: "Sarah Johnson",
    position: "Marketing Director",
    company: "TechSolutions Inc."
  },
  {
    quote: "Working with Leadwisee has been game-changing for our e-commerce business. Our ROAS increased from 2.1x to 4.8x, and they helped us scale our monthly revenue by 187%.",
    name: "Michael Chen",
    position: "CEO",
    company: "ModernRetail.co"
  },
  {
    quote: "The data-driven approach at Leadwisee delivered results beyond our expectations. They increased our organic traffic by 143% and helped us achieve a 67% improvement in conversion rates.",
    name: "Emily Rodriguez",
    position: "VP of Growth",
    company: "SaaSPlatform"
  }
];

const Results = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Results | Leadwisee - Performance Marketing Agency</title>
        <meta 
          name="description" 
          content="See the measurable results we've achieved for our clients through our data-driven performance marketing strategies." 
        />
      </Helmet>

      <PageContainer>
        <HeroSection>
          <HeroContent>
            <SectionHeading
              subtitle="Client Success Stories"
              title="Measurable <span>Results</span> That Drive Business Growth"
              description="At Leadwisee, we believe in transparency and measurable outcomes. Here are the real results we've delivered for our clients."
              centered
            />
          </HeroContent>
        </HeroSection>

        <MetricsSection>
          <SectionHeading
            subtitle="Performance Overview"
            title="Our Impact <span>By the Numbers</span>"
            description="Across all clients and industries, we've consistently delivered significant improvements in key performance metrics."
            centered
          />

          <MetricsGrid>
            <motion.div 
              className="metric-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="icon">
                <FaChartLine />
              </div>
              <div className="number">178%</div>
              <div className="label">Average Increase in Conversion Rate</div>
            </motion.div>

            <motion.div 
              className="metric-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="icon">
                <FaLightbulb />
              </div>
              <div className="number">42%</div>
              <div className="label">Average Reduction in Cost Per Acquisition</div>
            </motion.div>

            <motion.div 
              className="metric-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="icon">
                <FaUsers />
              </div>
              <div className="number">213%</div>
              <div className="label">Average Increase in Qualified Leads</div>
            </motion.div>

            <motion.div 
              className="metric-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="icon">
                <FaCogs />
              </div>
              <div className="number">3.6x</div>
              <div className="label">Average Return on Ad Spend</div>
            </motion.div>
          </MetricsGrid>
        </MetricsSection>

        <ResultsSection>
          <SectionHeading
            subtitle="Client Results"
            title="Recent <span>Success Stories</span>"
            description="Real results from real clients. Here's how our data-driven approach has transformed businesses across industries."
          />

          <ResultsGrid>
            <ResultsCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="card-header">
                <h3>SaaS Lead Generation</h3>
                <div className="industry">SaaS | B2B Technology</div>
              </div>
              <div className="card-content">
                <div className="metrics">
                  <div className="metric">
                    <div className="number">187%</div>
                    <div className="label">Increase in Demo Requests</div>
                  </div>
                  <div className="metric">
                    <div className="number">42%</div>
                    <div className="label">Lower Cost Per Lead</div>
                  </div>
                  <div className="metric">
                    <div className="number">82%</div>
                    <div className="label">Lead-to-Sale Conversion</div>
                  </div>
                  <div className="metric">
                    <div className="number">$1.2M</div>
                    <div className="label">Pipeline Value Added</div>
                  </div>
                </div>
                <p>
                  We restructured PPC campaigns, implemented conversion rate optimization, and created industry-specific landing pages to dramatically improve lead generation performance for an enterprise cybersecurity SaaS platform.
                </p>
              </div>
              <div className="card-footer">
                <Button to="/case-studies/saas-lead-generation" variant="text" rightIcon={<FaArrowRight />}>
                  Read Case Study
                </Button>
              </div>
            </ResultsCard>

            <ResultsCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="card-header">
                <h3>E-commerce Revenue Growth</h3>
                <div className="industry">E-commerce | Direct-to-Consumer</div>
              </div>
              <div className="card-content">
                <div className="metrics">
                  <div className="metric">
                    <div className="number">215%</div>
                    <div className="label">Increase in Revenue</div>
                  </div>
                  <div className="metric">
                    <div className="number">3.2x</div>
                    <div className="label">Return on Ad Spend</div>
                  </div>
                  <div className="metric">
                    <div className="number">32%</div>
                    <div className="label">Higher AOV</div>
                  </div>
                  <div className="metric">
                    <div className="number">41%</div>
                    <div className="label">Repeat Purchase Rate</div>
                  </div>
                </div>
                <p>
                  Through strategic shopping campaign restructuring, dynamic retargeting, and personalized email journeys, we helped a D2C home goods brand significantly grow their monthly revenue and customer lifetime value.
                </p>
              </div>
              <div className="card-footer">
                <Button to="/case-studies/ecommerce-revenue-growth" variant="text" rightIcon={<FaArrowRight />}>
                  Read Case Study
                </Button>
              </div>
            </ResultsCard>

            <ResultsCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="card-header">
                <h3>Luxury Real Estate Marketing</h3>
                <div className="industry">Real Estate | Luxury Market</div>
              </div>
              <div className="card-content">
                <div className="metrics">
                  <div className="metric">
                    <div className="number">156%</div>
                    <div className="label">More Qualified Leads</div>
                  </div>
                  <div className="metric">
                    <div className="number">58%</div>
                    <div className="label">Lower Cost Per Lead</div>
                  </div>
                  <div className="metric">
                    <div className="number">64%</div>
                    <div className="label">Showing Conversion Rate</div>
                  </div>
                  <div className="metric">
                    <div className="number">$14.5M</div>
                    <div className="label">Additional Sales Volume</div>
                  </div>
                </div>
                <p>
                  We implemented sophisticated targeting for high-net-worth individuals, created neighborhood-specific SEO content, and developed virtual tour lead magnets that significantly improved lead quality for a luxury real estate brokerage.
                </p>
              </div>
              <div className="card-footer">
                <Button to="/case-studies/real-estate-lead-generation" variant="text" rightIcon={<FaArrowRight />}>
                  Read Case Study
                </Button>
              </div>
            </ResultsCard>
          </ResultsGrid>
        </ResultsSection>

        <MethodologySection>
          <div className="container">
            <SectionHeading
              subtitle="Our Approach"
              title="How We <span>Deliver Results</span>"
              description="Our systematic, data-driven methodology consistently produces exceptional outcomes across all industries and marketing challenges."
            />

            <div className="content-grid">
              <div className="steps">
                <div className="step">
                  <div className="step-number">1</div>
                  <div className="step-content">
                    <h4>Comprehensive Analysis</h4>
                    <p>
                      We begin with a deep dive into your business objectives, target audience, current marketing performance, and competitive landscape to identify opportunities for improvement.
                    </p>
                  </div>
                </div>

                <div className="step">
                  <div className="step-number">2</div>
                  <div className="step-content">
                    <h4>Strategic Planning</h4>
                    <p>
                      Based on our analysis, we develop a customized marketing strategy that leverages the most effective channels and tactics for your specific goals and target audience.
                    </p>
                  </div>
                </div>

                <div className="step">
                  <div className="step-number">3</div>
                  <div className="step-content">
                    <h4>Implementation & Optimization</h4>
                    <p>
                      We execute the strategy with precision, continuously monitoring performance metrics and making data-driven adjustments to optimize results in real-time.
                    </p>
                  </div>
                </div>

                <div className="step">
                  <div className="step-number">4</div>
                  <div className="step-content">
                    <h4>Measurement & Reporting</h4>
                    <p>
                      We provide transparent, comprehensive reporting that clearly demonstrates the impact of our work on your key performance indicators and business outcomes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="image">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80" 
                  alt="Data-driven marketing approach" 
                />
              </div>
            </div>
          </div>
        </MethodologySection>

        <CaseStudiesSection>
          <div className="container">
            <SectionHeading
              subtitle="Explore Our Work"
              title="Featured <span>Case Studies</span>"
              description="Dive deeper into how we've helped businesses like yours achieve remarkable results."
              centered
            />

            <CaseStudiesGrid>
              <div className="case-study-card">
                <div className="image">
                  <img 
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="SaaS Lead Generation Case Study" 
                  />
                </div>
                <div className="content">
                  <div className="tag">SaaS</div>
                  <h3>187% Increase in Demo Bookings for B2B SaaS Platform</h3>
                  <p>
                    How we helped an enterprise cybersecurity SaaS company transform their lead generation performance through strategic PPC restructuring and CRO.
                  </p>
                  <Button to="/case-studies/saas-lead-generation" variant="text" rightIcon={<FaArrowRight />}>
                    Read Case Study
                  </Button>
                </div>
              </div>

              <div className="case-study-card">
                <div className="image">
                  <img 
                    src="https://images.unsplash.com/photo-1522204605090-c9a2c7c8dfe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80" 
                    alt="E-commerce Revenue Growth Case Study" 
                  />
                </div>
                <div className="content">
                  <div className="tag">E-commerce</div>
                  <h3>$4.2M Revenue Growth in 6 Months for D2C Brand</h3>
                  <p>
                    How we scaled a direct-to-consumer home goods brand through advanced shopping campaign restructuring and customer lifetime value optimization.
                  </p>
                  <Button to="/case-studies/ecommerce-revenue-growth" variant="text" rightIcon={<FaArrowRight />}>
                    Read Case Study
                  </Button>
                </div>
              </div>

              <div className="case-study-card">
                <div className="image">
                  <img 
                    src="https://images.unsplash.com/photo-1565402170291-8491f14678db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Luxury Real Estate Marketing Case Study" 
                  />
                </div>
                <div className="content">
                  <div className="tag">Real Estate</div>
                  <h3>156% More Qualified Leads for Luxury Real Estate Brokerage</h3>
                  <p>
                    How we improved lead quality and reduced cost per acquisition for a luxury real estate brokerage through targeted high-net-worth individual marketing.
                  </p>
                  <Button to="/case-studies/real-estate-lead-generation" variant="text" rightIcon={<FaArrowRight />}>
                    Read Case Study
                  </Button>
                </div>
              </div>
            </CaseStudiesGrid>

            <div style={{ textAlign: 'center', marginTop: '3rem' }}>
              <Button to="/case-studies" variant="primary">
                View All Case Studies
              </Button>
            </div>
          </div>
        </CaseStudiesSection>

        <TestimonialsSection>
          <SectionHeading
            subtitle="Client Testimonials"
            title="What Our Clients <span>Say About Us</span>"
            description="Don't just take our word for it. Hear from satisfied clients who have experienced the Leadwisee difference."
            centered
          />

          <TestimonialSlider testimonials={testimonials} />

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Button to="/testimonials" rightIcon={<FaArrowRight />}>
              View All Testimonials
            </Button>
          </div>
        </TestimonialsSection>

        <CtaSection>
          <div className="container">
            <h2>Ready for <span>Similar Results</span>?</h2>
            <p>
              Let's discuss how our data-driven performance marketing strategies can help you achieve your business goals and deliver measurable ROI.
            </p>
            <Button to="/contact" variant="primary" size="large">
              Get Your Free Consultation
            </Button>
          </div>
        </CtaSection>

        <ContactSection>
          <SectionHeading
            subtitle="Let's Connect"
            title="Ready to <span>Transform</span> Your Marketing Results?"
            description="Fill out the form below to discuss your goals with our team and learn how we can help you achieve measurable growth."
            centered
          />

          <ContactForm />
        </ContactSection>
      </PageContainer>
    </>
  );
};

export default Results;
import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { FiBarChart2, FiTrendingUp, FiDollarSign, FiTarget } from "react-icons/fi";
import FeatureCard from "../components/common/FeatureCard";
import Button from "../components/common/Button";
import ContactForm from "../components/common/ContactForm";

const PageContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  
  span {
    color: ${props => props.theme.primary};
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.1rem;
  color: ${props => props.theme.textLight};
  max-width: 700px;
  margin: 0 auto 1rem;
  line-height: 1.6;
`;

const MetricsSection = styled.section`
  margin-bottom: 5rem;
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const MetricCard = styled(motion.div)`
  background-color: ${props => props.theme.body};
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
`;

const MetricNumber = styled.h3`
  font-size: 3rem;
  font-weight: 700;
  color: ${props => props.theme.primary};
  margin-bottom: 0.5rem;
`;

const MetricLabel = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const MetricDescription = styled.p`
  font-size: 0.9rem;
  color: ${props => props.theme.textLight};
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-align: center;
`;

const SectionDescription = styled.p`
  font-size: 1.1rem;
  color: ${props => props.theme.textLight};
  max-width: 700px;
  margin: 0 auto 3rem;
  line-height: 1.6;
  text-align: center;
`;

const ResultsTable = styled.div`
  margin-bottom: 5rem;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th {
    background-color: ${props => props.theme.backgroundSecondary};
    padding: 1rem;
    text-align: left;
    font-weight: 600;
  }
  
  td {
    padding: 1rem;
    border-bottom: 1px solid ${props => props.theme.border};
  }
  
  tr:nth-child(even) {
    background-color: ${props => props.theme.backgroundSecondary};
  }
  
  tr:hover {
    background-color: ${props => `rgba(59, 130, 246, 0.05)`};
  }
  
  .positive {
    color: #10B981;
    font-weight: 600;
  }
`;

const StrategiesSection = styled.section`
  margin-bottom: 5rem;
`;

const StrategiesGrid = styled.div`
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

const TestimonialsSection = styled.section`
  margin-bottom: 5rem;
  background-color: ${props => props.theme.backgroundSecondary};
  padding: 4rem 0;
`;

const TestimonialCard = styled.div`
  background-color: ${props => props.theme.body};
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const TestimonialQuote = styled.p`
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-style: italic;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
`;

const AuthorImage = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 1rem;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.h4`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
`;

const AuthorRole = styled.p`
  font-size: 0.875rem;
  color: ${props => props.theme.textLight};
`;

const CTASection = styled.section`
  background-color: ${props => props.theme.primary};
  color: white;
  padding: 4rem 0;
  border-radius: 12px;
  margin-bottom: 5rem;
`;

const CTAContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0 2rem;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const CTADescription = styled.p`
  font-size: 1.1rem;
  margin-bottom: 2rem;
  max-width: 700px;
  opacity: 0.9;
`;

const ContactSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ContactInfo = styled.div``;

const ContactTitle = styled.h3`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const ContactDescription = styled.p`
  font-size: 1.1rem;
  color: ${props => props.theme.textLight};
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const BenefitsList = styled.ul`
  padding-left: 1.5rem;
  margin-bottom: 2rem;
  
  li {
    margin-bottom: 1rem;
    font-size: 1.05rem;
    
    strong {
      color: ${props => props.theme.primary};
    }
  }
`;

const Results = () => {
  const metrics = [
    { 
      number: "300%", 
      label: "Average ROI", 
      description: "Return on ad spend across all client campaigns" 
    },
    { 
      number: "85%", 
      label: "Conversion Rate Increase", 
      description: "Average improvement in landing page conversions" 
    },
    { 
      number: "70%", 
      label: "Cost Per Lead Reduction", 
      description: "Average reduction in cost per qualified lead" 
    },
    { 
      number: "50%", 
      label: "Traffic Growth", 
      description: "Average increase in qualified website traffic" 
    }
  ];
  
  const campaignResults = [
    { 
      client: "E-commerce Brand", 
      industry: "Fashion", 
      service: "Paid Social", 
      budget: "$15,000/mo", 
      roas: "4.2x", 
      improvement: "+215%" 
    },
    { 
      client: "SaaS Company", 
      industry: "B2B Software", 
      service: "PPC & SEO", 
      budget: "$25,000/mo", 
      roas: "3.8x", 
      improvement: "+180%" 
    },
    { 
      client: "Health Practice", 
      industry: "Healthcare", 
      service: "Local Marketing", 
      budget: "$8,000/mo", 
      roas: "5.1x", 
      improvement: "+310%" 
    },
    { 
      client: "Real Estate Agency", 
      industry: "Real Estate", 
      service: "PPC & Social", 
      budget: "$12,000/mo", 
      roas: "3.5x", 
      improvement: "+165%" 
    },
    { 
      client: "Online Retailer", 
      industry: "E-commerce", 
      service: "Shopping Ads", 
      budget: "$35,000/mo", 
      roas: "4.7x", 
      improvement: "+270%" 
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>Our Results | Leadwisee Marketing Agency</title>
        <meta name="description" content="See the real results we've achieved for our clients. Explore case studies, metrics, and testimonials from successful marketing campaigns." />
      </Helmet>
      
      <PageContainer>
        <PageHeader>
          <Title
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our <span>Proven</span> Results
          </Title>
          <Subtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We don't just promise results—we deliver them. Explore our performance metrics and client success stories to see how we can help your business grow.
          </Subtitle>
        </PageHeader>
        
        <MetricsSection>
          <MetricsGrid>
            {metrics.map((metric, index) => (
              <MetricCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <MetricNumber>{metric.number}</MetricNumber>
                <MetricLabel>{metric.label}</MetricLabel>
                <MetricDescription>{metric.description}</MetricDescription>
              </MetricCard>
            ))}
          </MetricsGrid>
        </MetricsSection>
        
        <ResultsTable>
          <SectionTitle>Campaign Performance</SectionTitle>
          <SectionDescription>
            Here are some of our recent campaign results across various industries and marketing services.
          </SectionDescription>
          
          <Table>
            <thead>
              <tr>
                <th>Client</th>
                <th>Industry</th>
                <th>Service</th>
                <th>Budget</th>
                <th>ROAS</th>
                <th>Improvement</th>
              </tr>
            </thead>
            <tbody>
              {campaignResults.map((result, index) => (
                <tr key={index}>
                  <td>{result.client}</td>
                  <td>{result.industry}</td>
                  <td>{result.service}</td>
                  <td>{result.budget}</td>
                  <td className="positive">{result.roas}</td>
                  <td className="positive">{result.improvement}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </ResultsTable>
        
        <StrategiesSection>
          <SectionTitle>Our Winning Strategies</SectionTitle>
          <SectionDescription>
            Here's how we deliver exceptional results for our clients through proven marketing tactics.
          </SectionDescription>
          
          <StrategiesGrid>
            <FeatureCard
              title="Data-Driven Optimization"
              description="We continuously analyze campaign data to identify optimization opportunities, refine targeting, and improve performance."
              icon={<FiBarChart2 />}
              delay={0.1}
            />
            <FeatureCard
              title="Strategic Budget Allocation"
              description="We distribute budgets based on performance data, focusing spend on the highest-converting channels and campaigns."
              icon={<FiDollarSign />}
              delay={0.2}
            />
            <FeatureCard
              title="Conversion Rate Optimization"
              description="We systematically test and improve landing pages, forms, and checkout processes to maximize conversion rates."
              icon={<FiTrendingUp />}
              delay={0.3}
            />
            <FeatureCard
              title="Precision Targeting"
              description="We identify and target high-value audience segments most likely to convert, reducing wasted ad spend."
              icon={<FiTarget />}
              delay={0.4}
            />
            <FeatureCard
              title="Multi-Channel Attribution"
              description="We implement advanced attribution models to understand the full customer journey and optimize accordingly."
              icon={<FiBarChart2 />}
              delay={0.5}
            />
            <FeatureCard
              title="ROI-Focused Reporting"
              description="Our comprehensive reports focus on business impact and return on investment, not just marketing metrics."
              icon={<FiDollarSign />}
              delay={0.6}
            />
          </StrategiesGrid>
        </StrategiesSection>
        
        <TestimonialsSection>
          <div className="container">
            <SectionTitle>Client Testimonials</SectionTitle>
            <SectionDescription>
              Don't just take our word for it. Here's what our clients say about the results we've achieved.
            </SectionDescription>
            
            <TestimonialCard>
              <TestimonialQuote>
                "Leadwisee transformed our digital marketing strategy. Within just 3 months, they increased our conversion rate by 95% and reduced our cost per acquisition by 40%. Their data-driven approach and transparent reporting made all the difference."
              </TestimonialQuote>
              <TestimonialAuthor>
                <AuthorImage>
                  <img src="https://via.placeholder.com/100" alt="John Smith" />
                </AuthorImage>
                <AuthorInfo>
                  <AuthorName>John Smith</AuthorName>
                  <AuthorRole>Marketing Director, SaaS Company</AuthorRole>
                </AuthorInfo>
              </TestimonialAuthor>
            </TestimonialCard>
            
            <TestimonialCard>
              <TestimonialQuote>
                "We tried several agencies before finding Leadwisee. Their strategic approach to our e-commerce marketing delivered a 320% ROI and helped us scale our business. They truly understand what drives results in today's competitive landscape."
              </TestimonialQuote>
              <TestimonialAuthor>
                <AuthorImage>
                  <img src="https://via.placeholder.com/100" alt="Sarah Johnson" />
                </AuthorImage>
                <AuthorInfo>
                  <AuthorName>Sarah Johnson</AuthorName>
                  <AuthorRole>CEO, E-commerce Brand</AuthorRole>
                </AuthorInfo>
              </TestimonialAuthor>
            </TestimonialCard>
          </div>
        </TestimonialsSection>
        
        <CTASection>
          <CTAContainer>
            <CTATitle>Ready to Achieve These Results?</CTATitle>
            <CTADescription>
              Let's discuss how our performance marketing strategies can help you drive significant business growth.
            </CTADescription>
            <Button 
              to="/contact" 
              variant="secondary" 
              size="large"
            >
              Schedule a Strategy Call
            </Button>
          </CTAContainer>
        </CTASection>
        
        <ContactSection>
          <ContactInfo>
            <ContactTitle>Let's Talk About Your Growth Goals</ContactTitle>
            <ContactDescription>
              Ready to start seeing real results from your marketing efforts? Schedule a free strategy call with our team to discuss your specific goals and challenges.
            </ContactDescription>
            
            <BenefitsList>
              <li><strong>Free Marketing Audit</strong> - Get a comprehensive review of your current marketing performance</li>
              <li><strong>Custom Strategy</strong> - Receive a tailored marketing plan designed to meet your specific goals</li>
              <li><strong>ROI Projection</strong> - See what results you can expect based on our experience with similar businesses</li>
              <li><strong>No Obligation</strong> - Get valuable insights whether you decide to work with us or not</li>
            </BenefitsList>
            
            <Button 
              to="/case-studies" 
              variant="secondary"
            >
              See Our Case Studies
            </Button>
          </ContactInfo>
          
          <ContactForm heading="Get Your Free Strategy Call" />
        </ContactSection>
      </PageContainer>
    </>
  );
};

export default Results;
