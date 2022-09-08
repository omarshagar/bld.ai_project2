import React, { useRef, useEffect } from "react";
import CoursesNavBar from "./CoursesNavBar";

function Courses() {
	return (
		<div id="courses">
			<div id="courses-txt">
				<div className="txt-udemy">
					<h1>A broad selection of courses</h1>
				</div>
				<div className="txt-udemy">
					Choose from 185,000 online video courses with new additions published
					every month
				</div>
			</div>

			<div className="courses-viewer">
				<CoursesNavBar></CoursesNavBar>
			</div>
		</div>
	);
}

export default Courses;
