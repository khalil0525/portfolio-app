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
import CarouselModal from './CarouselModal';
import { projectsData, Project } from '@/data';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectCarousel: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideLeft, setSlideLeft] = useState(false);

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

  const handleOpenModal = (project: Project, index: number) => {
    setSelectedProject(project);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const handleNext = () => {
    setSlideLeft(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalProjects);
  };

  const handlePrev = () => {
    setSlideLeft(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + totalProjects) % totalProjects
    );
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
        sx={{ scrollbarWidth: 'thin', scrollbarColor: '#1cff25 transparent' }}
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

  const visibleProjects = projectsData.slice(
    currentIndex,
    currentIndex + numProjectsToShow
  );

  const slideTransition = {
    initial: {
      transform: slideLeft
        ? `translateX(-${100 / numProjectsToShow}%)`
        : 'none',
    },
    animate: {
      transform: slideLeft
        ? `translateX(-${100 / numProjectsToShow}%)`
        : 'none',
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  return (
    <>
      <Box
        p={2}
        maxWidth="100%"
        height="100%"
        mx="auto">
        <Flex
          overflowX="hidden"
          position="relative"
          justifyContent="space-between"
          color="#fff"
          maxWidth="100%"
          height="100%"
          pb={[4, 4, 28, 4]}>
          <AnimatePresence initial={false}>
            <motion.div
              key={currentIndex}
              style={{
                display: 'flex',
                width: `${100 * totalProjects}%`,
                ...slideTransition,
              }}>
              {visibleProjects.map((project, index) => (
                <Box
                  key={project.id}
                  flex={`1 0 ${projectCardWidth}`}
                  px={4}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  cursor="pointer"
                  onClick={() => handleOpenModal(project, currentIndex + index)}
                  h="50%"
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
            </motion.div>
          </AnimatePresence>
        </Flex>
      </Box>
      <Flex
        alignItems="center"
        justifyContent="space-evenly"
        mt="2"
        w="100%">
        <IconButton
          aria-label="Previous Project"
          icon={<ChevronLeftIcon />}
          onClick={handlePrev}
          mr="4"
          bgColor="black"
          color="#1cff25"
          borderRadius="50%"
          border="1px solid #1cff25"
          _hover={{
            bgColor: 'black',
            color: '#1cff25',
          }}
          w="80px"
          h="80px"
        />
        <IconButton
          aria-label="Next Project"
          icon={<ChevronRightIcon />}
          onClick={handleNext}
          bgColor="black"
          color="#1cff25"
          border="1px solid #1cff25"
          borderRadius="50%"
          _hover={{ bgColor: 'black', color: '#1cff25' }}
          w="80px"
          h="80px"
        />
      </Flex>
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
