import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";
import MainPageHeader from "./components/MainPageHeader";
import Courses from "./components/Courses";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route
					path="/"
					element={
						<>
							<MainPageHeader /> <Courses />
						</>
					}
				/>
				<Route path="/ff" element={<>ff</>} />

				<Route
					path="*"
					element={
						<div>
							<h1>Page Not Found 404</h1>
						</div>
					}
				></Route>
			</Routes>
		</div>
	);
}

export default App;
