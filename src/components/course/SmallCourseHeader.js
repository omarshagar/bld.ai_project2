import React from "react";

function SmallCourseHeader(props) {
	let title = props.data.title;
	let rate = props.data.rate;
	let ratecnt = props.data.ratingCount;
	let partic = props.data.enrollCount;
	let price = props.data.price;
	let introduction = props.data.Introduction;
	return (
		<div className=" container-fluid bg-black text-white d-block d-xl-none">
			<div className="container col-auto w-100 p-4 justify-content-center">
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
				<div className=" justify-content-center  ">
					<img
						className="small-course-header-img "
						src={props.data.image}
					></img>
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
				<div className="p-2 pb-2 tiny-font">
					Created by{" "}
					<span className="footer-font-imp">
						{" "}
						{props.data.instructors.name}
					</span>{" "}
				</div>
				<div className="course-main-page-right-card-lower-element container container justify-content-center  ">
					<div className="text-start fs-2 fw-bold p-2 text-light ">
						{props.data.price}$
					</div>
					<button
						type="button"
						class="btn course-main-page-right-card-upper-btn mb-2"
					>
						Add to cart
					</button>
					<div className="tiny-font text-center p-3">
						30-Day Money-Back Guarantee
					</div>
					<div className="container row justify-content-center">
						<div className="col-4 tiny-font text-decoration-underline fw-bold p-3">
							Share
						</div>
						<div className="col-4 tiny-font text-decoration-underline fw-bold p-3">
							Gift this course
						</div>
						<div className="col-4 tiny-font text-decoration-underline fw-bold p-3">
							Apply Coupon
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SmallCourseHeader;
