import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,
  Flex,
} from '@chakra-ui/react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    toast({
      title: 'Form Submitted',
      description: 'Your message has been sent successfully!',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });

    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <Flex
      alignSelf="center"
      w={['100%', '100%', '50%']}
      justifySelf="center"
      align="center"
      justify="center"
      direction="column">
      <form
        style={{ width: '100%' }}
        action="mailto:collinskhalil@hotmail.com"
        method="post"
        encType="text/plain">
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
          colorScheme="blue">
          Submit
        </Button>
      </form>
    </Flex>
  );
};

export default ContactForm;
