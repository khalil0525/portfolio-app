"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { StartScreen } from "@/components/StartScreen";
import { AboutScreen } from "@/components/AboutScreen";
import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { NavBar } from "@/components/NavBar";
import { ContactScreen } from "@/components/ContactScreen";
import { ProjectScreen } from "@/components/ProjectScreen";
import { SkillsScreen } from "@/components/SkillsScreen";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./page-transitions.css"; // Create a CSS file for transitions

export default function Home() {
	const [currentPage, setCurrentPage] = useState<string | null>("start");

	return (
		<Flex
			h="100vh"
			w="100vw"
			direction="column"
			align="center"
			justify="flex-start" // Adjust this to "center" if you want to center content vertically
			style={{
				padding: "50px 64px",
				objectFit: "contain",
				gap: "20px", // Add spacing between child components
			}}
			bgImage={
				currentPage === "start"
					? "#392657"
					: "linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(to bottom, #392657 0%, rgba(57, 38, 87, 0.8) 100%)"
			}
			bgColor={currentPage === "start" ? "#392657" : "none"}
		>
			{!(currentPage === "start") && <NavBar setCurrentPage={setCurrentPage} />}
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
						{currentPage === "about" && (
							<AboutScreen setCurrentPage={setCurrentPage} />
						)}
						{currentPage === "skills" && <SkillsScreen />}
						{currentPage === "projects" && <ProjectScreen />}
						{currentPage === "contact" && <ContactScreen />}
					</>
				</CSSTransition>
			</TransitionGroup>
		</Flex>
	);
}
