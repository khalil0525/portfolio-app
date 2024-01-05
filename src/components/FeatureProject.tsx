import React from 'react';
import { Box, Text, Image, Link, VStack, HStack } from '@chakra-ui/react';
import { Project } from '@/data';

interface FeaturedProjectProps {
  project: Project;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  project,
}) => {
  return (
    <Box
      p={4}
      boxShadow="md"
      rounded="lg"
      border="1px solid #1CFF25"
      borderRadius="8px"
      bg="black"
      maxH="100%"
      maxW="100%"
      display="flex"
      flexDirection={['column', 'column', 'column', 'row']}
      alignItems={['center', 'center', 'center', 'stretch']}>
      <Box
        flex={['none', 'none', 'none', '100%']}
        pr={[0, 0, 0, 4]}
        mb={[4, 4, 4, 0]}
        maxH="100%"
        maxW="100%">
        <Image
          src={project.imageUrl}
          alt={project.name}
          maxH={['100%']}
          maxW="100%"
        />

        <Box>
          <HStack
            mt={2}
            align={['center', 'center', 'center', 'start']}
            flexWrap="wrap">
            {project.hashTags.map((tag) => (
              <Text
                as="span"
                fontSize="sm"
                color="gray.600"
                key={tag}>
                #{tag}
              </Text>
            ))}
          </HStack>
        </Box>
        <HStack
          flexWrap="wrap"
          mt={2}
          align={['center', 'center', 'center', 'start']}>
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              isExternal
              color="blue.500"
              mr={2}
              mb={2}>
              GitHub
            </Link>
          )}
          {project.appUrl && (
            <Link
              href={project.appUrl}
              isExternal
              color="blue.500"
              mb={2}>
              Live Demo
            </Link>
          )}
        </HStack>
      </Box>
      <Box
        w={['100%', '100%', '100%', '60%']}
        p={4}>
        <Text
          fontSize="lg"
          ml={[0, 0, 0, 4]}
          maxH="400px"
          className="custom-scrollbar horizontal"
          overflowY="auto">
          {project.description}
        </Text>
      </Box>
    </Box>
  );
};
