import { Box, Button } from "@mui/material";
//@import url=('https://fonts.googleapis.com/css2?family=Bowlby+One&display=swap');

const bowlbyFont = {
  fontFamily: "'Bowlby One', cursive"
};

export default function Menu () {
	return (
		<Box 
			sx={{
				display: "flex",
				justifyContent: "center",
			}}
		>
			<Box
				style={bowlbyFont}
				sx={{
					display: "flex",
					
					flexDirection: "column",
					"@media (min-width:816px)": {
						flexDirection: "row"	},
					gap: 10,
					px: 2,
					py: 28,
				}}
			>
				{["About", "Projects", "My vision", "Contact"].map((item) => (
					<Button
						key={item}
						sx={{
							color: "#133d49",
							fontWeight: 900,
							fontSize: {
							xs: "2.6rem", sm: "2.8rem", md: "3.3rem" },
							textTransform: "none",
							"&:hover": {
								background: "rgba(116, 171, 190, 0.6)",
							},
						}}
					>
						{item}
					</Button>
				))}
			</Box>
		</Box>
	);
};