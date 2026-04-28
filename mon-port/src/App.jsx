import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "@fontsource/roboto"; 
import General from './pages/General.jsx';
import Welcome from './pages/Welcome.jsx';
import "./global.css"

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route path="/general" element={<General />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
