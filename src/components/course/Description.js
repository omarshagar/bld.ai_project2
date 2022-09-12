import React from "react";
import { useState } from "react";
function Description(props) {
	const [isActive, setIsActive] = useState("false");

	return (
		<>
			<div
				className={`container-xl-flex container-fluid mt-4   course-main-page-main-container offset-xl-2  course-main-page-desc-${isActive} `}
			>
				<div>
					<div className="fw-bold fs-2">Description</div>
					<div className="fs-6">{props.data}</div>
				</div>
			</div>
			<div
				className="container  mt-4 p-2 pt-4  offset-2 d-inline col-auto footer-font-imp course-content-collapse fw-bold"
				onClick={() => {
					setIsActive((prev) => (prev === "true" ? "false" : "true"));
				}}
			>
				show {isActive === "false" ? "more" : "less"}
			</div>
		</>
	);
}

export default Description;
