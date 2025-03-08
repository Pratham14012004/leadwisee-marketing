import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { FaCheckCircle, FaUserTie, FaChartLine, FaLightbulb, FaBullseye, FaHandshake } from 'react-icons/fa';

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

const VisionMissionSection = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const VisionCard = styled.div`
  background-color: ${props => props.theme.colors.bgAlt};
  border-radius: 12px;
  padding: 3rem 2rem;
  text-align: center;

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    position: relative;
    display: inline-block;

    &:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 50px;
      height: 3px;
      background-color: ${props => props.theme.colors.primary};
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
  }
`;

const StorySection = styled.div`
  margin-bottom: 5rem;
`;

const StoryContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: 768px) {
    grid-template-columns: 2fr 3fr;
  }

  .story-image {
    height: 100%;
    min-height: 300px;
    border-radius: 12px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .story-text {
    p {
      margin-bottom: 1.5rem;
      font-size: 1.1rem;
      line-height: 1.8;
    }

    .highlight {
      font-size: 1.3rem;
      color: ${props => props.theme.colors.primary};
      font-weight: 500;
      font-style: italic;
      margin: 2rem 0;
      padding-left: 1.5rem;
      border-left: 3px solid ${props => props.theme.colors.primary};
    }
  }
`;

const ValuesSection = styled.div`
  margin-bottom: 5rem;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const ValueCard = styled(motion.div)`
  background-color: ${props => props.theme.colors.bgAlt};
  border-radius: 12px;
  padding: 2rem;
  height: 100%;

  .icon {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.theme.colors.primaryLight};
    color: white;
    border-radius: 50%;
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
  }

  h3 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.7;
  }
`;

const TeamSection = styled.div`
  margin-bottom: 5rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const TeamMember = styled(motion.div)`
  background-color: ${props => props.theme.colors.bgAlt};
  border-radius: 12px;
  overflow: hidden;

  .member-image {
    height: 300px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .member-info {
    padding: 1.5rem;
    text-align: center;

    h3 {
      font-size: 1.4rem;
      margin-bottom: 0.5rem;
    }

    .position {
      color: ${props => props.theme.colors.primary};
      font-weight: 500;
      margin-bottom: 1rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.7;
      margin-bottom: 1.5rem;
    }

    .social-links {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }
  }
`;

const MilestonesSection = styled.div`
  margin-bottom: 5rem;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background-color: ${props => props.theme.colors.primaryLight};

    @media (max-width: 768px) {
      left: 30px;
    }
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 3rem;

  .timeline-content {
    position: relative;
    width: calc(50% - 40px);
    padding: 1.5rem;
    background-color: ${props => props.theme.colors.bgAlt};
    border-radius: 12px;

    @media (max-width: 768px) {
      width: calc(100% - 60px);
      margin-left: 60px;
    }

    &:before {
      content: '';
      position: absolute;
      top: 20px;
      width: 20px;
      height: 2px;
      background-color: ${props => props.theme.colors.primaryLight};
    }
  }

  &:nth-child(odd) {
    .timeline-content {
      margin-left: auto;

      &:before {
        left: -20px;
      }

      @media (max-width: 768px) {
        margin-left: 60px;

        &:before {
          left: -20px;
        }
      }
    }
  }

  &:nth-child(even) {
    .timeline-content {
      &:before {
        right: -20px;
      }

      @media (max-width: 768px) {
        margin-left: 60px;

        &:before {
          left: -20px;
        }
      }
    }
  }

  .timeline-dot {
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.primary};
    z-index: 1;

    @media (max-width: 768px) {
      left: 30px;
    }
  }

  .timeline-date {
    font-weight: 700;
    color: ${props => props.theme.colors.primary};
    margin-bottom: 0.5rem;
  }

  h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.7;
  }
`;

const ContactSection = styled.div`
  margin-top: 5rem;
`;

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Leadwisee | Performance Marketing Agency</title>
        <meta 
          name="description" 
          content="Learn about Leadwisee, our mission, values, and the team behind our data-driven performance marketing strategies."
        />
      </Helmet>

      <AboutHero>
        <SectionHeading
          subtitle="Our Story"
          title="Passionate About <span>Performance</span>"
          description="At Leadwisee, we're not just marketers - we're growth partners committed to your success through data-driven strategies and measurable results."
          centered
        />
      </AboutHero>

      <AboutContainer>
        <VisionMissionSection>
          <VisionCard>
            <h3>Our Vision</h3>
            <p>To transform how businesses approach digital marketing by making data-driven performance strategies accessible to companies of all sizes, helping them achieve sustainable growth in an increasingly competitive landscape.</p>
          </VisionCard>

          <VisionCard>
            <h3>Our Mission</h3>
            <p>We deliver measurable marketing results through transparent strategies, innovative approaches, and unwavering focus on ROI, building lasting partnerships with clients who value growth over vanity metrics.</p>
          </VisionCard>
        </VisionMissionSection>

        <StorySection>
          <SectionHeading
            subtitle="Our Journey"
            title="The Leadwisee <span>Story</span>"
            description="From humble beginnings to a leading performance marketing agency"
          />

          <StoryContent>
            <div className="story-image">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Leadwisee team" />
            </div>

            <div className="story-text">
              <p>Leadwisee was founded in 2019 by a team of digital marketing professionals who shared a frustration with the industry's focus on vanity metrics over actual business results. Having worked at traditional agencies that prioritized billable hours and activity reports over genuine client outcomes, our founders set out to create a different kind of agency.</p>

              <p>We began with a simple premise: marketing should be measurable, accountable, and directly tied to business growth. Starting with just three clients and a small team working remotely, we focused exclusively on performance metrics – cost per acquisition, return on ad spend, and revenue growth.</p>

              <div className="highlight">
                "We built Leadwisee on the principle that if our clients don't grow, we don't deserve to grow either. This accountability has been the foundation of our success."
              </div>

              <p>As our clients began seeing unprecedented results, word spread quickly. What started as a specialized PPC management service has evolved into a comprehensive performance marketing agency serving clients across multiple industries and channels. Today, Leadwisee employs a team of specialists across paid media, content, SEO, analytics, and creative services – all united by our founding commitment to measurable results.</p>

              <p>Despite our growth, we've maintained our focus on data-driven strategies and transparent client relationships. We've intentionally limited our client roster to ensure we can provide the hands-on attention that drives exceptional outcomes, and we continue to evolve our approaches as digital platforms and consumer behaviors change.</p>
            </div>
          </StoryContent>
        </StorySection>

        <ValuesSection>
          <SectionHeading
            subtitle="What Drives Us"
            title="Our Core <span>Values</span>"
            description="The principles that guide our work and relationships"
            centered
          />

          <ValuesGrid>
            <ValueCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="icon">
                <FaChartLine />
              </div>
              <h3>Results First</h3>
              <p>We measure our success through your growth metrics, not our activities. Every strategy we implement is designed with specific, measurable outcomes in mind.</p>
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
              <p>Digital marketing never stands still, and neither do we. We constantly test new approaches, platforms, and technologies to stay ahead of industry trends.</p>
            </ValueCard>

            <ValueCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="icon">
                <FaHandshake />
              </div>
              <h3>Transparent Partnership</h3>
              <p>We believe in complete transparency in our methods, reporting, and communication. Our clients always know exactly what we're doing and why.</p>
            </ValueCard>

            <ValueCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="icon">
                <FaCheckCircle />
              </div>
              <h3>Quality Over Quantity</h3>
              <p>We intentionally limit our client roster to ensure every account receives the strategic attention and expertise it deserves to thrive.</p>
            </ValueCard>

            <ValueCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="icon">
                <FaBullseye />
              </div>
              <h3>Industry Specialization</h3>
              <p>We've developed deep expertise in specific industries, allowing us to understand the unique challenges and opportunities in your market.</p>
            </ValueCard>

            <ValueCard
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="icon">
                <FaUserTie />
              </div>
              <h3>Ongoing Education</h3>
              <p>We invest heavily in our team's professional development, ensuring we're always equipped with the latest skills and knowledge in the rapidly evolving digital landscape.</p>
            </ValueCard>
          </ValuesGrid>
        </ValuesSection>

        <TeamSection>
          <SectionHeading
            subtitle="The Experts"
            title="Meet Our <span>Team</span>"
            description="The talented professionals behind our client success stories"
            centered
          />

          <TeamGrid>
            <TeamMember
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80" alt="Michael Roberts" />
              </div>
              <div className="member-info">
                <h3>Michael Roberts</h3>
                <div className="position">Founder & CEO</div>
                <p>With over 15 years in digital marketing, Michael founded Leadwisee to challenge the status quo of agency service models and put measurable results at the center of client relationships.</p>
              </div>
            </TeamMember>

            <TeamMember
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80" alt="Sarah Johnson" />
              </div>
              <div className="member-info">
                <h3>Sarah Johnson</h3>
                <div className="position">Director of Strategy</div>
                <p>Sarah combines analytical thinking with creative problem-solving to develop innovative marketing strategies that consistently exceed client performance goals.</p>
              </div>
            </TeamMember>

            <TeamMember
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80" alt="David Chen" />
              </div>
              <div className="member-info">
                <h3>David Chen</h3>
                <div className="position">Head of Paid Media</div>
                <p>A certified expert across all major ad platforms, David leads our paid media team with a focus on efficient budget allocation and continuous performance optimization.</p>
              </div>
            </TeamMember>

            <TeamMember
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2576&q=80" alt="Emily Rodriguez" />
              </div>
              <div className="member-info">
                <h3>Emily Rodriguez</h3>
                <div className="position">SEO Director</div>
                <p>Emily's deep technical expertise and content strategy skills help our clients achieve sustainable organic growth in highly competitive markets.</p>
              </div>
            </TeamMember>

            <TeamMember
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2574&q=80" alt="Jason Williams" />
              </div>
              <div className="member-info">
                <h3>Jason Williams</h3>
                <div className="position">Analytics Lead</div>
                <p>Jason transforms complex data into actionable insights, helping our team and clients make informed decisions based on performance metrics that matter.</p>
              </div>
            </TeamMember>

            <TeamMember
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2161&q=80" alt="Rebecca Kim" />
              </div>
              <div className="member-info">
                <h3>Rebecca Kim</h3>
                <div className="position">Client Success Manager</div>
                <p>Rebecca ensures seamless communication and strategy alignment between our clients and internal teams, driving successful long-term partnerships.</p>
              </div>
            </TeamMember>
          </TeamGrid>
        </TeamSection>

        <MilestonesSection>
          <SectionHeading
            subtitle="Our Journey"
            title="Key <span>Milestones</span>"
            description="The significant moments that have shaped our company"
            centered
          />

          <Timeline>
            <TimelineItem
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">2019</div>
                <h3>Leadwisee Founded</h3>
                <p>Established with a mission to prioritize measurable results over activities, starting with three founding clients.</p>
              </div>
            </TimelineItem>

            <TimelineItem
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">2020</div>
                <h3>Remote-First Culture</h3>
                <p>Embraced a fully remote working model, allowing us to attract top talent regardless of location while maintaining operational excellence during global challenges.</p>
              </div>
            </TimelineItem>

            <TimelineItem
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">2021</div>
                <h3>Industry Specialization</h3>
                <p>Developed specialized teams focused on key industries including SaaS, E-commerce, and Real Estate, allowing for deeper expertise and better results.</p>
              </div>
            </TimelineItem>

            <TimelineItem
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">2022</div>
                <h3>Expanded Service Offerings</h3>
                <p>Launched comprehensive analytics and conversion rate optimization services to enhance our performance marketing capabilities.</p>
              </div>
            </TimelineItem>

            <TimelineItem
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <div className="timeline-date">2023</div>
                <h3>Growth & Recognition</h3>
                <p>Achieved significant client growth while maintaining a 95% retention rate, and received industry recognition for our performance-driven approach.</p>
              </div>
            </TimelineItem>
          </Timeline>
        </MilestonesSection>

        <ContactSection>
          <SectionHeading
            subtitle="Get In Touch"
            title="Ready to <span>Work Together</span>?"
            description="Contact us to discuss how we can help you achieve your marketing objectives"
            centered
          />
          <ContactForm />
        </ContactSection>
      </AboutContainer>
    </>
  );
};

export default About;