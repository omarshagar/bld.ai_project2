import React, { useState } from "react";
import CoursesViewer from "./CoursesViewer";
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
function read_data() {
	let data = require("../json-server/home_page.json");
	return data;
}
let data = read_data();
function CoursesNavBar() {
	const [currentCategory, setCurrentCategory] = useState("Python");

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

			<CoursesViewer
				data={data[currentCategory]}
				title={currentCategory}
			></CoursesViewer>
		</>
	);
}

export default CoursesNavBar;
