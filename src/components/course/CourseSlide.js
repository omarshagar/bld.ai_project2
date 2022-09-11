import React from "react";

function CourseSlide(props) {
	let title = props.data.title;
	let rate = props.data.rate;
	let ratecnt = props.data.ratingCount;
	let partic = props.data.enrollCount;
	let price = props.data.price;
	return (
		<div className="container-fluid course-main-page-slider">
			<div className=" bg-black text-white p-3 row  ">
				<div className="d-none d-sm-block col-8 ">
					<div className="fw-bold">{title}</div>
					<div>
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
				</div>
				<div className="container col-sm-4 col d-block d-xl-none ">
					<div className="row justify-content-sm-end justify-content-center">
						<div className="col-auto fw-bold fs-5"> {price}$</div>
						<div className="col-auto ">
							<button
								type="button"
								className="btn btn btn-light rounded-0 fw-bold"
							>
								Buy Now
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default CourseSlide;
