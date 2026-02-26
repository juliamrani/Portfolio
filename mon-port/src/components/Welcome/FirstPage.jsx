import { Box, Typography } from "@mui/material";
import { useRef, useEffect } from "react";
import Bouton from "./Bouton";

export default function FirstPage() {
	const videoRef = useRef(null);

	useEffect(() => {
		videoRef.current?.play();
	}, []);

	return (
		<Box
			sx={{
				position: "relative",
				minHeight: "100vh",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				textAlign: "center",
				overflow: "hidden",
				px: 2,
			}}
		>
			{/* VIDEO */}
			<video
				ref={videoRef}
				autoPlay
				muted
				playsInline
				style={{
					position: "absolute",
					inset: 0,
					width: "100%",
					height: "100%",
					objectFit: "cover",
					zIndex: -2,
				}}
				onEnded={() => {
					videoRef.current.currentTime = 0;
					videoRef.current.play();
				}}
			>
				<source src="/video1.webm" type="video/webm" />
			</video>

			{/* OVERLAY PRO */}
			<Box
				sx={{
					position: "absolute",
					inset: 0,
					background:
						"linear-gradient(to bottom, rgba(0,0,0,0.55), rgba(0,0,0,0.75))",
					zIndex: -1,
				}}
			/>

			{/* HERO CONTENT */}
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: 3,
					maxWidth: 700,
					animation: "fadeUp 1.2s ease forwards",
					opacity: 0,
					transform: "translateY(30px)",
					"@keyframes fadeUp": {
						to: { opacity: 1, transform: "translateY(0)" },
					},
				}}
			>
				<Typography
					variant="h2"
					sx={{
						fontWeight: 700,
						color: "#e3e1cf",
						letterSpacing: "-0.02em",
					}}
				>
					Welcome to my Portfolio
				</Typography>

				<Typography
					variant="h5"
					sx={{
						color: "#e3e1cf",
						fontWeight: 300,
					}}
				>
					Petite phrase ici sdcagzekhc ushdzi hbsbzzj
				</Typography>

				<Bouton />
			</Box>
		</Box>
	);
}