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
import SmallCourseHeader from "./SmallCourseHeader";
import CourseContent from "./CourseContent";
import Req from "./Req";
import Description from "./Description";
import Instructors from "./Instructors";
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
					<SmallCourseHeader data={Data[courseId]}></SmallCourseHeader>
					<WillLearn data={Data[courseId]["overview"]}></WillLearn>
					<RightCard data={Data[courseId]}></RightCard>
					<CourseContent data={Data[courseId]}></CourseContent>
					<Req data={Data[courseId].requirements}></Req>
					<Description data={Data[courseId].description}></Description>
					<Instructors data={Data[courseId].instructors}></Instructors>
				</>
			) : (
				<Spinner color="dark" />
			)}
		</div>
	);
}

export default MainPageCourse;
