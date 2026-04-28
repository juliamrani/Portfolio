import { Box, Toolbar } from "@mui/material";
//import Navbar from "../components/General/Navbar.jsx";
import Home from "../components/General/Home/Home.jsx";
import About from "../components/General/About/About.jsx";
import Menu from "../components/General/Menu";


export default function General() {
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