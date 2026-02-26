import { Box } from "@mui/material";
import Navbar from "../components/Second/Navbar.jsx";

export default function Second() {
	return (
		<Box
			sx={{
				minHeight: "100vh",
				background: "#e3e1cf",
			}}
		>
			<Navbar />
		</Box>
	);
}