import React from "react";
function draw_elements(titles) {
	let ret = [];
	titles.forEach((title) => {
		ret.push(<Item key={title} title={title}></Item>);
	});
	return ret;
}
function Item(props) {
	return (
		<div className=" col-auto  row">
			<img
				src="https://cdn-icons-png.flaticon.com/512/1828/1828743.png"
				alt="checkItem"
				className="icon-50 col-2 ms-2"
			/>
			<div className="col-10 ">{props.title}</div>
		</div>
	);
}
function WillLearn(props) {
	return (
		<div className="container-flex mt-4 p-2 ">
			<div className="container-flex col-4 w-50 offset-xl-2 border border-dark border-opacity-25 p-2">
				<div className="fs-4 fw-bold p-2">What you'll learn</div>

				<div className=" container-flex row">{draw_elements(props.data)}</div>
			</div>
		</div>
	);
}

export default WillLearn;
