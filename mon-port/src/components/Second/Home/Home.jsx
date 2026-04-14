import { Box, Typography } from "@mui/material";
import Photo2 from "/src/assets/Photo2.png";
import mer4 from "./mer4.jpeg";

export default function Home() {
	return (
		<Box
			sx={{
				position: "relative",
				py: { xs: 8, md: 12 },
				backgroundImage: `url(${mer4})`,
				backgroundSize: "cover",
				backgroundPosition: "center"
				
			}}
		>

			<Box
				sx={{
					position: "absolute",
					inset: 0,
					background: "rgba(10,42,51,0.35)"
				}}
			/>

			<Box
				sx={{
					position: "relative",
					//zIndex: 1,
					maxWidth: 900,
					mx: "auto",
					px: 4
				}}
			>

				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						gap: { xs: 3, md: 6 },
						p: { xs: 3, md: 4 },
						background: "rgba(255,255,255,0.12)",
						backdropFilter: "blur(14px)",
						border: "1px solid rgba(255,255,255,0.18)",

						"@media (max-width:600px)": {
							flexDirection: "column",
							textAlign: "center"
						}
					}}
				>

					<Box
						component="img"
						src={Photo2}
						sx={{
							width: "clamp(150px, 25vw, 250px)",
							//borderRadius: 50,
						}}
					/>


					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "flex-start",
							textAlign: "left"
						}}
					>
						<Typography
							variant="h2"
							sx={{
							fontWeight: 700,
							color: "#E6E2C8",
							fontSize: {
								xs: "2.6rem",
								sm: "3.3rem",
								md: "4.3rem"
							}
							}}
						>
							Julia El Amrani
						</Typography>

						<Typography
							variant="h2"
							sx={{
							color: "#e3e1cf",
							fontWeight: 300,
							lineHeight: 1.6,
							fontSize: {
								xs: "1.1rem",
								sm: "1.3rem",
								md: "1.5rem"
							}
							}}
						>
							Application Developer Student
						</Typography>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}