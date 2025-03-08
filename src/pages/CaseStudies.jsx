
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';

// Styled components
const PageWrapper = styled.div`
  padding-top: 100px;
`;

const HeroSection = styled.section`
  background: ${props => props.theme.colors.gradientBg};
  padding: 100px 0 80px;
  text-align: center;
`;

const HeroContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Section = styled.section`
  padding: 80px 0;
  background: ${props => props.theme.colors.background};
`;

const MainTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  margin-bottom: 20px;
  
  span {
    color: ${props => props.theme.colors.primary};
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.3rem;
  max-width: 800px;
  margin: 0 auto 30px;
  color: ${props => props.theme.colors.textMuted};
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 40px;
  padding: 0 20px;
`;

const FilterButton = styled.button`
  padding: 8px 20px;
  margin: 0 8px 10px;
  background: ${props => props.active ? props.theme.colors.primary : 'transparent'};
  color: ${props => props.active ? 'white' : props.theme.colors.text};
  border: 1px solid ${props => props.active ? props.theme.colors.primary : props.theme.colors.border};
  border-radius: 30px;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.active ? props.theme.colors.primary : props.theme.colors.backgroundAlt};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CaseStudyCard = styled(motion.div)`
  background: ${props => props.theme.colors.cardBg};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
  
  .case-study-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .case-study-content {
    padding: 25px;
    
    .badge {
      display: inline-block;
      padding: 5px 15px;
      background: ${props => props.theme.colors.primaryLight};
      color: ${props => props.theme.colors.primary};
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 600;
      margin-bottom: 15px;
    }
    
    h3 {
      font-size: 1.5rem;
      margin-bottom: 10px;
    }
    
    p {
      font-size: 1rem;
      line-height: 1.6;
      margin-bottom: 20px;
      color: ${props => props.theme.colors.textMuted};
    }
    
    .results {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 20px;
      
      .result-item {
        margin-right: 20px;
        margin-bottom: 10px;
        
        .number {
          font-size: 1.5rem;
          font-weight: 700;
          color: ${props => props.theme.colors.primary};
          display: block;
        }
        
        .label {
          font-size: 0.85rem;
        }
      }
    }
    
    .link {
      display: inline-flex;
      align-items: center;
      color: ${props => props.theme.colors.primary};
      font-weight: 600;
      text-decoration: none;
      
      svg {
        margin-left: 5px;
        transition: transform 0.3s ease;
      }
      
      &:hover svg {
        transform: translateX(5px);
      }
    }
  }
`;

// Animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const CaseStudies = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Case studies data
  const caseStudiesData = [
    {
      id: 1,
      title: "PPC Campaign for E-commerce Giant",
      client: "Fashion Retailer",
      industry: "E-commerce",
      service: "PPC Marketing",
      summary: "Revamped the PPC strategy for a leading fashion retailer to improve ROAS and drive more qualified traffic.",
      image: "https://source.unsplash.com/random/600x400/?ecommerce,fashion",
      results: [
        { number: "214%", label: "Increase in ROAS" },
        { number: "78%", label: "Increase in Conversion Rate" },
        { number: "45%", label: "Reduction in CPA" }
      ]
    },
    {
      id: 2,
      title: "SaaS Lead Generation Strategy",
      client: "HR Software Company",
      industry: "SaaS",
      service: "Lead Generation",
      summary: "Developed a comprehensive lead generation strategy for a B2B SaaS company in the HR tech space.",
      image: "https://source.unsplash.com/random/600x400/?software,business",
      results: [
        { number: "156%", label: "Increase in MQLs" },
        { number: "32%", label: "Reduction in CAC" },
        { number: "68%", label: "Increase in Demo Requests" }
      ]
    },
    {
      id: 3,
      title: "Social Media Campaign for Restaurant Chain",
      client: "National Restaurant Brand",
      industry: "Food & Beverage",
      service: "Social Media Marketing",
      summary: "Created an engaging social media campaign that significantly increased foot traffic and online orders.",
      image: "https://source.unsplash.com/random/600x400/?restaurant,food",
      results: [
        { number: "89%", label: "Increase in Engagement" },
        { number: "45%", label: "Increase in Store Visits" },
        { number: "124%", label: "Increase in Online Orders" }
      ]
    },
    {
      id: 4,
      title: "SEO Strategy for Medical Practice",
      client: "Multi-Location Healthcare Provider",
      industry: "Healthcare",
      service: "SEO",
      summary: "Implemented a local SEO strategy for a healthcare provider with multiple locations across the country.",
      image: "https://source.unsplash.com/random/600x400/?medical,doctor",
      results: [
        { number: "215%", label: "Increase in Organic Traffic" },
        { number: "75%", label: "Increase in Appointment Bookings" },
        { number: "80%", label: "Increase in Keyword Rankings" }
      ]
    },
    {
      id: 5,
      title: "Email Marketing Automation for Real Estate",
      client: "Luxury Property Developer",
      industry: "Real Estate",
      service: "Email Marketing",
      summary: "Developed an email marketing automation sequence that nurtured leads through the property buying journey.",
      image: "https://source.unsplash.com/random/600x400/?realestate,property",
      results: [
        { number: "45%", label: "Increase in Email Open Rate" },
        { number: "67%", label: "Increase in Property Viewings" },
        { number: "28%", label: "Increase in Sales Conversion" }
      ]
    },
    {
      id: 6,
      title: "Conversion Rate Optimization for Finance App",
      client: "Personal Finance Platform",
      industry: "Finance",
      service: "CRO",
      summary: "Optimized the onboarding flow and key conversion points for a personal finance application.",
      image: "https://source.unsplash.com/random/600x400/?finance,app",
      results: [
        { number: "58%", label: "Increase in Sign-up Completion" },
        { number: "32%", label: "Reduction in Onboarding Abandonment" },
        { number: "41%", label: "Increase in Feature Adoption" }
      ]
    },
    {
      id: 7,
      title: "B2B Content Marketing Strategy",
      client: "Enterprise Software Provider",
      industry: "SaaS",
      service: "Content Marketing",
      summary: "Created a thought leadership content strategy that positioned the client as an industry leader and drove qualified leads.",
      image: "https://source.unsplash.com/random/600x400/?business,meeting",
      results: [
        { number: "185%", label: "Increase in Lead Magnet Downloads" },
        { number: "78%", label: "Increase in Demo Requests from Content" },
        { number: "42%", label: "Reduction in Sales Cycle Length" }
      ]
    },
    {
      id: 8,
      title: "E-commerce Remarketing Campaign",
      client: "Home Goods Retailer",
      industry: "E-commerce",
      service: "Remarketing",
      summary: "Implemented a sophisticated remarketing strategy that significantly improved cart recovery and customer retention.",
      image: "https://source.unsplash.com/random/600x400/?ecommerce,shopping",
      results: [
        { number: "72%", label: "Increase in Cart Recovery" },
        { number: "38%", label: "Increase in Customer Lifetime Value" },
        { number: "65%", label: "Increase in Repeat Purchases" }
      ]
    }
  ];
  
  // Filter state
  const [activeFilter, setActiveFilter] = useState('All');
  const [filteredCaseStudies, setFilteredCaseStudies] = useState(caseStudiesData);
  
  // Get unique industries and services for filters
  const industries = ['All', ...new Set(caseStudiesData.map(item => item.industry))];
  const services = ['All', ...new Set(caseStudiesData.map(item => item.service))];
  
  // Filter case studies based on selected filter
  const filterCaseStudies = (filterType, filterValue) => {
    setActiveFilter(filterValue);
    
    if (filterValue === 'All') {
      setFilteredCaseStudies(caseStudiesData);
    } else if (filterType === 'industry') {
      setFilteredCaseStudies(caseStudiesData.filter(item => item.industry === filterValue));
    } else if (filterType === 'service') {
      setFilteredCaseStudies(caseStudiesData.filter(item => item.service === filterValue));
    }
  };
  
  return (
    <>
      <Helmet>
        <title>Case Studies | Leadwisee - Performance Marketing Agency</title>
        <meta
          name="description"
          content="Explore our case studies showcasing how we've helped clients achieve measurable results through performance marketing strategies."
        />
      </Helmet>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <PageWrapper>
          <HeroSection>
            <HeroContent>
              <MainTitle>
                Our <span>Case Studies</span>
              </MainTitle>
              <Subtitle>
                Explore how we've helped businesses across various industries achieve measurable results through data-driven marketing strategies.
              </Subtitle>
            </HeroContent>
          </HeroSection>
          
          <Section>
            <FilterContainer>
              <div style={{ marginBottom: '20px', width: '100%', textAlign: 'center' }}>
                <h3 style={{ marginBottom: '10px' }}>Filter by Industry</h3>
                {industries.map((industry) => (
                  <FilterButton
                    key={industry}
                    active={activeFilter === industry}
                    onClick={() => filterCaseStudies('industry', industry)}
                  >
                    {industry}
                  </FilterButton>
                ))}
              </div>
              
              <div style={{ width: '100%', textAlign: 'center' }}>
                <h3 style={{ marginBottom: '10px' }}>Filter by Service</h3>
                {services.map((service) => (
                  <FilterButton
                    key={service}
                    active={activeFilter === service}
                    onClick={() => filterCaseStudies('service', service)}
                  >
                    {service}
                  </FilterButton>
                ))}
              </div>
            </FilterContainer>
            
            <Grid 
              as={motion.div} 
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {filteredCaseStudies.map((caseStudy) => (
                <CaseStudyCard
                  key={caseStudy.id}
                  variants={fadeInUp}
                >
                  <img 
                    className="case-study-image" 
                    src={caseStudy.image} 
                    alt={caseStudy.title} 
                  />
                  <div className="case-study-content">
                    <span className="badge">{caseStudy.industry}</span>
                    <h3>{caseStudy.title}</h3>
                    <p>{caseStudy.summary}</p>
                    
                    <div className="results">
                      {caseStudy.results.map((result, index) => (
                        <div key={index} className="result-item">
                          <span className="number">{result.number}</span>
                          <span className="label">{result.label}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Link to={`/case-studies/${caseStudy.id}`} className="link">
                      View Case Study <FaArrowRight />
                    </Link>
                  </div>
                </CaseStudyCard>
              ))}
            </Grid>
          </Section>
        </PageWrapper>
      </motion.div>
    </>
  );
};

export default CaseStudies;
