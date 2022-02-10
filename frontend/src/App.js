import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameInterfacePage from "./pages/GameInterfacePage";
import LoginPage from "./pages/LoginPage";
import BuildYourOwnPage from "./pages/BuildYourOwnPage";
import SignupPage from "./pages/SignupPage";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="signup" element={<SignupPage />} />
				<Route path="login" element={<LoginPage />} />
				<Route path="game" element={<GameInterfacePage />} />
				<Route path="buildyourown" element={<BuildYourOwnPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
