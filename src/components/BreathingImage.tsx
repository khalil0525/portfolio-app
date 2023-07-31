import React, { useEffect, useState, useRef } from "react";
import { Image } from "@chakra-ui/react";
import styles from "./BreathingImage.module.css"; // Import the CSS file for the component

const images = ["white", "red", "blue", "green", "final"];
const animationSpeed = 500;
const breathingSpeed = 900;

const BreathingImage: React.FC = () => {
	const [currentImage, setCurrentImage] = useState(0);
	const [shouldAnimate, setShouldAnimate] = useState(true);
	const animationIntervalRef = useRef<NodeJS.Timeout | null>(null);
	const transitionIntervalRef = useRef<NodeJS.Timeout | null>(null);

	const nextImage = () => {
		setCurrentImage((prevImage) => (prevImage + 1) % images.length);
	};

	useEffect(() => {
		const startAnimation = () => {
			if (animationIntervalRef.current) {
				console.log("Clearing animationIntervalRef");
				clearInterval(animationIntervalRef.current);
			}

			animationIntervalRef.current = setInterval(() => {
				nextImage();
			}, animationSpeed);
		};

		const startBreathing = () => {
			if (transitionIntervalRef.current) {
				console.log("Clearing transitionIntervalRef");
				clearTimeout(transitionIntervalRef.current);
			}

			transitionIntervalRef.current = setTimeout(() => {
				if (currentImage === images.length - 1) {
					// If the current image is the last one, stop the animation
					setShouldAnimate(false);
				} else {
					// Otherwise, start the breathing animation again
					startAnimation();
				}
			}, breathingSpeed);
		};

		if (shouldAnimate) {
			startBreathing();
		}

		return () => {
			if (animationIntervalRef.current) {
				console.log("Clearing animationIntervalRef in cleanup");
				clearInterval(animationIntervalRef.current);
			}
			if (transitionIntervalRef.current) {
				console.log("Clearing transitionIntervalRef in cleanup");
				clearTimeout(transitionIntervalRef.current);
			}
		};
	}, [currentImage, shouldAnimate]);

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
