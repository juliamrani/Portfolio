import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Bouton() {
	const navigate = useNavigate();

	return (
		<Box>
			<Button
				variant="contained"
				onClick={() => navigate("/second")}
				sx={{
					mt: 8,
					color: "white",
					fontSize: "1rem",
					padding: "12px 28px",
					borderRadius: "14px",

					background: "rgba(255, 255, 255, 0.08)",
					backdropFilter: "blur(12px)",
					WebkitBackdropFilter: "blur(12px)",
					border: "1px solid rgba(255, 255, 255, 0.2)",
					boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",

					opacity: 0,
					transform: "translateY(30px)",
					animation: "fadeSlideUp 2s ease forwards",
					animationDelay: "1.5s", 

					transition: "all 0.4s ease",

					"&:hover": {
						background: "rgba(255, 255, 255, 0.18)",
						boxShadow: "0 12px 40px rgba(0, 0, 0, 0.45)",
						transform: "translateY(-3px)",
					},

					"@keyframes fadeSlideUp": {
						to: {
							opacity: 1,
							transform: "translateY(0)",
						},
					},
				}}
			>
				Click to discover my journey
			</Button>
		</Box>
	);
}

export default Bouton;