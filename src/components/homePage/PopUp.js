import React from "react";

function PopUp(props) {
	return (
		<div className="home-page-popup-main col offset-2 p-3">
			<div className="fw-bold fs-4">{props.data.title}</div>
			<div className="fs-6 p-2 ">{props.data.headline}</div>
			<div>
				<button
					type="button"
					class="btn course-main-page-right-card-upper-btn mb-2"
				>
					Add to cart
				</button>
			</div>
		</div>
	);
}

export default PopUp;
