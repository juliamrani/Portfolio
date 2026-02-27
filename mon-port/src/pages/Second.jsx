import { Box, Toolbar } from "@mui/material";
import Navbar from "../components/Second/Navbar.jsx";
import Home from "../components/Second/Home/Home.jsx";


export default function Second() {
	return (
		<Box
			sx={{
				minHeight: "100vh",
				background: "linear-gradient(to right, #3F6F7C, #1F4E5F)",
			}}
		>
			<Navbar/>
			<Toolbar/>
			<Home/>
		</Box>
	);
}