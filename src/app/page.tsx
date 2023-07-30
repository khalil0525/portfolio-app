"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { StartScreen } from "@/components/pages/StartScreen";
import { AboutScreen } from "@/components/pages/AboutScreen";
import { Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { NavBar } from "@/components/NavBar";
import { ContactScreen } from "@/components/pages/ContactScreen";
import { ProjectScreen } from "@/components/pages/ProjectScreen";
import { SkillsScreen } from "@/components/pages/SkillsScreen";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./page-transitions.css"; // Create a CSS file for transitions

export default function Home() {
	const [currentPage, setCurrentPage] = useState<string>("start");

	return (
		<Box>
			<Flex
				h="100vh"
				w="100vw"
				direction="column"
				align="center"
				justify="flex-start" // Adjust this to "center" if you want to center content vertically
				style={{
					objectFit: "contain",
					gap: "20px", // Add spacing between child components
				}}
				bgColor="#000"
			>
				{!(currentPage === "start") && (
					<NavBar setCurrentPage={setCurrentPage} currentPage={currentPage} />
				)}
				<TransitionGroup
					component={null} // Disable the wrapping of the TransitionGroup with an extra DOM element
					style={{
						// Set the CSSTransition styles here
						position: "absolute", // Take the CSSTransition out of the flex flow
						width: "100%", // Take up the full width of the parent (Flex container)
						height: "100%", // Take up the full height of the parent (Flex container)
					}}
				>
					<CSSTransition
						key={currentPage}
						classNames="page"
						timeout={{ enter: 300, exit: 300 }}
						style={{
							// Set the CSSTransition styles here
							// Take the CSSTransition out of the flex flow
							width: "100%", // Take up the full width of the parent (Flex container)
							height: "100%", // Take up the full height of the parent (Flex container)
						}}
					>
						<>
							{currentPage === "start" && (
								<StartScreen setCurrentPage={setCurrentPage} />
							)}
							{currentPage === "about" && <AboutScreen />}
							{currentPage === "skills" && <SkillsScreen />}
							{currentPage === "projects" && <ProjectScreen />}
							{currentPage === "contact" && <ContactScreen />}
						</>
					</CSSTransition>
				</TransitionGroup>
			</Flex>
		</Box>
	);
}
