import "./App.css";
import React, { useState, useEffect, useContext } from "react";
import NavBar from "./components/homePage/NavBar";
import MainPageHeader from "./components/homePage/MainPageHeader";
import Courses from "./components/homePage/Courses";
import { Route, Routes } from "react-router-dom";
import {
	read_home_data,
	read_courses_data,
} from "./controllers/dataController";
import CoursesNavBar from "./components/homePage/CoursesNavBar";
import Footer from "./components/footer/Footer";
import MainPageCourse from "./components/course/MainPageCourse";

export const homePageDataContext = React.createContext(1);
export const homeDataFetchingStateContext = React.createContext(1);
export const pecificCoursesDataContext = React.createContext(1);
export const specificCoursesFetchingStateContext = React.createContext(1);

function App() {
	const [homePageD, sethomePageD] = useState();
	const [dataFetching, setdataFetching] = useState("loading");

	const [specificCoursesData, setSpecificCoursesData] = useState();
	const [specificCoursesFetching, setSpecificCoursesFetching] =
		useState("loading");
	useEffect(() => {
		read_home_data(setdataFetching, sethomePageD);
		read_courses_data(setSpecificCoursesFetching, setSpecificCoursesData);
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
							<homePageDataContext.Provider value={homePageD}>
								<homeDataFetchingStateContext.Provider value={dataFetching}>
									<Courses></Courses>
								</homeDataFetchingStateContext.Provider>
							</homePageDataContext.Provider>
						</>
					}
				/>
				<Route
					path="/Course/:courseId"
					element={
						<specificCoursesFetchingStateContext.Provider
							value={specificCoursesFetching}
						>
							<pecificCoursesDataContext.Provider value={specificCoursesData}>
								<MainPageCourse></MainPageCourse>
							</pecificCoursesDataContext.Provider>
						</specificCoursesFetchingStateContext.Provider>
					}
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
			<Footer></Footer>
		</div>
	);
}

export default App;
