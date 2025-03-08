
import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { FaCheckCircle, FaUsers, FaLightbulb, FaRocket } from "react-icons/fa";

import SectionHeading from "../components/common/SectionHeading";

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem 5rem;
`;

const HeroSection = styled.section`
  padding: 4rem 0;
  text-align: center;
  background-color: ${(props) => props.theme.backgroundAlt};
`;

const AboutSection = styled.section`
  padding: 5rem 0;
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const AboutImage = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  height: 100%;
  min-height: 300px;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AboutContent = styled.div`
  p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
  }
`;

const ValueSection = styled.section`
  padding: 5rem 0;
  background-color: ${(props) => props.theme.backgroundAlt};
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ValueCard = styled(motion.div)`
  background-color: ${(props) => props.theme.background};
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
  
  svg {
    font-size: 2.5rem;
    color: ${(props) => props.theme.primary};
    margin-bottom: 1.5rem;
  }
  
  h3 {
    margin-bottom: 1rem;
  }
  
  p {
    color: ${(props) => props.theme.textLight};
    font-size: 0.9375rem;
  }
`;

const TeamSection = styled.section`
  padding: 5rem 0;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
  
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TeamCard = styled(motion.div)`
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  
  .team-image {
    height: 250px;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  .team-content {
    padding: 1.5rem;
    text-align: center;
  }
  
  h3 {
    margin-bottom: 0.25rem;
  }
  
  .position {
    color: ${(props) => props.theme.primary};
    font-weight: 500;
    margin-bottom: 1rem;
  }
  
  p {
    color: ${(props) => props.theme.textLight};
    margin-bottom: 1.5rem;
    font-size: 0.9375rem;
  }
  
  .social-links {
    display: flex;
    justify-content: center;
    gap: 1rem;
    
    a {
      color: ${(props) => props.theme.textLight};
      transition: color 0.3s ease;
      
      &:hover {
        color: ${(props) => props.theme.primary};
      }
    }
  }
`;

const About = () => {
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // Team member data
  const teamMembers = [
    {
      id: 1,
      name: "Alex Johnson",
      position: "Founder & CEO",
      bio: "Alex has over 15 years of experience in digital marketing, previously leading growth at tech startups.",
      image: "https://source.unsplash.com/random/600x600/?portrait,man,business"
    },
    {
      id: 2,
      name: "Sarah Williams",
      position: "PPC Director",
      bio: "Sarah specializes in creating high-ROI Google and Meta ad campaigns that drive measurable results.",
      image: "https://source.unsplash.com/random/600x600/?portrait,woman,professional"
    },
    {
      id: 3,
      name: "David Chen",
      position: "Social Media Strategist",
      bio: "David crafts engaging social strategies that build brand awareness and drive meaningful engagement.",
      image: "https://source.unsplash.com/random/600x600/?portrait,man,creative"
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      position: "E-commerce Specialist",
      bio: "Emily helps online stores scale through optimized campaigns, CRO, and customer journey optimization.",
      image: "https://source.unsplash.com/random/600x600/?portrait,woman,tech"
    },
    {
      id: 5,
      name: "Michael Taylor",
      position: "Data & Analytics Lead",
      bio: "Michael transforms complex data into actionable insights that drive strategic marketing decisions.",
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
      >
        <HeroSection>
          <AboutContainer>
            <SectionHeading
              subtitle="Our Story"
              title="About Leadwisee"
              alignment="center"
            />
            <p style={{ maxWidth: "800px", margin: "0 auto" }}>
              We're a team of passionate digital marketers dedicated to driving 
              measurable results and helping businesses achieve sustainable growth 
              through data-driven marketing strategies.
            </p>
          </AboutContainer>
        </HeroSection>
        
        <AboutSection>
          <AboutContainer>
            <AboutGrid>
              <AboutImage>
                <img 
                  src="https://source.unsplash.com/random/800x600/?team,marketing" 
                  alt="Leadwisee Team"
                />
              </AboutImage>
              <AboutContent>
                <SectionHeading
                  subtitle="Our Mission"
                  title="Driving Growth Through Performance Marketing"
                />
                <p>
                  Founded in 2018, Leadwisee was born from a vision to transform 
                  how businesses approach digital marketing. We saw too many companies 
                  struggling with marketing efforts that weren't tied to clear, 
                  measurable outcomes.
                </p>
                <p>
                  Our mission is simple: to help businesses achieve sustainable 
                  growth through data-driven marketing strategies that deliver 
                  real, measurable results. We're not just about impressions or 
                  vanity metrics - we're focused on driving qualified leads, 
                  conversions, and revenue for our clients.
                </p>
                <p>
                  As a performance marketing agency, we specialize in creating 
                  campaigns that are optimized for conversion and ROI across paid 
                  search, social media, and e-commerce channels. Our approach combines 
                  strategic thinking, creative execution, and rigorous performance 
                  analysis to ensure every marketing dollar generates maximum return.
                </p>
              </AboutContent>
            </AboutGrid>
          </AboutContainer>
        </AboutSection>
        
        <ValueSection>
          <AboutContainer>
            <SectionHeading
              subtitle="Our Values"
              title="What We Stand For"
              alignment="center"
            />
            <ValuesGrid>
              {values.map((value, index) => (
                <ValueCard
                  key={value.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {value.icon}
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </ValueCard>
              ))}
            </ValuesGrid>
          </AboutContainer>
        </ValueSection>
        
        <TeamSection>
          <AboutContainer>
            <SectionHeading
              subtitle="Our Team"
              title="The People Behind Leadwisee"
              alignment="center"
            />
            <p style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 3rem" }}>
              Meet our team of marketing experts who are passionate about driving 
              results for our clients. With diverse backgrounds and specialized 
              expertise, we collaborate to create winning strategies.
            </p>
            <TeamGrid>
              {teamMembers.map((member, index) => (
                <TeamCard
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="team-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="team-content">
                    <h3>{member.name}</h3>
                    <div className="position">{member.position}</div>
                    <p>{member.bio}</p>
                  </div>
                </TeamCard>
              ))}
            </TeamGrid>
          </AboutContainer>
        </TeamSection>
      </motion.div>
    </>
  );
};

export default About;
