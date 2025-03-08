
import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { FaChartLine, FaArrowRight, FaUsers, FaShoppingCart, FaHandshake, FaChartBar } from "react-icons/fa";

import SectionHeading from "../components/common/SectionHeading";
import Button from "../components/common/Button";
import TestimonialSlider from "../components/sections/TestimonialSlider";
import ContactForm from "../components/common/ContactForm";

const ResultsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem 5rem;
`;

const HeroSection = styled.section`
  background-color: ${(props) => props.theme.colors.bgAlt};
  padding: 6rem 0;
  text-align: center;
  margin-bottom: 4rem;
`;

const StatCardsSection = styled.section`
  margin: 5rem 0;
`;

const StatCardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const StatCard = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.bgAlt};
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  border-top: 4px solid ${(props) => props.theme.colors.primary};
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
  
  .stat-icon {
    font-size: 2.5rem;
    color: ${(props) => props.theme.colors.primary};
    margin-bottom: 1.5rem;
  }
  
  .stat-value {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    background: linear-gradient(to right, ${(props) => props.theme.colors.primary}, #8a4baf);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .stat-label {
    font-size: 1.2rem;
    font-weight: 500;
    margin-bottom: 1rem;
  }
  
  .stat-description {
    font-size: 0.95rem;
    line-height: 1.6;
    color: ${(props) => props.theme.colors.textSecondary};
  }
`;

const CaseStudiesSection = styled.section`
  margin: 5rem 0;
`;

const CaseStudyCard = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.bgAlt};
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: 1fr;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  
  .case-study-image {
    height: 300px;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    @media (max-width: 768px) {
      height: 200px;
    }
  }
  
  .case-study-content {
    padding: 2rem;
    
    .industry {
      display: inline-block;
      background-color: rgba(0, 0, 0, 0.05);
      padding: 0.4rem 1rem;
      border-radius: 50px;
      font-size: 0.85rem;
      font-weight: 500;
      margin-bottom: 1rem;
    }
    
    h3 {
      font-size: 1.8rem;
      margin-bottom: 1rem;
      font-weight: 700;
    }
    
    p {
      margin-bottom: 1.5rem;
      line-height: 1.6;
    }
    
    .results-list {
      margin-bottom: 1.5rem;
      
      h4 {
        font-size: 1.2rem;
        margin-bottom: 0.8rem;
        font-weight: 600;
        display: flex;
        align-items: center;
        
        svg {
          margin-right: 0.5rem;
          color: ${(props) => props.theme.colors.primary};
        }
      }
      
      ul {
        padding-left: 1.5rem;
        
        li {
          margin-bottom: 0.5rem;
          line-height: 1.6;
        }
      }
    }
  }
`;

const IndustryPerformanceSection = styled.section`
  margin: 5rem 0;
`;

const PerformanceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const IndustryCard = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.bgAlt};
  border-radius: 12px;
  padding: 2rem;
  
  .industry-name {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: center;
    
    svg {
      margin-right: 0.8rem;
      color: ${(props) => props.theme.colors.primary};
    }
  }
  
  .metrics {
    margin-bottom: 1.5rem;
    
    .metric {
      margin-bottom: 1.2rem;
      
      .metric-label {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
        font-weight: 500;
      }
      
      .progress-bar {
        height: 8px;
        background-color: rgba(0, 0, 0, 0.1);
        border-radius: 4px;
        overflow: hidden;
        
        .progress {
          height: 100%;
          background: linear-gradient(to right, ${(props) => props.theme.colors.primary}, #8a4baf);
        }
      }
    }
  }
  
  .average-improvement {
    font-size: 1.2rem;
    font-weight: 600;
    text-align: center;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

const CtaSection = styled.section`
  background-color: ${(props) => props.theme.colors.bgAlt};
  padding: 5rem 1.5rem;
  text-align: center;
  margin: 5rem 0;
  
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

const ContactSection = styled.section`
  margin: 5rem 0;
`;

// Mock data for testimonials
const testimonials = [
  {
    quote:
      "Leadwisee's performance marketing strategies have transformed our business. We've seen a 215% increase in qualified leads and a 42% reduction in cost per acquisition.",
    name: "Michael Johnson",
    position: "CEO",
    company: "TechSolutions Inc.",
  },
  {
    quote:
      "Working with Leadwisee has been game-changing for our e-commerce business. Their data-driven approach helped us scale revenue by over 300% while maintaining profitability.",
    name: "Sarah Thompson",
    position: "Marketing Director",
    company: "StyleHouse Retail",
  },
  {
    quote:
      "The ROI we've seen from Leadwisee's campaigns has exceeded our expectations. They've helped us achieve consistent growth month after month.",
    name: "David Chen",
    position: "Founder",
    company: "Ascend SaaS",
  },
];

const Results = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Results | Leadwisee Performance Marketing Agency</title>
        <meta
          name="description"
          content="See the proven results we've delivered for our clients across industries. Discover how our data-driven marketing strategies can help your business grow."
        />
      </Helmet>

      <HeroSection>
        <div className="container">
          <SectionHeading
            subtitle="Measurable Impact"
            title="Proven <span>Results</span> That Drive Business Growth"
            description="Our performance marketing strategies deliver real, measurable results that help our clients outperform their competition and achieve sustainable growth."
            centered
          />
        </div>
      </HeroSection>

      <ResultsContainer>
        <StatCardsSection>
          <SectionHeading
            subtitle="By The Numbers"
            title="Our <span>Performance</span> Metrics"
            description="These results represent the average improvements we've achieved for our clients across all industries."
          />

          <StatCardsGrid>
            <StatCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="stat-icon">
                <FaChartLine />
              </div>
              <div className="stat-value">175%</div>
              <div className="stat-label">Increase in Qualified Leads</div>
              <div className="stat-description">
                Average increase in qualified lead generation across all client campaigns
              </div>
            </StatCard>

            <StatCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="stat-icon">
                <FaShoppingCart />
              </div>
              <div className="stat-value">32%</div>
              <div className="stat-label">Higher Conversion Rates</div>
              <div className="stat-description">
                Improved website and landing page conversion rates for our clients
              </div>
            </StatCard>

            <StatCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="stat-icon">
                <FaChartBar />
              </div>
              <div className="stat-value">43%</div>
              <div className="stat-label">Reduction in CPA</div>
              <div className="stat-description">
                Average decrease in cost per acquisition through optimized campaigns
              </div>
            </StatCard>

            <StatCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="stat-icon">
                <FaHandshake />
              </div>
              <div className="stat-value">97%</div>
              <div className="stat-label">Client Retention Rate</div>
              <div className="stat-description">
                Percentage of clients who continue to partner with us after the initial campaign
              </div>
            </StatCard>
          </StatCardsGrid>
        </StatCardsSection>

        <CaseStudiesSection>
          <SectionHeading
            subtitle="Success Stories"
            title="Featured <span>Case Studies</span>"
            description="Real results from real clients. Discover how our data-driven strategies have helped businesses like yours achieve remarkable growth."
          />

          <CaseStudyCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="case-study-image">
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="SaaS Lead Generation Case Study"
              />
            </div>
            <div className="case-study-content">
              <div className="industry">SaaS</div>
              <h3>Enterprise SaaS Lead Generation</h3>
              <p>
                We helped a B2B SaaS platform streamline their lead generation efforts and improve the quality of leads coming through their pipeline.
              </p>
              <div className="results-list">
                <h4>
                  <FaChartLine /> Results
                </h4>
                <ul>
                  <li>187% increase in qualified demo bookings</li>
                  <li>42% reduction in cost per acquisition</li>
                  <li>$1.2M in new pipeline value generated</li>
                  <li>Increased lead-to-demo conversion rate from 14% to 31%</li>
                </ul>
              </div>
              <Button
                to="/case-studies/saas-lead-generation"
                variant="text"
                rightIcon={<FaArrowRight />}
              >
                Read Full Case Study
              </Button>
            </div>
          </CaseStudyCard>

          <CaseStudyCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="case-study-content">
              <div className="industry">E-Commerce</div>
              <h3>Scaling E-Commerce Revenue</h3>
              <p>
                We developed a comprehensive digital marketing strategy for a D2C e-commerce brand looking to scale their online revenue profitably.
              </p>
              <div className="results-list">
                <h4>
                  <FaChartLine /> Results
                </h4>
                <ul>
                  <li>215% increase in monthly revenue</li>
                  <li>47% improvement in ROAS (from 1.8x to 3.2x)</li>
                  <li>32% higher average order value</li>
                  <li>70% increase in repeat purchase rate</li>
                </ul>
              </div>
              <Button
                to="/case-studies/ecommerce-revenue-growth"
                variant="text"
                rightIcon={<FaArrowRight />}
              >
                Read Full Case Study
              </Button>
            </div>
            <div className="case-study-image">
              <img
                src="https://images.unsplash.com/photo-1522204605090-c9a2c7c8dfe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80"
                alt="E-Commerce Revenue Growth Case Study"
              />
            </div>
          </CaseStudyCard>

          <CaseStudyCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="case-study-image">
              <img
                src="https://images.unsplash.com/photo-1565402170291-8491f14678db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Luxury Real Estate Marketing Case Study"
              />
            </div>
            <div className="case-study-content">
              <div className="industry">Real Estate</div>
              <h3>Luxury Real Estate Marketing</h3>
              <p>
                We implemented a targeted digital strategy for a luxury real estate brokerage to generate high-quality leads for properties over $1M.
              </p>
              <div className="results-list">
                <h4>
                  <FaChartLine /> Results
                </h4>
                <ul>
                  <li>156% increase in qualified property inquiries</li>
                  <li>42% more seller valuation requests</li>
                  <li>$14.5M in additional sales volume</li>
                  <li>Reduced cost per qualified lead from $420 to $175</li>
                </ul>
              </div>
              <Button
                to="/case-studies/real-estate-lead-generation"
                variant="text"
                rightIcon={<FaArrowRight />}
              >
                Read Full Case Study
              </Button>
            </div>
          </CaseStudyCard>
        </CaseStudiesSection>

        <IndustryPerformanceSection>
          <SectionHeading
            subtitle="Industry Insights"
            title="Performance <span>By Industry</span>"
            description="Our marketing strategies are tailored to each industry's unique challenges and opportunities, consistently delivering superior results."
          />

          <PerformanceGrid>
            <IndustryCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="industry-name">
                <FaUsers /> SaaS
              </div>
              <div className="metrics">
                <div className="metric">
                  <div className="metric-label">
                    <span>Lead Generation</span>
                    <span>+187%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: "87%" }}></div>
                  </div>
                </div>
                <div className="metric">
                  <div className="metric-label">
                    <span>Demo Bookings</span>
                    <span>+145%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: "75%" }}></div>
                  </div>
                </div>
                <div className="metric">
                  <div className="metric-label">
                    <span>Cost Per Acquisition</span>
                    <span>-42%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: "62%" }}></div>
                  </div>
                </div>
              </div>
              <div className="average-improvement">
                Average Performance Improvement: 152%
              </div>
            </IndustryCard>

            <IndustryCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="industry-name">
                <FaShoppingCart /> E-Commerce
              </div>
              <div className="metrics">
                <div className="metric">
                  <div className="metric-label">
                    <span>Revenue Growth</span>
                    <span>+215%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: "95%" }}></div>
                  </div>
                </div>
                <div className="metric">
                  <div className="metric-label">
                    <span>ROAS</span>
                    <span>+78%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: "78%" }}></div>
                  </div>
                </div>
                <div className="metric">
                  <div className="metric-label">
                    <span>Average Order Value</span>
                    <span>+32%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: "52%" }}></div>
                  </div>
                </div>
              </div>
              <div className="average-improvement">
                Average Performance Improvement: 167%
              </div>
            </IndustryCard>

            <IndustryCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="industry-name">
                <FaHandshake /> Real Estate
              </div>
              <div className="metrics">
                <div className="metric">
                  <div className="metric-label">
                    <span>Qualified Leads</span>
                    <span>+156%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: "76%" }}></div>
                  </div>
                </div>
                <div className="metric">
                  <div className="metric-label">
                    <span>Cost Per Lead</span>
                    <span>-58%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: "68%" }}></div>
                  </div>
                </div>
                <div className="metric">
                  <div className="metric-label">
                    <span>Conversion Rate</span>
                    <span>+135%</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress" style={{ width: "65%" }}></div>
                  </div>
                </div>
              </div>
              <div className="average-improvement">
                Average Performance Improvement: 143%
              </div>
            </IndustryCard>
          </PerformanceGrid>
        </IndustryPerformanceSection>

        <CtaSection>
          <div className="container">
            <h2>Ready to Achieve Similar Results?</h2>
            <p>
              Let's discuss how our data-driven marketing strategies can help your business grow. Schedule a free consultation with our team today.
            </p>
            <Button to="/contact" variant="primary" size="large">
              Get Your Free Consultation
            </Button>
          </div>
        </CtaSection>

        <section>
          <SectionHeading
            subtitle="Client Success"
            title="What Our <span>Clients Say</span>"
            description="Don't just take our word for it. Hear from our satisfied clients about the results we've delivered."
            centered
          />

          <TestimonialSlider testimonials={testimonials} />
        </section>

        <ContactSection>
          <SectionHeading
            subtitle="Let's Talk Results"
            title="Ready to <span>Grow</span> Your Business?"
            description="Contact us today to discuss your marketing goals and learn how we can help you achieve them."
            centered
          />

          <ContactForm />
        </ContactSection>
      </ResultsContainer>
    </>
  );
};

export default Results;
