import React, { useState } from "react";
import Slider from "react-slick";
import {
  Box,
  Flex,
  IconButton,
  Text,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import CarouselModal from "./CarouselModal";
import { projectsData, Project } from "@/data";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <IconButton
      aria-label="Previous Project"
      icon={<ChevronLeftIcon />}
      onClick={onClick}
      bgColor="black"
      color="#1cff25"
      borderRadius="50%"
      border="1px solid #1cff25"
      _hover={{ bgColor: "black", color: "#1cff25" }}
      w="80px"
      h="80px"
      mr="2"
      position="absolute"
      left="10%"
      bottom="-25%"
    />
  );
};
const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <IconButton
      aria-label="Next Project"
      icon={<ChevronRightIcon />}
      onClick={onClick}
      bgColor="black"
      color="#1cff25"
      border="1px solid #1cff25"
      borderRadius="50%"
      _hover={{ bgColor: "black", color: "#1cff25" }}
      w="80px"
      h="80px"
      position="absolute"
      left="90%"
      bottom="-25%"
    />
  );
};
const ProjectCarousel: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const numProjectsToShowDesktop = 3;
  const numProjectsToShowTablet = 1;
  const isMobile = useBreakpointValue({ base: true, md: false });
  const numProjectsToShow = isMobile
    ? numProjectsToShowTablet
    : numProjectsToShowDesktop;

  const handleOpenModal = (project: Project, index: number) => {
    setSelectedProject(project);
    setCurrentIndex(index);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const renderHashtags = (hashtags: string[]) => {
    return (
      <Flex
        direction="column"
        gap={2}
        maxH="80px"
        overflowY="hidden" // Hide the overflow by default
        transition="max-height 0.3s ease" // Add a smooth transition effect
        _hover={{
          overflowY: "auto", // Show the overflow when hovering
          maxH: "100%", // Set max-height to 100% when hovering
        }}>
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

  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,

    speed: 500,
    slidesToShow: numProjectsToShow,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (current: number, next: number) => setCurrentIndex(next),
  };
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      direction="column"
      w="90%"
      mx="auto">
      <Box
        p={2}
        maxWidth="100%"
        height="100%"
        mx="auto">
        <Slider {...settings}>
          {projectsData.map((project, index) => (
            <Box
              key={project.id}
              flex={`1 0 ${100 / numProjectsToShow}%`}
              px={4}
              display="flex"
              flexDirection="column"
              alignItems="center"
              cursor="pointer"
              onClick={() => handleOpenModal(project, index)}
              h="100%"
              w="100%"
              position="relative">
              <Text
                fontSize="26px"
                fontWeight="400"
                mb={[4, 4, 6]}>
                {project.name}
              </Text>
              <div
                className="image-container"
                style={{ marginBottom: "12px" }}>
                <Image
                  src={project.imageUrl[0]}
                  alt={project.name}
                  objectFit="fill"
                />
              </div>
              <Flex
                direction="column"
                alignItems="flex-end"
                pt={4}
                h={["120px", "100px", "100px", "150px"]}
                w="100%"
                px={4}
                pb={8}>
                {renderHashtags(project.hashTags)}
              </Flex>
            </Box>
          ))}
        </Slider>
      </Box>
      {selectedProject && (
        <CarouselModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          project={selectedProject}
        />
      )}
    </Flex>
  );
};

export default ProjectCarousel;
