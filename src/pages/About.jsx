
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
