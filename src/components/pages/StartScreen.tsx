import React from "react";
import { Button, Flex } from "@chakra-ui/react";
import BreathingImage from "../BreathingImage"; // Make sure to provide the correct path to BreathingImage component

interface StartScreenProps {
	setCurrentPage: React.Dispatch<React.SetStateAction<any>>;
}

export const StartScreen: React.FC<StartScreenProps> = ({ setCurrentPage }) => {
	return (
		<Flex direction="column" justify="center" align="center" h="100%">
			<BreathingImage /> {/* Use the BreathingImage component here */}
			<Button
				onClick={() => setCurrentPage("home")}
				w={"5%"}
				h={"5%"}
				borderRadius={"100%"}
				padding={"50px"}
				mt="64px"
			>
				START
			</Button>
			{/* Other components or elements in the StartScreen */}
		</Flex>
	);
};
