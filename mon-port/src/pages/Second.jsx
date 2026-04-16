import { Box, Toolbar } from "@mui/material";
//import Navbar from "../components/Second/Navbar.jsx";
import Home from "../components/Second/Home/Home.jsx";
import About from "../components/Second/About/About.jsx";
import Menu from "../components/Second/Menu";


export default function Second() {
	return (
		<Box 
			sx={{
				//background: "linear-gradient(to right, #123944, #264d58)",
				//background: "linear-gradient(to bottom, #efe7c2, #6a91a4, #639390)",
				
			}}
		>
			<Home/>
			<Menu/>
			<About/>
		</Box>
	);
}