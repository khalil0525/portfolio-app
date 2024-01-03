import React, { useState } from 'react';
import {
  Box,
  Flex,
  IconButton,
  Text,
  Image,
  useBreakpointValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Stack,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import CarouselModal from './CarouselModal';
import { projectsData, Project } from '@/data';
const ProjectCarousel: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const numProjectsToShowDesktop = 3;
  const numProjectsToShowTablet = 1;
  const totalProjects = projectsData.length;
  const isMobile = useBreakpointValue({ base: true, md: false });
  const numProjectsToShow = isMobile
    ? numProjectsToShowTablet
    : numProjectsToShowDesktop;
  const projectCardWidth = isMobile
    ? '100%'
    : `${100 / numProjectsToShowDesktop}%`;

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const chunkHashtags = (hashtags: string[], chunkSize: number) => {
    const chunkedHashtags: string[][] = [];
    for (let i = 0; i < hashtags.length; i += chunkSize) {
      chunkedHashtags.push(hashtags.slice(i, i + chunkSize));
    }
    return chunkedHashtags;
  };

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
    <>
      <Box
        p={2}
        maxWidth="100%"
        mx="auto">
        <Flex
          overflowX="auto"
          position="relative"
          justifyContent="flex-start"
          transition="left 0.3s ease"
          color="#fff"
          className="custom-scrollbar horizontal"
          overflowY="hidden"
          maxWidth="100%"
          height="100%"
          pb={[4, 4, 28, 4]}>
          {projectsData.map((project) => (
            <Box
              key={project.id}
              flex={`1 0 ${projectCardWidth}`}
              px={4}
              display="flex"
              flexDirection="column"
              alignItems="center"
              cursor="pointer"
              onClick={() => handleOpenModal(project)}
              h="70%"
              w="100%">
              <Text
                fontSize="26px"
                fontWeight="400"
                mb={['4px', '4px', 6]}
                ps={['0%', '0%', '0%', '30%']}>
                {project.name}
              </Text>
              <div
                className="image-container"
                style={{ marginBottom: '12px' }}>
                <Image
                  src={project.imageUrl}
                  alt={project.name}
                  objectFit="fill"
                  borderRadius="300px"
                />
              </div>
              <Flex
                direction="row"
                gap={0}
                alignItems="center"
                pt={2}
                h={['120px', '100px', '100px', '200px']}
                w="100%"
                pb={8}>
                {renderHashtags(project.hashTags)}
              </Flex>
            </Box>
          ))}
        </Flex>
      </Box>
      {selectedProject && (
        <CarouselModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          project={selectedProject}
        />
      )}
    </>
  );
};

export default ProjectCarousel;
