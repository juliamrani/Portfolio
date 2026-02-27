import { Box, Typography } from "@mui/material";
import Picv from "/public/Picv1.png";

export default function Home() {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				minHeight: "35vh",
				justifyContent: "center",
				gap: 6,
				p: 3,
				flexDirection: {
					xs: "column",
					md: "row"
				}
			}}
		>

			<Box
				component="img"
				src={Picv}
				sx={{
					width: 230,
					borderRadius: "50%",
					background: "rgba(255,255,255,0.08)",
					p: 1
				}}
			/>

			<Box
				sx={{
					backgroundColor: "rgba(255,255,255,0.4)",
					backdropFilter: "blur(10px)",
					borderRadius: 3,
					p: 3,
					maxWidth: 400
				}}
			>
				<Typography
					variant="h5"
					sx={{
						color: "#000",
						fontWeight: 300,
						fontSize: {
							xs: "1rem",
							sm: "1.3rem",
							md: "1.6rem"
						}
					}}
				>
					Petite phrase ici sdcagzekhc ushdzi hbsbzzj
				</Typography>
			</Box>
		</Box>
	);
}