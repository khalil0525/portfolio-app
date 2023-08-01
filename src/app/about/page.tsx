"use client";

import React, { useEffect, useState } from "react";
import { Image, Text, Stack, Flex, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ThreeCircles } from "react-loader-spinner";
export default function Page() {
	const [isTextVisible, setIsTextVisible] = useState(false);
	const [isPageLoaded, setIsPageLoaded] = useState(false);

	useEffect(() => {
		// Simulate page loading with a delay (you can remove this in production)
		const loadingTimer = setTimeout(() => {
			setIsPageLoaded(true);
		}, 500); // Adjust the time as needed

		// Clear the timer when the component unmounts
		return () => clearTimeout(loadingTimer);
	}, []);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsTextVisible(true);
		}, 1000); // 3000 milliseconds delay (3 seconds)

		return () => clearTimeout(timer);
	}, []);

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
					<Flex
						direction={["column", "column", "column", "row"]}
						w="100%"
						justify={["unset", "unset", "unset", "space-evenly"]}
						overflowY={["unset", "unset", "unset", "hidden"]}
					>
						<Flex
							direction="column"
							p="8px"
							w={["100%", "100%", "100%", "55%"]}
							h={["40vh", "40vh", "40vh", "80%"]}
							mb={["12px", "12px", 0]}
							flexShrink={1}
						>
							<Image
								src="/img/logo/green-logo-min.png"
								w="100%" // Add this to ensure the image remains its original size
								h={["100%", "100%", "100%"]}
							/>
						</Flex>

						<Stack
							spacing={6}
							fontSize="22px"
							fontWeight="300"
							maxW={["100%", "100%", "100%", "35%"]}
							w={["100%", "100%", "100%", "35%"]}
							justifySelf="end"
							overflowY={["auto", "auto", "auto", "auto"]}
							h={["25vh", "30vh", "30vh", "50%"]}
							className="custom-scrollbar vertical"
							padding="36px"
						>
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: isTextVisible ? 1 : 0 }}
								transition={{ duration: 2.5 }} // Adjust the duration for the desired fade-in time
							>
								<Text>
									Hey there, I&apos;m Khalil Collins, and I&apos;m thrilled to
									have you explore my journey in the world of technology and web
									development. 🌐🎮{" "}
								</Text>
								<Text>
									I&apos;ve been immersed in the IT realm for several years,
									honing my skills and gaining valuable experiences along the
									way. Initially, my passion for computer science led me down
									the path of game development, eager to create captivating
									virtual worlds. 🎮 However, fate had a different plan for me,
									and I stumbled upon web development, where I found my true
									calling and fell head over heels in love with problem-solving.
									💻❤️
								</Text>
								<Text>
									Being a full-stack web developer allows me to combine my
									creativity with my analytical mindset, crafting innovative
									solutions that address the specific needs of various
									industries. 🚀 It&apos;s truly fulfilling to navigate through
									diverse challenges and provide tailor-made coding solutions
									that make a tangible impact. 💼🔧
								</Text>
								<Text>
									Through my portfolio, you&apos;ll get a glimpse into the
									projects I&apos;ve worked on, the technologies I&apos;ve
									mastered, and the passion I bring to every endeavor. I&apos;m
									excited to share this digital space with you and demonstrate
									my dedication to creating seamless user experiences and
									scalable solutions. 🌟
								</Text>
								<Text>
									Thank you for visiting, and I&apos;m looking forward to
									connecting with fellow enthusiasts, collaborators, and
									potential clients. Let&apos;s embark on this coding adventure
									together! 🚀🌐
								</Text>
							</motion.div>
						</Stack>
					</Flex>
				</>
			)}
		</>
	);
}
