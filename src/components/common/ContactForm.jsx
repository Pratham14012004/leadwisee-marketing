
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Button from './Button';

const FormContainer = styled(motion.div)`
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.9375rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.text};
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid ${props => props.error ? props.theme.danger : props.theme.border};
  border-radius: 0.25rem;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  
  &:focus {
    outline: none;
    border-color: ${props => props.error ? props.theme.danger : props.theme.primary};
  }
`;

const Textarea = styled.textarea`
  padding: 0.75rem 1rem;
  border: 1px solid ${props => props.error ? props.theme.danger : props.theme.border};
  border-radius: 0.25rem;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  min-height: 150px;
  resize: vertical;
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  
  &:focus {
    outline: none;
    border-color: ${props => props.error ? props.theme.danger : props.theme.primary};
  }
`;

const Select = styled.select`
  padding: 0.75rem 1rem;
  border: 1px solid ${props => props.error ? props.theme.danger : props.theme.border};
  border-radius: 0.25rem;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  background-color: ${props => props.theme.body};
  color: ${props => props.theme.text};
  
  &:focus {
    outline: none;
    border-color: ${props => props.error ? props.theme.danger : props.theme.primary};
  }
`;

const ErrorMessage = styled.p`
  color: ${props => props.theme.danger};
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const SuccessMessage = styled(motion.div)`
  background-color: ${props => props.theme.success};
  color: white;
  padding: 1rem;
  border-radius: 0.25rem;
  margin-bottom: 1.5rem;
  font-weight: 500;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

/**
 * ContactForm component for contact and lead generation forms
 * 
 * @param {Object} props - Component props
 * @param {string} props.heading - Form heading
 * @param {boolean} props.showServices - Whether to show services dropdown
 * @param {boolean} props.isContactPage - Whether this is the main contact page form
 * @param {Function} props.onSubmitSuccess - Callback after successful submission
 */
const ContactForm = ({ 
  heading = "Request a Free Strategy Call",
  showServices = true,
  isContactPage = false,
  onSubmitSuccess,
  ...rest 
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset
  } = useForm();
  
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form data:', data);
      
      // Success actions
      setIsSuccess(true);
      reset();
      
      // Call success callback if provided
      if (onSubmitSuccess) {
        onSubmitSuccess();
      }
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Services options for the dropdown
  const serviceOptions = [
    { value: "", label: "Select a service" },
    { value: "ppc-marketing", label: "PPC Marketing" },
    { value: "social-media-marketing", label: "Social Media Marketing" },
    { value: "ecommerce-marketing", label: "E-commerce Marketing" },
    { value: "other", label: "Other" }
  ];
  
  return (
    <FormContainer {...rest}>
      {heading && <h3 style={{ marginBottom: '1.5rem' }}>{heading}</h3>}
      
      {isSuccess && (
        <SuccessMessage
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          Thank you! Your message has been sent successfully. We'll be in touch shortly.
        </SuccessMessage>
      )}
      
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow>
          <FormGroup>
            <Label htmlFor="firstName">First Name</Label>
            <Input 
              id="firstName"
              type="text"
              error={errors.firstName}
              {...register('firstName', { required: 'First name is required' })}
            />
            {errors.firstName && (
              <ErrorMessage>{errors.firstName.message}</ErrorMessage>
            )}
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="lastName">Last Name</Label>
            <Input 
              id="lastName"
              type="text"
              error={errors.lastName}
              {...register('lastName', { required: 'Last name is required' })}
            />
            {errors.lastName && (
              <ErrorMessage>{errors.lastName.message}</ErrorMessage>
            )}
          </FormGroup>
        </FormRow>
        
        <FormRow>
          <FormGroup>
            <Label htmlFor="email">Email Address</Label>
            <Input 
              id="email"
              type="email"
              error={errors.email}
              {...register('email', { 
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
            />
            {errors.email && (
              <ErrorMessage>{errors.email.message}</ErrorMessage>
            )}
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="phone">Phone Number</Label>
            <Input 
              id="phone"
              type="tel"
              error={errors.phone}
              {...register('phone', { 
                required: 'Phone number is required',
                pattern: {
                  value: /^[0-9+-\s()]{7,20}$/,
                  message: "Invalid phone number"
                }
              })}
            />
            {errors.phone && (
              <ErrorMessage>{errors.phone.message}</ErrorMessage>
            )}
          </FormGroup>
        </FormRow>
        
        <FormGroup>
          <Label htmlFor="company">Company Name</Label>
          <Input 
            id="company"
            type="text"
            error={errors.company}
            {...register('company', { required: 'Company name is required' })}
          />
          {errors.company && (
            <ErrorMessage>{errors.company.message}</ErrorMessage>
          )}
        </FormGroup>
        
        {showServices && (
          <FormGroup>
            <Label htmlFor="service">Service Interested In</Label>
            <Select 
              id="service"
              error={errors.service}
              {...register('service', { required: 'Please select a service' })}
            >
              {serviceOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Select>
            {errors.service && (
              <ErrorMessage>{errors.service.message}</ErrorMessage>
            )}
          </FormGroup>
        )}
        
        <FormGroup>
          <Label htmlFor="message">Your Message</Label>
          <Textarea 
            id="message"
            error={errors.message}
            {...register('message', { 
              required: isContactPage ? 'Message is required' : false
            })}
            placeholder={isContactPage ? "How can we help you?" : "Tell us about your business and marketing goals (optional)"}
          />
          {errors.message && (
            <ErrorMessage>{errors.message.message}</ErrorMessage>
          )}
        </FormGroup>
        
        <Button 
          type="submit"
          variant="primary"
          size="large"
          fullWidth
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Schedule Strategy Call"}
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const FormContainer = styled.div`
  margin-top: 3rem;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  &.full-width {
    grid-column: 1 / -1;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 8px;
  font-size: 1rem;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
  
  &.error {
    border-color: #e53e3e;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 8px;
  font-size: 1rem;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
  
  &.error {
    border-color: #e53e3e;
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid ${props => props.theme.colors.border};
  border-radius: 8px;
  font-size: 1rem;
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.text};
  resize: vertical;
  min-height: 150px;
  transition: border-color 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
  
  &.error {
    border-color: #e53e3e;
  }
`;

const ErrorMessage = styled.p`
  color: #e53e3e;
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

const SubmitButton = styled.button`
  grid-column: 1 / -1;
  background-color: ${props => props.theme.colors.primary};
  color: white;
  font-weight: 600;
  padding: 0.875rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  
  &:hover {
    background-color: ${props => props.theme.colors.primaryDark};
  }
  
  &:disabled {
    background-color: ${props => props.theme.colors.disabled};
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled(motion.div)`
  background-color: #48bb78;
  color: white;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  margin-top: 2rem;
`;

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = (data) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", data);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <FormContainer>
      {!isSubmitted ? (
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label htmlFor="firstName">First Name</Label>
            <Input 
              id="firstName"
              type="text" 
              className={errors.firstName ? "error" : ""}
              {...register("firstName", { required: "First name is required" })}
            />
            {errors.firstName && <ErrorMessage>{errors.firstName.message}</ErrorMessage>}
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="lastName">Last Name</Label>
            <Input 
              id="lastName"
              type="text"
              className={errors.lastName ? "error" : ""}
              {...register("lastName", { required: "Last name is required" })}
            />
            {errors.lastName && <ErrorMessage>{errors.lastName.message}</ErrorMessage>}
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="email">Email Address</Label>
            <Input 
              id="email"
              type="email"
              className={errors.email ? "error" : ""}
              {...register("email", { 
                required: "Email is required",
                pattern: { 
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
            />
            {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="phone">Phone Number</Label>
            <Input 
              id="phone"
              type="tel"
              {...register("phone")}
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="company">Company Name</Label>
            <Input 
              id="company"
              type="text"
              {...register("company")}
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="service">Service Interest</Label>
            <Select id="service" {...register("service")}>
              <option value="">Select a service</option>
              <option value="ppc">Pay-Per-Click (PPC) Advertising</option>
              <option value="seo">Search Engine Optimization (SEO)</option>
              <option value="social">Social Media Marketing</option>
              <option value="content">Content Marketing</option>
              <option value="email">Email Marketing</option>
              <option value="cro">Conversion Rate Optimization</option>
              <option value="other">Other</option>
            </Select>
          </FormGroup>
          
          <FormGroup className="full-width">
            <Label htmlFor="message">How Can We Help?</Label>
            <Textarea 
              id="message"
              className={errors.message ? "error" : ""}
              {...register("message", { required: "Please tell us how we can help" })}
            />
            {errors.message && <ErrorMessage>{errors.message.message}</ErrorMessage>}
          </FormGroup>
          
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </SubmitButton>
        </Form>
      ) : (
        <SuccessMessage
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Thank you for contacting us! We'll get back to you as soon as possible.
        </SuccessMessage>
      )}
    </FormContainer>
  );
};

export default ContactForm;
import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaPaperPlane, FaCheck } from "react-icons/fa";

import Button from "./Button";

const FormContainer = styled.div`
  margin-top: 3rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  &.full-width {
    grid-column: 1 / -1;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(0, 151, 251, 0.2);
  }
`;

const Textarea = styled.textarea`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(0, 151, 251, 0.2);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(0, 151, 251, 0.2);
  }
`;

const SubmitContainer = styled.div`
  grid-column: 1 / -1;
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

const SuccessMessage = styled(motion.div)`
  text-align: center;
  margin-top: 2rem;
  padding: 2rem;
  background-color: rgba(46, 204, 113, 0.1);
  border-radius: 8px;
  
  .icon {
    font-size: 3rem;
    color: #2ecc71;
    margin-bottom: 1rem;
  }
  
  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }
  
  p {
    margin-bottom: 1.5rem;
  }
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        message: "",
      });
    }, 1500);
  };

  if (isSubmitted) {
    return (
      <SuccessMessage
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="icon">
          <FaCheck />
        </div>
        <h3>Thank You!</h3>
        <p>
          Your message has been received. One of our marketing experts will contact you within 24 hours.
        </p>
        <Button 
          variant="outline" 
          onClick={() => setIsSubmitted(false)}
        >
          Send Another Message
        </Button>
      </SuccessMessage>
    );
  }

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Your Name *</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="company">Company Name</Label>
          <Input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="service">Service Interested In</Label>
          <Select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
          >
            <option value="">Select a Service</option>
            <option value="PPC Management">PPC Management</option>
            <option value="SEO">SEO</option>
            <option value="Social Media Marketing">Social Media Marketing</option>
            <option value="Email Marketing">Email Marketing</option>
            <option value="Content Marketing">Content Marketing</option>
            <option value="Conversion Rate Optimization">Conversion Rate Optimization</option>
            <option value="Other">Other</option>
          </Select>
        </FormGroup>

        <FormGroup>
          <Label htmlFor="budget">Monthly Budget</Label>
          <Select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
          >
            <option value="">Select Your Budget</option>
            <option value="$2,000 - $5,000">$2,000 - $5,000</option>
            <option value="$5,000 - $10,000">$5,000 - $10,000</option>
            <option value="$10,000 - $25,000">$10,000 - $25,000</option>
            <option value="$25,000+">$25,000+</option>
          </Select>
        </FormGroup>

        <FormGroup className="full-width">
          <Label htmlFor="message">Your Message *</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <SubmitContainer>
          <Button
            type="submit"
            variant="primary"
            size="large"
            disabled={isSubmitting}
            rightIcon={<FaPaperPlane />}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </SubmitContainer>
      </Form>
    </FormContainer>
  );
};

export default ContactForm;
