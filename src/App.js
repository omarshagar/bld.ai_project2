import "./App.css";
import React, { useState, useEffect, useContext } from "react";
import NavBar from "./components/homePage/NavBar";
import MainPageHeader from "./components/homePage/MainPageHeader";
import Courses from "./components/homePage/Courses";
import { Route, Routes } from "react-router-dom";
import { get_home_page_data } from "./controllers/dataController";
import CoursesNavBar from "./components/homePage/CoursesNavBar";
import Footer from "./components/footer/Footer";
import MainPageCourse from "./components/course/MainPageCourse";
const read_data = async (setdataFetching, sethomePageD, homePageD) => {
	try {
		await get_home_page_data()
			.then((res) => {
				setdataFetching("done");
				return res;
			})
			.then((res) => {
				sethomePageD(res);
				return res;
			});
	} catch (e) {
		console.log(e);
	}

	// setdataFetching("done");
};
export const homePageDataContext = React.createContext(1);
export const homeDataFetchingStateContext = React.createContext(1);

function App() {
	const [homePageD, sethomePageD] = useState("d");
	const [dataFetching, setdataFetching] = useState("loading");
	const HomeDataFetchingStateProvider = homeDataFetchingStateContext.Provider;
	const HomePageDataProvider = homePageDataContext.Provider;
	useEffect(() => {
		read_data(setdataFetching, sethomePageD, homePageD);
	}, []);
	return (
		<div className="App">
			<NavBar />
			<Routes>
				<Route
					path="/"
					element={
						<>
							<MainPageHeader />
							<HomePageDataProvider value={homePageD}>
								<HomeDataFetchingStateProvider value={dataFetching}>
									<Courses></Courses>
								</HomeDataFetchingStateProvider>
							</HomePageDataProvider>
						</>
					}
				/>
				<Route
					path="/Course/:courseId"
					element={<MainPageCourse></MainPageCourse>}
				/>

				<Route
					path="*"
					element={
						<div>
							<h1>Page Not Found 404</h1>
						</div>
					}
				></Route>
			</Routes>
			{/* <Footer></Footer> */}
		</div>
	);
}

export default App;
