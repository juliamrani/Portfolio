import { Box, Typography, Container, Paper } from "@mui/material";
import { motion } from "framer-motion";
import Photo2 from "/src/assets/Photo2.png";
import PhotoHome from "/src/assets/PhotoHome.jpg"

export default function Home() {
	return (
	<Box
		sx={{
			position: "relative",
			height: "40vh",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			backgroundImage: `url(${PhotoHome})`,
			backgroundSize: "cover",
			backgroundPosition: "center",
		}}
    >	

		<Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
			<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				py: 19,
				px: 8,
				gap: 6,
				flexDirection: { xs: "column", sm: "row", md: "row" },
				textAlign: { xs: "center", sm: "left", md: "left" }
			}}
			>
				
			<motion.div
				initial={{ opacity: 0, x: -80 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 1 }}
			>
				<Typography
				variant="h1"
				sx={{
					fontWeight: 700,
					color: "#133d49",
					fontSize: { xs: 45, sm: 50, md: 70 }
				}}
				>
				Julia El Amrani
				</Typography>

				<Typography
				sx={{
					color: "#133d49",
					mt: 2,
					fontSize: { xs: 18, sm: 23, md: 27 },
					maxWidth: 600
				}}
				>
				Application Developer Student passionate about building modern and intuitive web experiences.
				</Typography>
			</motion.div>

			</Box>
		</Container>


		</Box>
	);
}
