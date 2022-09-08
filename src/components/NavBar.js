import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
function NavBar() {
	const [searchWord, setSearchWord] = useState("");
	const [searchParam, setSearchParam] = useSearchParams();
	return (
		<div id="nav-bar">
			<div id="shorted-bar" className="general">
				<img src="images/list.png" className="general" alt="menu" />
			</div>

			<div id="udemy-logo" className="general">
				<Link to="/">
					<img
						className="general"
						src="images/Udemy_logo.svg.png"
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
						src="images/shopping-cart.png"
						alt="shopping-cart"
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
