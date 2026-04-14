import { Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import Photo2 from "/src/assets/Photo2.png";

export default function Home() {
	return (
		<Box>
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
				initial={{ opacity: 0, x: 80 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ duration: 1 }}
			>
				<Box
				component="img"
				src={Photo2}
				sx={{
					width: { xs: 180, sm: 220, md: 280 },
					borderRadius: "20px",
					boxShadow: "0 15px 40px rgba(0,0,0,0.5)"
				}}
				/>
			</motion.div>

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
					fontSize: { xs: "2.5rem", md: "4rem" }
				}}
				>
				Julia El Amrani
				</Typography>

				<Typography
				sx={{
					color: "#133d49",
					mt: 2,
					fontSize: { xs: "1.2rem", md: "1.5rem" },
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
