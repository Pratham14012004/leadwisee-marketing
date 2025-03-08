import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaChartLine, FaUserCheck, FaSearchDollar, FaTools } from 'react-icons/fa';

import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import ContactForm from '../components/common/ContactForm';

const CaseStudiesContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem 5rem;
`;

const CaseStudiesHero = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  padding: 3rem 0;
`;

const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const FilterGroup = styled.div`
  margin-bottom: 1.5rem;

  @media (min-width: 768px) {
    margin-bottom: 0;
  }

  h4 {
    font-size: 1rem;
    margin-bottom: 0.8rem;
    color: ${props => props.theme.colors.textSecondary};
  }

  .filters {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`;

const FilterButton = styled.button`
  background-color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.bgAlt};
  color: ${props => props.active ? '#fff' : props.theme.colors.text};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${props => props.active ? props.theme.colors.primary : props.theme.colors.primaryLight};
    color: ${props => props.active ? '#fff' : props.theme.colors.primary};
  }
`;

const CaseStudiesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CaseStudyCard = styled(motion.div)`
  background-color: ${props => props.theme.colors.bgAlt};
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-10px);

    .case-study-image img {
      transform: scale(1.05);
    }
  }

  .case-study-image {
    height: 200px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
  }

  .case-study-content {
    padding: 1.5rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;

    .industry {
      color: ${props => props.theme.colors.primary};
      font-size: 0.9rem;
      font-weight: 500;
      margin-bottom: 0.5rem;
    }

    h3 {
      font-size: 1.4rem;
      margin-bottom: 1rem;
      font-weight: 600;
      line-height: 1.4;
    }

    p {
      margin-bottom: 1.5rem;
      line-height: 1.6;
      flex-grow: 1;
    }

    .results {
      margin-bottom: 1.5rem;

      .result-item {
        display: flex;
        align-items: center;
        margin-bottom: 0.5rem;

        svg {
          color: ${props => props.theme.colors.primary};
          margin-right: 0.5rem;
        }
      }
    }
  }
`;

const NoResults = styled.div`
  text-align: center;
  padding: 4rem 2rem;
  background-color: ${props => props.theme.colors.bgAlt};
  border-radius: 12px;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }

  p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const ContactSection = styled.div`
  margin-top: 6rem;
`;

const CaseStudies = () => {
  // State for filters
  const [industryFilter, setIndustryFilter] = useState('all');
  const [serviceFilter, setServiceFilter] = useState('all');

  // Case study data
  const caseStudies = [
    {
      id: 'saas-lead-generation',
      title: 'How We Increased Demo Bookings by 187% for a B2B SaaS Platform',
      description: 'A comprehensive lead generation strategy that transformed qualified demo requests for an enterprise software solution.',
      industry: 'saas',
      services: ['ppc', 'conversion-optimization', 'content-marketing'],
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      results: [
        '187% increase in qualified demo bookings',
        '42% reduction in cost per acquisition',
        '$1.2M in new pipeline value generated'
      ]
    },
    {
      id: 'ecommerce-revenue-growth',
      title: 'Scaling E-Commerce Revenue: $4.2M Growth in 6 Months',
      description: 'How our multi-channel approach helped an online retailer dramatically increase sales while improving marketing efficiency.',
      industry: 'ecommerce',
      services: ['ppc', 'social-media', 'email-marketing'],
      image: 'https://images.unsplash.com/photo-1522204605090-c9a2c7c8dfe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80',
      results: [
        '215% increase in monthly revenue',
        '47% improvement in ROAS',
        '32% higher average order value'
      ]
    },
    {
      id: 'real-estate-lead-generation',
      title: 'Luxury Real Estate Marketing: 156% More Qualified Leads',
      description: 'A targeted campaign that helped a high-end real estate agency attract more qualified buyer and seller leads.',
      industry: 'real-estate',
      services: ['ppc', 'seo', 'social-media'],
      image: 'https://images.unsplash.com/photo-1565402170291-8491f14678db?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      results: [
        '156% increase in qualified property inquiries',
        '42% more seller valuation requests',
        '$14.5M in additional sales volume'
      ]
    },
    {
      id: 'healthcare-patient-acquisition',
      title: 'HIPAA-Compliant Marketing for Multi-Location Medical Practice',
      description: 'How we helped a healthcare provider improve patient acquisition while maintaining strict regulatory compliance.',
      industry: 'healthcare',
      services: ['local-seo', 'ppc', 'conversion-optimization'],
      image: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80',
      results: [
        '124% increase in new patient appointments',
        '37% lower patient acquisition cost',
        '85% improvement in targeted procedure volume'
      ]
    },
    {
      id: 'retail-omnichannel-strategy',
      title: 'Omnichannel Marketing Strategy for National Retail Chain',
      description: 'Bridging online and offline experiences to increase both e-commerce sales and in-store foot traffic.',
      industry: 'retail',
      services: ['social-media', 'local-seo', 'email-marketing'],
      image: 'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      results: [
        '68% increase in BOPIS (Buy Online, Pickup In Store) orders',
        '143% growth in store visits from digital campaigns',
        '27% higher customer lifetime value'
      ]
    },
    {
      id: 'b2b-account-based-marketing',
      title: 'Account-Based Marketing: Targeting Fortune 500 Decision-Makers',
      description: 'How we helped a B2B service provider reach and convert C-suite executives at target enterprise accounts.',
      industry: 'b2b',
      services: ['content-marketing', 'social-media', 'ppc'],
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2532&q=80',
      results: [
        '320% increase in engagement from target accounts',
        '47% higher conversion rate to sales meetings',
        '8 new enterprise clients worth $2.4M in ARR'
      ]
    }
  ];

  // Filter case studies based on selected filters
  const filteredCaseStudies = caseStudies.filter(caseStudy => {
    // If both filters are 'all', show all case studies
    if (industryFilter === 'all' && serviceFilter === 'all') {
      return true;
    }

    // If industry filter is 'all', only check service filter
    if (industryFilter === 'all') {
      return serviceFilter === 'all' || caseStudy.services.includes(serviceFilter);
    }

    // If service filter is 'all', only check industry filter
    if (serviceFilter === 'all') {
      return industryFilter === 'all' || caseStudy.industry === industryFilter;
    }

    // If both filters are active, check both
    return caseStudy.industry === industryFilter && caseStudy.services.includes(serviceFilter);
  });

  // Helper function to get readable industry name
  const getIndustryName = (industryCode) => {
    switch(industryCode) {
      case 'saas': return 'SaaS';
      case 'b2b': return 'B2B';
      case 'ecommerce': return 'E-Commerce';
      case 'healthcare': return 'Healthcare';
      case 'real-estate': return 'Real Estate';
      case 'retail': return 'Retail';
      default: return industryCode.charAt(0).toUpperCase() + industryCode.slice(1);
    }
  };

  return (
    <>
      <Helmet>
        <title>Case Studies | Leadwisee Performance Marketing</title>
        <meta 
          name="description" 
          content="Explore real-world results we've achieved for clients across industries through our performance-focused marketing strategies."
        />
      </Helmet>

      <CaseStudiesHero>
        <SectionHeading
          subtitle="Success Stories"
          title="Real <span>Results</span> for Real Businesses"
          description="Explore our case studies to see how we've helped companies across industries achieve measurable growth through performance marketing."
          centered
        />
      </CaseStudiesHero>

      <CaseStudiesContainer>
        {/* Filters */}
        <FiltersContainer>
          <FilterGroup>
            <h4>Filter by Industry:</h4>
            <div className="filters">
              <FilterButton 
                active={industryFilter === 'all'} 
                onClick={() => setIndustryFilter('all')}
              >
                All Industries
              </FilterButton>
              <FilterButton 
                active={industryFilter === 'b2b'} 
                onClick={() => setIndustryFilter('b2b')}
              >
                B2B
              </FilterButton>
              <FilterButton 
                active={industryFilter === 'saas'} 
                onClick={() => setIndustryFilter('saas')}
              >
                SaaS
              </FilterButton>
              <FilterButton 
                active={industryFilter === 'ecommerce'} 
                onClick={() => setIndustryFilter('ecommerce')}
              >
                E-Commerce
              </FilterButton>
              <FilterButton 
                active={industryFilter === 'healthcare'} 
                onClick={() => setIndustryFilter('healthcare')}
              >
                Healthcare
              </FilterButton>
              <FilterButton 
                active={industryFilter === 'real-estate'} 
                onClick={() => setIndustryFilter('real-estate')}
              >
                Real Estate
              </FilterButton>
              <FilterButton 
                active={industryFilter === 'retail'} 
                onClick={() => setIndustryFilter('retail')}
              >
                Retail
              </FilterButton>
            </div>
          </FilterGroup>

          <FilterGroup>
            <h4>Filter by Service:</h4>
            <div className="filters">
              <FilterButton 
                active={serviceFilter === 'all'} 
                onClick={() => setServiceFilter('all')}
              >
                All Services
              </FilterButton>
              <FilterButton 
                active={serviceFilter === 'ppc'} 
                onClick={() => setServiceFilter('ppc')}
              >
                PPC
              </FilterButton>
              <FilterButton 
                active={serviceFilter === 'seo'} 
                onClick={() => setServiceFilter('seo')}
              >
                SEO
              </FilterButton>
              <FilterButton 
                active={serviceFilter === 'social-media'} 
                onClick={() => setServiceFilter('social-media')}
              >
                Social Media
              </FilterButton>
              <FilterButton 
                active={serviceFilter === 'content-marketing'} 
                onClick={() => setServiceFilter('content-marketing')}
              >
                Content
              </FilterButton>
              <FilterButton 
                active={serviceFilter === 'conversion-optimization'} 
                onClick={() => setServiceFilter('conversion-optimization')}
              >
                CRO
              </FilterButton>
              <FilterButton 
                active={serviceFilter === 'email-marketing'} 
                onClick={() => setServiceFilter('email-marketing')}
              >
                Email
              </FilterButton>
            </div>
          </FilterGroup>
        </FiltersContainer>

        {/* Case Studies Grid */}
        {filteredCaseStudies.length > 0 ? (
          <CaseStudiesGrid>
            {filteredCaseStudies.map((caseStudy, index) => (
              <CaseStudyCard
                key={caseStudy.id}
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="case-study-image">
                  <img src={caseStudy.image} alt={caseStudy.title} />
                </div>
                <div className="case-study-content">
                  <div className="industry">{getIndustryName(caseStudy.industry)}</div>
                  <h3>{caseStudy.title}</h3>
                  <p>{caseStudy.description}</p>
                  <div className="results">
                    {caseStudy.results.map((result, idx) => (
                      <div className="result-item" key={idx}>
                        <FaChartLine /> {result}
                      </div>
                    ))}
                  </div>
                  <Link to={`/case-studies/${caseStudy.id}`}>
                    <Button 
                      rightIcon={<FaArrowRight />}
                      variant="primary"
                      fullWidth
                    >
                      View Case Study
                    </Button>
                  </Link>
                </div>
              </CaseStudyCard>
            ))}
          </CaseStudiesGrid>
        ) : (
          <NoResults>
            <h3>No Case Studies Found</h3>
            <p>
              We couldn't find any case studies matching your selected filters. Please try different criteria or view all of our case studies.
            </p>
            <Button 
              onClick={() => {
                setIndustryFilter('all');
                setServiceFilter('all');
              }}
              variant="primary"
              size="large"
            >
              View All Case Studies
            </Button>
          </NoResults>
        )}

        {/* Contact Section */}
        <ContactSection>
          <SectionHeading
            subtitle="Your Success Story"
            title="Ready to Become Our Next <span>Success Story</span>?"
            description="Let's discuss how we can help you achieve similar results for your business."
            centered
          />
          <ContactForm />
        </ContactSection>
      </CaseStudiesContainer>
    </>
  );
};

export default CaseStudies;