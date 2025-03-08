
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaCheck, FaArrowRight } from 'react-icons/fa';

import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import ContactForm from '../components/common/ContactForm';

const ServiceDetailContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem 5rem;
`;

const ServiceHero = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  padding: 4rem 0;
`;

const ServiceContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
  
  @media (min-width: 992px) {
    grid-template-columns: 2fr 1fr;
  }
`;

const MainContent = styled.div`
  h3 {
    margin-bottom: 1.5rem;
    font-size: 1.75rem;
  }
  
  p {
    margin-bottom: 1.5rem;
    color: ${props => props.theme.textLight};
    line-height: 1.7;
  }
`;

const Sidebar = styled.div`
  background: ${props => props.theme.background};
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  height: fit-content;
  
  h4 {
    margin-bottom: 1.5rem;
    font-size: 1.25rem;
  }
`;

const BenefitsList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
  
  li {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
    
    svg {
      color: ${props => props.theme.primary};
      margin-right: 0.75rem;
      margin-top: 0.25rem;
      flex-shrink: 0;
    }
  }
`;

const CaseStudySection = styled.div`
  margin-top: 4rem;
  
  h3 {
    margin-bottom: 2rem;
  }
`;

const CaseStudyCard = styled(motion.div)`
  background: ${props => props.theme.background};
  border-radius: 0.5rem;
  padding: 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  margin-bottom: 2rem;
  
  h4 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  
  p {
    margin-bottom: 1.5rem;
  }
  
  .results {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    margin-bottom: 1.5rem;
    
    .result-item {
      .number {
        font-size: 2rem;
        font-weight: 700;
        color: ${props => props.theme.primary};
        margin-bottom: 0.5rem;
      }
      
      .label {
        font-size: 0.875rem;
        color: ${props => props.theme.textLight};
      }
    }
  }
`;

const MethodologySection = styled.div`
  margin: 4rem 0;
  
  .steps {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-top: 2rem;
    
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    
    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
    
    .step {
      padding: 2rem;
      background: ${props => props.theme.background};
      border-radius: 0.5rem;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
      
      .step-number {
        font-size: 1.5rem;
        font-weight: 700;
        color: ${props => props.theme.primary};
        margin-bottom: 1rem;
      }
      
      h4 {
        margin-bottom: 1rem;
      }
      
      p {
        color: ${props => props.theme.textLight};
      }
    }
  }
`;

const FormSection = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

const ServiceDetail = () => {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  
  // Mock data for services
  const servicesData = {
    'ppc-marketing': {
      title: 'PPC Marketing',
      description: 'Our data-driven PPC campaigns are designed to maximize ROI and drive qualified traffic to your business.',
      fullDescription: `
        Pay-Per-Click (PPC) marketing remains one of the most effective ways to drive targeted traffic and generate immediate results. At Leadwisee, we specialize in creating and managing high-performing PPC campaigns across multiple platforms including Google Ads, Microsoft Ads, Facebook Ads, and more.
        
        Our approach is rooted in data analysis and continuous optimization. We don't just set up campaigns and let them run – we constantly monitor performance, adjust bids, refine targeting, and improve ad copy to ensure you're getting the best possible return on your investment.
      `,
      benefits: [
        'Immediate visibility and traffic to your website',
        'Highly targeted campaigns based on demographics, interests, and search intent',
        'Detailed performance tracking and transparent reporting',
        'Continuous optimization to improve conversion rates',
        'Scalable campaigns that grow with your business',
        'Advanced remarketing strategies to re-engage potential customers'
      ],
      methodology: [
        {
          step: 1,
          title: 'Research & Analysis',
          description: 'We conduct in-depth keyword research, competitor analysis, and audience research to develop a strategic foundation.'
        },
        {
          step: 2,
          title: 'Campaign Structure',
          description: 'We create a logical, organized campaign structure with targeted ad groups and keywords.'
        },
        {
          step: 3,
          title: 'Compelling Ad Creation',
          description: 'Our team crafts engaging ad copy and designs that resonate with your target audience.'
        },
        {
          step: 4,
          title: 'Landing Page Optimization',
          description: 'We ensure your landing pages are conversion-focused and aligned with ad messaging.'
        },
        {
          step: 5,
          title: 'Testing & Optimization',
          description: 'We continuously test different elements and optimize based on performance data.'
        },
        {
          step: 6,
          title: 'Scaling & Expansion',
          description: 'Once we identify what works, we scale successful campaigns and expand to new opportunities.'
        }
      ],
      caseStudies: [
        {
          title: 'E-commerce Revenue Growth',
          client: 'Online Fashion Retailer',
          description: 'We restructured Google Shopping and Search campaigns for an online fashion retailer, focusing on high-intent keywords and product feed optimization.',
          results: [
            { number: '247%', label: 'Increase in ROAS' },
            { number: '68%', label: 'Increase in Revenue' },
            { number: '42%', label: 'Reduction in CPA' }
          ]
        },
        {
          title: 'B2B Lead Generation',
          client: 'SaaS Company',
          description: 'We developed a comprehensive PPC strategy for a B2B SaaS company targeting enterprise clients in the healthcare sector.',
          results: [
            { number: '156%', label: 'Increase in Qualified Leads' },
            { number: '43%', label: 'Reduction in Cost Per Lead' },
            { number: '28%', label: 'Increase in Conversion Rate' }
          ]
        }
      ]
    },
    'social-media-marketing': {
      title: 'Social Media Marketing',
      description: 'We create engaging social media strategies that build brand awareness and drive conversions.',
      fullDescription: `
        Social media has transformed from a simple communication channel to a powerful marketing platform. At Leadwisee, we develop comprehensive social media strategies that help businesses connect with their audience, build brand loyalty, and drive measurable results.
        
        Our social media experts understand the nuances of each platform and how to leverage their unique features to achieve your business goals. Whether it's organic community building or paid advertising campaigns, we create content and strategies that resonate with your target audience and inspire action.
      `,
      benefits: [
        'Increased brand awareness and recognition',
        'Stronger customer relationships and community engagement',
        'Direct channel for customer feedback and support',
        'Highly targeted advertising to reach ideal customers',
        'Improved website traffic and lead generation',
        'Competitive insight and industry positioning'
      ],
      methodology: [
        {
          step: 1,
          title: 'Platform & Audience Analysis',
          description: 'We identify the most relevant platforms for your business and analyze your target audience behavior.'
        },
        {
          step: 2,
          title: 'Strategy Development',
          description: 'We create a comprehensive social media strategy aligned with your business objectives.'
        },
        {
          step: 3,
          title: 'Content Creation',
          description: 'Our team develops engaging, on-brand content that resonates with your audience.'
        },
        {
          step: 4,
          title: 'Community Management',
          description: 'We engage with your audience, respond to comments, and build an active community.'
        },
        {
          step: 5,
          title: 'Paid Social Campaigns',
          description: 'We create and manage targeted advertising campaigns to reach specific business goals.'
        },
        {
          step: 6,
          title: 'Analysis & Optimization',
          description: 'We continuously monitor performance, analyze results, and refine our approach.'
        }
      ],
      caseStudies: [
        {
          title: 'Brand Awareness Campaign',
          client: 'Health & Wellness Startup',
          description: 'We launched a multi-platform social media strategy for a new wellness brand, focusing on educational content and community building.',
          results: [
            { number: '320%', label: 'Increase in Followers' },
            { number: '78%', label: 'Increase in Engagement' },
            { number: '45%', label: 'Increase in Website Traffic' }
          ]
        },
        {
          title: 'Product Launch Campaign',
          client: 'Consumer Electronics Brand',
          description: 'We executed a coordinated social media campaign across Instagram, Facebook, and TikTok to launch a new product line.',
          results: [
            { number: '1.2M', label: 'Campaign Reach' },
            { number: '24%', label: 'Conversion Rate' },
            { number: '186%', label: 'ROI on Ad Spend' }
          ]
        }
      ]
    },
    'ecommerce-marketing': {
      title: 'E-commerce Marketing',
      description: 'Our e-commerce marketing strategies help online stores increase traffic, conversion rates, and average order value.',
      fullDescription: `
        E-commerce marketing requires a specialized approach that addresses the unique challenges of online retail. Our e-commerce marketing services are designed to attract qualified traffic, optimize the user experience, and implement effective conversion strategies that drive sales.
        
        From technical SEO and product listing optimization to shopping campaigns and email marketing automation, we provide comprehensive solutions for e-commerce businesses looking to grow their online presence and increase revenue.
      `,
      benefits: [
        'Increased website traffic from qualified prospects',
        'Higher conversion rates through optimized user journeys',
        'Improved product visibility in search engines and marketplaces',
        'Effective abandoned cart recovery strategies',
        'Cross-selling and upselling tactics to increase AOV',
        'Data-driven insights to inform inventory and product decisions'
      ],
      methodology: [
        {
          step: 1,
          title: 'Store & Competitor Analysis',
          description: 'We analyze your store, products, and competitors to identify opportunities and challenges.'
        },
        {
          step: 2,
          title: 'Technical Optimization',
          description: 'We ensure your store is technically sound, with fast loading times and mobile optimization.'
        },
        {
          step: 3,
          title: 'Product Optimization',
          description: 'We optimize product listings with compelling descriptions, images, and structured data.'
        },
        {
          step: 4,
          title: 'Traffic Generation',
          description: 'We implement strategies to drive targeted traffic through multiple channels.'
        },
        {
          step: 5,
          title: 'Conversion Optimization',
          description: 'We enhance the user experience and implement tactics to increase conversion rates.'
        },
        {
          step: 6,
          title: 'Retention & Growth',
          description: 'We develop strategies to encourage repeat purchases and increase customer lifetime value.'
        }
      ],
      caseStudies: [
        {
          title: 'Multi-Channel E-commerce Growth',
          client: 'Home Goods Retailer',
          description: 'We implemented a comprehensive e-commerce strategy across Google Shopping, Facebook Ads, and Email Marketing for a home goods retailer.',
          results: [
            { number: '189%', label: 'Increase in Revenue' },
            { number: '32%', label: 'Increase in Conversion Rate' },
            { number: '28%', label: 'Increase in AOV' }
          ]
        },
        {
          title: 'Marketplace Optimization',
          client: 'Beauty Products Brand',
          description: 'We optimized product listings and advertising campaigns across Amazon and Walmart Marketplace for a beauty brand.',
          results: [
            { number: '215%', label: 'Increase in Marketplace Sales' },
            { number: '56%', label: 'Increase in Product Visibility' },
            { number: '23%', label: 'Reduction in ACoS' }
          ]
        }
      ]
    }
  };
  
  useEffect(() => {
    // In a real application, you would fetch this data from an API
    if (slug && servicesData[slug]) {
      setService(servicesData[slug]);
      window.scrollTo(0, 0);
    }
  }, [slug]);
  
  if (!service) {
    return (
      <div style={{ padding: '5rem 1rem', textAlign: 'center' }}>
        <h2>Service not found</h2>
        <p>The service you're looking for doesn't exist or has been moved.</p>
        <Button to="/services" style={{ marginTop: '1rem' }}>
          View All Services
        </Button>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${service.title} | Leadwisee - Performance Marketing Agency`}</title>
        <meta name="description" content={service.description} />
      </Helmet>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ServiceHero>
          <SectionHeading
            subtitle="Our Services"
            title={service.title}
            alignment="center"
          />
          <p style={{ maxWidth: '700px', margin: '0 auto' }}>
            {service.description}
          </p>
        </ServiceHero>
        
        <ServiceDetailContainer>
          <ServiceContent>
            <MainContent>
              <h3>How We Can Help</h3>
              <p>{service.fullDescription}</p>
              
              <MethodologySection>
                <h3>Our Methodology</h3>
                <div className="steps">
                  {service.methodology.map((item) => (
                    <div className="step" key={item.step}>
                      <div className="step-number">0{item.step}</div>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </MethodologySection>
              
              <CaseStudySection>
                <h3>Success Stories</h3>
                {service.caseStudies.map((caseStudy, index) => (
                  <CaseStudyCard 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h4>{caseStudy.title}</h4>
                    <p><strong>Client:</strong> {caseStudy.client}</p>
                    <p>{caseStudy.description}</p>
                    <div className="results">
                      {caseStudy.results.map((result, i) => (
                        <div className="result-item" key={i}>
                          <div className="number">{result.number}</div>
                          <div className="label">{result.label}</div>
                        </div>
                      ))}
                    </div>
                    <Button 
                      to="/case-studies" 
                      variant="outline"
                      rightIcon={<FaArrowRight />}
                    >
                      View Case Study
                    </Button>
                  </CaseStudyCard>
                ))}
              </CaseStudySection>
            </MainContent>
            
            <Sidebar>
              <h4>Benefits</h4>
              <BenefitsList>
                {service.benefits.map((benefit, index) => (
                  <li key={index}>
                    <FaCheck />
                    <span>{benefit}</span>
                  </li>
                ))}
              </BenefitsList>
              
              <Button to="/contact" style={{ width: '100%' }}>
                Get Started
              </Button>
            </Sidebar>
          </ServiceContent>
          
          <FormSection>
            <ContactForm 
              heading={`Ready to Grow Your Business with ${service.title}?`}
              showServices={false}
            />
          </FormSection>
        </ServiceDetailContainer>
      </motion.div>
    </>
  );
};

export default ServiceDetail;
