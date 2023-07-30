import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Image } from "@chakra-ui/react";

const images = ["white", "red", "blue", "green", "final"];
const animationSpeed = 3000;
const breathingSpeed = 2000;

const BreathingImage: React.FC = () => {
	const [currentImage, setCurrentImage] = useState(0);

	useEffect(() => {
		let animationTimeout: NodeJS.Timeout;

		// Start the breathing animation
		const startBreathing = () => {
			setCurrentImage((prevImage) => (prevImage + 1) % images.length);
			animationTimeout = setTimeout(startBreathing, breathingSpeed);
		};

		// Start the transition to the next photo after the breathing animation
		const startTransition = () => {
			setCurrentImage((prevImage) => (prevImage + 1) % images.length);
			if (currentImage !== images.length - 1) {
				animationTimeout = setTimeout(startTransition, animationSpeed);
			}
		};

		// Call the breathing function
		startBreathing();

		// Start the transition to the next photo after the breathing animation completes
		setTimeout(() => {
			clearTimeout(animationTimeout);
			startTransition();
		}, breathingSpeed);

		// Clean up the timeout on component unmount
		return () => {
			clearTimeout(animationTimeout);
		};
	}, [currentImage]);

	return (
		<motion.div
			animate={{ scale: [1, 1.2, 1] }}
			transition={{ duration: 2, repeat: Infinity }}
		>
			<Image
				src={`/img/logos/${images[currentImage]}-logo.png`}
				alt={`Image ${images[currentImage]}`}
				width={300}
				height={300}
				style={{
					animation: `breathe ${breathingSpeed / 1000}s infinite`,
					transformOrigin: "center",
				}}
			/>
		</motion.div>
	);
};

export default BreathingImage;
