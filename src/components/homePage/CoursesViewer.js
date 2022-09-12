import React, { useContext, useLayoutEffect, useState } from "react";
import CarouselItem from "./CarouselItem";
import CourseCard from "./CourseCard";
import { renderToString } from "react-dom/server";
import { useSearchParams } from "react-router-dom";
import { homePageDataContext, homeDataFetchingStateContext } from "../../App";
function useWindowSize() {
	const [size, setSize] = useState([1000, 1000]);
	useLayoutEffect(() => {
		function updateSize() {
			setSize([window.innerWidth, window.innerHeight]);
		}
		window.addEventListener("resize", updateSize);
		updateSize();
		return () => window.removeEventListener("resize", updateSize);
	}, []);
	return size;
}

function filter(courses, searchWrd) {
	if (!searchWrd) return courses;
	let tmp = [];
	let wrd = searchWrd.toLowerCase();
	courses.forEach((course) => {
		if (course.title.toLowerCase().includes(wrd)) {
			//console.log(searchWrd);
			tmp.push(course);
		}
	});
	return tmp;
}
function draw_cursel_elements(Allcourses, width, searchWrd) {
	let courses = filter(Allcourses, searchWrd);
	let courses_cnt = courses.length;
	let card_width = 360;
	let tot_cards_per_item = Math.floor(width / card_width);
	if (tot_cards_per_item == 0) tot_cards_per_item = 1;
	let items_cnt = Math.ceil(courses_cnt / tot_cards_per_item);
	let las = 0;
	let cr_items = [];

	for (let i = 0; i < items_cnt; i++) {
		if (i == 0)
			cr_items.push(
				<CarouselItem
					key={i}
					is_active={"active"}
					sub_courses={courses.slice(
						las,
						Math.min(las + tot_cards_per_item, courses_cnt)
					)}
				></CarouselItem>
			);
		else
			cr_items.push(
				<CarouselItem
					key={i}
					sub_courses={courses.slice(
						las,
						Math.min(las + tot_cards_per_item, courses_cnt)
					)}
				></CarouselItem>
			);
		las += tot_cards_per_item;
	}

	return cr_items;
}
function Courses(props) {
	const [width, height] = useWindowSize();
	const [searchWord, setSearchWord] = useSearchParams();

	return (
		<div className="container-fluid w-auto mt-3 mx-2 mb-2 border overflow-visible">
			<div>
				<section className="mt-2">
					<h1 className="fs-4">{props.data.header}</h1>
				</section>
				<p className="w-75">{props.data.description}</p>
			</div>
			<div>
				<div>
					<button
						type="button"
						className="btn btn-light btn-outline-dark  explore-btn"
					>
						Explore {props.title}
					</button>
				</div>
			</div>

			<div
				className="container-fluid courses-viewer overflow-visible mt-3"
				id="courses-viewer"
			>
				<div
					id="carouselExampleControls"
					className="carousel slide container-fluid overflow-visible"
					data-bs-ride="carousel"
				>
					<div className="carousel-inner overflow-visible">
						{draw_cursel_elements(
							props.data.courses,
							width,
							searchWord.get("searchWord")
						)}
					</div>
					<button
						className="carousel-control-prev cursol-btn "
						type="button"
						data-bs-target="#carouselExampleControls"
						data-bs-slide="prev"
					>
						<span
							className="carousel-control-prev-icon"
							aria-hidden="false"
						></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button
						className="carousel-control-next cursol-btn "
						type="button"
						data-bs-target="#carouselExampleControls"
						data-bs-slide="next"
					>
						<span
							className="carousel-control-next-icon"
							aria-hidden="false"
						></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div>
		</div>
	);
}

export default Courses;
