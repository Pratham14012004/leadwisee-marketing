
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
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
