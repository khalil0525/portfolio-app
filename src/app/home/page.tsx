"use client";
import React, { useEffect, useState } from "react";
import { Image, Box, Text, Flex } from "@chakra-ui/react";
import { ThreeCircles } from "react-loader-spinner";
import { useSpring, animated, config } from "react-spring";

export default function Page() {
	const [isPageLoaded, setIsPageLoaded] = useState(false);

	useEffect(() => {
		// Simulate page loading with a delay (you can remove this in production)
		const loadingTimer = setTimeout(() => {
			setIsPageLoaded(true);
		}, 500); // Adjust the time as needed

		// Clear the timer when the component unmounts
		return () => clearTimeout(loadingTimer);
	}, []);

	// Define the animation config for the text
	const textAnimation = useSpring({
		opacity: isPageLoaded ? 1 : 0,
		transform: isPageLoaded ? "translateY(0)" : "translateY(20px)",
		config: {
			tension: 5000, // Adjust the animation tension
			friction: 500, // Adjust the animation friction
		},
	});

	// Define the animation config for the image
	const imageAnimation = useSpring({
		opacity: isPageLoaded ? 1 : 0,
		transform: isPageLoaded ? "translateY(0)" : "translateY(20px)",
		config: config.gentle, // Use a gentle animation
		delay: 50, // Delay the animation to start after text animation
	});

	return (
		<>
			{!isPageLoaded ? (
				// Show the loader until the page is loaded
				<Box
					w="100%"
					h="100vh"
					display="flex"
					alignItems="center"
					justifyContent="center"
				>
					<ThreeCircles color="#1CFF25" height={80} width={80} />
				</Box>
			) : (
				<>
					<animated.div style={textAnimation}>
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
					</animated.div>
					<Flex
						direction={["column", "column", "column", "row"]}
						w="100%"
						justify={["unset", "unset", "unset", "space-evenly"]}
					>
						<Box
							position="relative" // Add this line to create a relative container for the image
							w={["100%", "100%", "100%", "55%"]}
							h={["40vh", "40vh", "40vh", "80%"]}
							mb={["12px", "12px", 0]}
							flexShrink={1}
						>
							<animated.div
								style={{
									...imageAnimation,

									width: "100%",
									height: "100%",
								}}
							>
								<Image
									src="/img/logo/green-logo-min.png"
									alt="Logo"
									style={{ width: "100%", height: "100%" }}
								/>
							</animated.div>
						</Box>
					</Flex>
				</>
			)}
		</>
	);
}
