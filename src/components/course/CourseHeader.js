import React from "react";

function CourseHeader(props) {
	let title = props.data.title;
	let rate = props.data.rate;
	let ratecnt = props.data.ratingCount;
	let partic = props.data.enrollCount;
	let price = props.data.price;
	let introduction = props.data.Introduction;
	return (
		<div className=" container-fluid bg-black text-white">
			<div className="container col-4 w-50 offset-2 ">
				<div className="m-2 pt-3">
					<span className="footer-font-imp mutable-link tiny-font fw-semibold">
						Development
					</span>
					{"  >  "}
					<span className="footer-font-imp mutable-link tiny-font fw-semibold">
						ProgrammingLanguage
					</span>
					{"  >  "}
					<span className="footer-font-imp mutable-link tiny-font fw-semibold">
						Python
					</span>
				</div>
				<div className="fs-2 fw-bold p-2">{title}</div>
				<div className="fs-5 p-2 ">{introduction}</div>
				<div className="p-2">
					<span className=" fs-6 fw-semibold text-warning text-nowrap tiny-font">
						{rate}
					</span>
					<span className="fa fa-star checked "></span>
					<span className="tiny-font mutable-link footer-font-imp">
						{" "}
						({ratecnt} ratings){" "}
					</span>
					<span className="tiny-font"> {partic} students </span>
				</div>
				<div className="p-2 pb-5 tiny-font">
					Created by{" "}
					<span className="footer-font-imp"> {props.data.instructor.name}</span>{" "}
				</div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
}

export default CourseHeader;
