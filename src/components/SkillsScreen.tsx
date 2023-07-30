import React from "react";
import ContactForm from "./ContactForm";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import ProjectCarousel from "./ProjectCarousel";
import Skills from "./Skills";

export const SkillsScreen = () => {
	return (
		<Flex
			direction="column"
			align={["center", "center", "flex-start"]}
			justify="start"
			w="100%"
			h="100%"
			p={["12px", "12px", "36px"]}
		>
			<Text
				as="h1"
				size="3xl"
				color="#C1CED9"
				fontSize={["48px", "48px", "64px"]}
				fontWeight="bold"
				letterSpacing="-4px"
				mb="16px"
			>
				my.
				<span style={{ color: "#1CFF25" }}>skills()</span>
			</Text>
			<Skills />
		</Flex>
	);
};
