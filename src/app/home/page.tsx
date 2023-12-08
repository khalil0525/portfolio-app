'use client';
import React, { useEffect, useState } from 'react';
import { Box, Text, Flex } from '@chakra-ui/react';
import { ThreeCircles } from 'react-loader-spinner';
import { useSpring, animated, config } from 'react-spring';
import Image from 'next/image';

export default function Page() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    // Simulate page loading with a delay (you can remove this in production)
    const loadingTimer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 500); // Adjust the time as needed

    // Clear the timer when the component unmounts
    return () => clearTimeout(loadingTimer);
  }, []);

  // Define the animation config for the text
  const textAnimation = useSpring({
    opacity: isPageLoaded ? 1 : 0,
    transform: isPageLoaded ? 'translateY(0)' : 'translateY(20px)',
    config: {
      tension: 5000, // Adjust the animation tension
      friction: 500, // Adjust the animation friction
    },
  });

  // Define the animation config for the image
  const imageAnimation = useSpring({
    opacity: isPageLoaded ? 1 : 0,
    transform: isPageLoaded ? 'translateY(0)' : 'translateY(20px)',
    config: config.gentle, // Use a gentle animation
    delay: 50, // Delay the animation to start after text animation
  });

  return (
    <>
      {!isPageLoaded ? (
        // Show the loader until the page is loaded
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
        <>
          <animated.div style={textAnimation}>
            <Text
              as="h1"
              size="3xl"
              color="#C1CED9"
              fontSize={['24px', '48px', '48px', '64px']}
              fontWeight="bold"
              letterSpacing="4px"
              mb="16px">
              Khalil.
              <span style={{ color: '#1CFF25' }}>Collins()</span>
            </Text>
          </animated.div>
          <Text
            as="h2"
            fontSize="16px"
            fontWeight="500"
            letterSpacing="2px"
            textAlign="center"
            mb="16px"
            width="70%">
            <span style={{ color: '#1CFF25' }}>Full Stack Engineer</span> with a
            passion for <span style={{ color: '#FFD700' }}>designing</span> and
            building web apps. Turning ideas into{' '}
            <span style={{ color: '#FF1493' }}>code</span> is my thrill—where{' '}
            <span style={{ color: '#4CAF50' }}>creativity</span> meets
            functionality, and each line of{' '}
            <span style={{ color: '#FF5722' }}>code</span> breathes life into{' '}
            <span style={{ color: '#9C27B0' }}>digital</span> visions.
          </Text>

          <Flex
            direction={['column', 'column', 'column', 'row']}
            w="100%"
            justify={['unset', 'unset', 'unset', 'space-evenly']}>
            <Box
              position="relative" // Add this line to create a relative container for the image
              w={['100%', '100%', '100%', '55%']}
              h={['40vh', '40vh', '40vh', '80%']}
              mb={['12px', '12px', 0]}
              flexShrink={1}>
              <animated.div
                style={{
                  ...imageAnimation,
                  display: 'flex',
                  justifyContent: 'center',
                  width: '100%',
                  height: '100%',
                }}>
                <Image
                  src="/img/logo/green-logo-min.png"
                  alt="Logo"
                  width={800}
                  height={800}
                  loading="eager"
                />
              </animated.div>
            </Box>
          </Flex>
        </>
      )}
    </>
  );
}
