import React from "react";
import ContactForm from "../ContactForm";
import { Flex, Text } from "@chakra-ui/react";

export const ContactScreen = () => {
	return (
		<Flex
			direction="column"
			align={["center", "center", "center", "flex-start"]}
			justify="start"
			w="100%"
			p={["12px", "12px", "0px 72px", "24px 124px"]}
		>
			<Text
				as="h1"
				color="#C1CED9"
				fontSize={["48px", "48px", "64px"]}
				fontWeight="bold"
				letterSpacing="-4px"
				mb="72px"
			>
				contact.
				<Text as="span" color="#1CFF25">
					me()
				</Text>
			</Text>
			<ContactForm />
		</Flex>
	);
};
