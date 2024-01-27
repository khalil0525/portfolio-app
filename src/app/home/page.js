"use client";

import React, { useEffect, useState, useRef } from "react";
import { Box, Text, Flex, Link, VStack, Button } from "@chakra-ui/react";
import { ThreeCircles } from "react-loader-spinner";
import { useSpring, animated, config } from "react-spring";
import Image from "next/image";
import { projectsData } from "@/data";
import { FeaturedProject } from "@/components/FeatureProject";
import useScrollSnap from "react-use-scroll-snap";
const featuredProject = projectsData[0];

export default function Page() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const scrollRef = useRef(null);

  useScrollSnap({ ref: scrollRef, duration: 100, delay: 50 });
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 500);

    return () => clearTimeout(loadingTimer);
  }, []);

  const textAnimation = useSpring({
    opacity: isPageLoaded ? 1 : 0,
    transform: isPageLoaded ? "translateY(0)" : "translateY(20px)",
    width: "100%",
    config: {
      tension: 5000,
      friction: 500,
    },
  });

  const imageAnimation = useSpring({
    opacity: isPageLoaded ? 1 : 0,
    transform: isPageLoaded ? "translateY(0)" : "translateY(20px)",
    config: config.gentle,
    delay: 50,
  });

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
          ref={scrollRef}
          alignItems="center"
          width={["100%"]}
          minH="200vh"
          overflowX="hidden"
          overflowY="auto">
          <VStack
            h="100vh"
            display="flex"
            alignItems="center"
            gap="3.2rem"
            className="item">
            <animated.div style={textAnimation}>
              <Text
                as="h1"
                size="3xl"
                color="#C1CED9"
                fontSize={["24px", "48px", "48px", "48px"]}
                fontWeight="bold"
                letterSpacing="4px"
                mb="16px">
                Khalil.
                <span style={{ color: "#1CFF25" }}>Collins()</span>
              </Text>
              <Text
                as="h2"
                fontSize="16px"
                fontWeight="500"
                letterSpacing="2px"
                textAlign="center"
                mb="16px"
                width="100%">
                <span style={{ color: "#1CFF25" }}>Full Stack Engineer</span>{" "}
                with a passion for{" "}
                <span style={{ color: "#FFD700" }}>designing</span> and building
                web apps. Turning ideas into{" "}
                <span style={{ color: "#FF1493" }}>code</span> is my
                thrill—where{" "}
                <span style={{ color: "#4CAF50" }}>creativity</span> meets
                functionality, and each line of{" "}
                <span style={{ color: "#FF5722" }}>code</span> breathes life
                into <span style={{ color: "#9C27B0" }}>digital</span> visions.
              </Text>
            </animated.div>
            <animated.div
              style={{
                ...imageAnimation,
                display: "flex",
                justifyContent: "center",
                width: "100%",
                height: "auto",
              }}>
              <Image
                src="/img/logo/green-logo-min.png"
                alt="Logo"
                width={600}
                height={600}
                loading="eager"
              />
            </animated.div>
          </VStack>
          {featuredProject && (
            <VStack
              className="item"
              spacing={4}
              alignItems="stretch"
              width={["100%", "100%", "90%", "90%"]}
              justifyContent="center"
              h="100vh">
              <Text
                fontSize="4xl"
                fontWeight="bold"
                textAlign="center"
                mt={10}
                mb={4}>
                Featured Project
              </Text>
              <FeaturedProject project={featuredProject} />
            </VStack>
          )}
        </VStack>
      )}
    </>
  );
}
