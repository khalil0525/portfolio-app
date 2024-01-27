import React, { useState } from "react";
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
  IconButton,
  Link,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";
import Slider from "react-slick";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
interface Project {
  name: string;
  description: string;
  imageUrl: string[];
  hashTags: string[];
  githubUrl: string | null;
  appUrl: string | null;
}

interface CarouselModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project;
}
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
      w="40px"
      h="40px"
      mr="2"
      position="absolute"
      left="0"
      zIndex="9999"
      bottom="50%"
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
      w="40px"
      h="40px"
      position="absolute"
      right="0"
      bottom="50%"
    />
  );
};
const CarouselModal: React.FC<CarouselModalProps> = ({
  isOpen,
  onClose,
  project,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const numProjectsToShowDesktop = 3;
  const numProjectsToShowTablet = 1;
  const isMobile = useBreakpointValue({ base: true, md: false });
  const numProjectsToShow = isMobile
    ? numProjectsToShowTablet
    : numProjectsToShowDesktop;
  const renderHashtags = (hashtags: string[], isModal = false) => {
    return (
      <Flex
        direction={isModal ? "row" : "column"}
        gap={2}
        sx={{ scrollbarWidth: "thin", scrollbarColor: "#63b3ed transparent" }}
        wrap={"nowrap"}
        maxH={isModal ? "auto" : "80px"}>
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
    dots: false,
    infinite: true,
    centerMode: true,
    speed: 500,
    slidesToShow: numProjectsToShow,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    beforeChange: (current: number, next: number) => setCurrentIndex(next),
    adaptiveHeight: true,
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="2xl"
      returnFocusOnClose={true}>
      <ModalOverlay />
      <ModalContent
        bgColor="#2d2d2d"
        color="#fff"
        maxW={["100%", "80%", "80%", "80%"]}
        maxH={["100%", "60%", "100%", "100%"]}
        overflowY="auto">
        <ModalHeader>
          <Text
            fontSize="32px"
            fontWeight="bold"
            color="#fff">
            {project.name}
          </Text>
        </ModalHeader>
        <ModalCloseButton color="#fff" />
        <ModalBody
          w="100%"
          h={["50vh", "50vh", "50vh", "50vh"]}
          overflowY="auto"
          overflowX="hidden">
          <Flex
            direction="column"
            w="100%"
            maxH="70vh"
            align="center"
            justify="center">
            <Flex
              w="100%"
              align="center"
              justify="center"
              mb="1.6rem">
              {/* <Slider {...settings}>
                {project.imageUrl.map((imgUrl, index) => (
                  <Box
                    key={imgUrl + index}
                    flex={`1 0 ${100 / numProjectsToShow}%`}
                    px={4}
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    cursor="pointer"
                    maxH="300px"
                    position="relative"
                    zIndex="9999">
                    {" "}
                    <Image
                      src={imgUrl}
                      alt={""}
                      sx={{ width: "100%", height: "100%" }}
                    />
                  </Box>
                ))}
              </Slider> */}

              <Box
                maxH="300px"
                maxW="500px">
                {" "}
                <Image
                  src={project.imageUrl[0]}
                  alt={""}
                  sx={{ width: "100%", height: "100%" }}
                />
              </Box>
            </Flex>
            <Flex
              direction="row"
              w="15%"
              borderRadius="50px"
              p="0.4rem 1.6rem"
              justify="center"
              gap={10}
              bgColor="green"
              mx="auto">
              <Flex
                direction="row"
                gap="4px">
                <Image
                  src="img/logo/github-mark.png"
                  w="24px"
                  h="24px"
                  alt="github"
                />
                {project.githubUrl === "Private" ||
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
                {project.appUrl === "Private" ? (
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
              maxW={["100%", "100%", "100%", "100%"]}
              w={["100%", "100%", "100%", "100%"]}
              justifySelf="end"
              overflowY="auto"
              padding="36px">
              {project.description.split("\n").map((line, index) => (
                <Text
                  fontSize="14px"
                  fontWeight="400"
                  color="#fff"
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
