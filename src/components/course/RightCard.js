import React from "react";
function Item(props) {
	return (
		<div className="container row">
			<div className="col-auto">
				{" "}
				<img src={props.src} width={"15"} height={"14"} alt="vedio"></img>
			</div>
			<div className="col-auto tiny-font">{props.title}</div>
		</div>
	);
}
function RightCard(props) {
	return (
		<div className="course-main-page-right-card d-lg-block d-none">
			<div className=" justify-content-center border border-1 border-light ">
				<img src={props.data.image} height={"190"}></img>
			</div>
			<div className="course-main-page-right-card-lower-element text-black bg-white container container justify-content-center p-4 ">
				<div className="text-start fs-2 fw-bold p-2 text-black ">
					{props.data.price}$
				</div>
				<button
					type="button"
					class="btn course-main-page-right-card-upper-btn mb-2"
				>
					Add to cart
				</button>
				<button type="button" class="btn course-main-page-right-card-lower-btn">
					Buy now
				</button>
				<div className="tiny-font text-center p-3">
					30-Day Money-Back Guarantee
				</div>
				<div className="container">
					<div className="fs-6 fw-bold">This course includes:</div>
					<Item
						src="https://cdn-icons-png.flaticon.com/512/84/84180.png"
						title="14 hours on-demand video"
					></Item>
					<Item
						src="https://cdn-icons-png.flaticon.com/512/607/607674.png"
						title="1 article"
					></Item>
					<Item
						src="https://cdn-icons-png.flaticon.com/512/3720/3720468.png"
						title="3 downloadable resources"
					></Item>
					<Item
						src="https://cdn-icons-png.flaticon.com/512/487/487420.png"
						title="Full lifetime access"
					></Item>
					<Item
						src="https://cdn-icons-png.flaticon.com/512/3415/3415074.png"
						title="Access on mobile and TV"
					></Item>
					<Item
						src="https://cdn-icons-png.flaticon.com/512/1152/1152912.png"
						title="Certificate of completion"
					></Item>
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
	);
}

export default RightCard;
