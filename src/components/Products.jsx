import React from 'react';
import { Card } from './Card';

export function Products() {
	const cupones = [
		{
			id: 1,
			image: './cupon-1.jpg',
			title: 'Plumón Coral Fleece estampado en modelo y tamaño a elección',
			business: 'Plumones Manolino',
			location: '9191 Avenida Vitacura, Chile',
			originalPrice: 45990,
			discountPrice: 22990,
		},
		{
			id: 2,
			image: './cupon-2.jpg',
			title: 'Entrada para compartir + platos de fondo + postres + bebestibles',
			business: 'V for Vegan',
			location: '777 Jesse Pinkman, Chile',
			originalPrice: 30990,
			discountPrice: 12990,
		},
		{
			id: 3,
			image: './cupon-3.jpg',
			title:
				'Evaluación integral + blanqueamiento dental led + limpieza + fluoración',
			business: 'Clínica Dental Quijada',
			location: '1342, Blanco Encalada, Chile',
			originalPrice: 300000,
			discountPrice: 25990,
		},
		{
			id: 4,
			image: './cupon-4.jpg',
			title: 'Entrada para compartir + platos de fondo + postres + bebestibles',
			business: 'V for Vegan',
			location: '777 Jesse Pinkman, Chile',
			originalPrice: 3099,
			discountPrice: 1299,
		},
		{
			id: 5,
			image: './cupon-5.jpg',
			title: 'Entrada para compartir + platos de fondo + postres + bebestibles',
			business: 'V for Vegan',
			location: '777 Jesse Pinkman, Chile',
			originalPrice: 3099,
			discountPrice: 1299,
		},
		{
			id: 6,
			image: './cupon-6.jpg',
			title: 'Entrada para compartir + platos de fondo + postres + bebestibles',
			business: 'V for Vegan',
			location: '777 Jesse Pinkman, Chile',
			originalPrice: 3099,
			discountPrice: 1299,
		},
	];

	return (
		<main class="container">
			<section class="row">
				{/* <Card {...cupones[0]} />
				<Card {...cupones[1]} />
				<Card {...cupones[2]} />
				<Card {...cupones[3]} /> */}
				{cupones.map((cupon) => (
					<Card
						key={cupon.id}
						{...cupon}
					/>
				))}
			</section>
		</main>
	);
}
