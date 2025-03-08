
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaCheck, FaArrowRight } from 'react-icons/fa';

import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import ContactForm from '../components/common/ContactForm';

const IndustryDetailContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem 5rem;
`;

const IndustryHero = styled.div`
  position: relative;
  text-align: center;
  margin-bottom: 4rem;
  padding: 5rem 0;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${props => `url(${props.backgroundImage})`};
    background-size: cover;
    background-position: center;
    opacity: 0.1;
    z-index: -1;
  }
`;

const IndustryContent = styled.div`
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

const ChallengesList = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
  
  li {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${props => props.theme.border};
    
    &:last-child {
      border-bottom: none;
    }
  }
`;

const SolutionsList = styled.ul`
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

const ServicesSection = styled.div`
  margin: 4rem 0;
  
  .services {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-top: 2rem;
    
    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
    
    .service {
      padding: 2rem;
      background: ${props => props.theme.background};
      border-radius: 0.5rem;
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
      
      h4 {
        margin-bottom: 1rem;
      }
      
      p {
        color: ${props => props.theme.textLight};
        margin-bottom: 1.5rem;
      }
    }
  }
`;

const FormSection = styled.div`
  max-width: 700px;
  margin: 0 auto;
`;

// Placeholder function to get a generic image for each industry
const getIndustryImage = (industry) => {
  // In a real app, you would have actual images for each industry
  return `https://source.unsplash.com/random/1200x600/?${industry.toLowerCase().replace(/\s+/g, ',')}`;
};

const IndustryDetail = () => {
  const { slug } = useParams();
  const [industry, setIndustry] = useState(null);
  
  // Mock data for industries
  const industriesData = {
    'saas': {
      title: 'SaaS',
      description: 'Strategic marketing solutions for Software-as-a-Service companies focused on user acquisition, retention, and growth.',
      fullDescription: `
        The SaaS market is highly competitive with constantly evolving customer expectations. Effective marketing in this space requires understanding product-led growth, user experience, and subscription economics.
        
        At Leadwisee, we've helped numerous SaaS companies scale their user base through data-driven digital marketing approaches. We understand that acquiring and retaining customers is the lifeblood of your subscription business, and our strategies are designed to optimize both customer acquisition cost (CAC) and customer lifetime value (LTV).
      `,
      challenges: [
        'High customer acquisition costs in competitive markets',
        'Converting free users to paying customers',
        'Reducing churn and improving retention rates',
        'Scaling user onboarding processes efficiently',
        'Demonstrating product value quickly to new users'
      ],
      solutions: [
        'Product-led growth strategies to drive organic adoption',
        'Freemium and trial optimization to increase conversion rates',
        'User behavior analysis to identify conversion opportunities',
        'Automated nurture campaigns for user activation and retention',
        'Feature adoption marketing to increase product stickiness',
        'Customer success-focused content marketing'
      ],
      recommendedServices: [
        {
          title: 'PPC Marketing',
          description: 'Targeted campaigns to reach potential users searching for software solutions.',
          link: '/services/ppc-marketing'
        },
        {
          title: 'Content Marketing',
          description: 'Educational content that showcases product capabilities and builds trust.',
          link: '/services/content-marketing'
        },
        {
          title: 'Conversion Rate Optimization',
          description: 'Optimize your website, landing pages and trial experiences to convert more visitors.',
          link: '/services/cro'
        }
      ],
      caseStudies: [
        {
          title: 'User Acquisition Campaign for Project Management Platform',
          client: 'Project Management SaaS',
          description: 'We developed a comprehensive digital marketing strategy for a project management tool, focusing on product-led growth and conversion optimization.',
          results: [
            { number: '187%', label: 'Increase in Free Signups' },
            { number: '32%', label: 'Improvement in Free-to-Paid Conversion' },
            { number: '24%', label: 'Reduction in User Onboarding Dropoff' }
          ]
        },
        {
          title: 'Retention Campaign for Analytics Platform',
          client: 'Data Analytics Provider',
          description: 'We helped a data analytics platform reduce churn through targeted email campaigns and product adoption marketing.',
          results: [
            { number: '41%', label: 'Reduction in Churn Rate' },
            { number: '53%', label: 'Increase in Feature Adoption' },
            { number: '28%', label: 'Growth in Expansion Revenue' }
          ]
        }
      ]
    },

    // B2B Industry Content
    'b2b': {
      title: 'B2B',
      description: 'Strategic marketing solutions for Business-to-Business companies focused on lead generation, account-based marketing, and sales enablement.',
      fullDescription: `
        The B2B market has unique challenges with complex sales cycles and multiple stakeholders involved in purchasing decisions. Marketing effectively in this space requires understanding business needs, buying committees, and solution selling.
        
        At Leadwisee, we've helped numerous B2B companies generate high-quality leads and streamline their sales processes through targeted marketing strategies. We understand the importance of aligning marketing and sales efforts to drive business growth and optimize return on marketing investment.
      `,
      challenges: [
        'Long and complex sales cycles with multiple decision-makers',
        'Identifying and targeting key accounts and stakeholders',
        'Generating high-quality leads that convert to revenue',
        'Creating content that addresses different stakeholder concerns',
        'Measuring marketing impact on complex B2B sales processes'
      ],
      solutions: [
        'Account-based marketing strategies targeting ideal customer profiles',
        'Multi-channel lead generation campaigns',
        'Marketing and sales alignment through CRM integration',
        'Buyer persona development and targeted messaging',
        'Sales enablement content creation and distribution',
        'Pipeline acceleration campaigns for leads in consideration stage'
      ],
      recommendedServices: [
        {
          title: 'PPC Marketing',
          description: 'Targeted campaigns on Google, LinkedIn, and other platforms to generate qualified B2B leads.',
          link: '/services/ppc-marketing'
        },
        {
          title: 'Account-Based Marketing',
          description: 'Strategic targeting of key accounts with personalized marketing approaches.',
          link: '/services/account-based-marketing'
        },
        {
          title: 'Marketing Automation',
          description: 'Streamlined lead nurturing and qualification processes to support your sales team.',
          link: '/services/marketing-automation'
        }
      ],
      caseStudies: [
        {
          title: 'Lead Generation Campaign for Industrial Equipment Manufacturer',
          client: 'Industrial Solutions Provider',
          description: 'We developed a comprehensive digital marketing strategy for an industrial equipment manufacturer, focusing on LinkedIn advertising and technical content marketing.',
          results: [
            { number: '213%', label: 'Increase in Marketing Qualified Leads' },
            { number: '41%', label: 'Reduction in Cost Per Acquisition' },
            { number: '35%', label: 'Increase in Sales Pipeline Value' }
          ]
        },
        {
          title: 'Account-Based Marketing Campaign for Business Services',
          client: 'Professional Services Firm',
          description: 'We helped a professional services firm target and engage key accounts through personalized marketing campaigns across multiple channels.',
          results: [
            { number: '167%', label: 'Increase in Target Account Engagement' },
            { number: '48%', label: 'Improvement in Sales Meeting Conversion' },
            { number: '32%', label: 'Reduction in Sales Cycle Length' }
          ]
        }
      ]
    },

    'ecommerce': {
      title: 'E-commerce',
      description: 'Data-driven marketing solutions to increase traffic, conversions, and average order value for online stores.',
      fullDescription: `
        E-commerce is a fast-paced, competitive industry where marketing strategies need to be agile, data-driven, and focused on ROI. Our team has extensive experience working with e-commerce businesses across various niches, from fashion and beauty to electronics and home goods.
        
        We understand the unique challenges of e-commerce marketing, including shopping cart abandonment, seasonal fluctuations, and the need to maintain profitability while scaling advertising spend. Our strategies are designed to not only drive traffic but also optimize conversion rates and increase average order values.
      `,
      challenges: [
        'High shopping cart abandonment rates',
        'Increasing customer acquisition costs',
        'Standing out in crowded marketplaces',
        'Seasonal fluctuations in sales',
        'Building customer loyalty and increasing lifetime value'
      ],
      solutions: [
        'Comprehensive Google Shopping and search campaign management',
        'Strategic social media advertising focused on product discovery',
        'Shopping cart abandonment email and retargeting campaigns',
        'Customer segmentation and personalized marketing',
        'Conversion rate optimization for product pages and checkout',
        'Cross-selling and upselling strategies to increase AOV'
      ],
      recommendedServices: [
        {
          title: 'E-commerce Marketing',
          description: 'Comprehensive marketing solutions designed specifically for online stores.',
          link: '/services/ecommerce-marketing'
        },
        {
          title: 'Social Media Marketing',
          description: 'Visually engaging campaigns that showcase products and drive sales.',
          link: '/services/social-media-marketing'
        },
        {
          title: 'Email Marketing',
          description: 'Automated campaigns to recover abandoned carts and nurture customers.',
          link: '/services/email-marketing'
        }
      ],
      caseStudies: [
        {
          title: 'Revenue Growth for Fashion Retailer',
          client: 'Online Clothing Brand',
          description: 'We implemented a multi-channel strategy focused on Google Shopping, Instagram Ads, and email marketing to drive sales for a fashion e-commerce store.',
          results: [
            { number: '243%', label: 'Increase in Revenue' },
            { number: '38%', label: 'Increase in AOV' },
            { number: '46%', label: 'Reduction in Cart Abandonment' }
          ]
        },
        {
          title: 'New Product Launch Campaign',
          client: 'Home Goods E-commerce Store',
          description: 'We executed a coordinated product launch strategy across multiple channels for a home goods brand.',
          results: [
            { number: '358%', label: 'ROI on Ad Spend' },
            { number: '7,500', label: 'Units Sold in First Month' },
            { number: '67%', label: 'Email Open Rate' }
          ]
        }
      ]
    },
    'retail': {
      title: 'Retail',
      description: 'Omnichannel marketing strategies that bridge the gap between online and offline retail experiences.',
      fullDescription: `
        The retail landscape is evolving rapidly, with successful retailers embracing an omnichannel approach that creates a seamless experience between online and offline touchpoints. Our retail marketing strategies help businesses adapt to changing consumer behaviors and leverage digital channels to drive both online sales and in-store foot traffic.
        
        We understand the unique challenges of retail marketing, from inventory management to seasonal promotions, and we develop customized strategies that align with your business goals and target audience.
      `,
      challenges: [
        'Integrating online and offline customer experiences',
        'Local competition and price sensitivity',
        'Measuring the impact of online efforts on in-store sales',
        'Seasonal inventory planning and promotion timing',
        'Building customer loyalty in a competitive environment'
      ],
      solutions: [
        'Local SEO and Google Business Profile optimization to drive foot traffic',
        'Location-based advertising campaigns to reach nearby customers',
        'Click-and-collect and in-store pickup promotion strategies',
        'Loyalty program development and customer retention campaigns',
        'Inventory-based advertising that adapts to product availability',
        'Event-based marketing for store promotions and special occasions'
      ],
      recommendedServices: [
        {
          title: 'Local SEO',
          description: 'Improve visibility in local search results to drive foot traffic to physical stores.',
          link: '/services/local-seo'
        },
        {
          title: 'PPC Marketing',
          description: 'Targeted local advertising campaigns to reach potential customers in your area.',
          link: '/services/ppc-marketing'
        },
        {
          title: 'Social Media Marketing',
          description: 'Engage with your community and promote in-store events and promotions.',
          link: '/services/social-media-marketing'
        }
      ],
      caseStudies: [
        {
          title: 'Omnichannel Strategy for Fashion Retailer',
          client: 'Clothing Chain',
          description: 'We developed an integrated marketing strategy that connected online browsing with in-store purchasing experiences.',
          results: [
            { number: '156%', label: 'Increase in Store Visits' },
            { number: '47%', label: 'Increase in Click & Collect' },
            { number: '32%', label: 'Increase in Total Sales' }
          ]
        },
        {
          title: 'Holiday Season Campaign',
          client: 'Electronics Retailer',
          description: 'We executed a comprehensive holiday campaign across digital channels to drive both online and in-store sales.',
          results: [
            { number: '278%', label: 'Increase in Holiday Revenue' },
            { number: '43%', label: 'Increase in Store Foot Traffic' },
            { number: '62%', label: 'ROI on Ad Spend' }
          ]
        }
      ]
    },
    'real-estate': {
      title: 'Real Estate',
      description: 'Targeted digital marketing strategies that generate qualified leads for real estate professionals.',
      fullDescription: `
        Real estate marketing requires a unique approach that combines beautiful visual content with highly targeted advertising to reach potential buyers and sellers at the right time. Our real estate marketing strategies help agents, brokers, and property developers generate qualified leads and build their brand in competitive markets.
        
        We understand the importance of local market knowledge, visual storytelling, and prompt response to inquiries in the real estate industry, and our strategies are designed to showcase properties effectively while generating high-quality leads.
      `,
      challenges: [
        'Standing out in a competitive market with many similar listings',
        'Targeting potential buyers and sellers at the right time',
        'Creating compelling visual content for property listings',
        'Managing leads effectively and ensuring prompt follow-up',
        'Demonstrating market expertise and building trust'
      ],
      solutions: [
        'Targeted social media campaigns focused on demographics and life events',
        'Google Ads campaigns for high-intent buyer and seller searches',
        'Custom landing pages for specific properties or neighborhoods',
        'Virtual tour and video marketing to showcase properties',
        'Email nurture campaigns for long-term prospects',
        'Content marketing focused on local market expertise'
      ],
      recommendedServices: [
        {
          title: 'PPC Marketing',
          description: 'Targeted campaigns to reach potential buyers and sellers searching for properties.',
          link: '/services/ppc-marketing'
        },
        {
          title: 'Social Media Marketing',
          description: 'Visually engaging campaigns to showcase properties and reach potential clients.',
          link: '/services/social-media-marketing'
        },
        {
          title: 'Content Marketing',
          description: 'Establish yourself as a local market expert through valuable content.',
          link: '/services/content-marketing'
        }
      ],
      caseStudies: [
        {
          title: 'Luxury Property Marketing Campaign',
          client: 'High-End Real Estate Agency',
          description: 'We developed a targeted digital marketing strategy for a luxury real estate agency, focusing on reaching high-net-worth individuals.',
          results: [
            { number: '189%', label: 'Increase in Qualified Leads' },
            { number: '12', label: 'Luxury Properties Sold' },
            { number: '$4.2M', label: 'Average Property Price' }
          ]
        },
        {
          title: 'New Development Launch',
          client: 'Property Developer',
          description: 'We executed a comprehensive marketing campaign for a new residential development, from pre-launch to sellout.',
          results: [
            { number: '342', label: 'Qualified Leads Generated' },
            { number: '87%', label: 'Units Sold in First Phase' },
            { number: '28%', label: 'Reduction in Sales Cycle' }
          ]
        }
      ]
    },
    'fashion': {
      title: 'Fashion',
      description: 'Creative marketing solutions for fashion brands that build brand identity and drive conversions.',
      fullDescription: `
        Fashion marketing requires a perfect blend of creativity, brand storytelling, and data-driven strategy. Our fashion marketing services help clothing and accessory brands create compelling campaigns that resonate with their target audience and drive sales both online and in-store.
        
        We understand the importance of visual aesthetics, seasonality, and trend awareness in fashion marketing, and we work closely with brands to create authentic campaigns that showcase their unique style and connect with fashion-conscious consumers.
      `,
      challenges: [
        'Standing out in a visually crowded and trend-driven market',
        'Balancing brand image with performance marketing goals',
        'Managing seasonal inventory and promotional calendars',
        'Reaching fashion-conscious consumers across multiple channels',
        'Creating compelling visual content on a consistent basis'
      ],
      solutions: [
        'Visually-driven social media strategies for Instagram, Pinterest, and TikTok',
        'Influencer collaboration and user-generated content campaigns',
        'Lookbook and catalog creation for digital and email marketing',
        'Seasonal campaign planning around fashion calendar events',
        'Shopping feed optimization for e-commerce platforms',
        'Lifestyle content marketing that showcases products in context'
      ],
      recommendedServices: [
        {
          title: 'Social Media Marketing',
          description: 'Visually engaging strategies to showcase your fashion brand and products.',
          link: '/services/social-media-marketing'
        },
        {
          title: 'Influencer Marketing',
          description: 'Collaborate with relevant influencers to reach fashion-conscious audiences.',
          link: '/services/influencer-marketing'
        },
        {
          title: 'E-commerce Marketing',
          description: 'Drive online sales through optimized product listings and targeted campaigns.',
          link: '/services/ecommerce-marketing'
        }
      ],
      caseStudies: [
        {
          title: 'Brand Relaunch Campaign',
          client: 'Sustainable Fashion Brand',
          description: 'We developed and executed a comprehensive brand relaunch strategy for a sustainable fashion brand, focusing on their eco-friendly message.',
          results: [
            { number: '287%', label: 'Increase in Social Engagement' },
            { number: '176%', label: 'Increase in Website Traffic' },
            { number: '43%', label: 'Increase in Online Sales' }
          ]
        },
        {
          title: 'Seasonal Collection Launch',
          client: 'Women\'s Clothing Brand',
          description: 'We created a multi-channel campaign for a seasonal collection launch, combining influencer partnerships with paid advertising.',
          results: [
            { number: '212%', label: 'ROI on Campaign Spend' },
            { number: '78%', label: 'Sell-Through Rate' },
            { number: '15K', label: 'New Instagram Followers' }
          ]
        }
      ]
    },
    'healthcare': {
      title: 'Healthcare',
      description: 'Compliant healthcare marketing strategies that establish trust and generate patient inquiries.',
      fullDescription: `
        Healthcare marketing requires a careful balance between effective promotion and regulatory compliance. Our healthcare marketing strategies help medical practices, clinics, and health tech companies reach potential patients while maintaining HIPAA compliance and building trust through authoritative content.
        
        We understand the unique challenges of healthcare marketing, from navigating advertising restrictions to addressing sensitive health topics, and we develop strategies that position your practice or organization as a trusted healthcare provider.
      `,
      challenges: [
        'Maintaining compliance with healthcare marketing regulations',
        'Building trust with potential patients through digital channels',
        'Explaining complex medical services in accessible language',
        'Standing out in a competitive healthcare market',
        'Tracking marketing ROI while respecting patient privacy'
      ],
      solutions: [
        'HIPAA-compliant content marketing and SEO strategies',
        'Targeted local advertising for medical practices',
        'Patient testimonial campaigns that maintain privacy',
        'Educational content marketing on health topics',
        'Reputation management and review generation',
        'Healthcare-specific landing pages optimized for conversions'
      ],
      recommendedServices: [
        {
          title: 'Local SEO',
          description: 'Help potential patients find your practice when searching for care.',
          link: '/services/local-seo'
        },
        {
          title: 'Content Marketing',
          description: 'Establish authority through educational health content.',
          link: '/services/content-marketing'
        },
        {
          title: 'Reputation Management',
          description: 'Build and maintain a positive online reputation for your practice.',
          link: '/services/reputation-management'
        }
      ],
      caseStudies: [
        {
          title: 'Patient Acquisition Campaign',
          client: 'Multi-Location Medical Practice',
          description: 'We developed a comprehensive digital strategy for a medical practice looking to attract new patients across multiple locations.',
          results: [
            { number: '218%', label: 'Increase in New Patient Inquiries' },
            { number: '46%', label: 'Reduction in Cost Per Acquisition' },
            { number: '32%', label: 'Increase in Website Conversions' }
          ]
        },
        {
          title: 'Healthcare App Launch',
          client: 'Health Tech Startup',
          description: 'We executed a launch strategy for a new healthcare app, focusing on user acquisition and downloads.',
          results: [
            { number: '45K', label: 'App Downloads in First Month' },
            { number: '68%', label: 'Reduction in CPA vs Target' },
            { number: '4.7', label: 'Average App Store Rating' }
          ]
        }
      ]
    },
    'ott': {
      title: 'OTT & Entertainment',
      description: 'Engaging marketing campaigns for streaming services and entertainment companies to grow subscribers.',
      fullDescription: `
        The OTT (Over-The-Top) and entertainment industry is highly competitive, with content providers vying for viewers' limited attention and subscription dollars. Our OTT marketing strategies help streaming services, production companies, and entertainment brands attract and retain subscribers through targeted campaigns and content promotion.
        
        We understand the importance of audience segmentation, content discovery, and reducing churn in the entertainment industry, and our strategies are designed to showcase your content to the right audiences at the right time.
      `,
      challenges: [
        'Standing out in a crowded streaming landscape',
        'Reducing subscriber churn and increasing retention',
        'Promoting specific content to relevant audience segments',
        'Measuring and optimizing for lifetime subscriber value',
        'Driving app downloads and smart TV app installations'
      ],
      solutions: [
        'Content-focused advertising campaigns for new releases',
        'Audience segmentation based on viewing preferences',
        'Subscriber acquisition campaigns across multiple platforms',
        'Retargeting strategies to re-engage lapsed subscribers',
        'Performance marketing optimized for free trial conversions',
        'Cross-promotion strategies for content discovery'
      ],
      recommendedServices: [
        {
          title: 'Social Media Marketing',
          description: 'Engage audiences and promote content through compelling social campaigns.',
          link: '/services/social-media-marketing'
        },
        {
          title: 'PPC Marketing',
          description: 'Targeted advertising to reach potential subscribers across platforms.',
          link: '/services/ppc-marketing'
        },
        {
          title: 'Content Marketing',
          description: 'Create buzz around your content through strategic promotion.',
          link: '/services/content-marketing'
        }
      ],
      caseStudies: [
        {
          title: 'Subscriber Growth Campaign',
          client: 'Niche Streaming Service',
          description: 'We developed a comprehensive subscriber acquisition strategy for a specialized streaming service, focusing on relevant audience segments.',
          results: [
            { number: '156%', label: 'Increase in New Subscribers' },
            { number: '42%', label: 'Reduction in Acquisition Cost' },
            { number: '37%', label: 'Improvement in Retention Rate' }
          ]
        },
        {
          title: 'Original Content Launch',
          client: 'Production Company',
          description: 'We executed a multi-channel campaign for the launch of an original series, driving awareness and viewership.',
          results: [
            { number: '3.8M', label: 'Trailer Views' },
            { number: '267%', label: 'Increase in App Downloads' },
            { number: '78%', label: 'First Episode Completion Rate' }
          ]
        }
      ]
    },
    'coaching-consulting': {
      title: 'Coaching & Consulting',
      description: 'Lead generation strategies for coaches and consultants to attract high-value clients.',
      fullDescription: `
        Coaches and consultants face unique marketing challenges, from establishing credibility to attracting high-value clients in a crowded market. Our marketing strategies for coaches and consultants focus on positioning you as an authority in your niche and generating qualified leads that convert into long-term clients.
        
        We understand the importance of personal branding, thought leadership, and nurturing relationships in the coaching and consulting industry, and we develop strategies that showcase your expertise and unique approach to solving clients' problems.
      `,
      challenges: [
        'Standing out in a market with low barriers to entry',
        'Establishing credibility and authority in your niche',
        'Converting prospects into high-ticket clients',
        'Creating a consistent lead generation system',
        'Developing a personal brand that resonates with ideal clients'
      ],
      solutions: [
        'Thought leadership content marketing to establish expertise',
        'Lead magnet creation and funnel development',
        'Webinar and workshop marketing for client acquisition',
        'Email nurture sequences for prospect relationship building',
        'Testimonial and case study campaigns to build credibility',
        'LinkedIn and professional network marketing'
      ],
      recommendedServices: [
        {
          title: 'Content Marketing',
          description: 'Establish your authority through valuable content in your area of expertise.',
          link: '/services/content-marketing'
        },
        {
          title: 'Social Media Marketing',
          description: 'Build your personal brand and engage with potential clients.',
          link: '/services/social-media-marketing'
        },
        {
          title: 'PPC Marketing',
          description: 'Generate qualified leads through targeted advertising campaigns.',
          link: '/services/ppc-marketing'
        }
      ],
      caseStudies: [
        {
          title: 'High-Ticket Client Acquisition',
          client: 'Business Coach',
          description: 'We developed a comprehensive marketing funnel for a business coach, focusing on attracting and converting high-value clients.',
          results: [
            { number: '14', label: 'New High-Ticket Clients' },
            { number: '$18K', label: 'Average Client Value' },
            { number: '324%', label: 'ROI on Marketing Spend' }
          ]
        },
        {
          title: 'Authority Building Campaign',
          client: 'Management Consultant',
          description: 'We executed a thought leadership strategy for a management consultant, establishing them as an authority in their industry.',
          results: [
            { number: '245%', label: 'Increase in Website Traffic' },
            { number: '18', label: 'Speaking Engagements Secured' },
            { number: '42%', label: 'Increase in Inbound Inquiries' }
          ]
        }
      ]
    },
    'interior-design': {
      title: 'Interior Design',
      description: 'Visual-focused marketing for interior designers that showcases expertise and attracts ideal clients.',
      fullDescription: `
        Interior design marketing requires a strong visual approach that showcases your portfolio and design aesthetic while attracting clients who value your unique style. Our marketing strategies for interior designers focus on visual storytelling, portfolio presentation, and reaching high-value clients who are ready to invest in quality design services.
        
        We understand the importance of beautiful imagery, project showcases, and establishing your design philosophy in the interior design industry, and we develop strategies that highlight your best work and connect you with ideal clients.
      `,
      challenges: [
        'Showcasing design work effectively in digital formats',
        'Attracting clients with appropriate budgets for quality design',
        'Standing out in a visually competitive industry',
        'Building a recognizable design brand and aesthetic',
        'Converting website visitors into consultation requests'
      ],
      solutions: [
        'Visual-focused social media strategies for Instagram, Pinterest, and Houzz',
        'Portfolio website optimization for conversions',
        'Before-and-after project showcase campaigns',
        'Targeted advertising to reach high-value clients',
        'Email marketing with design inspiration and project features',
        'Content marketing around design processes and philosophies'
      ],
      recommendedServices: [
        {
          title: 'Social Media Marketing',
          description: 'Showcase your portfolio and design aesthetic on visual platforms.',
          link: '/services/social-media-marketing'
        },
        {
          title: 'Website Optimization',
          description: 'Convert more website visitors into consultation requests.',
          link: '/services/website-optimization'
        },
        {
          title: 'PPC Marketing',
          description: 'Reach potential clients actively seeking interior design services.',
          link: '/services/ppc-marketing'
        }
      ],
      caseStudies: [
        {
          title: 'Luxury Client Acquisition',
          client: 'High-End Interior Design Studio',
          description: 'We developed a comprehensive digital strategy for a luxury interior design firm looking to attract high-budget residential clients.',
          results: [
            { number: '9', label: 'New Luxury Projects' },
            { number: '$85K', label: 'Average Project Value' },
            { number: '267%', label: 'ROI on Marketing Investment' }
          ]
        },
        {
          title: 'Portfolio Showcase Campaign',
          client: 'Residential Interior Designer',
          description: 'We executed a multi-channel campaign showcasing a designer\'s portfolio and expertise, focused on generating qualified consultation requests.',
          results: [
            { number: '187%', label: 'Increase in Consultation Requests' },
            { number: '43%', label: 'Increase in Website Engagement' },
            { number: '35%', label: 'Conversion Rate from Inquiry to Client' }
          ]
        }
      ]
    }
  };
  
  useEffect(() => {
    // In a real application, you would fetch this data from an API
    if (slug && industriesData[slug]) {
      setIndustry(industriesData[slug]);
      window.scrollTo(0, 0);
    }
  }, [slug]);
  
  if (!industry) {
    return (
      <div style={{ padding: '5rem 1rem', textAlign: 'center' }}>
        <h2>Industry not found</h2>
        <p>The industry you're looking for doesn't exist or has been moved.</p>
        <Button to="/industries" style={{ marginTop: '1rem' }}>
          View All Industries
        </Button>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{`${industry.title} Marketing | Leadwisee - Performance Marketing Agency`}</title>
        <meta name="description" content={industry.description} />
      </Helmet>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <IndustryHero backgroundImage={getIndustryImage(industry.title)}>
          <SectionHeading
            subtitle="Industry Expertise"
            title={`${industry.title} Marketing`}
            alignment="center"
          />
          <p style={{ maxWidth: '700px', margin: '0 auto' }}>
            {industry.description}
          </p>
        </IndustryHero>
        
        <IndustryDetailContainer>
          <IndustryContent>
            <MainContent>
              <h3>How We Can Help</h3>
              <p>{industry.fullDescription}</p>
              
              <ServicesSection>
                <h3>Recommended Services</h3>
                <div className="services">
                  {industry.recommendedServices.map((service, index) => (
                    <div className="service" key={index}>
                      <h4>{service.title}</h4>
                      <p>{service.description}</p>
                      <Button 
                        to={service.link} 
                        variant="outline"
                        rightIcon={<FaArrowRight />}
                      >
                        Learn More
                      </Button>
                    </div>
                  ))}
                </div>
              </ServicesSection>
              
              <CaseStudySection>
                <h3>Success Stories</h3>
                {industry.caseStudies.map((caseStudy, index) => (
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
              <h4>Industry Challenges</h4>
              <ChallengesList>
                {industry.challenges.map((challenge, index) => (
                  <li key={index}>
                    <span>{challenge}</span>
                  </li>
                ))}
              </ChallengesList>
              
              <h4>Our Solutions</h4>
              <SolutionsList>
                {industry.solutions.map((solution, index) => (
                  <li key={index}>
                    <FaCheck />
                    <span>{solution}</span>
                  </li>
                ))}
              </SolutionsList>
              
              <Button to="/contact" style={{ width: '100%' }}>
                Get Started
              </Button>
            </Sidebar>
          </IndustryContent>
          
          <FormSection>
            <ContactForm 
              heading={`Ready to Elevate Your ${industry.title} Marketing?`}
              showServices={false}
            />
          </FormSection>
        </IndustryDetailContainer>
      </motion.div>
    </>
  );
};

export default IndustryDetail;
