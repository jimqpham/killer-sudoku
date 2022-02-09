import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameInterfacePage from "./pages/GameInterfacePage";
import LoginPage from "./pages/LoginPage";
import BuildYourOwnPage from "./pages/BuildYourOwnPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="game" element={<GameInterfacePage />} />
				<Route path="login" element={<LoginPage />} />
				<Route path="buildyourown" element={<BuildYourOwnPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
