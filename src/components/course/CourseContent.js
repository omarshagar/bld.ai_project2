import React, { useState } from "react";
function expandSections() {}
function Item(props) {
	return (
		<div className="container p-3 row">
			<div className="col-auto">
				<img
					src="https://cdn-icons-png.flaticon.com/512/527/527995.png"
					width={"15"}
				></img>
			</div>
			<div className="col-6">{props.title}</div>
		</div>
	);
}
function SectionButton(props) {
	return (
		<div
			className="container p-3 row justify-content-between  course-main-page-section-btn"
			onClick={() => props.func()}
		>
			<div className="row col-10">
				<div className="col-1">
					<img
						src="https://cdn-icons-png.flaticon.com/512/2985/2985150.png"
						alt="arrow"
						width={"15"}
					></img>
				</div>
				<div className="col-11 fs-4 fw-bold">{props.title}</div>
			</div>
			<div className="col-2 tiny-font">{props.cnt} Lectures</div>
		</div>
	);
}
function Section(props) {
	function draw(lessons) {
		let tmp = [];
		lessons.forEach((lesson) => {
			tmp.push(<Item title={lesson}></Item>);
		});
		return tmp;
	}

	return (
		<div className="course-main-page-content-section   container p-3 row">
			{draw(props.lessons)}
		</div>
	);
}
function Lecture(props) {
	return (
		<div className="container-fluid justify-content-center">
			<SectionButton
				title={props.data[0][0]}
				cnt={props.data[1].length}
				func={props.click}
			></SectionButton>
			{props.display === true ? (
				<Section lessons={props.data[1]}></Section>
			) : (
				""
			)}
		</div>
	);
}
function initDisplaySection(num, value) {
	let ret = {};
	for (let i = 0; i < num; i++) {
		ret[i] = value;
	}
	return ret;
}
function draw(cnt, content, displaySection, setDisplaySection) {
	let ret = [];
	for (let i = 0; i < cnt; i++) {
		ret.push(
			<Lecture
				key={i}
				data={content[i]}
				display={displaySection[i]}
				click={
					//() => console.log("7a7a" + i)
					() =>
						setDisplaySection({ ...displaySection, [i]: !displaySection[i] })
				}
			></Lecture>
		);
	}
	return ret;
}
function CourseContent(props) {
	const [displaySection, setDisplaySection] = useState(
		initDisplaySection(props.data.content.length, false)
	);

	const [displayCnt, setdisplayCnt] = useState(
		Math.min(10, props.data.content.length)
	);
	const [expand, setexpand] = useState(0);
	//console.log(displaySection);
	return (
		<div className="container-xl-flex container-fluid mt-4   course-main-page-main-container offset-xl-2 ">
			<div className="fs-2 fw-bold ">Course content</div>
			<div className="justify-content-between row container p-2 ">
				<div className="d-inline col-auto tiny-font">
					{props.data.sectionsCount} sections • {props.data.lecturesCount}{" "}
					lectures • {props.data.totalLength} total time
				</div>
				<div
					className="d-inline col-auto footer-font-imp course-content-collapse fw-bold"
					onClick={() => {
						setDisplaySection(initDisplaySection(displayCnt, !expand));
						setexpand((prev) => !prev);
					}}
				>
					{expand ? "Collapse" : "Expand"} all sections
				</div>

				<div>
					{draw(
						displayCnt,
						props.data.content,
						displaySection,
						setDisplaySection
					)}

					{displayCnt != props.data.content.length ? (
						<button
							type="button"
							class="btn course-main-page-right-card-lower-btn row"
							onClick={() => {
								setdisplayCnt(props.data.content.length);
							}}
						>
							{props.data.content.length - displayCnt} more sections
						</button>
					) : (
						""
					)}
				</div>
			</div>
		</div>
	);
}

export default CourseContent;
