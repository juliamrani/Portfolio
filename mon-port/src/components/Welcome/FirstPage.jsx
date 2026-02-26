import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function FirstPage() {
	const navigate = useNavigate();

	return (
		<Box
			sx={{
				position: "relative",
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				textAlign: "center",
				gap: 4,
				overflow: "hidden",
			}}
		>
			<video
				autoPlay
				muted
				loop
				playsInline
				style={{
					position: "absolute",
					top: 0,
					left: 0,
					width: "100%",
					height: "100%",
					objectFit: "cover",
					zIndex: -2,
				}}
				// onEnded pour ne pas avoir de pause entre chaque coupure
			>
				<source src="/video1.webm" type="video/webm" />
			</video>

			<Typography variant="h2" sx={{ fontWeight: 700, color: "white" }}>
				Welcome to my Portfolio !
			</Typography>

			<Typography variant="h4" sx={{ color: "white" }}>
				Let's be creative together
			</Typography>

			
		</Box>
	);
}

export default FirstPage;