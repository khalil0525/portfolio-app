import React, { useEffect, useState } from "react";
import { Image } from "@chakra-ui/react";
import styles from "./BreathingImage.module.css"; // Import the CSS file for the component

const images = ["white", "red", "blue", "green", "final"];
const animationSpeed = 500;
const breathingSpeed = 900;

const BreathingImage: React.FC = () => {
	const [currentImage, setCurrentImage] = useState(0);

	useEffect(() => {
		let animationInterval: NodeJS.Timeout;
		let transitionInterval: NodeJS.Timeout;

		const nextImage = () => {
			setCurrentImage((prevImage) => (prevImage + 1) % images.length);
		};

		const startAnimation = () => {
			animationInterval = setInterval(() => {
				nextImage();
			}, animationSpeed);
		};

		const startBreathing = () => {
			transitionInterval = setTimeout(() => {
				startAnimation();
			}, breathingSpeed);
		};

		startBreathing();

		return () => {
			clearInterval(animationInterval);
			clearTimeout(transitionInterval);
		};
	}, [currentImage]);

	return (
		<div className={styles.container}>
			{images.map((image, index) => (
				<Image
					key={index}
					src={`/img/logos/${image}-logo.png`}
					alt={`Image ${image}`}
					width={300}
					height={300}
					className={`${styles.image} ${
						currentImage === index ? styles.visible : ""
					}`}
				/>
			))}
		</div>
	);
};

export default BreathingImage;
