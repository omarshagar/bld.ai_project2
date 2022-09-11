import React from "react";

function FooterLower() {
	return (
		<div className="container-fluid bg-black text-white border-bottom-1 ">
			<div className="container-flex row justify-content-around">
				<div className="col-md-2">
					<ul className="ul-with-no-points">
						<li className="mutable-link">Udemy Business</li>
						<li className="mutable-link">Teach on Udemy</li>
						<li className="mutable-link">Get the app</li>
						<li className="mutable-link">About us</li>
						<li className="mutable-link">Contact us</li>
					</ul>
				</div>
				<div className="col-md-2">
					<ul className="ul-with-no-points">
						<li className="mutable-link">Careers</li>
						<li className="mutable-link">Blog</li>
						<li className="mutable-link">Help and Support</li>
						<li className="mutable-link">Affiliate</li>
						<li className="mutable-link">Investors</li>
					</ul>
				</div>
				<div className="col-md-2">
					<ul className="ul-with-no-points">
						<li className="mutable-link">Terms</li>
						<li className="mutable-link">Privacy policy</li>
						<li className="mutable-link">Cookie settings</li>
						<li className="mutable-link">Sitemap</li>
						<li className="mutable-link">Accessibility statement</li>
					</ul>
				</div>

				<div className="col-md-4 ms-5">
					<button
						type="button"
						className=" btn btn-dark border-white col-md-4 rounded-0"
					>
						<div>
							<b>English</b>
						</div>
					</button>
				</div>
			</div>
			<div className="row justify-content-between p-5">
				<div className="col">
					<img
						src="https://logos-world.net/wp-content/uploads/2021/11/Udemy-Symbol.png"
						alt="Udemy"
						width="90"
						height="50"
					></img>
				</div>
				<div className="col-auto justify-content-end">
					{" "}
					<span>© 2022 Udemy, Inc.</span>
				</div>
			</div>
			<div></div>
		</div>
	);
}

export default FooterLower;
