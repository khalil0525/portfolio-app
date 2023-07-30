import React from "react";

import { Flex, Text } from "@chakra-ui/react";
import ProjectCarousel from "../ProjectCarousel";

export const ProjectScreen = () => {
	return (
		<Flex
			direction="column"
			w="100%"
			h="100%"
			p={["12px", "12px", "0px 56px", "24px 124px"]}
			align={["center", "center", "center", "flex-start"]}
		>
			<Text
				as="h1"
				size="3xl"
				color="#C1CED9"
				fontSize={["48px", "48px", "64px"]}
				fontWeight="bold"
				letterSpacing="-4px"
				mb={["8px", "8px", "72px"]}
			>
				my.
				<span
					style={{
						color: "#1CFF25",
						letterSpacing: "-4px",
					}}
				>
					projects()
				</span>
			</Text>

			<ProjectCarousel />
		</Flex>
	);
};
