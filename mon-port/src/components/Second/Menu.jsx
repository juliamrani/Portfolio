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
				zIndex: 2,
				//background: "#e3dfca"
			}}
		>
			<Box
				style={bowlbyFont}
				sx={{
					display: "flex",
					
					flexDirection: "row",
					gap: 10,
					px: 8,
					py: 28,
				}}
			>
				{["About", "Projects", "Contact"].map((item) => (
					<Button
						key={item}
						sx={{
							color: "#133d49",
							fontWeight: 900,
							fontSize: {
							xs: "3.5rem",
							sm: "4rem",
							md: "4.5rem"
							},
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