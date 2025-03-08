
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaArrowRight, FaCheck, FaDiamondTurn } from 'react-icons/fa6';
import Button from '../components/common/Button';
import ContactForm from '../components/common/ContactForm';
import ServiceCard from '../components/common/ServiceCard';
import CaseStudyCard from '../components/common/CaseStudyCard';
import SectionHeading from '../components/common/SectionHeading';
import { fadeIn, staggerContainer } from '../utils/motionVariants';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const Hero = styled.div`
  padding: 7rem 0 5rem;
  text-align: center;
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    line-height: 1.3;
    
    @media (min-width: 768px) {
      font-size: 3.5rem;
    }
  }
  
  .subtitle {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    font-weight: 600;
    color: ${props => props.theme.primary};
    
    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }
  
  p {
    max-width: 800px;
    margin: 0 auto 2rem;
    font-size: 1.125rem;
    line-height: 1.7;
    color: ${props => props.theme.textLight};
  }
`;

const HeroImage = styled.div`
  margin: 3rem auto;
  max-width: 1000px;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const Section = styled.section`
  padding: 5rem 0;
  
  h2 {
    text-align: center;
    margin-bottom: 3rem;
    font-size: 2rem;
    
    @media (min-width: 768px) {
      font-size: 2.5rem;
    }
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    
    @media (min-width: 768px) {
      font-size: 1.75rem;
    }
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const List = styled.ul`
  margin: 2rem 0;
  
  li {
    margin-bottom: 1rem;
    padding-left: 2rem;
    position: relative;
    
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0.5rem;
      width: 0.75rem;
      height: 0.75rem;
      background: ${props => props.theme.primary};
      border-radius: 50%;
    }
  }
`;

const ServiceList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const CaseStudies = styled.div`
  margin-top: 3rem;
`;

const ContentBlock = styled.div`
  margin-bottom: 4rem;
  
  h3 {
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }
  
  p {
    margin-bottom: 1.5rem;
    line-height: 1.7;
    color: ${props => props.theme.textLight};
  }
  
  ul {
    margin-bottom: 2rem;
  }
  
  li {
    margin-bottom: 1rem;
    display: flex;
    align-items: flex-start;
    line-height: 1.6;
    
    svg {
      color: ${props => props.theme.primary};
      margin-right: 0.75rem;
      margin-top: 0.25rem;
      flex-shrink: 0;
    }
  }
`;

const RealEstateContent = () => {
  return (
    <>
      <Hero>
        <motion.h1 
          variants={fadeIn} 
          initial="hidden" 
          animate="visible"
        >
          Real Estate Digital Marketing Agency: Performance-Driven Ads That Sell Properties Faster
        </motion.h1>
        <motion.div 
          className="subtitle"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          The #1 Real Estate Marketing Agency for High-Ticket Sales
        </motion.div>
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          The real estate market is fiercely competitive—and without a strong digital presence, even the best properties can go unnoticed. At Leadwisee, we specialize in high-performance real estate ads that bring in serious buyers, not just empty clicks.
        </motion.p>
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={3}
        >
          🚀 We don't just market properties—we sell them. With our data-driven real estate advertising services, we help developers, brokers, and real estate agents attract high-intent leads, convert more buyers, and close deals faster.
        </motion.p>
      </Hero>
      
      <HeroImage>
        <img src="https://source.unsplash.com/random/1200x600/?luxury,realestate,property" alt="Luxury Real Estate" />
      </HeroImage>
      
      <Container>
        <Section>
          <SectionHeading>Our Real Estate Digital Marketing Services</SectionHeading>
          
          <ContentBlock>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              1. Real Estate PPC & Google Ads: High-Intent Buyers, Ready to Convert
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <li>🔹 <strong>Google Ads for Real Estate</strong> – Get your properties in front of buyers searching for homes in your market.</li>
              <li>🔹 <strong>Real Estate PPC Campaigns</strong> – Maximize ROI with strategic bidding & hyper-local targeting.</li>
              <li>🔹 <strong>Google Real Estate Leads</strong> – Precision-targeted campaigns to capture motivated buyers & investors.</li>
              <li>🔹 <strong>PPC for Real Estate Investors</strong> – Reach high-net-worth individuals actively searching for properties.</li>
              <li>🔹 <strong>Real Estate PPC Agency</strong> – Data-backed ad strategies that generate quality leads, not just traffic.</li>
            </motion.ul>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              💡 <strong>Why it works:</strong> Homebuyers and investors search on Google before making a decision. With our real estate PPC company, your listings will appear at the top of search results, capturing ready-to-buy customers before your competition does.
            </motion.p>
          </ContentBlock>
          
          <ContentBlock>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              2. Facebook & Instagram Ads for Real Estate: Sell More Homes with Social Media
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <li>🔹 <strong>Real Estate Facebook Ads</strong> – Generate high-converting leads from Facebook's vast audience.</li>
              <li>🔹 <strong>Facebook Ads for Real Estate Agents</strong> – Personalized ad campaigns to drive local property inquiries.</li>
              <li>🔹 <strong>Facebook Real Estate Lead Generation</strong> – Optimized strategies for more site visits and home tours.</li>
              <li>🔹 <strong>Luxury Real Estate Ads</strong> – Premium ad creatives designed to attract high-net-worth clients.</li>
              <li>🔹 <strong>Facebook Lead Generation for Real Estate</strong> – Advanced targeting to filter serious buyers from casual browsers.</li>
            </motion.ul>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              💡 <strong>Why it works:</strong> 78% of homebuyers use Facebook and Instagram to research properties. We use data-driven audience targeting, retargeting, and AI-powered ad optimization to put your listings in front of qualified buyers.
            </motion.p>
          </ContentBlock>
          
          <ContentBlock>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              3. Real Estate Video & YouTube Marketing: Dominate with Visual Content
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <li>🔹 <strong>Real Estate YouTube Ads</strong> – Engage potential buyers with high-impact video marketing.</li>
              <li>🔹 <strong>Real Estate Video Marketing Services</strong> – Showcase listings with cinematic property tours.</li>
              <li>🔹 <strong>Creative Real Estate Ads</strong> – Stand out with attention-grabbing video campaigns.</li>
            </motion.ul>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              💡 <strong>Why it works:</strong> Video is 53x more likely to generate organic engagement than text. With YouTube and social video marketing, your properties get seen by serious buyers actively searching for homes.
            </motion.p>
          </ContentBlock>
          
          <ContentBlock>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              4. LinkedIn Marketing for Real Estate: Target High-Value Investors & Brokers
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <li>🔹 <strong>LinkedIn for Real Estate Agents</strong> – Build brand authority and attract qualified leads.</li>
              <li>🔹 <strong>LinkedIn Real Estate Ads</strong> – Precision targeting for commercial and luxury real estate investors.</li>
            </motion.ul>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              💡 <strong>Why it works:</strong> LinkedIn is where high-net-worth investors and corporate buyers search for premium real estate. We position your listings in front of decision-makers and business owners looking for investment opportunities.
            </motion.p>
          </ContentBlock>
          
          <ContentBlock>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              5. Real Estate Social Media Marketing: Build a Brand That Sells
            </motion.h3>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <li>🔹 <strong>Real Estate Social Media Marketing</strong> – Full-scale campaigns to grow your agency's online presence.</li>
              <li>🔹 <strong>Social Media Real Estate Marketing</strong> – Custom content, ads, and audience engagement.</li>
            </motion.ul>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              💡 <strong>Why it works:</strong> The best real estate agents and agencies aren't just selling properties—they're building relationships. Our social media strategies elevate your brand, positioning you as the go-to expert in your market.
            </motion.p>
          </ContentBlock>
        </Section>
        
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
              <motion.div 
                variants={fadeIn}
                className="benefit"
              >
                <h3>✅ We Deliver Qualified Leads, Not Just Clicks</h3>
                <p>Every lead we generate is highly targeted, ensuring you speak only to serious buyers.</p>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                className="benefit"
              >
                <h3>✅ AI-Driven Targeting & Retargeting</h3>
                <p>Our ads use AI-powered automation to identify and convert motivated buyers faster.</p>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                className="benefit"
              >
                <h3>✅ 100% ROI-Driven Marketing</h3>
                <p>Every ad campaign is optimized to maximize your return on investment.</p>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                className="benefit"
              >
                <h3>✅ Exclusive Lead Generation Strategies</h3>
                <p>Unlike generic agencies, we specialize in real estate-specific marketing that works.</p>
              </motion.div>
            </Grid>
          </motion.div>
        </Section>
        
        <Section>
          <SectionHeading>Get More Leads & Close More Sales with Leadwisee</SectionHeading>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.25rem' }}
          >
            Book a Free Strategy Call Today to learn how our real estate digital marketing services can help you:
          </motion.p>
          
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ maxWidth: '600px', margin: '0 auto', listStyle: 'none' }}
          >
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <FaCheck style={{ color: 'var(--color-primary)', marginRight: '1rem' }} /> Generate high-quality real estate leads
            </li>
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <FaCheck style={{ color: 'var(--color-primary)', marginRight: '1rem' }} /> Sell more properties faster
            </li>
            <li style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <FaCheck style={{ color: 'var(--color-primary)', marginRight: '1rem' }} /> Scale your business with performance-driven advertising
            </li>
          </motion.ul>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginTop: '3rem' }}
          >
            <h2>Contact Us!!</h2>
            <ContactForm />
          </motion.div>
        </Section>
      </Container>
    </>
  );
};

const SaaSContent = () => {
  return (
    <>
      <Hero>
        <motion.h1 
          variants={fadeIn} 
          initial="hidden" 
          animate="visible"
        >
          SaaS Marketing Agency That Drives Revenue, Not Just Traffic
        </motion.h1>
        <motion.div 
          className="subtitle"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={1}
        >
          Performance-Driven SaaS Growth Marketing for B2B & B2C Companies
        </motion.div>
        <motion.p
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          custom={2}
        >
          Your <strong>SaaS business needs more than just clicks</strong>—it needs <strong>revenue-focused growth</strong>. At <strong>Leadwisee</strong>, we specialize in <strong>performance marketing for SaaS</strong>, ensuring every ad dollar you spend turns into high-value customers. Whether you're a <strong>B2B SaaS startup</strong> looking to scale or an established SaaS brand refining your <strong>SaaS marketing funnel</strong>, we craft <strong>custom strategies</strong> that deliver results.
        </motion.p>
      </Hero>
      
      <HeroImage>
        <img src="https://source.unsplash.com/random/1200x600/?saas,technology,software" alt="SaaS Technology" />
      </HeroImage>
      
      <Container>
        <Section>
          <SectionHeading>Why Choose Leadwisee as Your SaaS Marketing Agency?</SectionHeading>
          <motion.div
            className="container"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <Grid>
              <motion.div 
                variants={fadeIn}
                className="benefit"
              >
                <h3>🚀 SaaS Growth Marketing Experts</h3>
                <p>100% focused on SaaS brands.</p>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                className="benefit"
              >
                <h3>🎯 ROI-Driven Approach</h3>
                <p>We track every dollar back to revenue.</p>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                className="benefit"
              >
                <h3>📈 Full-Funnel Marketing</h3>
                <p>From lead gen to retention, we optimize it all.</p>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                className="benefit"
              >
                <h3>🔍 Advanced Data & Automation</h3>
                <p>AI-driven targeting, analytics, and personalization.</p>
              </motion.div>
            </Grid>
          </motion.div>
        </Section>
        
        <Section>
          <SectionHeading>SaaS Marketing Services We Offer</SectionHeading>
          
          <ContentBlock>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              1. SaaS Performance Marketing & PPC for SaaS
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <strong>Your ideal customers are searching for solutions—can they find you?</strong> We build <strong>high-converting PPC campaigns</strong> that bring qualified leads through <strong>Google Ads, LinkedIn Ads, and Facebook Ads for SaaS.</strong>
            </motion.p>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <li>✅ <strong>SaaS PPC Management</strong>: Optimized Google & Bing Ads to capture high-intent traffic.</li>
              <li>✅ <strong>LinkedIn Ads for SaaS</strong>: Target decision-makers and enterprise buyers with precision.</li>
              <li>✅ <strong>SaaS Facebook Ads</strong>: Convert cold traffic into loyal subscribers.</li>
              <li>✅ <strong>Performance Marketing for SaaS</strong>: Data-driven campaigns that maximize ROAS.</li>
            </motion.ul>
          </ContentBlock>
          
          <ContentBlock>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              2. SaaS Content Marketing & Inbound Strategies
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <strong>Your audience is searching for solutions—be the brand they trust.</strong> Our <strong>SaaS content marketing</strong> team crafts <strong>high-converting blogs, case studies, and whitepapers</strong> to drive inbound leads and position your brand as an industry leader.
            </motion.p>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <li>✅ <strong>B2B SaaS Marketing Content</strong>: Thought leadership content that attracts & converts.</li>
              <li>✅ <strong>SaaS SEO & Digital Marketing</strong>: Rank higher and drive <strong>organic, high-intent traffic.</strong></li>
              <li>✅ <strong>SaaS Inbound Marketing</strong>: Engage leads with automated, value-driven content sequences.</li>
            </motion.ul>
          </ContentBlock>
          
          <ContentBlock>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              3. SaaS Email Marketing & Automation
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <strong>Turn leads into long-term customers with targeted email workflows.</strong> We help SaaS brands implement powerful <strong>email marketing strategies</strong> that <strong>nurture leads, reduce churn, and drive upgrades.</strong>
            </motion.p>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <li>✅ <strong>Email Marketing for SaaS</strong>: Drip sequences that convert trial users into paid customers.</li>
              <li>✅ <strong>SaaS Marketing Automation</strong>: AI-driven email flows that scale customer acquisition.</li>
              <li>✅ <strong>SaaS Marketing Automation Tools</strong>: Integration with HubSpot, Marketo, and ActiveCampaign.</li>
              <li>✅ <strong>SaaS Email Marketing Agency Services</strong>: Strategy, copywriting, and execution.</li>
            </motion.ul>
          </ContentBlock>
          
          <ContentBlock>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              4. SaaS Growth Marketing & Funnel Optimization
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <strong>Most SaaS marketing campaigns fail due to a weak funnel—let's fix that.</strong> Our team optimizes your <strong>SaaS marketing funnel</strong> to ensure every visitor moves smoothly from awareness to conversion.
            </motion.p>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <li>✅ <strong>SaaS B2B Marketing & Lead Nurturing</strong>: Increase MQL-to-SQL conversion rates.</li>
              <li>✅ <strong>SaaS Marketing Strategy & CRO</strong>: Data-backed growth strategies that boost activation.</li>
              <li>✅ <strong>Best SaaS Marketing Campaigns</strong>: Proven frameworks that drive <strong>higher LTV and lower churn.</strong></li>
            </motion.ul>
          </ContentBlock>
        </Section>
        
        <Section>
          <SectionHeading>Why Leadwisee? The SaaS Performance Marketing Agency That Delivers</SectionHeading>
          <motion.div
            className="container"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <Grid>
              <motion.div 
                variants={fadeIn}
                className="benefit"
              >
                <h3>🔹 We Scale SaaS Startups to $10M+ ARR</h3>
                <p>Proven track record with B2B and B2C SaaS brands.</p>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                className="benefit"
              >
                <h3>🔹 Data-Driven Marketing for SaaS</h3>
                <p>No vanity metrics. Just <strong>revenue and retention.</strong></p>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                className="benefit"
              >
                <h3>🔹 Expert PPC & Performance Marketing</h3>
                <p>Get <strong>faster, measurable ROI</strong> with targeted ads.</p>
              </motion.div>
              
              <motion.div 
                variants={fadeIn}
                className="benefit"
              >
                <h3>🔹 Full-Funnel SaaS Growth Strategies</h3>
                <p>From awareness to activation and beyond.</p>
              </motion.div>
            </Grid>
          </motion.div>
        </Section>
        
        <Section>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center' }}
          >
            <h2>Let's Scale Your SaaS Business – Get a Free Growth Audit</h2>
            <p style={{ fontSize: '1.25rem', maxWidth: '800px', margin: '0 auto 2rem' }}>
              Looking for a <strong>high-impact SaaS marketing agency</strong> that drives real results?
              <br />
              <strong>Book a Free Consultation</strong> and discover how <strong>Leadwisee</strong> can <strong>10X your growth.</strong>
            </p>
            <h3>Get Started Today</h3>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <ContactForm />
          </motion.div>
        </Section>
      </Container>
    </>
  );
};

// Mapping of industry slugs to their data
const industryData = {
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
          description: 'Generate qualified leads through targeted advertising campaigns.',
          link: '/services/ppc-marketing'
        },
        {
          title: 'Social Media Marketing',
          description: 'Showcase properties and build relationships with potential clients.',
          link: '/services/social-media-marketing'
        },
        {
          title: 'Content Marketing',
          description: 'Establish your expertise in specific neighborhoods or property types.',
          link: '/services/content-marketing'
        }
      ],
      caseStudies: [
        {
          title: 'Luxury Property Marketing Campaign',
          client: 'High-End Real Estate Agency',
          description: 'We developed a comprehensive digital marketing strategy for a luxury real estate brand, focusing on targeting high-net-worth individuals and foreign investors.',
          results: [
            { number: '286%', label: 'Increase in Qualified Leads' },
            { number: '12', label: 'High-Value Properties Sold' },
            { number: '$4.2M', label: 'Average Property Value' }
          ]
        },
        {
          title: 'Real Estate Lead Generation',
          client: 'Regional Property Developer',
          description: 'We executed a multi-channel campaign to generate leads for a new residential development, combining search, social, and email marketing.',
          results: [
            { number: '423', label: 'Qualified Lead Inquiries' },
            { number: '68%', label: 'Reduction in Cost Per Lead' },
            { number: '32', label: 'Units Sold Through Digital' }
          ]
        }
      ]
    },
    'saas': {
      title: 'SaaS',
      description: 'Growth marketing strategies for SaaS companies focused on customer acquisition and retention.',
      fullDescription: `
        SaaS companies face unique challenges in marketing, with long sales cycles, complex products, and the constant need to demonstrate value. Our SaaS marketing strategies focus not just on acquiring customers, but on driving long-term retention and growth.
        
        We understand the importance of the entire customer journey in SaaS, from initial awareness to activation, retention, and expansion, and we build comprehensive strategies that address each stage of the funnel.
      `,
      challenges: [
        'Long and complex sales cycles for enterprise SaaS',
        'High customer acquisition costs',
        'Competitive market with low barriers to entry',
        'Demonstrating value before purchase',
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
          description: 'We implemented a comprehensive growth strategy for a B2B SaaS platform, focusing on content marketing, SEO, and paid acquisition to drive signups and conversions.',
          results: [
            { number: '312%', label: 'Increase in MQLs' },
            { number: '47%', label: 'Increase in Trial Conversions' },
            { number: '36%', label: 'Reduction in CAC' }
          ]
        },
        {
          title: 'Market Expansion for Business Intelligence Tool',
          client: 'Data Analytics SaaS Provider',
          description: 'We helped a data analytics company expand into new vertical markets through targeted content and paid advertising campaigns.',
          results: [
            { number: '187%', label: 'Growth in New Market Segment' },
            { number: '43%', label: 'Increase in Enterprise Deals' },
            { number: '35%', label: 'Reduction in Sales Cycle Length' }
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
          description: 'We developed a multi-channel digital strategy for a fashion e-commerce brand, focusing on social media, Google Shopping, and email marketing.',
          results: [
            { number: '256%', label: 'Increase in Revenue' },
            { number: '189%', label: 'Increase in ROAS' },
            { number: '34%', label: 'Increase in AOV' }
          ]
        },
        {
          title: 'E-commerce Abandoned Cart Recovery',
          client: 'Specialty Goods Retailer',
          description: 'We implemented a comprehensive cart abandonment strategy using email marketing and retargeting ads to recover lost sales.',
          results: [
            { number: '28%', label: 'Cart Recovery Rate' },
            { number: '$247K', label: 'Recovered Revenue' },
            { number: '1,842%', label: 'ROI on Recovery Campaigns' }
          ]
        }
      ]
    },
    'retail': {
      title: 'Retail',
      description: 'Omnichannel marketing strategies that drive online traffic and in-store foot traffic for retail businesses.',
      fullDescription: `
        Modern retail requires an omnichannel approach that seamlessly connects online and offline customer experiences. Our retail marketing strategies help brick-and-mortar stores and omnichannel retailers attract customers through both digital channels and physical locations.
        
        We understand the importance of location-based marketing, customer loyalty, and creating consistent experiences across all touchpoints, and our strategies are designed to drive both e-commerce sales and in-store foot traffic.
      `,
      challenges: [
        'Competition from pure e-commerce players',
        'Creating seamless omnichannel experiences',
        'Driving foot traffic to physical store locations',
        'Measuring the impact of digital marketing on in-store sales',
        'Building customer loyalty across channels'
      ],
      solutions: [
        'Local SEO and Google Business Profile optimization',
        'Location-based PPC and social media advertising',
        'Click-to-brick strategies that drive online researchers in-store',
        'In-store digital experiences and mobile engagement',
        'Loyalty programs that connect online and offline purchases',
        'Email and SMS marketing for promotions and events'
      ],
      recommendedServices: [
        {
          title: 'Local SEO',
          description: 'Get found by nearby customers searching for products you offer.',
          link: '/services/local-seo'
        },
        {
          title: 'PPC Marketing',
          description: 'Drive store visits and online sales with targeted local ads.',
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
    'interior-design': {
      title: 'Interior Design',
      description: 'Visual-focused marketing for interior designers that showcases expertise and attracts ideal clients.',
      fullDescription: `
        Interior design marketing requires a highly visual approach that showcases your portfolio, design aesthetic, and unique expertise. Our interior design marketing strategies help designers attract their ideal clients and position themselves as experts in their niche.
        
        We understand the importance of visual platforms, portfolio presentation, and client storytelling in the interior design industry, and our strategies are designed to showcase your work effectively while attracting clients who value and can afford your services.
      `,
      challenges: [
        'Attracting clients who value design and have appropriate budgets',
        'Showcasing portfolio work effectively across digital channels',
        'Converting website visitors into consultation requests',
        'Standing out in a competitive and visually-driven market',
        'Communicating the value of professional design services'
      ],
      solutions: [
        'Visual-first social media strategies for Instagram, Pinterest, and Houzz',
        'Portfolio-focused website design and optimization',
        'Content marketing showcasing process, expertise, and results',
        'Strategic PPC campaigns targeting high-intent, qualified prospects',
        'Email nurture campaigns for long-term leads',
        'Testimonial and case study marketing'
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
            { number: '12', label: 'New Client Projects' }
          ]
        }
      ]
    },
    'professional-services': {
      title: 'Professional Services',
      description: 'Lead generation and authority-building for coaches, consultants, and service professionals.',
      fullDescription: `
        Marketing for coaches, consultants, and professional service providers requires building trust, establishing authority, and creating clear paths to engagement. Our professional services marketing strategies help service providers attract their ideal clients and position themselves as experts.
        
        We understand the importance of thought leadership, relationship building, and lead nurturing in the professional services industry, and our strategies are designed to establish you as a trusted authority while generating qualified leads for your services.
      `,
      challenges: [
        'Building trust and credibility with potential clients',
        'Creating a consistent lead pipeline for service-based businesses',
        'Standing out in crowded and competitive markets',
        'Converting leads into high-value clients',
        'Effectively communicating the value of intangible services'
      ],
      solutions: [
        'Thought leadership content marketing and SEO',
        'Lead generation through valuable content offers',
        'Authority-building through webinars, podcasts, and speaking',
        'Strategic email nurture sequences for long sales cycles',
        'Targeted PPC campaigns for high-intent searches',
        'Case study and social proof marketing'
      ],
      recommendedServices: [
        {
          title: 'Content Marketing',
          description: 'Establish your expertise and attract ideal clients through valuable content.',
          link: '/services/content-marketing'
        },
        {
          title: 'Email Marketing',
          description: 'Nurture leads and build relationships with automated email sequences.',
          link: '/services/email-marketing'
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
    }
  };

// Return a generic image URL for different industries
const getIndustryImage = (industry) => {
  const images = {
    'real-estate': 'https://source.unsplash.com/random/1200x600/?realestate,property',
    'saas': 'https://source.unsplash.com/random/1200x600/?software,technology',
    'ecommerce': 'https://source.unsplash.com/random/1200x600/?ecommerce,shopping',
    'retail': 'https://source.unsplash.com/random/1200x600/?retail,store',
    'interior-design': 'https://source.unsplash.com/random/1200x600/?interior,design',
    'professional-services': 'https://source.unsplash.com/random/1200x600/?business,consulting'
  };
  
  return images[industry] || 'https://source.unsplash.com/random/1200x600/?marketing';
};

const IndustryDetail = () => {
  const { industry } = useParams();
  const [data, setData] = useState(null);
  
  useEffect(() => {
    // If the industry is 'saas' which isn't in the URL, ensure it works
    const industryKey = industry === 'saas' ? 'saas' : industry;
    
    if (industryData[industryKey]) {
      setData(industryData[industryKey]);
    }
  }, [industry]);
  
  if (!data) {
    return <div>Loading...</div>;
  }
  
  // For real-estate and saas, use our custom content components
  if (industry === 'real-estate') {
    return (
      <>
        <Helmet>
          <title>Real Estate Marketing Agency | Leadwisee</title>
          <meta name="description" content="Performance-driven real estate marketing services that generate high-quality leads and help sell properties faster." />
        </Helmet>
        <RealEstateContent />
      </>
    );
  }
  
  if (industry === 'saas') {
    return (
      <>
        <Helmet>
          <title>SaaS Marketing Agency | Leadwisee</title>
          <meta name="description" content="Performance-driven SaaS growth marketing that drives revenue, not just traffic. Specialized strategies for B2B and B2C SaaS companies." />
        </Helmet>
        <SaaSContent />
      </>
    );
  }
  
  return (
    <>
      <Helmet>
        <title>{data.title} Marketing Agency | Leadwisee</title>
        <meta name="description" content={data.description} />
      </Helmet>
      
      <Container>
        <Hero>
          <motion.h1 
            variants={fadeIn} 
            initial="hidden" 
            animate="visible"
          >
            {data.title} Marketing Solutions
          </motion.h1>
          <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            {data.description}
          </motion.p>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <Button to="/contact" size="large">
              Get a Free Strategy Call
              <FaArrowRight />
            </Button>
          </motion.div>
        </Hero>
        
        <HeroImage>
          <img src={getIndustryImage(industry)} alt={`${data.title} Marketing`} />
        </HeroImage>
        
        <Section>
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p>{data.fullDescription}</p>
          </motion.div>
        </Section>
        
        <Section>
          <SectionHeading>Industry Challenges</SectionHeading>
          <motion.div
            className="container"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <List>
              {data.challenges.map((challenge, index) => (
                <motion.li 
                  key={index}
                  variants={fadeIn}
                >
                  {challenge}
                </motion.li>
              ))}
            </List>
          </motion.div>
        </Section>
        
        <Section>
          <SectionHeading>Our Solutions</SectionHeading>
          <motion.div
            className="container"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <List>
              {data.solutions.map((solution, index) => (
                <motion.li 
                  key={index}
                  variants={fadeIn}
                >
                  {solution}
                </motion.li>
              ))}
            </List>
          </motion.div>
        </Section>
        
        <ServicesSection>
          <SectionHeading>Recommended Services</SectionHeading>
          <div className="services">
            {data.recommendedServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                link={service.link}
                delay={index * 0.1}
              />
            ))}
          </div>
        </ServicesSection>
        
        <Section>
          <SectionHeading>Case Studies</SectionHeading>
          <CaseStudies>
            {data.caseStudies.map((study, index) => (
              <CaseStudyCard
                key={index}
                title={study.title}
                client={study.client}
                description={study.description}
                results={study.results}
                delay={index * 0.2}
              />
            ))}
          </CaseStudies>
        </Section>
        
        <FormSection>
          <SectionHeading>Ready to Grow Your {data.title} Business?</SectionHeading>
          <ContactForm />
        </FormSection>
      </Container>
    </>
  );
};

export default IndustryDetail;
