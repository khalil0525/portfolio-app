import React from "react";
import { Box, Flex, Text } from "@chakra-ui/react";

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
		name: "JavaScript",
		imageUrl: "/img/logo/nodejslogo.jpg",
	},
	{
		id: 6,
		name: "React",
		imageUrl: "/img/logo/postgresqllogo.png",
	},
	{
		id: 7,
		name: "React",
		imageUrl: "/img/logo/sequelizelogo.png",
	},
	// Add more skills as needed
];

const Skills: React.FC = () => {
	return (
		<Flex direction="column" alignItems="center" width="100%" mx="auto">
			<Flex flexWrap="wrap" justifyContent="center" alignItems="center">
				{skillsData.map((skill) => (
					<Box
						key={skill.id}
						p={4}
						m={2}
						width="120px"
						height="120px"
						borderRadius="full"
						bg="gray.200"
						display="flex"
						justifyContent="center"
						alignItems="center"
					>
						<img
							src={skill.imageUrl}
							alt={skill.name}
							style={{ maxWidth: "100%", height: "auto" }}
						/>
					</Box>
				))}
			</Flex>
		</Flex>
	);
};

export default Skills;
