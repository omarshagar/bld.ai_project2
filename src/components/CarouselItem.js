import React from "react";
import CourseCard from "./CourseCard";

function fill_courses(courses) {
	let out = courses.map((x) => <CourseCard key={x.id} data={x}></CourseCard>);

	return out;
}
function CarouselItem(props) {
	return (
		<div className={`carousel-item ${props.is_active}`}>
			<div className="row">{fill_courses(props.sub_courses)}</div>
		</div>
	);
}

export default CarouselItem;
/*{fill_courses(props.sub_courses)} */
