"use client";
import React, { useState } from "react";
import {
	Flex,
	Button,
	useMediaQuery,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	DrawerHeader,
	DrawerBody,
	Stack,
} from "@chakra-ui/react";

interface NavBarProps {
	setCurrentPage: React.Dispatch<React.SetStateAction<any>>;
}

export const NavBar: React.FC<NavBarProps> = ({ setCurrentPage }) => {
	const [isLargerThan768] = useMediaQuery("(min-width: 768px)");
	const [isDrawerOpen, setDrawerOpen] = useState(false);
	const buttonContainerStyles = {
		display: "inline-block",
		textDecoration: "underline",
		paddingBottom: "8px", // Adjust the value to control the space between the button text and the underline
	};

	const buttonStyles = {
		background: "none",
		color: "#fff",
		fontSize: isLargerThan768 ? "32px" : "20px",
		textShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
		fontWeight: "bold",
		fontStretch: "normal",

		letterSpacing: "3.2px",
	};

	const toggleDrawer = () => {
		setDrawerOpen(!isDrawerOpen);
	};

	const handleNavItemClick = (page: string) => {
		setCurrentPage(page);
		setDrawerOpen(false); // Close the drawer on mobile when a link is clicked
	};

	return (
		<Flex
			direction="row"
			p="16px"
			gap="32px"
			justify="space-between"
			alignSelf={isLargerThan768 ? "none" : "end"}
		>
			{/* Regular Navigation Buttons */}
			{isLargerThan768 ? (
				<>
					<Button
						style={buttonStyles}
						onClick={() => handleNavItemClick("home")}
					>
						HOME
					</Button>
					<Button
						style={buttonStyles}
						onClick={() => handleNavItemClick("about")}
					>
						ABOUT
					</Button>
					<Button
						style={buttonStyles}
						onClick={() => handleNavItemClick("skills")}
					>
						SKILLS
					</Button>
					<Button
						style={buttonStyles}
						onClick={() => handleNavItemClick("projects")}
					>
						MY PROJECTS
					</Button>
					<Button
						style={buttonStyles}
						onClick={() => handleNavItemClick("contact")}
					>
						CONTACT
					</Button>
				</>
			) : (
				<Flex direction="row" gap="16px" align={"end"}>
					{/* Mobile Menu Button */}
					<Button style={buttonStyles} onClick={toggleDrawer}>
						☰
					</Button>
				</Flex>
			)}

			{/* Mobile Drawer */}
			<Drawer isOpen={isDrawerOpen} placement="right" onClose={toggleDrawer}>
				<DrawerOverlay>
					<DrawerContent bg="#000">
						{" "}
						{/* Add the desired background color here */}
						<DrawerCloseButton />
						<DrawerHeader>Menu</DrawerHeader>
						<DrawerBody>
							<Stack spacing="8px">
								<Button
									style={buttonStyles}
									onClick={() => handleNavItemClick("home")}
								>
									Home
								</Button>
								<Button
									style={buttonStyles}
									onClick={() => handleNavItemClick("about")}
								>
									About
								</Button>
								<Button
									style={buttonStyles}
									onClick={() => handleNavItemClick("skills")}
								>
									Skills
								</Button>
								<Button
									style={buttonStyles}
									onClick={() => handleNavItemClick("projects")}
								>
									My Projects
								</Button>
								<Button
									style={buttonStyles}
									onClick={() => handleNavItemClick("contact")}
								>
									Contact
								</Button>
							</Stack>
						</DrawerBody>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
		</Flex>
	);
};
