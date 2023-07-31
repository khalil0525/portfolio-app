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
	Box,
} from "@chakra-ui/react";
import Link from "next/link";
export default function NavBar() {
	const [isLargerThan768] = useMediaQuery("(min-width: 840px)");
	const [isDrawerOpen, setDrawerOpen] = useState(false);
	const LinkContainerStyles = {
		display: "inline-block",
		paddingBottom: "10px", // Adjust the value to control the space between the Link text and the underline
	};
	const selectedPageLinkStyles = {
		borderBottom: "1px solid #1EF828",
		lineHeight: "48px",
		borderRadius: "0px",
	};

	const LinkStyles = {
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
			{/* Regular Navigation Links */}
			{isLargerThan768 ? (
				<>
					<Link
						href="/home"
						// style={
						// 	currentPage === "home"
						// 		? { ...LinkStyles, ...selectedPageLinkStyles }
						// 		: LinkStyles
						// }
					>
						home
					</Link>
					<Link
						href="/about"
						// style={
						// 	currentPage === "about"
						// 		? { ...LinkStyles, ...selectedPageLinkStyles }
						// 		: LinkStyles
						// }
					>
						about
					</Link>
					<Link
						href="/skills"
						// style={
						// 	currentPage === "skills"
						// 		? { ...LinkStyles, ...selectedPageLinkStyles }
						// 		: LinkStyles
						// }
					>
						skills
					</Link>
					<Link
						href="/projects"
						// style={
						// 	currentPage === "projects"
						// 		? { ...LinkStyles, ...selectedPageLinkStyles }
						// 		: LinkStyles
						// }
					>
						my projects
					</Link>
					<Link
						href="/contact"
						// style={
						// 	currentPage === "contact"
						// 		? { ...LinkStyles, ...selectedPageLinkStyles }
						// 		: LinkStyles
						// }
					>
						contact
					</Link>
				</>
			) : (
				<Flex direction="row" gap="16px" align={"end"}>
					{/* Mobile Menu Link */}
					<Button style={LinkStyles} onClick={toggleDrawer}>
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
								<Link
									href="/home"
									// style={
									// 	currentPage === "home"
									// 		? { ...LinkStyles, ...selectedPageLinkStyles }
									// 		: LinkStyles
									// }
								>
									home
								</Link>
								<Link
									href="/about"
									// style={
									// 	currentPage === "about"
									// 		? { ...LinkStyles, ...selectedPageLinkStyles }
									// 		: LinkStyles
									// }
								>
									about
								</Link>
								<Link
									href="/skills"
									// style={
									// 	currentPage === "skills"
									// 		? { ...LinkStyles, ...selectedPageLinkStyles }
									// 		: LinkStyles
									// }
								>
									skills
								</Link>
								<Link
									href="/projects"
									// style={
									// 	currentPage === "projects"
									// 		? { ...LinkStyles, ...selectedPageLinkStyles }
									// 		: LinkStyles
									// }
								>
									my projects
								</Link>
								<Link
									href="/contact"
									// style={
									// 	currentPage === "contact"
									// 		? { ...LinkStyles, ...selectedPageLinkStyles }
									// 		: LinkStyles
									// }
								>
									contact
								</Link>
							</Stack>
						</DrawerBody>
					</DrawerContent>
				</DrawerOverlay>
			</Drawer>
		</Flex>
	);
}
