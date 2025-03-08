
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaHandshake, FaChartLine, FaLightbulb } from 'react-icons/fa';

import SectionHeading from '../components/common/SectionHeading';

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

const AboutSection = styled.section`
  margin-bottom: 5rem;
`;

const StoryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const StoryContent = styled.div`
  p {
    margin-bottom: 1.5rem;
    color: ${props => props.theme.textLight};
    font-size: 1.1rem;
    line-height: 1.8;
  }
`;

const StoryImage = styled.div`
  position: relative;
  height: 100%;
  min-height: 300px;
  background-image: url('https://source.unsplash.com/random/600x800/?marketing,team');
  background-size: cover;
  background-position: center;
  border-radius: 0.5rem;
  overflow: hidden;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ValueCard = styled(motion.div)`
  background-color: ${props => props.theme.backgroundAlt};
  padding: 2rem;
  border-radius: 0.5rem;
  text-align: center;
  
  .icon {
    background-color: rgba(var(--primary-rgb), 0.1);
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    margin: 0 auto 1.5rem;
    color: ${props => props.theme.primary};
    font-size: 1.75rem;
  }
  
  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  
  p {
    color: ${props => props.theme.textLight};
    line-height: 1.6;
  }
`;

const TeamSection = styled.section`
  margin-bottom: 5rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TeamMemberCard = styled(motion.div)`
  background-color: ${props => props.theme.backgroundAlt};
  border-radius: 0.5rem;
  overflow: hidden;
  
  .member-image {
    height: 250px;
    background-image: ${props => `url(${props.image})`};
    background-size: cover;
    background-position: center;
  }
  
  .member-info {
    padding: 1.5rem;
  }
  
  h3 {
    margin-bottom: 0.5rem;
    font-size: 1.25rem;
  }
  
  .position {
    color: ${props => props.theme.primary};
    font-weight: 500;
    margin-bottom: 1rem;
    display: block;
  }
  
  p {
    color: ${props => props.theme.textLight};
    font-size: 0.9375rem;
    line-height: 1.6;
  }
`;

const About = () => {
  // Mock team data
  const teamMembers = [
    {
      id: 1,
      name: 'Jane Cooper',
      position: 'CEO & Founder',
      bio: 'With over 15 years of experience in digital marketing, Jane leads our company with a focus on innovation and client success.',
      image: 'https://source.unsplash.com/random/600x600/?professional,woman'
    },
    {
      id: 2,
      name: 'Alex Rodriguez',
      position: 'PPC Director',
      bio: 'Alex specializes in creating and optimizing high-performance paid search and social campaigns that drive measurable results.',
      image: 'https://source.unsplash.com/random/600x600/?professional,man'
    },
    {
      id: 3,
      name: 'Sophia Chen',
      position: 'E-commerce Strategist',
      bio: 'Sophia helps e-commerce businesses scale their revenue through comprehensive digital marketing strategies and optimizations.',
      image: 'https://source.unsplash.com/random/600x600/?professional,asian'
    },
    {
      id: 4,
      name: 'Marcus Johnson',
      position: 'Social Media Director',
      bio: 'Marcus brings creativity and data-driven approaches to social media marketing, helping brands build engaged communities.',
      image: 'https://source.unsplash.com/random/600x600/?professional,black'
    },
    {
      id: 5,
      name: 'Emma Williams',
      position: 'SEO Specialist',
      bio: 'Emma develops comprehensive SEO strategies that improve organic visibility and drive qualified traffic for our clients.',
      image: 'https://source.unsplash.com/random/600x600/?professional,woman,blonde'
    },
    {
      id: 6,
      name: 'David Miller',
      position: 'Analytics Manager',
      bio: 'David transforms complex data into actionable insights, helping our clients understand the impact of their marketing efforts.',
      image: 'https://source.unsplash.com/random/600x600/?professional,man,glasses'
    }
  ];
  
  return (
    <>
      <Helmet>
        <title>About Leadwisee | Performance Marketing Agency</title>
        <meta name="description" content="Learn about Leadwisee, a performance marketing agency dedicated to driving measurable results for businesses through data-driven digital marketing strategies." />
      </Helmet>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <AboutHero>
          <SectionHeading
            subtitle="Our Story"
            title="About Leadwisee"
            alignment="center"
          />
          <p style={{ maxWidth: '700px', margin: '0 auto' }}>
            We're a team of digital marketing experts passionate about helping businesses grow through data-driven strategies and creative solutions.
          </p>
        </AboutHero>
        
        <AboutContainer>
          <AboutSection>
            <StoryContainer>
              <StoryContent>
                <h2>Our Journey</h2>
                <p>
                  Founded in 2015, Leadwisee began with a simple mission: to bring transparency, accountability, and measurable results to digital marketing. Our founder, Jane Cooper, recognized that businesses were increasingly frustrated with marketing agencies that promised the world but delivered little in terms of tangible results.
                </p>
                <p>
                  What started as a one-person consultancy quickly grew into a full-service performance marketing agency. Today, we're proud to work with clients across industries, helping them navigate the complex digital landscape and achieve their business goals through strategic marketing initiatives.
                </p>
                <p>
                  Our growth has been driven by our unwavering commitment to data-driven strategies, continuous optimization, and a genuine desire to see our clients succeed. We measure our success not by awards or recognition, but by the growth and success of the businesses we partner with.
                </p>
              </StoryContent>
              <StoryImage />
            </StoryContainer>
          </AboutSection>
          
          <AboutSection>
            <SectionHeading
              subtitle="What We Stand For"
              title="Our Core Values"
              alignment="center"
              style={{ marginBottom: '3rem' }}
            />
            
            <ValuesGrid>
              <ValueCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="icon">
                  <FaHandshake />
                </div>
                <h3>Client Partnership</h3>
                <p>
                  We believe in true partnerships with our clients. Your success is our success, and we're invested in your long-term growth beyond campaign metrics.
                </p>
              </ValueCard>
              
              <ValueCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="icon">
                  <FaChartLine />
                </div>
                <h3>Data-Driven Decisions</h3>
                <p>
                  We let data guide our strategies and optimizations, ensuring that every marketing dollar is invested where it will generate the greatest return.
                </p>
              </ValueCard>
              
              <ValueCard
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="icon">
                  <FaLightbulb />
                </div>
                <h3>Continuous Innovation</h3>
                <p>
                  The digital landscape never stops evolving, and neither do we. We're constantly testing new approaches and technologies to keep our clients ahead of the curve.
                </p>
              </ValueCard>
            </ValuesGrid>
          </AboutSection>
          
          <TeamSection>
            <SectionHeading
              subtitle="Meet The Experts"
              title="Our Team"
              alignment="center"
              style={{ marginBottom: '3rem' }}
            />
            
            <TeamGrid>
              {teamMembers.map((member, index) => (
                <TeamMemberCard 
                  key={member.id}
                  image={member.image}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="member-image" />
                  <div className="member-info">
                    <h3>{member.name}</h3>
                    <span className="position">{member.position}</span>
                    <p>{member.bio}</p>
                  </div>
                </TeamMemberCard>
              ))}
            </TeamGrid>
          </TeamSection>
        </AboutContainer>
      </motion.div>
    </>
  );
};

export default About;
