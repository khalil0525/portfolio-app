import React, { useState, useEffect } from "react";
import { Button, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import BreathingImage from "../BreathingImage"; // Make sure to provide the correct path to BreathingImage component

interface StartScreenProps {
	setCurrentPage: React.Dispatch<React.SetStateAction<any>>;
}

export const StartScreen: React.FC<StartScreenProps> = ({ setCurrentPage }) => {
	const [isButtonVisible, setIsButtonVisible] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsButtonVisible(true);
		}, 3000); // 3000 milliseconds delay (3 seconds)

		return () => clearTimeout(timer);
	}, []);

	return (
		<Flex direction="column" justify="center" align="center" h="100%" w="100%">
			<BreathingImage /> {/* Use the BreathingImage component here */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: isButtonVisible ? 1 : 0 }}
				transition={{ duration: 1 }} // Adjust the duration for the desired fade-in time
				className="center-button"
			>
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
			</motion.div>
			{/* Other components or elements in the StartScreen */}
		</Flex>
	);
};
