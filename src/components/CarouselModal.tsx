import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Flex,
  Text,
  Image,
  Stack,
  Link,
} from '@chakra-ui/react';

interface Project {
  name: string;
  description: string;
  imageUrl: string;
  hashTags: string[];
  githubUrl: string | null;
  appUrl: string | null;
}

interface CarouselModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
}

const CarouselModal: React.FC<CarouselModalProps> = ({
  isOpen,
  onClose,
  project,
}) => {
  const renderHashtags = (hashtags: string[], isModal = false) => {
    return (
      <Flex
        direction={isModal ? 'row' : 'column'}
        gap={2}
        sx={{ scrollbarWidth: 'thin', scrollbarColor: '#63b3ed transparent' }}
        wrap={'nowrap'}
        maxH={isModal ? 'auto' : '80px'}>
        {hashtags.map((hashtag) => (
          <Text
            key={hashtag}
            fontSize="16px"
            fontWeight="300">
            #{hashtag}
          </Text>
        ))}
      </Flex>
    );
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="xl">
      <ModalOverlay />
      <ModalContent
        bgColor="#fff"
        color="#000"
        maxW={['100%', '60%', '60%', '60%']}
        maxH={['100%', '60%', '60%', '70%']}
        overflowY="auto">
        <ModalHeader>
          <Text
            fontSize="32px"
            fontWeight="bold"
            color="#000">
            {project.name}
          </Text>
        </ModalHeader>
        <ModalCloseButton color="#fff" />
        <ModalBody
          w="100%"
          h={['50vh', '50vh', '50vh', '70%']}
          overflowY="auto">
          <Flex
            direction="column"
            w="100%"
            align="center"
            justify="center">
            <Image
              src={project.imageUrl}
              alt={project.name}
              h="100%"
              w="60%"
              mt={4}
              mb={8}
            />
            <Flex
              direction="row"
              w="100%"
              justify="center"
              gap={10}>
              <Flex
                direction="row"
                gap="4px">
                <Image
                  src="img/logo/github-mark.png"
                  w="24px"
                  h="24px"
                  alt="github"
                />
                {project.githubUrl === 'Private' ||
                project.githubUrl === null ? (
                  <Text>Private</Text>
                ) : (
                  <Link href={project.githubUrl as string}>Github</Link>
                )}
              </Flex>
              <Flex
                direction="row"
                gap="4px">
                <Image
                  src="img/logo/www.png"
                  w="24px"
                  h="24px"
                  alt="www"
                />
                {project.appUrl === 'Private' ? (
                  <Text>Private</Text>
                ) : (
                  <Link href={project.appUrl as string}>App</Link>
                )}
              </Flex>
            </Flex>
            <Stack
              spacing={6}
              fontSize="22px"
              fontWeight="300"
              maxW={['100%', '100%', '100%', '100%']}
              w={['100%', '100%', '100%', '100%']}
              justifySelf="end"
              overflowY="auto"
              padding="36px">
              {project.description.split('\n').map((line, index) => (
                <Text
                  fontSize="14px"
                  fontWeight="400"
                  color="#000"
                  key={index + line}>
                  {line}
                </Text>
              ))}
            </Stack>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Flex
            direction="row"
            gap={2}
            align="center"
            justify="center">
            {renderHashtags(project.hashTags, true)}
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CarouselModal;
