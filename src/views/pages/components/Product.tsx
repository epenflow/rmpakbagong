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
	const [isText, setText] = React.useState<boolean>(false);
	const handleClick = (): void => {
		setCart((prev) => !prev);
	};
	const handleText = (): void => {
		setText((prev) => !prev);
	};
	return (
		<ProductWrapper>
			{Array.from({ length: 10 }).map((_, index) => (
				<CardProduct
					key={index}
					width='310px'
					isText={isText}
					img='http://unsplash.it/1920/1080?random'>
					<div />
					<h1>test</h1>
					<h2>{setPrice(100000000)}</h2>
					<p onClick={handleText}>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Tenetur ut, temporibus voluptates nihil deserunt
						ipsa eaque delectus labore neque illo tempore
						exercitationem itaque dolorem cum molestias omnis hic!
						Enim, error?
					</p>
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
