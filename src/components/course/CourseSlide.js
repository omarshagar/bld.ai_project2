import React from "react";

function CourseSlide() {
	return (
		<>
			<div className="container-fluid bg-black text-white p-3 row course-main-page-slider ">
				<div className="col-6 ">
					<div className="fw-bold">Course title - bla bla bla bla b la</div>
					<div>
						<span className=" fs-6 fw-semibold text-warning text-nowrap tiny-font">
							4.4
						</span>
						<span className="fa fa-star checked "></span>
						<span className="tiny-font mutable-link footer-font-imp">
							{" "}
							(1990 ratings){" "}
						</span>
						<span className="tiny-font"> 2910 students </span>
					</div>
				</div>
				<div className="col-6 d-block d-xl-none">world</div>
			</div>
		</>
	);
}

export default CourseSlide;
