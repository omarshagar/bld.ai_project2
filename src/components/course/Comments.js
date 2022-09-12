import React from "react";
import { draw_stars } from "./StudentFeedBack";
function comment(com) {
	return (
		<div className="mt-1 container-fluid align-content-center justify-content-center">
			<hr></hr>
			<div className="fs-6 fw-bold">{com.name}</div>
			<div className="fs-6">{draw_stars(com.rate)}</div>
			<div className="fs-6">{com.content}</div>
			<div className="tiny-font">found this comment useful?</div>
			<div className="row">
				<img
					className="col-1"
					src="https://cdn-icons-png.flaticon.com/512/126/126473.png"
					width={"50"}
					height={"30"}
				></img>
				<img
					className="col-1"
					src="https://cdn-icons-png.flaticon.com/512/126/126504.png"
					width={"50"}
					height={"30"}
				></img>
			</div>
		</div>
	);
}

function draw_all_comments(coms) {
	let ret = [];
	for (let i = 0; i < coms.length; i++) {
		ret.push(comment(coms[i]));
	}
	return ret;
}
function Comments(props) {
	return (
		<div className="container-xl-flex container-fluid mt-4 p-2 col-xl-4  offset-xl-2">
			<div className="fs-2 fw-bold">Reviews</div>
			<div className="container-fluid justify-content-center">
				{draw_all_comments(props.data)}
			</div>
		</div>
	);
}

export default Comments;
