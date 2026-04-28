import { Box, Typography, Container, Paper } from "@mui/material";
import { motion } from "framer-motion";
import PhotoHome3 from "/src/assets/PhotoHome3.jpg"

export default function Home() {
	return (
		<Box
			sx={{
				backgroundImage: `url(${PhotoHome3})`,
				position: "relative",
				height: "100vh",
				display: "flex",
				alignItems: {xs: 'flex-start', md: 'center'},
				px: {xs: 2, md: 6},
				pt: {xs: 10, md: 0},
				justifyContent: "center",
				backgroundSize: "cover",
				backgroundPosition: { 
				xs: 'right center',
				md: 'center center'
				},
				backgroundAttachment: "scroll",
			}}
		>

		<Box
			sx={{
			position: "absolute",
			inset: 0,
			background: "linear-gradient(rgba(10, 42, 51, 0.1), rgba(10, 42, 51, 0.18))"
			}}
		/>

		<Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
			<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				py: 19,
				px: 8,
				gap: 6,
				flexDirection: {xs: "column", sm: "row", md: "row"},
				textAlign: {xs: "center", sm: "left", md: "left"}
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
					color: "#000000",
					fontSize: {
					xs: "3rem", sm: "3.7rem", md: "4.5rem" },
				}}
				>
				Julia El Amrani
				</Typography>

				<Typography
				sx={{
					color: "#000000",
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
