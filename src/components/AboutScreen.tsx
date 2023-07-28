import React from "react";
import { Button, Image, Box, Text, Heading, Stack } from "@chakra-ui/react";
import Logo from "/Public/img/logo.png";
interface StartScreenProps {
	setCurrentPage: React.Dispatch<React.SetStateAction<any>>;
}

export const AboutScreen: React.FC<StartScreenProps> = ({ setCurrentPage }) => {
	return (
		<Box>
			<Box
				borderBottom="2px solid #392657"
				pb="8px"
				display="inline-block"
				maxWidth="75%"
				mb="36px"
				mt="72px"
			>
				<Heading
					as="h1"
					size="4xl"
					noOfLines={1}
					color="rgba(204, 139, 242, 1)"
				>
					ABOUT ME
				</Heading>
			</Box>
			<Stack spacing={6}>
				<Text>
					Hey there, I'm Khalil Collins, and I'm thrilled to have you explore my
					journey in the world of technology and web development. 🌐🎮{" "}
				</Text>
				<Text>
					I've been immersed in the IT realm for several years, honing my skills
					and gaining valuable experiences along the way. Initially, my passion
					for computer science led me down the path of game development, eager
					to create captivating virtual worlds. 🎮 However, fate had a different
					plan for me, and I stumbled upon web development, where I found my
					true calling and fell head over heels in love with problem-solving.
					💻❤️
				</Text>
				<Text>
					Being a full-stack web developer allows me to combine my creativity
					with my analytical mindset, crafting innovative solutions that address
					the specific needs of various industries. 🚀 It's truly fulfilling to
					navigate through diverse challenges and provide tailor-made coding
					solutions that make a tangible impact. 💼🔧
				</Text>
				<Text>
					Through my portfolio, you'll get a glimpse into the projects I've
					worked on, the technologies I've mastered, and the passion I bring to
					every endeavor. I'm excited to share this digital space with you and
					demonstrate my dedication to creating seamless user experiences and
					scalable solutions. 🌟
				</Text>
				<Text>
					Thank you for visiting, and I'm looking forward to connecting with
					fellow enthusiasts, collaborators, and potential clients. Let's embark
					on this coding adventure together! 🚀🌐
				</Text>
			</Stack>
		</Box>
	);
};
