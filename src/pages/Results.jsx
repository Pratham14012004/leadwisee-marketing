
import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { FaChartLine, FaSearchDollar, FaStar, FaUsers, FaChartBar, FaArrowCircleUp } from "react-icons/fa";

import SectionHeading from "../components/common/SectionHeading";
import Button from "../components/common/Button";
import ContactForm from "../components/common/ContactForm";

const ResultsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem 5rem;
`;

const HeroSection = styled.section`
  text-align: center;
  margin-bottom: 3rem;
  padding: 4rem 0;
  background-color: ${(props) => props.theme.colors.bgAlt};
`;

const MetricsSection = styled.section`
  margin: 5rem 0;
`;

const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const MetricCard = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.bgAlt};
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }
  
  .icon {
    font-size: 2.5rem;
    color: ${(props) => props.theme.colors.primary};
    margin-bottom: 1.5rem;
  }
  
  .metric-value {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: ${(props) => props.theme.colors.primary};
  }
  
  .metric-label {
    font-size: 1.1rem;
    line-height: 1.4;
    margin-bottom: 1rem;
  }
  
  .metric-description {
    font-size: 0.9rem;
    opacity: 0.8;
  }
`;

const IndustrySection = styled.section`
  margin: 5rem 0;
`;

const IndustryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const IndustryCard = styled.div`
  background-color: ${(props) => props.theme.colors.bgAlt};
  border-radius: 12px;
  overflow: hidden;
  
  .industry-header {
    background-color: ${(props) => props.theme.colors.primary};
    padding: 1.5rem;
    color: white;
    
    h3 {
      margin: 0;
      font-size: 1.5rem;
    }
  }
  
  .industry-content {
    padding: 1.5rem;
    
    .stat-group {
      margin-bottom: 1.5rem;
      
      h4 {
        font-size: 1.1rem;
        margin-bottom: 0.5rem;
        font-weight: 600;
      }
      
      .stat {
        display: flex;
        align-items: center;
        margin-bottom: 0.5rem;
        
        .stat-icon {
          color: ${(props) => props.theme.colors.primary};
          margin-right: 0.5rem;
        }
        
        .stat-text {
          font-size: 1rem;
        }
      }
    }
  }
`;

const ChartSection = styled.section`
  margin: 5rem 0;
`;

const ChartContainer = styled.div`
  background-color: ${(props) => props.theme.colors.bgAlt};
  padding: 2rem;
  border-radius: 12px;
  margin-top: 3rem;

  .chart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;

    h3 {
      margin: 0;
      font-size: 1.5rem;
    }

    .chart-legend {
      display: flex;
      gap: 1.5rem;

      .legend-item {
        display: flex;
        align-items: center;

        .legend-color {
          width: 15px;
          height: 15px;
          border-radius: 3px;
          margin-right: 0.5rem;

          &.before {
            background-color: #ccc;
          }

          &.after {
            background-color: ${(props) => props.theme.colors.primary};
          }
        }

        .legend-text {
          font-size: 0.9rem;
        }
      }
    }
  }

  .chart-visualization {
    display: flex;
    height: 300px;
    align-items: flex-end;
    gap: 7%;
    padding: 0 2rem;

    .chart-column {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;

      .bars {
        width: 100%;
        display: flex;
        gap: 10px;
        height: 230px;
        align-items: flex-end;

        .bar {
          flex: 1;
          border-radius: 6px 6px 0 0;
          position: relative;

          &.before {
            background-color: #ccc;
          }

          &.after {
            background-color: ${(props) => props.theme.colors.primary};
          }

          .bar-value {
            position: absolute;
            top: -25px;
            left: 50%;
            transform: translateX(-50%);
            font-weight: 600;
            font-size: 0.9rem;
          }
        }
      }

      .column-label {
        font-size: 1rem;
        text-align: center;
        margin-top: 1rem;
      }
    }
  }
`;

const TestimonialSection = styled.section`
  margin: 5rem 0;
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const TestimonialCard = styled(motion.div)`
  background-color: ${(props) => props.theme.colors.bgAlt};
  padding: 2rem;
  border-radius: 12px;
  
  .testimonial-text {
    font-style: italic;
    margin-bottom: 1.5rem;
    position: relative;
    padding-left: 1.5rem;
    
    &:before {
      content: '"';
      position: absolute;
      left: 0;
      top: -0.5rem;
      font-size: 2rem;
      color: ${(props) => props.theme.colors.primary};
    }
  }
  
  .client-info {
    display: flex;
    align-items: center;
    
    .client-image {
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
    }
    
    .client-details {
      .client-name {
        font-weight: 600;
        margin-bottom: 0.2rem;
      }
      
      .client-position {
        font-size: 0.9rem;
        opacity: 0.8;
      }
    }
  }
  
  .results {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    
    .result-item {
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;
      
      svg {
        color: ${(props) => props.theme.colors.primary};
        margin-right: 0.5rem;
        flex-shrink: 0;
      }
    }
  }
`;

const CtaSection = styled.section`
  background-color: ${(props) => props.theme.colors.bgAlt};
  padding: 4rem 0;
  text-align: center;
  margin: 5rem 0;
  
  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 1.5rem;
  }
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    
    span {
      color: ${(props) => props.theme.colors.primary};
    }
  }
  
  p {
    margin-bottom: 2rem;
    font-size: 1.1rem;
  }
`;

const ContactSection = styled.section`
  max-width: 900px;
  margin: 5rem auto;
`;

const Results = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Key metrics data
  const metrics = [
    {
      icon: <FaChartLine />,
      value: "215%",
      label: "Average ROI",
      description: "Return on investment across all client campaigns (2023 data)",
    },
    {
      icon: <FaSearchDollar />,
      value: "42%",
      label: "Lower CPA",
      description: "Average reduction in cost per acquisition after optimization",
    },
    {
      icon: <FaStar />,
      value: "98%",
      label: "Client Retention",
      description: "Percentage of clients who continue to work with us past the initial term",
    },
    {
      icon: <FaUsers />,
      value: "6.4M",
      label: "Leads Generated",
      description: "Total leads generated for clients in the last 24 months",
    },
    {
      icon: <FaChartBar />,
      value: "68%",
      label: "Conversion Increase",
      description: "Average improvement in conversion rates after optimization",
    },
    {
      icon: <FaArrowCircleUp />,
      value: "$47M+",
      label: "Additional Revenue",
      description: "Incremental revenue generated for clients in 2023",
    },
  ];

  // Industry results data
  const industryResults = [
    {
      name: "SaaS & Technology",
      stats: [
        { text: "187% increase in qualified demo requests" },
        { text: "42% reduction in customer acquisition cost" },
        { text: "68% improvement in trial-to-paid conversion" },
        { text: "215% growth in MRR from marketing channels" },
      ],
    },
    {
      name: "E-Commerce",
      stats: [
        { text: "214% increase in ROAS (Return on Ad Spend)" },
        { text: "47% improvement in conversion rate" },
        { text: "32% higher average order value" },
        { text: "156% growth in repeat purchase rate" },
      ],
    },
    {
      name: "B2B Services",
      stats: [
        { text: "324% increase in marketing qualified leads" },
        { text: "62% reduction in cost per qualified opportunity" },
        { text: "78% growth in pipeline value from digital channels" },
        { text: "43% shorter sales cycles" },
      ],
    },
  ];

  // Chart data
  const chartData = [
    {
      label: "Conversion Rate",
      before: 1.7,
      after: 4.8,
    },
    {
      label: "ROI",
      before: 120,
      after: 315,
    },
    {
      label: "CPA",
      before: 75,
      after: 32,
    },
    {
      label: "Engagement",
      before: 28,
      after: 63,
    },
  ];

  // Testimonial data
  const testimonials = [
    {
      text: "Leadwisee transformed our marketing performance. Their data-driven approach increased our qualified leads by 187% while reducing our cost per acquisition by nearly half.",
      name: "Michael Anderson",
      position: "CEO, TechSolutions Inc.",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2570&q=80",
      results: [
        "187% increase in qualified leads",
        "45% reduction in cost per acquisition",
        "$1.8M additional annual revenue",
      ],
    },
    {
      text: "Working with Leadwisee has been a game-changer for our e-commerce business. Their strategic approach and constant optimization have doubled our ROAS and significantly increased our average order value.",
      name: "Sarah Johnson",
      position: "Marketing Director, ModernRetail",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2576&q=80",
      results: [
        "214% increase in ROAS",
        "32% higher average order value",
        "47% improvement in conversion rate",
      ],
    },
    {
      text: "The Leadwisee team understands our industry and has delivered remarkable results. Their account-based marketing strategy has connected us with perfect-fit enterprise clients and dramatically improved our sales efficiency.",
      name: "David Wong",
      position: "Founder, GrowthSaaS",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80",
      results: [
        "324% increase in enterprise leads",
        "62% reduction in cost per opportunity",
        "43% shorter sales cycles",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>Our Results | Leadwisee Performance Marketing Agency</title>
        <meta
          name="description"
          content="See the measurable results we've achieved for clients across industries. Leadwisee delivers data-driven marketing performance that drives growth."
        />
      </Helmet>

      <HeroSection>
        <SectionHeading
          subtitle="Client Success Metrics"
          title="Measurable <span>Results</span> Across Industries"
          description="We're proud of the real, measurable improvements we've achieved for our clients. Our performance marketing approach delivers quantifiable business growth."
          centered
        />
      </HeroSection>

      <ResultsContainer>
        <MetricsSection>
          <SectionHeading
            subtitle="Performance Indicators"
            title="Key <span>Metrics</span> That Drive Growth"
            description="These performance metrics demonstrate our impact across all client campaigns. Every number represents real business growth for our clients."
          />

          <MetricsGrid>
            {metrics.map((metric, index) => (
              <MetricCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="icon">{metric.icon}</div>
                <div className="metric-value">{metric.value}</div>
                <div className="metric-label">{metric.label}</div>
                <div className="metric-description">{metric.description}</div>
              </MetricCard>
            ))}
          </MetricsGrid>
        </MetricsSection>

        <IndustrySection>
          <SectionHeading
            subtitle="Industry Breakdowns"
            title="Results By <span>Industry</span>"
            description="Our specialized industry expertise delivers tailored results for different business types. Here's how we've helped clients across key industries."
          />

          <IndustryGrid>
            {industryResults.map((industry, index) => (
              <IndustryCard key={index}>
                <div className="industry-header">
                  <h3>{industry.name}</h3>
                </div>
                <div className="industry-content">
                  <div className="stat-group">
                    <h4>Key Performance Improvements:</h4>
                    {industry.stats.map((stat, i) => (
                      <div className="stat" key={i}>
                        <FaChartLine className="stat-icon" />
                        <div className="stat-text">{stat.text}</div>
                      </div>
                    ))}
                  </div>
                  <Button
                    to={`/industries/${industry.name.toLowerCase().replace(/[&\s]+/g, "-")}`}
                    variant="secondary"
                    size="small"
                  >
                    View Industry Page
                  </Button>
                </div>
              </IndustryCard>
            ))}
          </IndustryGrid>
        </IndustrySection>

        <ChartSection>
          <SectionHeading
            subtitle="Performance Visualization"
            title="Before & After <span>Working With Us</span>"
            description="See the dramatic improvements our clients experience after implementing our performance marketing strategies."
            centered
          />

          <ChartContainer>
            <div className="chart-header">
              <h3>Average Performance Metrics</h3>
              <div className="chart-legend">
                <div className="legend-item">
                  <div className="legend-color before"></div>
                  <div className="legend-text">Before Leadwisee</div>
                </div>
                <div className="legend-item">
                  <div className="legend-color after"></div>
                  <div className="legend-text">After Leadwisee</div>
                </div>
              </div>
            </div>
            <div className="chart-visualization">
              {chartData.map((item, index) => (
                <div className="chart-column" key={index}>
                  <div className="bars">
                    <div
                      className="bar before"
                      style={{
                        height: `${
                          item.label === "CPA"
                            ? (item.before / 100) * 100
                            : (item.before / 400) * 100
                        }%`,
                      }}
                    >
                      <div className="bar-value">
                        {item.label === "CPA" || item.label === "ROI"
                          ? "$" + item.before
                          : item.before + "%"}
                      </div>
                    </div>
                    <div
                      className="bar after"
                      style={{
                        height: `${
                          item.label === "CPA"
                            ? (item.after / 100) * 100
                            : (item.after / 400) * 100
                        }%`,
                      }}
                    >
                      <div className="bar-value">
                        {item.label === "CPA" || item.label === "ROI"
                          ? "$" + item.after
                          : item.after + "%"}
                      </div>
                    </div>
                  </div>
                  <div className="column-label">{item.label}</div>
                </div>
              ))}
            </div>
          </ChartContainer>
        </ChartSection>

        <TestimonialSection>
          <SectionHeading
            subtitle="Client Success Stories"
            title="Real <span>Results</span> From Our Clients"
            description="Don't just take our word for it. Hear directly from businesses that have transformed their results with Leadwisee."
          />

          <TestimonialGrid>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="testimonial-text">{testimonial.text}</div>
                <div className="client-info">
                  <div className="client-image">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="client-details">
                    <div className="client-name">{testimonial.name}</div>
                    <div className="client-position">{testimonial.position}</div>
                  </div>
                </div>
                <div className="results">
                  {testimonial.results.map((result, i) => (
                    <div className="result-item" key={i}>
                      <FaChartLine />
                      <div>{result}</div>
                    </div>
                  ))}
                </div>
              </TestimonialCard>
            ))}
          </TestimonialGrid>
        </TestimonialSection>

        <CtaSection>
          <div className="container">
            <h2>
              Ready for <span>Similar Results</span>?
            </h2>
            <p>
              Let's discuss how our performance marketing strategies can drive
              real, measurable growth for your business.
            </p>
            <Button to="/contact" variant="primary" size="large">
              Get Your Free Consultation
            </Button>
          </div>
        </CtaSection>

        <ContactSection>
          <SectionHeading
            subtitle="Let's Connect"
            title="Ready to <span>Transform</span> Your Marketing Performance?"
            description="Fill out the form below to discuss your goals and learn how we can help you achieve similar results."
            centered
          />

          <ContactForm />
        </ContactSection>
      </ResultsContainer>
    </>
  );
};

export default Results;
