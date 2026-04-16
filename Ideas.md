https://helloalmaz.com/
https://avinash-3d.web.app/
https://www.behance.net/gallery/243608105/PORFOLIO-2026?tracking_source=search_projects|design+portfolio&l=18

code pen : 
https://codepen.io/fand/pen/azmPjqd
https://codepen.io/Majoramari/pen/pvbzpoa

Mettre le background mer4.jpeg pour Contact ou vision
```
import { motion } from "framer-motion";
import Photo2 from "/src/assets/Photo2.png";
import mer4 from "./mer4.jpeg";

export default function Home() {
return (
	<Box
		sx={{
			position: "relative",
			height: "100vh",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			backgroundImage: `url(${mer4})`,
			backgroundSize: "cover",
			backgroundPosition: "center",
		}}
    >	


		<Box
			sx={{
			position: "absolute",
			inset: 0,
			background: "linear-gradient(rgba(10,42,51,0.6), rgba(10,42,51,0.8))"
			}}
		/>
```
