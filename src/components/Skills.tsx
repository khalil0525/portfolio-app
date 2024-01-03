import React from 'react';
import { Box, Flex, Text, Tooltip } from '@chakra-ui/react';
import Image from 'next/image';
interface Skill {
  id: number;
  name: string;
  imageUrl: string;
}

const skillsData: Skill[] = [
  {
    id: 1,
    name: 'CSS',
    imageUrl: '/img/logo/csslogo.png',
  },
  {
    id: 2,
    name: 'JavaScript',
    imageUrl: '/img/logo/jslogo.png',
  },
  {
    id: 3,
    name: 'React',
    imageUrl: '/img/logo/reactlogo.png',
  },

  {
    id: 4,
    name: 'HTML',
    imageUrl: '/img/logo/htmllogo.png',
  },
  {
    id: 5,
    name: 'Node js',
    imageUrl: '/img/logo/node.png',
  },
  {
    id: 6,
    name: 'Postgresql',
    imageUrl: '/img/logo/postgresqllogo.png',
  },
  {
    id: 7,
    name: 'Sequelize',
    imageUrl: '/img/logo/sequelizelogo.png',
  },
  {
    id: 8,
    name: 'Docker',
    imageUrl: '/img/logo/docker.png',
  },
  {
    id: 9,
    name: 'CI/CD',
    imageUrl: '/img/logo/lifecyclelogo.png',
  },
  {
    id: 10,
    name: 'Python',
    imageUrl: '/img/logo/pythonlogo.png',
  },
  {
    id: 11,
    name: 'Linux',
    imageUrl: '/img/logo/linuxlogo.png',
  },
  {
    id: 12,
    name: 'Typescript',
    imageUrl: '/img/logo/typescriptlogo.png',
  },
  {
    id: 13,
    name: 'Next',
    imageUrl: '/img/logo/nextlogo.png',
  },

  {
    id: 14,
    name: 'Express',
    imageUrl: '/img/logo/expresslogo.png',
  },
];

const Skills: React.FC = () => {
  return (
    <Flex
      direction="column"
      alignItems="center"
      width="80%"
      mx="auto">
      <Flex
        flexWrap="wrap"
        justifyContent="center"
        alignItems="center">
        {skillsData.map((skill) => (
          <Tooltip
            key={skill.id}
            label={skill.name}>
            <Box
              p={10}
              m={4}
              width="160px"
              height="160px"
              borderRadius="full"
              bg="#fff"
              display="flex"
              justifyContent="center"
              alignItems="center"
              transition="transform 0.3s ease-in-out"
              _hover={{ transform: 'scale(1.2)' }}>
              <Image
                src={skill.imageUrl}
                alt={skill.name}
                width={120}
                height={120}
              />
            </Box>
          </Tooltip>
        ))}
      </Flex>
    </Flex>
  );
};

export default Skills;
