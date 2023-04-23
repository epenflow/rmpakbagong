import React from 'react';
import { ShoppingButton } from './Button';
import ProductWrapper, {
	CardProduct,
	ProductItemWrapper,
} from './styles/product-styles';
import axios, { AxiosResponse } from 'axios';
const idrFormat = new Intl.NumberFormat('id-ID', {
	style: 'currency',
	currency: 'idr',
});
interface IFood {
	description: string;
	dish: string;
	id: number;
	ingredients: string;
	measurement: string;
	uid: string;
}
const setPrice = (price: number) => {
	return idrFormat.format(price);
};
const ProductItems = ({ item }: { item: IFood }) => {
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
				img='http://unsplash.it/1920/1080?random'
				isText={isText}
				width='100%'>
				<div />
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
export const Product: React.FC = (): JSX.Element => {
	const [getFood, setFood] = React.useState<IFood[]>([]);
	const fetchFood = async () => {
		try {
			const data: AxiosResponse<any, any> = await axios.get(
				'https://random-data-api.com/api/food/random_food?size=20'
			);
			setFood(data.data);
		} catch (er) {
			console.info(er);
		}
	};
	React.useEffect(() => {
		fetchFood();
	}, []);

	return (
		<ProductWrapper>
			{getFood.map((item, index) => (
				<CardProduct
					key={index}
					width='280px'>
					<ProductItems item={item} />
				</CardProduct>
			))}
		</ProductWrapper>
	);
};
export default Product;
{
	/* {Array.from({ length: 10 }).map((_, index) => (
				<CardProduct
					key={index}
					width='280px'
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
			))} */
}
