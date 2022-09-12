import React from "react";
import { useState } from "react";
function DescriptionViewer(props) {
	const [isActive, setIsActive] = useState("false");

	return (
		<>
			<div className={`   course-main-page-desc-${isActive} `}>
				<div>
					<div className="fs-6">{props.data}</div>
				</div>
			</div>
			<div
				className="container  mt-4 p-2 pt-4   d-inline col-auto footer-font-imp course-content-collapse fw-bold"
				onClick={() => {
					setIsActive((prev) => (prev === "true" ? "false" : "true"));
				}}
			>
				show {isActive === "false" ? "more" : "less"}
			</div>
		</>
	);
}

export default DescriptionViewer;
