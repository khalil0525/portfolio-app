import React from "react";
import ContactForm from "./ContactForm";
import { Box, Flex, Heading } from "@chakra-ui/react";
import ProjectCarousel from "./ProjectCarousel";
import Skills from "./Skills";

export const SkillsScreen = () => {
	return (
		<Flex direction="column" align="start" justify="start" w="100%" h="100%">
			<Box
				borderBottom="2px solid #392657"
				pb="8px"
				display="inline-block"
				maxWidth="75%"
				mb="36px"
				mt="72px"
			>
				<Heading
					as="h1"
					size="4xl"
					noOfLines={1}
					color="rgba(204, 139, 242, 1)"
				>
					SKILLS
				</Heading>
			</Box>
			<Skills />
		</Flex>
	);
};
