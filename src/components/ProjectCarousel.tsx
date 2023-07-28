import React, { useState } from "react";
import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

interface Project {
	id: number;
	name: string;
	description: string;
	imageUrl: string; // Add the imageUrl property for project photo
}

const projectsData: Project[] = [
	{
		id: 1,
		name: "Sound Garden",
		description: "Music sharing app ",
		imageUrl: "/img/soundgarden.jpg",
	},
	{
		id: 2,
		name: "Shoplocalforage",
		description: "E-Commerce web application",
		imageUrl: "/img/shopforage.jpg",
	},
	{
		id: 3,
		name: "KeraRX",
		description: "Shopify e-commerce application",
		imageUrl: "/img/kerarx.jpg",
	},
	{
		id: 4,
		name: "Project 3",
		description: "This is the description for Project 3.",
		imageUrl: "/img/shopforage.jpg",
	},
	{
		id: 5,
		name: "Project 3",
		description: "This is the description for Project 3.",
		imageUrl: "/img/shopforage.jpg",
	},
	{
		id: 6,
		name: "Project 3",
		description: "This is the description for Project 3.",
		imageUrl: "/img/logo.png",
	},
	{
		id: 7,
		name: "Project 3",
		description: "This is the description for Project 3.",
		imageUrl: "/img/logo.png",
	},
	// Add more projects as needed
];

const ProjectCarousel: React.FC = () => {
	const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
	const numProjectsToShow = 3;
	const totalProjects = projectsData.length;
	const projectsToShow = [];

	for (let i = 0; i < numProjectsToShow; i++) {
		const projectIndex = (currentProjectIndex + i) % totalProjects;
		projectsToShow.push(projectsData[projectIndex]);
	}

	const nextProject = () => {
		setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % totalProjects);
	};

	const prevProject = () => {
		setCurrentProjectIndex(
			(prevIndex) => (prevIndex - 1 + totalProjects) % totalProjects
		);
	};

	return (
		<Box p={4} maxWidth="100%" mx="auto">
			<Flex
				overflowX="hidden"
				position="relative"
				justifyContent="flex-start"
				transition="left 0.3s ease"
			>
				{projectsToShow.map((project) => (
					<Box
						key={project.id}
						flex={`1 0 ${100 / numProjectsToShow}%`} // Divide the width equally for three projects
						px={2}
						display="flex"
						flexDirection="column"
						alignItems="center"
					>
						<img
							src={project.imageUrl}
							alt={project.name}
							style={{ maxWidth: "50%", height: "auto", marginBottom: "8px" }}
						/>
						<Text fontSize="xl" fontWeight="bold" mb={4}>
							{project.name}
						</Text>
						<Text textAlign="center" mb={4}>
							{project.description}
						</Text>
					</Box>
				))}
			</Flex>
			<Flex justifyContent="center" alignItems="center" mt={1}>
				<IconButton
					icon={<ChevronLeftIcon />}
					aria-label="Previous Project"
					onClick={prevProject}
					mr={2}
				/>
				<IconButton
					icon={<ChevronRightIcon />}
					aria-label="Next Project"
					onClick={nextProject}
					ml={2}
				/>
			</Flex>
		</Box>
	);
};

export default ProjectCarousel;
