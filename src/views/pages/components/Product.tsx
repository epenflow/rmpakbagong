import React from 'react';
import { ShoppingButton } from './Button';
import ProductWrapper, { CardProduct } from './styles/product-styles';
const idrFormat = new Intl.NumberFormat('id-ID', {
	style: 'currency',
	currency: 'idr',
});

const setPrice = (price: number) => {
	return idrFormat.format(price);
};
export const Product = () => {
	const [isCart, setCart] = React.useState<boolean>(false);
	const handleClick = () => {
		setCart((prev) => !prev);
	};
	return (
		<ProductWrapper>
			{Array.from({ length: 10 }).map((_, index) => (
				<CardProduct
					key={index}
					img='http://unsplash.it/1920/1080?random'>
					<div />
					<h1>test</h1>
					<h2>{setPrice(100000000)}</h2>
					<ShoppingButton
						handleClick={handleClick}
						isCart={isCart}
					/>
				</CardProduct>
			))}
		</ProductWrapper>
	);
};
export default Product;
