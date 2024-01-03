'use client';
import React, { useState, useEffect } from 'react';
import { Button, Flex } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import BreathingImage from '@/components/BreathingImage';
import Link from 'next/link';
export default function Page() {
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsButtonVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Flex
      direction="column"
      justify="center"
      align="center"
      h="100%"
      w="100%">
      <BreathingImage />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isButtonVisible ? 1 : 0 }}
        transition={{ duration: 2.5 }}
        className="center-button">
        <Link href="home">
          <Button
            borderRadius="100%"
            padding="20px"
            mt="64px"
            w="100px"
            h="100px">
            START
          </Button>
        </Link>
      </motion.div>
      {/* Other components or elements in the StartScreen */}
    </Flex>
  );
}
