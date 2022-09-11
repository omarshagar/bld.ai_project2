import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import CourseSlide from "./CourseSlide";
import CourseHeader from "./CourseHeader";
import {
	pecificCoursesDataContext,
	specificCoursesFetchingStateContext,
} from "../../App";
import Spinner from "../Spinner";
import WillLearn from "./WillLearn";
import RightCard from "./RightCard";

function MainPageCourse() {
	let params = useParams();
	let courseId = params.courseId.slice(1);
	const isLoading = useContext(specificCoursesFetchingStateContext);
	const Data = useContext(pecificCoursesDataContext);
	return (
		<div className="container-fluid">
			{isLoading === "done" && courseId in Data ? (
				<>
					<CourseSlide data={Data[courseId]}></CourseSlide>
					<CourseHeader data={Data[courseId]}></CourseHeader>
					<WillLearn data={Data[courseId]["overview"]}></WillLearn>
					<RightCard data={Data[courseId]}></RightCard>
				</>
			) : (
				<Spinner color="dark" />
			)}

			<div>ss</div>
			<div>ss</div>
			<div>ss</div>
			<div>ss</div>
			<div>ss</div>
			<div>ss</div>
			<div>ss</div>
			<div>ss</div>
			<div>ss</div>
			<div>ss</div>
			<div>ss</div>
			<div>ss</div>
			<div>ss</div>
			<div>ss</div>
			<div>ss</div>
			<div>ss</div>
			<div>ss</div>
			<div>ss</div>
			<div>ss</div>
			<div>ss</div>
			<div>ss</div>
			<div>ss</div>
			<div>ss</div>
			<div>ss</div>
			<div>ss</div>
			<div>ss</div>
			<div>ss</div>
			<div>ss</div>
			<div>ss</div>
			<div>ss</div>
			<div>ss</div>
			<div>ss</div>
			<div>ss</div>
			<div>ss</div>
			<div>ss</div>
			<div>ss</div>
			<div>ss</div>
			<div>ss</div>
			<div>ss</div>
			<div>ss</div>
			<div>ss</div>
			<div>ss</div>
		</div>
	);
}

export default MainPageCourse;
