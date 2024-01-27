import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
  Flex,
} from "@chakra-ui/react";
import axios from "axios";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const toast = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsLoading(true); // Set loading state to true while sending email

      await axios.post("/api/contact", {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      });

      toast({
        title: "Form Submitted",
        description: "Your message has been sent successfully!",
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast({
        title: "Error",
        description: "Failed to submit the form. Please try again.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false); // Set loading state to false after email is sent (success or failure)
    }
  };

  return (
    <form
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        padding: "3.2rem 0",
      }}
      onSubmit={handleSubmit}
      method="post"
      encType="text/plain">
      <Flex
        alignSelf="center"
        w={["100%", "100%", "50%"]}
        justifySelf="center"
        align="center"
        justify="center"
        direction="column"
        gap="0.8rem">
        <FormControl mb={4}>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
        </FormControl>

        <FormControl mb={4}>
          <FormLabel>Message</FormLabel>
          <Textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          />
        </FormControl>

        <Button
          type="submit"
          colorScheme="blue"
          isLoading={isLoading} // Add isLoading prop to the Button component
          loadingText="Submitting..." // Optional loading text
          disabled={isLoading} // Disable the button while loading
        >
          Submit
        </Button>
      </Flex>
    </form>
  );
};

export default ContactForm;
