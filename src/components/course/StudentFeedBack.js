import React from "react";
export function draw_stars(rate) {
	let stars = [];
	rate = Math.floor(rate);
	for (let i = 0; i < 5; i++) {
		if (i < rate) {
			stars.push(<span key={i} className="fa fa-star checked "></span>);
		} else stars.push(<span key={i} className="fa fa-star "></span>);
	}
	return stars;
}
function draw_prog(per) {
	return (
		<div
			className="border border-1 border-gray px-0 mx-0  mt-2 col-6"
			style={{ background: "white" }}
		>
			<div
				style={{
					height: 100 + "%",
					width: per + `%`,
					background: "#566573  ",
				}}
			></div>
		</div>
	);
}

function combine(per, stars) {
	return (
		<div className="row ">
			{draw_prog(per)} <div className="col-6">{draw_stars(stars)}</div>
		</div>
	);
}

function draw_all(rev) {
	let cnt = [0, 0, 0, 0, 0, 0];
	for (let i = 0; i < rev.length; i++) {
		cnt[rev[i].rate]++;
	}

	let ret = [];

	for (let i = 5; i >= 1; i--) {
		let per = cnt[i] / rev.length;
		console.log(per);
		ret.push(combine(per * 100, i));
	}
	return ret;
}
function StudentFeedBack(props) {
	return (
		<div className="container-xl-flex container-fluid mt-4 p-2 col-xl-4  offset-xl-2">
			<div className="fs-2 fw-bold">Student feedback</div>
			<div className="row  container-fluid">
				<div className="col-3">
					<div className="fw-bolder text-warning huge-font ">
						{props.data.rate}
					</div>
					<div className="fs-5">{draw_stars(Math.floor(props.data.rate))}</div>
					<div className="fw-bolder text-warning">course rating</div>
				</div>
				<div className="col-8 mt-4 container-fluid">
					{draw_all(props.data.reviews)}
				</div>
			</div>
		</div>
	);
}

export default StudentFeedBack;
