import { Box, Toolbar } from "@mui/material";
//import Navbar from "../components/Second/Navbar.jsx";
import Home from "../components/Second/Home/Home.jsx";
import About from "../components/Second/About/About.jsx";
import Menu from "../components/Second/Menu";


export default function Second() {
	return (
		<Box>
			<Home/>

			<Box
			sx={{
				//background: "linear-gradient(to right, #123944, #264d58)",
				background: "linear-gradient(to bottom, #f8f4e3, #b5cad4, #8cb8b5)",
				
			}}
			>
				<Menu/>
				<About/>
			</Box>
			
		</Box>
	);
}