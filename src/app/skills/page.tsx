'use client';
import React, { useEffect, useState } from 'react';

import { Box, Flex, Text } from '@chakra-ui/react';

import Skills from '@/components/Skills';
import { ThreeCircles } from 'react-loader-spinner';

export default function Page() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 500);

    return () => clearTimeout(loadingTimer);
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
        <>
          <Skills />
        </>
      )}
    </>
  );
}
