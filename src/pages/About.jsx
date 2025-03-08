
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaRocket, FaLightbulb, FaUsers, FaCheckCircle } from 'react-icons/fa';

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

const Subtitle = styled.p`
  font-size: 1.3rem;
  max-width: 800px;
  margin: 0 auto 30px;
  color: ${props => props.theme.colors.textMuted};
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ContentBlock = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;

  p {
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 20px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const TeamMemberCard = styled(motion.div)`
  background: ${props => props.theme.colors.cardBg};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
  
  .team-image {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
  
  .team-info {
    padding: 20px;
    
    h3 {
      font-size: 1.5rem;
      margin-bottom: 5px;
    }
    
    .position {
      color: ${props => props.theme.colors.primary};
      font-weight: 600;
      margin-bottom: 15px;
      display: block;
    }
    
    p {
      font-size: 0.95rem;
      line-height: 1.6;
    }
  }
`;

const ValueCard = styled(motion.div)`
  background: ${props => props.theme.colors.cardBg};
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
  
  .icon {
    font-size: 2.5rem;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 20px;
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
  
  p {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const TimelineContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: 100%;
    background: ${props => props.theme.colors.primary};
    
    @media (max-width: 768px) {
      left: 30px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 60px;
  
  .timeline-content {
    position: relative;
    width: calc(50% - 40px);
    padding: 25px;
    background: ${props => props.theme.colors.cardBg};
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
    
    &:before {
      content: '';
      position: absolute;
      top: 20px;
      width: 20px;
      height: 20px;
      background: ${props => props.theme.colors.primary};
      border-radius: 50%;
    }
    
    .date {
      display: inline-block;
      padding: 5px 15px;
      background: ${props => props.theme.colors.primary};
      color: white;
      border-radius: 20px;
      font-weight: 600;
      margin-bottom: 15px;
    }
    
    h3 {
      font-size: 1.3rem;
      margin-bottom: 10px;
    }
    
    p {
      font-size: 1rem;
      line-height: 1.6;
    }
    
    @media (max-width: 768px) {
      width: calc(100% - 70px);
      margin-left: 70px;
    }
  }
  
  &:nth-child(odd) {
    .timeline-content {
      float: right;
      
      &:before {
        left: -30px;
      }
      
      @media (max-width: 768px) {
        float: none;
        
        &:before {
          left: -40px;
        }
      }
    }
  }
  
  &:nth-child(even) {
    .timeline-content {
      float: left;
      
      &:before {
        right: -30px;
      }
      
      @media (max-width: 768px) {
        float: none;
        margin-left: 70px;
        
        &:before {
          left: -40px;
          right: auto;
        }
      }
    }
  }
  
  &:after {
    content: '';
    display: block;
    clear: both;
  }
`;

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const About = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "John Smith",
      position: "Founder & CEO",
      bio: "John founded Leadwisee with the vision of creating a marketing agency focused on measurable results and client success.",
      image: "https://source.unsplash.com/random/600x600/?portrait,man,suit"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      position: "Chief Marketing Officer",
      bio: "Sarah brings 15+ years of digital marketing expertise, having previously led marketing at several Fortune 500 companies.",
      image: "https://source.unsplash.com/random/600x600/?portrait,woman,business"
    },
    {
      id: 3,
      name: "David Chen",
      position: "Head of PPC",
      bio: "David specializes in creating high-performing PPC campaigns that deliver consistent ROI for our clients.",
      image: "https://source.unsplash.com/random/600x600/?portrait,man,asian"
    },
    {
      id: 4,
      name: "Emma Rodriguez",
      position: "Social Media Director",
      bio: "Emma has a proven track record of building engaging social media strategies that convert followers into customers.",
      image: "https://source.unsplash.com/random/600x600/?portrait,woman,latina"
    },
    {
      id: 5,
      name: "Michael Wilson",
      position: "Data Analytics Lead",
      bio: "Michael translates complex data into actionable insights that drive our performance-focused approach.",
      image: "https://source.unsplash.com/random/600x600/?portrait,man,analyst"
    },
    {
      id: 6,
      name: "Lisa Patel",
      position: "Client Success Manager",
      bio: "Lisa ensures every client achieves their business goals through strategic planning and communication.",
      image: "https://source.unsplash.com/random/600x600/?portrait,woman,business"
    }
  ];
  
  // Company values data
  const values = [
    {
      id: 1,
      icon: <FaRocket />,
      title: "Results-Driven",
      description: "We measure success by the measurable results and ROI we deliver for our clients."
    },
    {
      id: 2,
      icon: <FaLightbulb />,
      title: "Innovation",
      description: "We constantly seek new approaches and technologies to give our clients a competitive edge."
    },
    {
      id: 3,
      icon: <FaUsers />,
      title: "Collaboration",
      description: "We work as an extension of your team, ensuring transparent communication at all times."
    },
    {
      id: 4,
      icon: <FaCheckCircle />,
      title: "Integrity",
      description: "We maintain the highest standards of honesty, accountability, and ethical conduct."
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>About Us | Leadwisee - Performance Marketing Agency</title>
        <meta
          name="description"
          content="Learn about Leadwisee, our mission, values, and the dedicated team behind our performance marketing agency."
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
                About <span>Leadwisee</span>
              </MainTitle>
              <Subtitle>
                We're a performance marketing agency obsessed with delivering measurable results that drive business growth.
              </Subtitle>
            </HeroContent>
          </HeroSection>
          
          <Section>
            <SectionHeading>Our Story</SectionHeading>
            <ContentBlock>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                Leadwisee was founded in 2018 with a simple but powerful mission: to transform how businesses approach digital marketing. Too many companies were spending money on marketing without understanding the true impact on their bottom line.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                Our founder, John Smith, having worked in both agency and in-house marketing roles, saw a gap in the market for a truly performance-driven agency. One that wouldn't just focus on vanity metrics like impressions or clicks, but on metrics that actually matter to businesses: leads, sales, and revenue.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Since then, we've grown from a small team of 3 to over 30 performance marketing specialists, serving clients across multiple industries including SaaS, e-commerce, real estate, and healthcare. Our approach has always remained the same: deliver measurable results that directly impact our clients' business goals.
              </motion.p>
            </ContentBlock>
          </Section>
          
          <Section>
            <SectionHeading>Our Values</SectionHeading>
            <Grid>
              {values.map((value) => (
                <ValueCard
                  key={value.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="icon">{value.icon}</div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </ValueCard>
              ))}
            </Grid>
          </Section>
          
          <Section>
            <SectionHeading>Our Team</SectionHeading>
            <Grid>
              {teamMembers.map((member) => (
                <TeamMemberCard
                  key={member.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <img 
                    className="team-image" 
                    src={member.image} 
                    alt={member.name} 
                  />
                  <div className="team-info">
                    <h3>{member.name}</h3>
                    <span className="position">{member.position}</span>
                    <p>{member.bio}</p>
                  </div>
                </TeamMemberCard>
              ))}
            </Grid>
          </Section>
          
          <Section>
            <SectionHeading>Our Journey</SectionHeading>
            <TimelineContainer>
              <TimelineItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="timeline-content">
                  <span className="date">2018</span>
                  <h3>Leadwisee Founded</h3>
                  <p>Established with a mission to deliver measurable marketing results.</p>
                </div>
              </TimelineItem>
              
              <TimelineItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="timeline-content">
                  <span className="date">2019</span>
                  <h3>Team Expansion</h3>
                  <p>Grew to 10 team members and expanded our service offerings.</p>
                </div>
              </TimelineItem>
              
              <TimelineItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="timeline-content">
                  <span className="date">2020</span>
                  <h3>Digital Transformation Focus</h3>
                  <p>Helped clients navigate the pandemic by accelerating their digital transformation.</p>
                </div>
              </TimelineItem>
              
              <TimelineItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="timeline-content">
                  <span className="date">2021</span>
                  <h3>Industry Recognition</h3>
                  <p>Received multiple awards for our performance marketing campaigns.</p>
                </div>
              </TimelineItem>
              
              <TimelineItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="timeline-content">
                  <span className="date">2022</span>
                  <h3>International Expansion</h3>
                  <p>Opened our first international office to serve clients globally.</p>
                </div>
              </TimelineItem>
              
              <TimelineItem
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="timeline-content">
                  <span className="date">2023</span>
                  <h3>Today & Beyond</h3>
                  <p>Continuing to innovate and deliver exceptional results for our clients.</p>
                </div>
              </TimelineItem>
            </TimelineContainer>
          </Section>
        </PageWrapper>
      </motion.div>
    </>
  );
};

export default About;
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaChartLine, FaUsers, FaLightbulb, FaHandshake, FaRocket, FaSearchDollar } from 'react-icons/fa';

import SectionHeading from '../components/common/SectionHeading';
import Button from '../components/common/Button';
import ContactForm from '../components/common/ContactForm';

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem 5rem;
`;

const AboutHero = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  padding: 3rem 0;
`;

const StorySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 5rem;
  
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const StoryContent = styled.div`
  flex: 1;
  
  h3 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }
  
  p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
    font-size: 1.1rem;
  }
`;

const StoryImage = styled.div`
  flex: 1;
  position: relative;
  min-height: 300px;
  border-radius: 12px;
  overflow: hidden;
  
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ApproachSection = styled.div`
  margin-bottom: 5rem;
`;

const ApproachGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ApproachCard = styled(motion.div)`
  background-color: ${props => props.theme.colors.bgAlt};
  padding: 2rem;
  border-radius: 12px;
  transition: transform 0.3s ease;
  height: 100%;
  
  &:hover {
    transform: translateY(-10px);
  }
  
  .icon {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: ${props => props.theme.colors.primary};
  }
  
  h4 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  p {
    line-height: 1.6;
  }
`;

const TeamSection = styled.div`
  margin-bottom: 5rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const TeamMember = styled(motion.div)`
  text-align: center;
  
  .member-image {
    width: 180px;
    height: 180px;
    border-radius: 50%;
    overflow: hidden;
    margin: 0 auto 1.5rem;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  h4 {
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
  }
  
  .position {
    color: ${props => props.theme.colors.primary};
    margin-bottom: 1rem;
    font-weight: 500;
  }
  
  p {
    line-height: 1.6;
    font-size: 0.95rem;
  }
`;

const ValuesSection = styled.div`
  margin-bottom: 5rem;
  background-color: ${props => props.theme.colors.bgAlt};
  padding: 4rem 2rem;
  border-radius: 12px;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ValueCard = styled(motion.div)`
  background-color: ${props => props.theme.colors.background};
  padding: 2rem;
  border-radius: 12px;
  border-left: 4px solid ${props => props.theme.colors.primary};
  
  h4 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  p {
    line-height: 1.6;
  }
`;

const TimelineSection = styled.div`
  margin-bottom: 5rem;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 3rem auto 0;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 4px;
    background: ${props => props.theme.colors.primary};
    left: 50%;
    margin-left: -2px;
    
    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  padding: 1rem 0;
  position: relative;
  width: 50%;
  left: ${props => props.position === 'right' ? '50%' : '0'};
  padding-left: ${props => props.position === 'right' ? '3rem' : '0'};
  padding-right: ${props => props.position === 'right' ? '0' : '3rem'};
  text-align: ${props => props.position === 'right' ? 'left' : 'right'};
  
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 50px;
    padding-right: 0;
    text-align: left;
    left: 0;
  }
  
  &:before {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: ${props => props.theme.colors.primary};
    top: 1.5rem;
    left: ${props => props.position === 'right' ? '-10px' : 'auto'};
    right: ${props => props.position === 'right' ? 'auto' : '-10px'};
    
    @media (max-width: 768px) {
      left: 12px;
      right: auto;
    }
  }
  
  .timeline-content {
    background: ${props => props.theme.colors.bgAlt};
    padding: 1.5rem;
    border-radius: 8px;
    
    h4 {
      font-size: 1.4rem;
      margin-bottom: 0.5rem;
      font-weight: 600;
    }
    
    .date {
      color: ${props => props.theme.colors.primary};
      font-weight: 500;
      margin-bottom: 1rem;
    }
    
    p {
      line-height: 1.6;
    }
  }
`;

const TestimonialsSection = styled.div`
  margin-bottom: 5rem;
`;

const TestimonialsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Testimonial = styled(motion.div)`
  background-color: ${props => props.theme.colors.bgAlt};
  padding: 2rem;
  border-radius: 12px;
  position: relative;
  
  .quote {
    font-size: 1.1rem;
    font-style: italic;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
  
  .client {
    display: flex;
    align-items: center;
    
    .client-image {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      overflow: hidden;
      margin-right: 1rem;
      
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    
    .client-info {
      h5 {
        font-size: 1.1rem;
        margin-bottom: 0.3rem;
        font-weight: 600;
      }
      
      .position {
        font-size: 0.9rem;
      }
    }
  }
  
  &:before {
    content: '"';
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    font-size: 5rem;
    line-height: 1;
    color: ${props => props.theme.colors.primary};
    opacity: 0.2;
  }
`;

const ContactSection = styled.div`
  margin-top: 6rem;
`;

function About() {
  return (
    <>
      <Helmet>
        <title>About Leadwisee | Performance Marketing Agency</title>
        <meta 
          name="description" 
          content="Learn about Leadwisee, a performance marketing agency dedicated to driving measurable results through data-driven strategies for businesses of all sizes."
        />
      </Helmet>

      <AboutHero>
        <SectionHeading
          subtitle="About Us"
          title="Performance Marketing with <span>Measurable Impact</span>"
          description="Leadwisee is a team of digital marketing experts committed to driving meaningful business results for our clients through data-driven strategies and innovative approaches."
          centered
        />
      </AboutHero>

      <AboutContainer>
        {/* Story Section */}
        <StorySection>
          <StoryContent>
            <h3>Our Story</h3>
            <p>
              Leadwisee was founded in 2018 with a simple but powerful mission: to transform how businesses approach digital marketing by focusing relentlessly on measurable performance and ROI.
            </p>
            <p>
              Frustrated by the lack of accountability in traditional marketing agencies, our founders—veteran marketers with backgrounds in analytics and digital strategy—set out to create an agency that would bridge the gap between creative marketing and data-driven results.
            </p>
            <p>
              What started as a small team specializing in PPC and conversion optimization has grown into a comprehensive performance marketing agency serving clients across multiple industries. Throughout our growth, we've maintained our core commitment to transparency, measurable outcomes, and continuous optimization.
            </p>
            <p>
              Today, Leadwisee partners with businesses of all sizes—from emerging startups to established enterprises—to craft marketing strategies that don't just generate impressions but drive meaningful business outcomes.
            </p>
          </StoryContent>
          <StoryImage>
            <img 
              src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Leadwisee team collaboration"
            />
          </StoryImage>
        </StorySection>

        {/* Approach Section */}
        <ApproachSection>
          <SectionHeading
            subtitle="Our Methodology"
            title="The Leadwisee <span>Approach</span>"
            description="Our data-driven methodology combines strategic insight with tactical execution to consistently deliver exceptional results."
            centered
          />

          <ApproachGrid>
            <ApproachCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="icon">
                <FaSearchDollar />
              </div>
              <h4>Deep Market Analysis</h4>
              <p>
                We begin every engagement with comprehensive research into your market, competitors, and target audience to identify key opportunities and challenges.
              </p>
            </ApproachCard>

            <ApproachCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="icon">
                <FaLightbulb />
              </div>
              <h4>Strategic Planning</h4>
              <p>
                Based on our analysis, we develop tailored strategies that align with your business objectives and target the highest-impact marketing channels.
              </p>
            </ApproachCard>

            <ApproachCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="icon">
                <FaRocket />
              </div>
              <h4>Precision Execution</h4>
              <p>
                Our specialized teams implement campaigns with meticulous attention to detail, ensuring all elements work together cohesively.
              </p>
            </ApproachCard>

            <ApproachCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="icon">
                <FaChartLine />
              </div>
              <h4>Data-Driven Optimization</h4>
              <p>
                We continuously analyze performance data and make informed adjustments to maximize results and return on your marketing investment.
              </p>
            </ApproachCard>

            <ApproachCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="icon">
                <FaHandshake />
              </div>
              <h4>Transparent Reporting</h4>
              <p>
                Our custom reporting dashboards provide complete visibility into campaign performance and the impact on your business metrics.
              </p>
            </ApproachCard>

            <ApproachCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="icon">
                <FaUsers />
              </div>
              <h4>Collaborative Partnership</h4>
              <p>
                We work as an extension of your team, maintaining open communication and aligning our efforts with your evolving business goals.
              </p>
            </ApproachCard>
          </ApproachGrid>
        </ApproachSection>

        {/* Team Section */}
        <TeamSection>
          <SectionHeading
            subtitle="Our Team"
            title="Meet the <span>Experts</span> Behind Leadwisee"
            description="Our team combines diverse expertise in digital marketing, analytics, creative strategy, and industry-specific knowledge."
            centered
          />

          <TeamGrid>
            <TeamMember
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="member-image">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80" 
                  alt="Michael Chen, CEO & Founder"
                />
              </div>
              <h4>Michael Chen</h4>
              <div className="position">CEO & Founder</div>
              <p>
                With 15+ years in digital marketing, Michael founded Leadwisee to create an agency focused on measurable results and client success.
              </p>
            </TeamMember>

            <TeamMember
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="member-image">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2576&q=80" 
                  alt="Sarah Johnson, Director of Strategy"
                />
              </div>
              <h4>Sarah Johnson</h4>
              <div className="position">Director of Strategy</div>
              <p>
                Sarah oversees client strategy development, leveraging her background in business analytics and consumer psychology.
              </p>
            </TeamMember>

            <TeamMember
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="member-image">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80" 
                  alt="David Rodriguez, Head of Performance Media"
                />
              </div>
              <h4>David Rodriguez</h4>
              <div className="position">Head of Performance Media</div>
              <p>
                David leads our paid media team, specializing in developing high-ROAS advertising campaigns across platforms.
              </p>
            </TeamMember>

            <TeamMember
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="member-image">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2961&q=80" 
                  alt="Emily Zhang, Director of Analytics"
                />
              </div>
              <h4>Emily Zhang</h4>
              <div className="position">Director of Analytics</div>
              <p>
                Emily drives our data-centric approach, transforming complex analytics into actionable marketing insights.
              </p>
            </TeamMember>
          </TeamGrid>
        </TeamSection>

        {/* Values Section */}
        <ValuesSection>
          <SectionHeading
            subtitle="What Defines Us"
            title="Our Core <span>Values</span>"
            description="These principles guide everything we do—from how we work with clients to how we develop our strategies."
            centered
          />

          <ValuesGrid>
            <ValueCard
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h4>Results Over Activity</h4>
              <p>
                We prioritize meaningful outcomes over busywork and vanity metrics. Every action we take is evaluated based on its contribution to your business goals.
              </p>
            </ValueCard>

            <ValueCard
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4>Data-Driven Decisions</h4>
              <p>
                We let data guide our strategy, constantly testing, measuring, and refining to ensure our recommendations are based on evidence, not assumptions.
              </p>
            </ValueCard>

            <ValueCard
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4>Radical Transparency</h4>
              <p>
                We believe in complete visibility into our work, your results, and our recommendations—even when the conversations are challenging.
              </p>
            </ValueCard>

            <ValueCard
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4>Continuous Innovation</h4>
              <p>
                The digital landscape evolves rapidly, and so do we. We constantly explore new approaches and technologies to keep your marketing ahead of the curve.
              </p>
            </ValueCard>

            <ValueCard
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h4>Client Partnership</h4>
              <p>
                We view our client relationships as long-term partnerships, investing time to understand your business and align our success with yours.
              </p>
            </ValueCard>

            <ValueCard
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h4>Specialized Expertise</h4>
              <p>
                We believe in deep expertise over generalist approaches, with specialists dedicated to mastering specific channels and industry verticals.
              </p>
            </ValueCard>
          </ValuesGrid>
        </ValuesSection>

        {/* Timeline Section */}
        <TimelineSection>
          <SectionHeading
            subtitle="Our Journey"
            title="Leadwisee <span>Milestones</span>"
            description="The key moments that have shaped our agency's growth and development over the years."
            centered
          />

          <Timeline>
            <TimelineItem 
              position="left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="timeline-content">
                <h4>Agency Founded</h4>
                <div className="date">March 2018</div>
                <p>
                  Leadwisee was established with a focus on performance-based digital marketing services for small businesses.
                </p>
              </div>
            </TimelineItem>

            <TimelineItem 
              position="right"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="timeline-content">
                <h4>First Enterprise Client</h4>
                <div className="date">November 2018</div>
                <p>
                  Secured our first major enterprise client, proving our model could scale to complex marketing challenges.
                </p>
              </div>
            </TimelineItem>

            <TimelineItem 
              position="left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="timeline-content">
                <h4>Expanded Service Offerings</h4>
                <div className="date">June 2019</div>
                <p>
                  Added specialized SEO, content marketing, and social media services to create comprehensive marketing solutions.
                </p>
              </div>
            </TimelineItem>

            <TimelineItem 
              position="right"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="timeline-content">
                <h4>Opened Second Office</h4>
                <div className="date">February 2020</div>
                <p>
                  Expanded operations with a new office to better serve our growing client base across multiple regions.
                </p>
              </div>
            </TimelineItem>

            <TimelineItem 
              position="left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="timeline-content">
                <h4>Industry Specialization Launch</h4>
                <div className="date">August 2021</div>
                <p>
                  Developed specialized marketing teams and strategies for key industries including SaaS, healthcare, and e-commerce.
                </p>
              </div>
            </TimelineItem>

            <TimelineItem 
              position="right"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="timeline-content">
                <h4>Proprietary Analytics Platform</h4>
                <div className="date">January 2022</div>
                <p>
                  Launched our custom analytics dashboard to provide clients with real-time performance insights and reporting.
                </p>
              </div>
            </TimelineItem>

            <TimelineItem 
              position="left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="timeline-content">
                <h4>Global Expansion</h4>
                <div className="date">March 2023</div>
                <p>
                  Began serving international clients and established partnerships with technology platforms worldwide.
                </p>
              </div>
            </TimelineItem>
          </Timeline>
        </TimelineSection>

        {/* Testimonials Section */}
        <TestimonialsSection>
          <SectionHeading
            subtitle="Client Success Stories"
            title="What Our <span>Clients Say</span>"
            description="Don't just take our word for it—hear from businesses who have transformed their marketing with Leadwisee."
            centered
          />

          <TestimonialsGrid>
            <Testimonial
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="quote">
                "Leadwisee transformed our marketing approach from guesswork to precision. Their data-driven strategies helped us triple our qualified leads while actually reducing our overall marketing spend."
              </div>
              <div className="client">
                <div className="client-image">
                  <img 
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80" 
                    alt="Jennifer Miller"
                  />
                </div>
                <div className="client-info">
                  <h5>Jennifer Miller</h5>
                  <div className="position">CMO, TechSolutions Inc.</div>
                </div>
              </div>
            </Testimonial>

            <Testimonial
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="quote">
                "What sets Leadwisee apart is their deep understanding of our industry. Their specialized healthcare marketing strategies helped us navigate complex regulations while dramatically growing our patient acquisition."
              </div>
              <div className="client">
                <div className="client-image">
                  <img 
                    src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2570&q=80" 
                    alt="Robert Thompson"
                  />
                </div>
                <div className="client-info">
                  <h5>Robert Thompson</h5>
                  <div className="position">CEO, Wellness Medical Group</div>
                </div>
              </div>
            </Testimonial>

            <Testimonial
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="quote">
                "Our e-commerce sales have grown 215% since partnering with Leadwisee. Their ability to optimize our product campaigns and improve conversion rates has been nothing short of remarkable."
              </div>
              <div className="client">
                <div className="client-image">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80" 
                    alt="Amanda Garcia"
                  />
                </div>
                <div className="client-info">
                  <h5>Amanda Garcia</h5>
                  <div className="position">Founder, Luxe Home Essentials</div>
                </div>
              </div>
            </Testimonial>

            <Testimonial
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="quote">
                "As a SaaS startup, we needed an agency that understood our unique challenges. Leadwisee not only helped us optimize our CAC but also implemented strategies that reduced churn and improved our lifetime customer value."
              </div>
              <div className="client">
                <div className="client-image">
                  <img 
                    src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80" 
                    alt="Daniel Wilson"
                  />
                </div>
                <div className="client-info">
                  <h5>Daniel Wilson</h5>
                  <div className="position">Co-founder, CloudSpark Analytics</div>
                </div>
              </div>
            </Testimonial>
          </TestimonialsGrid>
        </TestimonialsSection>

        {/* Contact Section */}
        <ContactSection>
          <SectionHeading
            subtitle="Get In Touch"
            title="Ready to <span>Elevate</span> Your Marketing?"
            description="Let's discuss how Leadwisee can help you achieve your business goals through performance-focused marketing strategies."
            centered
          />
          <ContactForm />
        </ContactSection>
      </AboutContainer>
    </>
  );
}

export default About;
