"use client";

import React, { useEffect, useState } from "react";
import { Image, Text, Stack, Flex, Box, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ThreeCircles } from "react-loader-spinner";
import FiverrBadge from "@/components/FiverrBadge";
export default function Page() {
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 500);

    return () => clearTimeout(loadingTimer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTextVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!isPageLoaded ? (
        <Box
          w="100%"
          h="100vh"
          display="flex"
          alignItems="center"
          justifyContent="center">
          <ThreeCircles
            color="#1CFF25"
            height={80}
            width={80}
          />
        </Box>
      ) : (
        <VStack
          className="container"
          alignItems="center"
          width={["100%"]}
          minH="200vh"
          overflowX="hidden"
          overflowY="auto"
          p={4}>
          <Flex
            direction={["column", "column", "column", "row"]}
            w="100%"
            height="100vh"
            justify={["unset", "unset", "unset", "space-evenly"]}
            align="start">
            <Flex
              direction="column"
              p="8px"
              w={["100%", "100%", "100%", "55%"]}
              h="100%"
              mb={["12px", "12px", 0]}
              flexShrink={1}>
              <Image
                src="/img/logo/green-logo-min.png"
                w="100%"
                h={["100%", "80%", "80%"]}
                alt="khalil collins logo"
              />
            </Flex>
            <Stack
              spacing={6}
              fontSize="22px"
              fontWeight="300"
              maxW={["100%", "100%", "100%", "40%"]}
              w={["100%", "100%", "100%"]}
              justifySelf="end"
              overflowY={["auto", "auto", "auto", "auto"]}
              h="100vh"
              className="custom-scrollbar vertical"
              padding="36px">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isTextVisible ? 1 : 0 }}
                transition={{ duration: 2.5 }}>
                <Text>
                  Hey there, I&apos;m Khalil Collins, and I&apos;m thrilled to
                  have you explore my journey in the world of technology and web
                  development. 🌐🎮{" "}
                </Text>
                <Text>
                  I&apos;ve been immersed in the IT realm for several years,
                  honing my skills and gaining valuable experiences along the
                  way. Initially, my passion for computer science led me down
                  the path of game development, eager to create captivating
                  virtual worlds. 🎮 However, fate had a different plan for me,
                  and I stumbled upon web development, where I found my true
                  calling and fell head over heels in love with problem-solving.
                  💻❤️
                </Text>
                <Text>
                  Being a full-stack web developer allows me to combine my
                  creativity with my analytical mindset, crafting innovative
                  solutions that address the specific needs of various
                  industries. 🚀 It&apos;s truly fulfilling to navigate through
                  diverse challenges and provide tailor-made coding solutions
                  that make a tangible impact. 💼🔧
                </Text>
                <Text>
                  Through my portfolio, you&apos;ll get a glimpse into the
                  projects I&apos;ve worked on, the technologies I&apos;ve
                  mastered, and the passion I bring to every endeavor. I&apos;m
                  excited to share this digital space with you and demonstrate
                  my dedication to creating seamless user experiences and
                  scalable solutions. 🌟
                </Text>
                <Text>
                  Thank you for visiting, and I&apos;m looking forward to
                  connecting with fellow enthusiasts, collaborators, and
                  potential clients. Let&apos;s embark on this coding adventure
                  together! 🚀🌐
                </Text>
              </motion.div>
            </Stack>
          </Flex>
          <Flex
            mt={4}
            direction="column"
            w={["100%", "100%", "100%", "100%"]}
            alignItems="center"
            justifyContent="center"
            h="auto"
            p={4}>
            <Text
              fontSize="lg"
              mb="20px"
              textAlign="center">
              Check out my professional services on Fiverr:
            </Text>
            <FiverrBadge />
          </Flex>
        </VStack>
      )}
    </>
  );
}
