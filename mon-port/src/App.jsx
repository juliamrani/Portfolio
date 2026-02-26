import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "@fontsource/roboto"; 
import Second from './pages/Second.jsx';
import Welcome from './pages/Welcome.jsx';

function App() {

	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route path="/second" element={<Second />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
