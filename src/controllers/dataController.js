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
const get_home_page_data_category = (category) => {
	return read_all_data()["homePage"][category];
};
export const get_home_page_data = async () => {
	let h = await read_all_data();

	return h["homePage"];
};
const get_specific_course_data = (course_id) => {
	return read_all_data()["specificCourses"][course_id];
};
const get_specific_course_riview = (course_id) => {
	return read_all_data()["reviews"][course_id];
};
