import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import '@fontsource/roboto';
import Home from './pages/HomePage.jsx';
import Landing from './pages/LandingPage.jsx';
import './global.css';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
