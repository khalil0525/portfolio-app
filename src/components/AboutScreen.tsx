import React from "react";
import {
	Button,
	Image,
	Box,
	Text,
	Heading,
	Stack,
	Flex,
} from "@chakra-ui/react";

export const AboutScreen = () => {
	return (
		<Flex
			direction="column"
			overflowY={["auto", "auto", "hidden"]}
			w="100%"
			h="100%"
			p={["12px", "12px", "36px"]}
			align={["center", "center", "flex-start"]}
		>
			<Text
				as="h1"
				size="3xl"
				color="#C1CED9"
				fontSize={["48px", "48px", "64px"]}
				fontWeight="bold"
				letterSpacing="-4px"
				mb="16px"
			>
				about.
				<span style={{ color: "#1CFF25" }}>me()</span>
			</Text>
			<Flex
				direction={["column", "column", "row"]}
				w="100%"
				justify="space-evenly"
			>
				<Flex
					direction="column"
					p="8px"
					w={["100%", "100%", "55%"]}
					h={["100%", "100%", "80%"]}
					mb={["36px", "36px", 0]}
				>
					<Image src="/img/logo/Logo.jpg" w="100%" h="100%" />
				</Flex>
				<Stack
					spacing={6}
					fontSize="22px"
					fontWeight="300"
					maxW={["100%", "100%", "35%"]}
					w={["100%", "100%", "35%"]}
					justifySelf="end"
					overflowY={["auto", "auto", "auto"]}
					h={["100vh", "100vh", "50%"]}
					className="custom-scrollbar"
					padding="36px"
				>
					<Text>
						Hey there, I&apos;m Khalil Collins, and I&apos;m thrilled to have
						you explore my journey in the world of technology and web
						development. 🌐🎮{" "}
					</Text>
					<Text>
						I&apos;ve been immersed in the IT realm for several years, honing my
						skills and gaining valuable experiences along the way. Initially, my
						passion for computer science led me down the path of game
						development, eager to create captivating virtual worlds. 🎮 However,
						fate had a different plan for me, and I stumbled upon web
						development, where I found my true calling and fell head over heels
						in love with problem-solving. 💻❤️
					</Text>
					<Text>
						Being a full-stack web developer allows me to combine my creativity
						with my analytical mindset, crafting innovative solutions that
						address the specific needs of various industries. 🚀 It&apos;s truly
						fulfilling to navigate through diverse challenges and provide
						tailor-made coding solutions that make a tangible impact. 💼🔧
					</Text>
					<Text>
						Through my portfolio, you&apos;ll get a glimpse into the projects
						I&apos;ve worked on, the technologies I&apos;ve mastered, and the
						passion I bring to every endeavor. I&apos;m excited to share this
						digital space with you and demonstrate my dedication to creating
						seamless user experiences and scalable solutions. 🌟
					</Text>
					<Text>
						Thank you for visiting, and I&apos;m looking forward to connecting
						with fellow enthusiasts, collaborators, and potential clients.
						Let&apos;s embark on this coding adventure together! 🚀🌐
					</Text>
				</Stack>
			</Flex>
		</Flex>
	);
};
