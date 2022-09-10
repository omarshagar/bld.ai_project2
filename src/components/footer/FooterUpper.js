import React from "react";

function FooterUpper() {
	return (
		<div className="container-fluid">
			<div className="row bg-black text-white border-bottom-1 align-items-center ">
				<div className=" col-9 col-lg-6 fw-bold m-3 fs-5 ">
					Top companies choose{" "}
					<span className="footer-font-imp mutable-link">Udemy Business </span>{" "}
					to build in-demand career skills.
				</div>
				<div className="col-12 col-lg-5 m-3 ">
					<img
						alt="Nasdaq"
						src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg"
						width="115"
						height="44"
						className=" ms-lg-5 m-2"
					/>
					<img
						alt="Volkswagen"
						src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg"
						width="44"
						height="44"
						className="ms-lg-5 m-2"
					/>
					<img
						alt="Box"
						src="https://s.udemycdn.com/partner-logos/v4/box-light.svg"
						width="67"
						height="44"
						className=" ms-lg-5 m-2"
					/>
					<img
						alt="NetApp"
						src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg"
						width="115"
						height="44"
						className=" ms-lg-5 m-2"
					/>

					<img
						alt="Eventbrite"
						src="https://s.udemycdn.com/partner-logos/v4/eventbrite-light.svg"
						width="115"
						height="44"
						className=" ms-lg-5 m-2"
					/>
				</div>
			</div>
		</div>
	);
}

export default FooterUpper;
