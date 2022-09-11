import React from "react";

function Spinner(props) {
	return (
		<div
			className={`spinner-border text-${props.color} container`}
			role="status"
		>
			<span className="visually-hidden">Loading...</span>
		</div>
	);
}

export default Spinner;
