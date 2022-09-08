import React from "react";
import { useSearchParams } from "react-router-dom";
function draw_stars(rate) {
	let stars = [];
	rate = Math.floor(rate);
	for (let i = 0; i < 5; i++) {
		if (i < rate) {
			stars.push(<span key={i} className="fa fa-star checked"></span>);
		} else stars.push(<span key={i} className="fa fa-star"></span>);
	}
	return stars;
}
function CourseCard(props) {
	let default_image = process.env.PUBLIC_URL + "/images/index.png";

	return (
		<div className="card col mx-1 course-card">
			<img
				src={props.data.image ? props.data.image : default_image}
				alt="course_img"
				className="card-img-top"
			></img>
			<div className="card-body d-flex flex-column  justify-content-center ">
				<h5 className="card-title fs-6 fw-semibold text-wrap ">
					{props.data.title}
				</h5>
				<p className="card-subtitle fs-6 fw-lighter text-wrap ">
					{props.data.instructors[0].name}
				</p>
				<div className="row ">
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
					/>
					<div className="col-1 fs-6 fw-semibold text-warning text-nowrap">
						{Math.floor(props.data.rating)}
					</div>
					<div className="col-6 text-nowrap">
						{draw_stars(props.data.rating)}
					</div>
					<div className="col-3 fs-6 text-nowrap fw-lighter d-flex justify-content-start">
						({props.data.raters || 1000})
					</div>
				</div>
				<div>
					<b>{props.data.price}$</b>
				</div>
			</div>
		</div>
	);
}

export default CourseCard;
