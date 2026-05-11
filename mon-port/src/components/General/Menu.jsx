import { Box, Button, Divider } from "@mui/material";

export default function Menu() {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				overflow: "hidden",
				px: { xs: 3, sm: 6, md: 10 },
				py: { xs: 8, sm: 12, md: 16 },
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "flex-start",
					gap: { xs: 1, sm: 2, md: 3 },
				}}
			>
				{["About", "Projects", "My vision", "Contact"].map((item) => (
					<Box key={item}>
						<Button
							sx={{
								color: "#133d49",
								fontFamily: "'Bungee', cursive",
								fontSize: { xs: "4rem", sm: "6rem", md: "8rem" },
								lineHeight: 0.92,
								letterSpacing: "-0.01em",
								textTransform: "none",
								whiteSpace: "nowrap",
								background: "none",
								padding: 0,
								minWidth: 0,
								display: "block",
								transition: "color 0.18s ease",
								"&:hover": {
									color: "#226c67",
									background: "none",
								},
							}}
						>
							{item}
						</Button>
					</Box>
				))}
			</Box>


			<Divider
				sx={{
					borderColor: "#133d49",
					opacity: 0.3,
					mt: 16,
					}}
				/>
		</Box>
	);
}