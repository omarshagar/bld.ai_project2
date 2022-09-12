import React from "react";
function draw(items) {
	let ret = [];
	for (let i = 0; i < items.length; i++)
		ret.push(
			<li key={i} className="fs-6">
				{items[i]}
			</li>
		);

	return ret;
}
function Req(props) {
	return (
		<div className="container-flex mt-4 p-2 col-xl-4 w-50 offset-xl-2">
			<div className="fs-2 fw-bold">Requirements</div>
			<ul>{draw(props.data)}</ul>
		</div>
	);
}

export default Req;
