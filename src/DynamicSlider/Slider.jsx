import React, { useEffect } from "react";

const slides = [
	{
		title: "Mens Clothes",
		color: "#D1C4B4",
		img: "https://cdn.pixabay.com/photo/2018/02/08/11/54/male-3139289_1280.jpg",
		className:
			"swiper-slide swiper-slide-visible swiper-slide-fully-visible swiper-slide-active",
	},
	{
		title: "Womens Clothes",
		color: "#9B89C5",
		img: "https://cdn.pixabay.com/photo/2017/08/06/07/27/people-2589862_1280.jpg",
		className: "swiper-slide swiper-slide-next",
	},
	{
		title: "Kids Clothes",
		color: "#D7A594",
		img: "https://img.freepik.com/free-photo/cute-little-girl-with-shopping-bags-yellow-background_1157-27840.jpg?t=st=1743792999~exp=1743796599~hmac=6bb6ad9e0aff705961fb977b40adc7bbf686328eba85d35a58d63c2e2642d295&w=1380",
		className: "swiper-slide",
	},
];

const svg = (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 350 160 90">
		<g className="fashion-slider-svg-wrap">
			<g className="fashion-slider-svg-circle-wrap">
				<circle cx="42" cy="42" r="40" />
			</g>
			<path
				className="fashion-slider-svg-arrow"
				d="M.983,6.929,4.447,3.464.983,0,0,.983,2.482,3.464,0,5.946Z"
			/>
			<path className="fashion-slider-svg-line" d="M80,0H0" />
		</g>
	</svg>
);

const Slider = () => {
	useEffect(() => {
		const resources = [
			{
				tag: "link",
				props: {
					rel: "stylesheet",
					href: "https://fashion-slider.uiinitiative.com/assets/index.fca86069.css",
				},
				parent: document.head,
			},
			{
				tag: "link",
				props: {
					rel: "modulepreload",
					href: "https://fashion-slider.uiinitiative.com/assets/vendor.688a9bfa.js",
				},
				parent: document.head,
			},
			{
				tag: "script",
				props: {
					type: "module",
					crossOrigin: "anonymous",
					src: "https://fashion-slider.uiinitiative.com/assets/index.ff8f4572.js",
				},
				parent: document.body,
			},
		];

		const els = resources.map(({ tag, props, parent }) => {
			const el = document.createElement(tag);
			Object.entries(props).forEach(([k, v]) => (el[k] = v));
			parent.appendChild(el);
			return { el, parent };
		});
		return () => els.forEach(({ el, parent }) => parent.removeChild(el));
	}, []);

	return (
		<div className="fashion-slider" style={{ height: "100vh" }}>
			<div className="swiper h-screen">
				<div className="swiper-wrapper h-screen">
					{slides.map((slide, i) => (
						<div
							key={i}
							className={slide.className}
							data-slide-bg-color={slide.color}
						>
							<div
								className="fashion-slider-title h-screen flex flex-col justify-center items-center"
								data-swiper-parallax="-130%"
							>
								<div className="fashion-slider-title-text">{slide.title}</div>
							</div>
							<div className="fashion-slider-scale">
								<img src={slide.img} alt={slide.title} />
							</div>
						</div>
					))}
				</div>
				{["prev", "next"].map((direction) => (
					<div
						key={direction}
						className={`fashion-slider-button-${direction} fashion-slider-button${
							direction === "prev" ? " fashion-slider-button-disabled" : ""
						}`}
					>
						{svg}
					</div>
				))}
			</div>
		</div>
	);
};

export default Slider;
