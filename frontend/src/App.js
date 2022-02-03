import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameInterface from "./pages/GameInterface";
import LoginPage from "./pages/LoginPage";
import BuildYourOwn from "./pages/BuildYourOwn";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="game" element={<GameInterface />} />
				<Route path="login" element={<LoginPage />} />
				<Route path="buildyourown" element={<BuildYourOwn />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
