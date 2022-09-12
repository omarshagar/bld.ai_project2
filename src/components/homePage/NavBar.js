import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
function NavBar() {
	const [searchWord, setSearchWord] = useState("");
	const [searchParam, setSearchParam] = useSearchParams();
	return (
		<div id="nav-bar">
			<div id="shorted-bar" className="general">
				<img
					src="https://cdn-icons-png.flaticon.com/512/2099/2099192.png"
					className="general"
					alt="menu"
					width={"40"}
				/>
			</div>

			<div id="udemy-logo" className="general">
				<Link to="/">
					<img
						className="general"
						src="https://logos-world.net/wp-content/uploads/2021/11/Udemy-Logo-2021-present.png"
						alt="Udemy_logo"
					/>
				</Link>
			</div>

			<button className="nav-bar-btn">
				<span> Categories </span>
			</button>

			<form className="search-bar" action="">
				<button
					type="button"
					className="nav-bar-btn-srch"
					id="searchbt"
					onClick={() => {
						searchWord
							? setSearchParam({ searchWord: searchWord })
							: setSearchParam({});
					}}
				>
					<span> Search </span>
				</button>

				<input
					className="search-input"
					type="text"
					placeholder="Search for any thing"
					name="search"
					value={searchWord}
					onChange={(event) => {
						setSearchWord(event.target.value);
					}}
					id="search"
				/>
			</form>

			<button className="nav-bar-btn">
				<span>
					<a href="" className="hidden-link">
						Udemy Business
					</a>
				</span>
			</button>
			<button className="nav-bar-btn">
				<span>
					{" "}
					<a href="" className="hidden-link">
						Teach on Udemy
					</a>
				</span>
			</button>
			<div className="nav-bar-btn2">
				<a href="">
					<img
						className="general"
						src="https://media.istockphoto.com/vectors/shopping-cart-black-icon-on-white-background-vector-illustration-for-vector-id1079804618?k=20&m=1079804618&s=612x612&w=0&h=bwUh2mLL5T-fzrdPN6fwlB3BBBDoa1n2GDvQW-7FskM="
						alt="shopping-cart"
						width="40px"
						hight="40px"
					/>
				</a>
			</div>
			<div className="nav-bar-btn3">
				<a className="nav-bar-link" href="">
					<b>Log in</b>
				</a>
			</div>
			<div id="signup-btn" className="nav-bar-btn3">
				<a className="nav-bar-link" href="">
					<b>Sign Up</b>
				</a>
			</div>
		</div>
	);
}

export default NavBar;
