import { Box, Toolbar } from "@mui/material";
import Navbar from "../components/Second/Navbar.jsx";
import Home from "../components/Second/Home/Home.jsx";
import About from "../components/Second/About/About.jsx";
import Menu from "../components/Second/Menu";


export default function Second() {
	return (
		<Box >
			<Home/>
			<Menu/>
			<About/>
		</Box>
	);
}