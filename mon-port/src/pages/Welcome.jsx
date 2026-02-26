import { Box } from "@mui/material";
import FirstPage from "../components/Welcome/FirstPage.jsx";
import Bouton from "../components/Welcome/Button.jsx";

export default function Welcome() {
  return (
	<Box
	  sx={{
		position: "relative",
		minHeight: "100vh",
		overflow: "hidden",
	  }}
	>
		<FirstPage />

		<Box
			sx={{
				position: "absolute",
				bottom: "10%",
				width: "100%",
				display: "flex",
				justifyContent: "center",
				zIndex: 2,
			}}
		>
			<Bouton />
		</Box>
	</Box>
  );
}