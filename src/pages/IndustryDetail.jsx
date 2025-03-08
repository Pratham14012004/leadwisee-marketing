import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCheck, FaArrowRight } from 'react-icons/fa';
import Button from '../components/common/Button';

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

  &:nth-child(even) {
    background: ${props => props.theme.colors.backgroundAlt};
  }
`;

const SectionHeading = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 50px;

  span {
    color: ${props => props.theme.colors.primary};
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
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

const Subtitle = styled.h2`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 30px;
  color: ${props => props.theme.colors.textMuted};

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const ContentBlock = styled(motion.div)`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;

  p {
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 20px;

    strong {
      font-weight: 700;
      color: ${props => props.theme.colors.primary};
    }
  }

  ul {
    margin: 20px 0 30px;
    padding-left: 20px;

    li {
      font-size: 1.1rem;
      margin-bottom: 10px;
      padding-left: 10px;

      &:before {
        content: "•";
        color: ${props => props.theme.colors.primary};
        display: inline-block;
        width: 1em;
        margin-left: -1em;
      }

      strong {
        font-weight: 700;
      }
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  .benefit {
    background: ${props => props.theme.colors.cardBg};
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    }

    h3 {
      font-size: 1.3rem;
      font-weight: 700;
      margin-bottom: 15px;
      color: ${props => props.theme.colors.primary};
    }

    p {
      font-size: 1rem;
      line-height: 1.6;
    }
  }
`;

const CallToAction = styled.div`
  text-align: center;
  margin-top: 50px;
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

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

const IndustryDetail = () => {
  const { industry } = useParams();
  const navigate = useNavigate();

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [industry]);

  // Industry data
  const industriesData = {
    'saas': {
      title: 'SaaS Marketing Agency That Drives Revenue, Not Just Traffic',
      subtitle: 'Performance-Driven SaaS Growth Marketing for B2B & B2C Companies',
      description: 'Your SaaS business needs more than just clicks—it needs revenue-focused growth. At Leadwisee, we specialize in performance marketing for SaaS, ensuring every ad dollar you spend turns into high-value customers. Whether you\'re a B2B SaaS startup looking to scale or an established SaaS brand refining your SaaS marketing funnel, we craft custom strategies that deliver results.',
      whyChoose: [
        '🚀 SaaS Growth Marketing Experts – 100% focused on SaaS brands.',
        '🎯 ROI-Driven Approach – We track every dollar back to revenue.',
        '📈 Full-Funnel Marketing – From lead gen to retention, we optimize it all.',
        '🔍 Advanced Data & Automation – AI-driven targeting, analytics, and personalization.'
      ],
      services: [
        {
          title: 'SaaS Performance Marketing & PPC for SaaS',
          description: 'Your ideal customers are searching for solutions—can they find you? We build high-converting PPC campaigns that bring qualified leads through Google Ads, LinkedIn Ads, and Facebook Ads for SaaS.',
          items: [
            '✅ SaaS PPC Management: Optimized Google & Bing Ads to capture high-intent traffic.',
            '✅ LinkedIn Ads for SaaS: Target decision-makers and enterprise buyers with precision.',
            '✅ SaaS Facebook Ads: Convert cold traffic into loyal subscribers.',
            '✅ Performance Marketing for SaaS: Data-driven campaigns that maximize ROAS.'
          ]
        },
        {
          title: 'SaaS Content Marketing & Inbound Strategies',
          description: 'Your audience is searching for solutions—be the brand they trust. Our SaaS content marketing team crafts high-converting blogs, case studies, and whitepapers to drive inbound leads and position your brand as an industry leader.'
        }
      ],
      challenges: [
        'Getting qualified leads for B2B SaaS products',
        'Reducing customer acquisition costs',
        'Converting free trial users to paid customers',
        'Standing out in a crowded SaaS marketplace',
        'Scaling marketing efforts with product-market fit',
        'Optimizing for both acquisition and retention',
        'Measuring the true ROI of marketing campaigns',
        'Reducing the sales cycle length for enterprise purchase',
        'Reducing churn and increasing lifetime value'
      ],
      solutions: [
        'Product-led growth strategies that combine marketing and product',
        'Content marketing focused on SEO and thought leadership',
        'Targeted PPC campaigns for high-intent keywords',
        'Conversion rate optimization for signup flows',
        'Email nurture campaigns for trial users',
        'Customer success and retention marketing'
      ],
      recommendedServices: [
        {
          title: 'PPC Marketing',
          description: 'Generate qualified leads through targeted advertising campaigns.',
          link: '/services/ppc-marketing'
        },
        {
          title: 'Content Marketing',
          description: 'Establish thought leadership and drive organic traffic.',
          link: '/services/content-marketing'
        },
        {
          title: 'Email Marketing',
          description: 'Nurture leads and drive product adoption with targeted email sequences.',
          link: '/services/email-marketing'
        },
        {
          title: 'Conversion Rate Optimization',
          description: 'Optimize your website and signup flow to convert more visitors.',
          link: '/services/conversion-rate-optimization'
        }
      ],
      caseStudies: [
        {
          title: 'SaaS Growth Strategy',
          client: 'B2B SaaS Platform',
          description: 'We implemented a comprehensive growth strategy for a B2B SaaS platform focusing on reducing customer acquisition costs and improving trial-to-paid conversion rates.',
          results: [
            '68% increase in trial signups',
            '43% improvement in trial-to-paid conversion rate',
            '52% reduction in customer acquisition cost'
          ]
        },
        {
          title: 'SaaS Content Marketing',
          client: 'Enterprise Software Company',
          description: 'We developed a content marketing strategy for an enterprise software company to establish thought leadership and drive inbound leads.',
          results: [
            '124% increase in organic traffic',
            '76% increase in marketing qualified leads',
            '32% reduction in sales cycle length'
          ]
        }
      ]
    },
    'real-estate': {
      title: 'Real Estate Digital Marketing Agency: Performance-Driven Ads That Sell Properties Faster',
      subtitle: 'The #1 Real Estate Marketing Agency for High-Ticket Sales',
      description: 'The real estate market is fiercely competitive—and without a strong digital presence, even the best properties can go unnoticed. At Leadwisee, we specialize in high-performance real estate ads that bring in serious buyers, not just empty clicks.\n\n🚀 We don\'t just market properties—we sell them. With our data-driven real estate advertising services, we help developers, brokers, and real estate agents attract high-intent leads, convert more buyers, and close deals faster.',
      services: [
        {
          title: 'Real Estate PPC & Google Ads: High-Intent Buyers, Ready to Convert',
          items: [
            '🔹 Google Ads for Real Estate – Get your properties in front of buyers searching for homes in your market.',
            '🔹 Real Estate PPC Campaigns – Maximize ROI with strategic bidding & hyper-local targeting.',
            '🔹 Google Real Estate Leads – Precision-targeted campaigns to capture motivated buyers & investors.',
            '🔹 PPC for Real Estate Investors – Reach high-net-worth individuals actively searching for properties.',
            '🔹 Real Estate PPC Agency – Data-backed ad strategies that generate quality leads, not just traffic.'
          ],
          why: 'Homebuyers and investors search on Google before making a decision. With our real estate PPC company, your listings will appear at the top of search results, capturing ready-to-buy customers before your competition does.'
        },
        {
          title: 'Facebook & Instagram Ads for Real Estate: Sell More Homes with Social Media',
          items: [
            '🔹 Real Estate Facebook Ads – Generate high-converting leads from Facebook\'s vast audience.',
            '🔹 Facebook Ads for Real Estate Agents – Personalized ad campaigns to drive local property inquiries.'
          ],
          why: 'The best real estate agents and agencies aren\'t just selling properties—they\'re building relationships. Our social media strategies elevate your brand, positioning you as the go-to expert in your market.'
        }
      ],
      benefits: [
        {
          title: 'We Deliver Qualified Leads, Not Just Clicks',
          description: 'Every lead we generate is highly targeted, ensuring you speak only to serious buyers.'
        },
        {
          title: 'AI-Driven Targeting & Retargeting',
          description: 'Our ads use AI-powered automation to identify and convert motivated buyers faster.'
        },
        {
          title: '100% ROI-Driven Marketing',
          description: 'Every ad campaign is optimized to maximize your return on investment.'
        },
        {
          title: 'Exclusive Lead Generation Strategies',
          description: 'Unlike generic agencies, we specialize in real estate-specific marketing that works.'
        }
      ],
      challenges: [
        'Standing out in a competitive real estate market',
        'Finding serious buyers, not just property browsers',
        'Converting property leads into showings and sales',
        'Generating consistent leads for high-value properties',
        'Measuring marketing ROI for real estate campaigns',
        'Building a strong digital presence in local markets'
      ],
      solutions: [
        'Targeted PPC campaigns for local real estate searches',
        'Visual-focused social media marketing for property showcase',
        'Lead qualification systems for higher conversion rates',
        'Data-driven audience targeting for serious buyers',
        'Custom landing pages for property listings',
        'Marketing automation for consistent follow-up'
      ],
      recommendedServices: [
        {
          title: 'PPC Marketing',
          description: 'Target high-intent buyers actively searching for properties.',
          link: '/services/ppc-marketing'
        },
        {
          title: 'Social Media Marketing',
          description: 'Showcase properties and build relationships with potential buyers.',
          link: '/services/social-media-marketing'
        },
        {
          title: 'Website Development',
          description: 'Create engaging property listings that convert visitors into leads.',
          link: '/services/website-development'
        },
        {
          title: 'Lead Generation',
          description: 'Implement strategies to capture and qualify serious buyers.',
          link: '/services/lead-generation'
        }
      ],
      caseStudies: [
        {
          title: 'Luxury Property Marketing',
          client: 'High-End Real Estate Developer',
          description: 'We created a targeted marketing campaign for a luxury real estate developer looking to sell high-end condominiums in a competitive urban market.',
          results: [
            '156% increase in qualified leads',
            '32% reduction in cost per acquisition',
            '28 units sold within 3 months'
          ]
        },
        {
          title: 'Real Estate Agent Branding',
          client: 'Independent Real Estate Agent',
          description: 'We developed a comprehensive branding and lead generation strategy for an independent real estate agent in a competitive suburban market.',
          results: [
            '212% increase in listing inquiries',
            '45% improvement in lead quality',
            '18 new listings secured in 6 months'
          ]
        }
      ]
    }
  };

  const currentIndustry = industriesData[industry];

  // If industry not found, redirect to industries page
  useEffect(() => {
    if (!currentIndustry) {
      navigate('/industries');
    }
  }, [currentIndustry, navigate]);

  if (!currentIndustry) return null;

  return (
    <PageWrapper>
      <Helmet>
        <title>{currentIndustry.title} | Leadwisee</title>
        <meta name="description" content={currentIndustry.description.substring(0, 155)} />
      </Helmet>

      <HeroSection>
        <HeroContent>
          <MainTitle dangerouslySetInnerHTML={{ __html: currentIndustry.title }} />
          <Subtitle dangerouslySetInnerHTML={{ __html: currentIndustry.subtitle }} />
        </HeroContent>
      </HeroSection>

      <Section>
        <ContentBlock
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p dangerouslySetInnerHTML={{ __html: currentIndustry.description }} />

          {industry === 'saas' && (
            <>
              <SectionHeading>Why Choose Leadwisee as Your SaaS Marketing Agency?</SectionHeading>
              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {currentIndustry.whyChoose.map((item, index) => (
                  <motion.li key={index} variants={fadeIn} dangerouslySetInnerHTML={{ __html: item }} />
                ))}
              </motion.ul>
            </>
          )}
        </ContentBlock>
      </Section>

      <Section>
        <SectionHeading>
          {industry === 'saas' ? 'SaaS Marketing Services We Offer' : 'Our Real Estate Digital Marketing Services'}
        </SectionHeading>

        {currentIndustry.services.map((service, index) => (
          <ContentBlock key={index}>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '20px' }}
              dangerouslySetInnerHTML={{ __html: service.title }}
            />

            {service.description && (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                dangerouslySetInnerHTML={{ __html: service.description }}
              />
            )}

            {service.items && (
              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {service.items.map((item, itemIndex) => (
                  <motion.li 
                    key={itemIndex} 
                    variants={fadeIn}
                    dangerouslySetInnerHTML={{ __html: item }}
                  />
                ))}
              </motion.ul>
            )}

            {service.why && (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                💡 <strong>Why it works:</strong> {service.why}
              </motion.p>
            )}
          </ContentBlock>
        ))}
      </Section>

      {industry === 'real-estate' && (
        <Section>
          <SectionHeading>Why Choose Leadwisee for Your Real Estate Advertising?</SectionHeading>
          <motion.div
            className="container"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <Grid>
              {currentIndustry.benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  variants={fadeIn}
                  className="benefit"
                >
                  <h3>✅ {benefit.title}</h3>
                  <p>{benefit.description}</p>
                </motion.div>
              ))}
            </Grid>
          </motion.div>
        </Section>
      )}

      <Section>
        <SectionHeading>Get More Leads & Close More Sales with Leadwisee</SectionHeading>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.25rem' }}
        >
          Book a Free Strategy Call Today to learn how our {industry === 'saas' ? 'SaaS marketing' : 'real estate digital marketing'} services can help you:
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          style={{ maxWidth: '800px', margin: '0 auto', listStyle: 'none', padding: '0 20px' }}
        >
          {currentIndustry.challenges.slice(0, 4).map((challenge, index) => (
            <motion.li 
              key={index}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: '15px',
                fontSize: '1.1rem'
              }}
            >
              <FaCheck style={{ color: '#4CAF50', marginRight: '10px', flexShrink: 0 }} />
              {challenge}
            </motion.li>
          ))}
        </motion.ul>

        <CallToAction>
          <Button 
            to="/contact" 
            size="large"
            rightIcon={<FaArrowRight />}
          >
            Get Your Free Strategy Call
          </Button>
        </CallToAction>
      </Section>

      <Section>
        <SectionHeading>Our Success Stories</SectionHeading>
        <ContentBlock>
          <Grid>
            {currentIndustry.caseStudies.map((caseStudy, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="benefit"
              >
                <h3>{caseStudy.title}</h3>
                <p><strong>Client:</strong> {caseStudy.client}</p>
                <p>{caseStudy.description}</p>
                <p><strong>Results:</strong></p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {caseStudy.results.map((result, idx) => (
                    <li 
                      key={idx}
                      style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}
                    >
                      <FaCheck style={{ color: '#4CAF50', marginRight: '10px', flexShrink: 0 }} />
                      {result}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </Grid>
        </ContentBlock>
      </Section>

      <Section>
        <SectionHeading>Ready to Grow Your {industry === 'saas' ? 'SaaS Business' : 'Real Estate Business'}?</SectionHeading>
        <ContentBlock style={{ textAlign: 'center' }}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ fontSize: '1.25rem', marginBottom: '30px' }}
          >
            Partner with Leadwisee and experience the difference that performance-driven {industry === 'saas' ? 'SaaS marketing' : 'real estate marketing'} can make for your business.
          </motion.p>

          <CallToAction>
            <Button 
              to="/contact" 
              size="large"
            >
              Let's Talk Strategy
            </Button>
          </CallToAction>
        </ContentBlock>
      </Section>
    </PageWrapper>
  );
};

export default IndustryDetail;