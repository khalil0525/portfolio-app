import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface Skill {
	id: number;
	name: string;
	imageUrl: string;
}

const skillsData: Skill[] = [
	{
		id: 1,
		name: "CSS",
		imageUrl: "/img/logo/csslogo.png",
	},
	{
		id: 2,
		name: "JavaScript",
		imageUrl: "/img/logo/jslogo.png",
	},
	{
		id: 3,
		name: "React",
		imageUrl: "/img/logo/reactlogo.png",
	},

	{
		id: 4,
		name: "HTML",
		imageUrl: "/img/logo/htmllogo.png",
	},
	{
		id: 5,
		name: "Node js",
		imageUrl: "/img/logo/node.png",
	},
	{
		id: 6,
		name: "Postgresql",
		imageUrl: "/img/logo/postgresqllogo.png",
	},
	{
		id: 7,
		name: "Sequelize",
		imageUrl: "/img/logo/sequelizelogo.png",
	},
	{
		id: 8,
		name: "Docker",
		imageUrl: "/img/logo/docker.png",
	},
	{
		id: 9,
		name: "CI/CD",
		imageUrl: "/img/logo/lifecyclelogo.png",
	},
	{
		id: 10,
		name: "Python",
		imageUrl: "/img/logo/pythonlogo.png",
	},
	{
		id: 11,
		name: "Linux",
		imageUrl: "/img/logo/linuxlogo.png",
	},
	{
		id: 12,
		name: "Typescript",
		imageUrl: "/img/logo/typescriptlogo.png",
	},
	{
		id: 13,
		name: "Next",
		imageUrl: "/img/logo/nextlogo.png",
	},

	{
		id: 14,
		name: "Express",
		imageUrl: "/img/logo/expresslogo.png",
	},
	// Add more skills as needed
];

const Skills: React.FC = () => {
	return (
		<Flex direction="column" alignItems="center" width="60%" mx="auto">
			<Flex flexWrap="wrap" justifyContent="center" alignItems="center">
				{skillsData.map((skill) => (
					<Box
						key={skill.id}
						p={5}
						m={2}
						width="120px"
						height="120px"
						borderRadius="full"
						bg="#fff"
						display="flex"
						justifyContent="center"
						alignItems="center"
					>
						<Image src={skill.imageUrl} alt={skill.name} maxW="100%" h="100%" />
					</Box>
				))}
			</Flex>
		</Flex>
	);
};

export default Skills;
