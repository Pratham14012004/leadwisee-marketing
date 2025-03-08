
import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

// Styled Components
const PageWrapper = styled.div`
  width: 100%;
  overflow-x: hidden;
`;

const HeroSection = styled.section`
  background: linear-gradient(135deg, #0a1930 0%, #273c75 100%);
  padding: 120px 0 80px;
  text-align: center;
  color: #fff;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const MainTitle = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 20px;
  font-weight: 700;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 30px;
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Section = styled.section`
  padding: 80px 0;
  background-color: ${props => props.bgColor || '#fff'};
`;

const SectionHeading = styled.h2`
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 50px;
  font-weight: 600;
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const ContentBlock = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  
  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 20px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.div)`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: #273c75;
  }
  
  p {
    font-size: 1rem;
    color: #555;
  }
`;

const FaqItem = styled.div`
  margin-bottom: 20px;
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
  
  h3 {
    font-size: 1.3rem;
    margin-bottom: 10px;
    font-weight: 600;
    color: #273c75;
  }
  
  p {
    font-size: 1rem;
    color: #555;
  }
`;

const TestimonialCard = styled(motion.div)`
  background: #f9f9f9;
  border-radius: 8px;
  padding: 30px;
  margin-bottom: 30px;
  
  p {
    font-style: italic;
    margin-bottom: 20px;
  }
  
  h4 {
    font-weight: 600;
    margin-bottom: 5px;
  }
  
  span {
    color: #666;
    font-size: 0.9rem;
  }
`;

const CaseStudyCard = styled.div`
  background: #f5f9ff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  
  .content {
    padding: 25px;
  }
  
  h3 {
    font-size: 1.4rem;
    margin-bottom: 15px;
    color: #273c75;
  }
  
  p {
    margin-bottom: 20px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
    
    li {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      
      &:before {
        content: "✓";
        color: #4caf50;
        margin-right: 10px;
        font-weight: bold;
      }
    }
  }
`;

const ResultItem = styled.div`
  background: #273c75;
  color: white;
  border-radius: 6px;
  padding: 15px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  
  span {
    font-weight: bold;
    font-size: 1.2rem;
    margin-right: 10px;
  }
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  background: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
  }
  
  input, textarea, select {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
    
    &:focus {
      outline: none;
      border-color: #273c75;
    }
  }
  
  textarea {
    min-height: 120px;
  }
  
  .error {
    color: #e74c3c;
    font-size: 0.9rem;
    margin-top: 5px;
  }
`;

const Button = styled.button`
  background: #273c75;
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #1e2d5f;
  }
  
  &:disabled {
    background: #aaa;
    cursor: not-allowed;
  }
`;

const CallToAction = styled.div`
  text-align: center;
  margin-top: 40px;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background: #273c75;
  color: white;
  text-decoration: none;
  padding: 15px 30px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: #1e2d5f;
    transform: translateY(-3px);
  }
`;

// Animation Variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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

const IndustryTemplate = ({ 
  industry,
  title,
  subtitle,
  description,
  services,
  benefits,
  caseStudies,
  testimonials,
  faqs,
  keywords
}) => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();
  
  const onSubmit = async (data) => {
    // This would be connected to your actual form submission logic
    console.log(data);
    // Simulating submission delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert('Form submitted successfully! We will contact you soon.');
  };

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": `Leadwisee - ${title}`,
    "description": description,
    "url": `https://www.leadwisee.com/industries/${industry}`,
    "sameAs": [
      "https://www.facebook.com/leadwisee",
      "https://www.linkedin.com/company/leadwisee",
      "https://twitter.com/leadwisee"
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Marketing St",
      "addressLocality": "Digital City",
      "addressRegion": "CA",
      "postalCode": "90210",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 34.0522,
      "longitude": -118.2437
    },
    "telephone": "+1-800-555-LEAD",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    }
  };

  return (
    <PageWrapper>
      <Helmet>
        <title>{title} | Leadwisee Performance Marketing Agency</title>
        <meta name="description" content={description.substring(0, 155)} />
        <meta name="keywords" content={keywords.join(', ')} />
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>
      </Helmet>

      <HeroSection>
        <HeroContent>
          <MainTitle>{title}</MainTitle>
          <Subtitle>{subtitle}</Subtitle>
        </HeroContent>
      </HeroSection>

      <Section>
        <ContentBlock
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p dangerouslySetInnerHTML={{ __html: description }} />
        </ContentBlock>
      </Section>

      <Section bgColor="#f8f9fa">
        <SectionHeading>Our {industry} Marketing Services</SectionHeading>
        <ContentBlock>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <Grid>
              {services.map((service, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <Card>
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                  </Card>
                </motion.div>
              ))}
            </Grid>
          </motion.div>
        </ContentBlock>
      </Section>

      <Section>
        <SectionHeading>Why Choose Leadwisee for {industry} Marketing?</SectionHeading>
        <ContentBlock>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <Grid>
              {benefits.map((benefit, index) => (
                <motion.div key={index} variants={fadeIn}>
                  <Card>
                    <h3>✅ {benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </Card>
                </motion.div>
              ))}
            </Grid>
          </motion.div>
        </ContentBlock>
      </Section>

      <Section bgColor="#f8f9fa">
        <SectionHeading>Our Proven Results</SectionHeading>
        <ContentBlock>
          <Grid>
            {caseStudies.map((caseStudy, index) => (
              <CaseStudyCard key={index}>
                <div className="content">
                  <h3>{caseStudy.title}</h3>
                  <p>{caseStudy.description}</p>
                  <ul>
                    {caseStudy.results.map((result, idx) => (
                      <li key={idx}>{result}</li>
                    ))}
                  </ul>
                </div>
              </CaseStudyCard>
            ))}
          </Grid>
        </ContentBlock>
      </Section>

      <Section>
        <SectionHeading>What Our Clients Say</SectionHeading>
        <ContentBlock>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <p>"{testimonial.quote}"</p>
              <h4>{testimonial.name}</h4>
              <span>{testimonial.position}, {testimonial.company}</span>
            </TestimonialCard>
          ))}
        </ContentBlock>
      </Section>

      <Section bgColor="#f8f9fa">
        <SectionHeading>Frequently Asked Questions</SectionHeading>
        <ContentBlock>
          {faqs.map((faq, index) => (
            <FaqItem key={index}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </FaqItem>
          ))}
        </ContentBlock>
      </Section>

      <Section>
        <SectionHeading>Ready to Grow Your {industry} Business?</SectionHeading>
        <ContentBlock>
          <ContactForm onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <p className="error">{errors.name.message}</p>}
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                {...register("phone", { required: "Phone number is required" })}
              />
              {errors.phone && <p className="error">{errors.phone.message}</p>}
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="company">Company Name</label>
              <input
                type="text"
                id="company"
                {...register("company", { required: "Company name is required" })}
              />
              {errors.company && <p className="error">{errors.company.message}</p>}
            </FormGroup>
            
            <FormGroup>
              <label htmlFor="message">How can we help?</label>
              <textarea
                id="message"
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && <p className="error">{errors.message.message}</p>}
            </FormGroup>
            
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Get Your Free Strategy Call"}
            </Button>
          </ContactForm>
          
          <CallToAction>
            <CTAButton to="/contact">Schedule a Strategy Call</CTAButton>
          </CallToAction>
        </ContentBlock>
      </Section>
    </PageWrapper>
  );
};

export default IndustryTemplate;
