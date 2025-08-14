import React from 'react';
import { formatPriceCLP } from '../helpers/helpers';

export const Card = ({
	id,
	image,
	title,
	business,
	location,
	originalPrice,
	discountPrice,
	category,
}) => {
	return (
		<article
			className={
				category === 'comida col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-4'
					? ''
					: 'ropa col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 my-4'
			}
		>
			<div className="card mx-2">
				<img
					src={image}
					className="card-img-top"
					alt="Plumon"
				/>
				<div className="card-body">
					<h5 className="card-title fw-light mb-3">{title}</h5>
					<p className="card-text h6 fw-light">{business}</p>
					<p className="fw-light">
						<i className="fas fa-map-marker-alt fa-xs"></i>
						{location}
					</p>
					<hr />
					<ul className="list-group list-group-flush text-right">
						<li
							className="list-group-item
                    ms-auto
                    fw-light
                    gris
                    py-0
                    pe-1
                    2
                    1
                    5
                    py-0
                    pe-1
                    2
                    1
                    5
                  "
						>
							{formatPriceCLP(originalPrice)}
							<span className="h5 fw-bold green ms-3">
								{formatPriceCLP(discountPrice)}
							</span>
						</li>
					</ul>
				</div>
			</div>
		</article>
	);
};
