import React from "react";
import DescriptionViewer from "./DescriptionViewer";

function Item(props) {
	return (
		<div className="container row p-2">
			<div className="col-2">
				<img width={"15"} src={props.src}></img>
			</div>
			<div className="col-8 fs-6 fw-bold">{props.title}</div>
		</div>
	);
}
function Instructor(props) {
	return (
		<>
			<div className="pt-4">
				<a className="fs-3 fw-bold "> {props.data.name}</a>
			</div>
			<div className="fs-4 text-secondary">{props.data.intro}</div>

			<div className="container-flex row">
				<div className="col-6">
					<img src={props.data.image} class="rounded-circle"></img>
				</div>
				<div className="col-6">
					<Item
						src="https://cdn-icons-png.flaticon.com/512/1828/1828961.png"
						title={`${props.data.rate} Instructor Rating`}
					></Item>
					<Item
						src="https://cdn-icons-png.flaticon.com/512/1365/1365481.png"
						title={`${props.data.reviewsNumber} Reviews`}
					></Item>
					<Item
						src="https://cdn-icons-png.flaticon.com/512/681/681494.png"
						title={`${props.data.studentsNumber} Students`}
					></Item>
					<Item
						src="https://cdn-icons-png.flaticon.com/512/527/527995.png"
						title={`${props.data.coursesNumber} Courses`}
					></Item>
				</div>
			</div>
			<DescriptionViewer data={props.data.description}></DescriptionViewer>
		</>
	);
}
function draw(all) {
	let ret = [];
	for (let i = 0; i < all.length; i++) {
		ret.push(<Instructor data={all[i]} key={i}></Instructor>);
	}
	return ret;
}
function Instructors(props) {
	return (
		<div className="container-xl-flex container-fluid mt-4   course-main-page-main-container offset-xl-2">
			<div className="fw-bold fs-2 py-4">Instructors</div>
			{draw(props.data)}
		</div>
	);
}

export default Instructors;
