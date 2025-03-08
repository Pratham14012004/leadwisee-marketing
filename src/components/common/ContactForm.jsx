import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { motion } from "framer-motion";
import Button from "./Button";

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
  color: ${(props) => props.theme.text};
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid
    ${(props) => (props.error ? props.theme.danger : props.theme.border)};
  border-radius: 0.25rem;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  &:focus {
    outline: none;
    border-color: ${(props) =>
      props.error ? props.theme.danger : props.theme.primary};
  }
`;

const Textarea = styled.textarea`
  padding: 0.75rem 1rem;
  border: 1px solid
    ${(props) => (props.error ? props.theme.danger : props.theme.border)};
  border-radius: 0.25rem;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  min-height: 150px;
  resize: vertical;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  &:focus {
    outline: none;
    border-color: ${(props) =>
      props.error ? props.theme.danger : props.theme.primary};
  }
`;

const Select = styled.select`
  padding: 0.75rem 1rem;
  border: 1px solid
    ${(props) => (props.error ? props.theme.danger : props.theme.border)};
  border-radius: 0.25rem;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};

  &:focus {
    outline: none;
    border-color: ${(props) =>
      props.error ? props.theme.danger : props.theme.primary};
  }
`;

const ErrorMessage = styled.p`
  color: ${(props) => props.theme.danger};
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const SuccessMessage = styled(motion.div)`
  background-color: ${(props) => props.theme.success};
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
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.log("Form data:", data);

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
      console.error("Error submitting form:", error);
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
    { value: "other", label: "Other" },
  ];

  return (
    <FormContainer {...rest}>
      {heading && <h3 style={{ marginBottom: "1.5rem" }}>{heading}</h3>}

      {isSuccess && (
        <SuccessMessage
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          Thank you! Your message has been sent successfully. We'll be in touch
          shortly.
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
              {...register("firstName", { required: "First name is required" })}
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
              {...register("lastName", { required: "Last name is required" })}
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
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
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
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9+-\s()]{7,20}$/,
                  message: "Invalid phone number",
                },
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
            {...register("company", { required: "Company name is required" })}
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
              {...register("service", { required: "Please select a service" })}
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
            {...register("message", {
              required: isContactPage ? "Message is required" : false,
            })}
            placeholder={
              isContactPage
                ? "How can we help you?"
                : "Tell us about your business and marketing goals (optional)"
            }
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
