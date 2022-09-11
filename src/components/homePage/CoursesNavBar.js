import React, { useState, useEffect, useContext } from "react";
import CoursesViewer from "./CoursesViewer";
import { homePageDataContext, homeDataFetchingStateContext } from "../../App";
import Spinner from "../Spinner";

const categoties = [
	"Python",
	"Exel",
	"WebDevelopment",
	"JavaScript",
	"Aws",
	"Drawing",
	"DataScience",
];
function addNavBarList(currentCategory, setCurrentCategory) {
	let items = [];

	for (let i = 0; i < categoties.length; i++) {
		let tmp = 0;
		tmp = (
			<li
				key={i}
				className={
					"nav-item" +
					(categoties[i] === currentCategory ? " active fw-bold" : "")
				}
			>
				<a
					onClick={() => {
						setCurrentCategory(categoties[i]);
					}}
					className="nav-link category-clickable-link"
					aria-current="page"
					href="javascript:void(0)"
					role="button"
				>
					{categoties[i]}
				</a>
			</li>
		);
		items.push(tmp);
	}
	return items;
}
// const read_data = async (setdataFetching, sethomePageD, homePageD) => {
// 	await get_home_page_data()
// 		.then((res) => {
// 			setdataFetching("done");
// 			return res;
// 		})
// 		.then((res) => {
// 			sethomePageD(res);
// 			return res;
// 		});

// 	// setdataFetching("done");
// };
function CoursesNavBar() {
	const isLoading = useContext(homeDataFetchingStateContext);
	const homePageData = useContext(homePageDataContext);
	// const [homePageD, sethomePageD] = useState("d");
	// const [dataFetching, setdataFetching] = useState("loading");
	const [currentCategory, setCurrentCategory] = useState("Python");

	// useEffect(() => {
	// 	read_data(setdataFetching, sethomePageD, homePageD);
	// }, []);

	return (
		<>
			<nav className="navbar navbar-expand-md bg-bg-white">
				<div className="container-fluid">
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarNav"
						aria-controls="navbarNav"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarNav">
						<ul className="navbar-nav" id="category-navbar-list">
							{addNavBarList(currentCategory, setCurrentCategory)}
						</ul>
					</div>
				</div>
			</nav>
			{isLoading === "done" ? (
				<CoursesViewer
					data={homePageData[currentCategory]}
					title={currentCategory}
				></CoursesViewer>
			) : (
				<Spinner color="dark"></Spinner>
			)}
		</>
	);
}

export default CoursesNavBar;
