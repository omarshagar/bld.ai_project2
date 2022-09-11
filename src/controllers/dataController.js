let data = 0;
const fetch_json = async (url) => {
	let response = await fetch(url);
	let json = await response.json();

	return json;
};
const read_all_data = async () => {
	if (!data) {
		try {
			await fetch_json(process.env.REACT_APP_DATA_SRC).then(
				(res) => (data = res)
			);
		} catch (e) {
			console.log(e);
			return;
		}
	}
	return data;
};
const get_home_page_data = async () => {
	let h = await read_all_data();

	return h["homePage"];
};
const get_courses_data = async () => {
	let h = await read_all_data();
	return h["specificCourses"];
};
const get_specific_course_riview = (course_id) => {
	return read_all_data()["reviews"][course_id];
};

export const read_home_data = async (setdataFetching, sethomePageD) => {
	try {
		await get_home_page_data()
			.then((res) => {
				setdataFetching("done");
				return res;
			})
			.then((res) => {
				sethomePageD(res);
				return res;
			});
	} catch (e) {
		console.log(e);
	}
};
export const read_courses_data = async (setdataFetching, setCoursesData) => {
	try {
		//return;
		await get_courses_data()
			.then((res) => {
				setdataFetching("done");
				return res;
			})
			.then((res) => {
				setCoursesData(res);
				return res;
			});
	} catch (e) {
		console.log(e);
	}
};
