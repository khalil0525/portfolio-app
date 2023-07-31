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
	currentPage: string;
}

export const NavBar: React.FC<NavBarProps> = ({
	setCurrentPage,
	currentPage,
}) => {
	const [isLargerThan768] = useMediaQuery("(min-width: 840px)");
	const [isDrawerOpen, setDrawerOpen] = useState(false);
	const buttonContainerStyles = {
		display: "inline-block",
		paddingBottom: "10px", // Adjust the value to control the space between the button text and the underline
	};
	const selectedPageButtonStyles = {
		borderBottom: "1px solid #1EF828",
		lineHeight: "48px",
		borderRadius: "0px",
	};

	const buttonStyles = {
		background: "none",
		color: "#fff",
		fontSize: isLargerThan768 ? "18px" : "12px",
		textShadow: "0 4px 4px rgba(0, 0, 0, 0.25)",
		fontWeight: "500",
		fontStretch: "normal",

		letterSpacing: "-10%",
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
			p={["6px", "6px", "8px", "16px"]}
			gap="8px"
			justify="space-between"
			alignSelf="end"
			position={isLargerThan768 ? "static" : "sticky"} // Set position to sticky on mobile
			top={0} // Stick to the top of the viewport on mobile
			zIndex={999} // Set a higher z-index to ensure it's above other elements
		>
			{/* Regular Navigation Buttons */}
			{isLargerThan768 ? (
				<>
					<Button
						style={
							currentPage === "home"
								? { ...buttonStyles, ...selectedPageButtonStyles }
								: buttonStyles
						}
						onClick={() => handleNavItemClick("home")}
					>
						home
					</Button>
					<Button
						style={
							currentPage === "about"
								? { ...buttonStyles, ...selectedPageButtonStyles }
								: buttonStyles
						}
						onClick={() => handleNavItemClick("about")}
					>
						about
					</Button>
					<Button
						style={
							currentPage === "skills"
								? { ...buttonStyles, ...selectedPageButtonStyles }
								: buttonStyles
						}
						onClick={() => handleNavItemClick("skills")}
					>
						skills
					</Button>
					<Button
						style={
							currentPage === "projects"
								? { ...buttonStyles, ...selectedPageButtonStyles }
								: buttonStyles
						}
						onClick={() => handleNavItemClick("projects")}
					>
						my projects
					</Button>
					<Button
						style={
							currentPage === "contact"
								? { ...buttonStyles, ...selectedPageButtonStyles }
								: buttonStyles
						}
						onClick={() => handleNavItemClick("contact")}
					>
						contact
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
									style={
										currentPage === "home"
											? { ...buttonStyles, ...selectedPageButtonStyles }
											: buttonStyles
									}
									onClick={() => handleNavItemClick("home")}
								>
									home
								</Button>
								<Button
									style={
										currentPage === "about"
											? { ...buttonStyles, ...selectedPageButtonStyles }
											: buttonStyles
									}
									onClick={() => handleNavItemClick("about")}
								>
									about
								</Button>
								<Button
									style={
										currentPage === "skills"
											? { ...buttonStyles, ...selectedPageButtonStyles }
											: buttonStyles
									}
									onClick={() => handleNavItemClick("skills")}
								>
									skills
								</Button>
								<Button
									style={
										currentPage === "projects"
											? { ...buttonStyles, ...selectedPageButtonStyles }
											: buttonStyles
									}
									onClick={() => handleNavItemClick("projects")}
								>
									my projects
								</Button>
								<Button
									style={
										currentPage === "contact"
											? { ...buttonStyles, ...selectedPageButtonStyles }
											: buttonStyles
									}
									onClick={() => handleNavItemClick("contact")}
								>
									contact
								</Button>
							</Stack>
						</DrawerBody>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
		</Flex>
	);
};
