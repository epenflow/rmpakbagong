import React, { lazy } from 'react';
import { ProductItemWrapper } from './styles/product-styles';
import { NewIFood } from './Product';
import { ShoppingButton } from './Button';
import setPrice from '../../../utils/setPrice';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface IProductItems {
	item: NewIFood;
}
const ProductItems: React.FC<IProductItems> = ({ item }): JSX.Element => {
	const [isCart, setCart] = React.useState<boolean>(false);
	const [isText, setText] = React.useState<boolean>(false);
	const handleText = () => {
		setText((prev) => !prev);
	};
	const handleClick = () => {
		setCart((prev) => !prev);
	};

	return (
		<React.Fragment>
			<ProductItemWrapper
				img={item.image}
				isText={isText}
				width='100%'>
				<div>
					<LazyLoadImage
						src={item.image}
						height={'100%'}
						width={'100%'}
						useIntersectionObserver={true}
						effect='blur'
						alt={item.image}
						threshold={500}
					/>
				</div>
				<h1>{item.dish}</h1>
				<h2>{setPrice(item.id)}</h2>
				<p onClick={handleText}>{item.description}</p>
				<ShoppingButton
					handleClick={handleClick}
					isCart={isCart}
				/>
			</ProductItemWrapper>
		</React.Fragment>
	);
};
export default ProductItems;
