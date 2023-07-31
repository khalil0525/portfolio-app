import React from "react";
import {
	Button,
	Image,
	Box,
	Text,
	Heading,
	Stack,
	Flex,
} from "@chakra-ui/react";

export const HomeScreen = () => {
	return (
		<Flex
			direction="column"
			overflowY={["auto", "auto", "auto", "hidden"]}
			w="100%"
			h="100%"
			p={["12px", "12px", "0px 72px", "24px 124px"]}
			align={["center", "center", "center", "center"]}
		>
			<Text
				as="h1"
				size="3xl"
				color="#C1CED9"
				fontSize={["24px", "48px", "48px", "64px"]}
				fontWeight="bold"
				letterSpacing="8px"
				mb="16px"
			>
				Khalil
				<span style={{ color: "#1CFF25" }}>Collins()</span>
			</Text>
			<Flex
				direction={["column", "column", "column", "row"]}
				w="100%"
				justify={["unset", "unset", "unset", "space-evenly"]}
			>
				<Flex
					direction="column"
					p="8px"
					w={["100%", "100%", "100%", "55%"]}
					h={["40vh", "40vh", "40vh", "80%"]}
					mb={["12px", "12px", 0]}
					flexShrink={1}
				>
					<Image
						src="/img/logo/green-logo.png"
						w="100%"
						h={["100%", "100%", "100%"]}
					/>
				</Flex>
			</Flex>
		</Flex>
	);
};
