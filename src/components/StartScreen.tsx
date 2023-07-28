import React from "react";
import { Button, Flex, Image } from "@chakra-ui/react";
import Logo from "/Public/img/logo.png";
interface StartScreenProps {
	setCurrentPage: React.Dispatch<React.SetStateAction<any>>;
}

export const StartScreen: React.FC<StartScreenProps> = ({ setCurrentPage }) => {
	return (
		<Flex direction="column" justify="center" align="center" h="100%">
			<Image src="/img/logo.png" w={"250px"} h={"250px"} />
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
