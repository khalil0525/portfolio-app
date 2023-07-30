import React, { useState } from "react";
import {
	Box,
	Flex,
	IconButton,
	Text,
	Image,
	useBreakpointValue,
} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

interface Project {
	id: number;
	name: string;
	description: string;
	imageUrl: string; // Add the imageUrl property for project photo
	hashTags: string[];
}

const projectsData: Project[] = [
	{
		id: 1,
		name: "Sound Garden",
		description: "Music sharing app ",
		imageUrl: "/img/project/soundgarden.jpg",
		hashTags: [
			"CRUD",
			"AUDIO",
			"FIREBASE",
			"REACT",
			"JAVASCRIPT",
			"HTML",
			"CSS",
		],
	},
	{
		id: 2,
		name: "Shoplocalforage",
		description: "E-Commerce web application",
		imageUrl: "/img/project/shopforage.jpg",
		hashTags: ["CRUD", "TYPESCRIPT", "NEXT", "LOOPBACK", "SQL"],
	},
	{
		id: 3,
		name: "KeraRX",
		description: "Shopify e-commerce application",
		imageUrl: "/img/project/kerarx.jpg",
		hashTags: ["SHOPIFY", "LIQUID", "JAVASCRIPT", "HTML", "CSS"],
	},
	{
		id: 4,
		name: "Two Tones",
		description: "This is the description for Project 3.",
		imageUrl: "/img/project/twotones.jpg",
		hashTags: ["CRUD", "AUDIO", "FIREBASE", "REACT"],
	},
	{
		id: 5,
		name: "NudeU",
		description: "This is the description for Project 3.",
		imageUrl: "/img/project/nudeu.jpg",
		hashTags: ["SHOPIFY", "LIQUID", "JAVASCRIPT", "HTML", "CSS"],
	},
	{
		id: 6,
		name: "Luminae",
		description: "Joon Hair Care",
		imageUrl: "/img/project/luminae.jpg",
		hashTags: ["SHOPIFY", "LIQUID", "JAVASCRIPT", "HTML", "CSS"],
	},
	{
		id: 7,
		name: "Joon HC",
		description: "This is the description for Project 3.",
		imageUrl: "/img/project/joon.jpg",
		hashTags: ["SHOPIFY", "LIQUID", "JAVASCRIPT", "HTML", "CSS"],
	},
	// Add more projects as needed
];

const ProjectCarousel: React.FC = () => {
	const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

	const numProjectsToShowDesktop = 3;
	const numProjectsToShowTablet = 1;
	const totalProjects = projectsData.length;
	const isMobile = useBreakpointValue({ base: true, md: false }); // Check if it's mobile screen size
	const numProjectsToShow = isMobile
		? numProjectsToShowTablet
		: numProjectsToShowDesktop;
	const projectCardWidth = isMobile
		? "100%" // Full width for mobile
		: `${100 / numProjectsToShowDesktop}%`; // Divide the width equally for desktop

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

	const chunkHashtags = (hashtags: string[], chunkSize: number) => {
		const chunkedHashtags: string[][] = [];
		for (let i = 0; i < hashtags.length; i += chunkSize) {
			chunkedHashtags.push(hashtags.slice(i, i + chunkSize));
		}
		return chunkedHashtags;
	};

	// Helper function to render hashtags based on screen size
	const renderHashtags = (hashtags: string[]) => {
		if (window.innerWidth >= 768) {
			// On desktop, render three hashtags per row
			const chunkedHashtags = chunkHashtags(hashtags, 3);
			return chunkedHashtags.map((hashtagGroup, index) => (
				<Flex direction="row" gap={4} key={index}>
					{hashtagGroup.map((hashtag) => (
						<Text key={hashtag} fontSize="22px" fontWeight="300">
							#{hashtag}
						</Text>
					))}
				</Flex>
			));
		} else {
			// On mobile, render two hashtags per row
			const chunkedHashtags = chunkHashtags(hashtags, 2);
			return chunkedHashtags.map((hashtagGroup, index) => (
				<Flex direction="row" gap={4} key={index}>
					{hashtagGroup.map((hashtag) => (
						<Text key={hashtag} fontSize="22px" fontWeight="300">
							#{hashtag}
						</Text>
					))}
				</Flex>
			));
		}
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
						flex={`1 0 ${projectCardWidth}`}
						px={2}
						display="flex"
						flexDirection="column"
						alignItems="center"
					>
						<Text
							fontSize="36px"
							fontWeight="400"
							mb={["4px", "4px", 4]}
							ps={["0%", "0%", "0%", "30%"]}
						>
							{project.name}
						</Text>
						<Image
							src={project.imageUrl}
							alt={project.name}
							maxH={isMobile ? "200px" : "50%"}
							maxW={isMobile ? "100%" : "auto"}
							objectFit="contain" // Adjust the object-fit property based on your image's aspect ratio
							mb="8px"
							borderRadius="10%"
							padding="12px"
						/>
						<Flex direction="column" gap={6} alignItems="center">
							{renderHashtags(project.hashTags)}
						</Flex>
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
