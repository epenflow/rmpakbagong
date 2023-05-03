import React, { lazy } from 'react';
import ProductWrapper, { CardProduct } from './styles/product-styles';
import { faker } from '@faker-js/faker';
import axios, { AxiosResponse } from 'axios';
// import ProductItems from './ProductItems';
const ProductItems = lazy(() => import('./ProductItems'));
interface IFood {
	description: string;
	dish: string;
	id: number;
	ingredients: string;
	measurement: string;
	uid: string;
}
export interface NewIFood {
	id: number;
	image: string;
	description: string;
	dish: string;
}

export const Product = () => {
	// const [getFood, setFood] = React.useState<IFood[]>([]);
	const [food, setFood] = React.useState<NewIFood[]>([]);
	const productWrapperRef = React.useRef<HTMLElement>(null);
	// const fetchFood = async () => {
	// 	try {
	// 		const data: AxiosResponse<any, any> = await axios.get(
	// 			'https://random-data-api.com/api/food/random_food?size=20'
	// 		);
	// 		setFood(data.data);
	// 	} catch (er) {
	// 		console.info(er);
	// 	}
	// };
	// React.useEffect(() => {
	// 	fetchFood();
	// 	console.info(getFood);
	// }, []);
	React.useEffect(() => {
		setFood(
			[...Array(25).keys()].map((key) => {
				return {
					id: key,
					image: faker.image.imageUrl(1920, 1080, 'food', true),
					description: faker.lorem.paragraph(),
					dish: faker.name.firstName(),
				};
			})
		);
	}, []);
	return (
		<ProductWrapper ref={productWrapperRef}>
			{food.map((item, index) => (
				<CardProduct
					width='280px'
					key={index}>
					<React.Suspense fallback={<h1>loading...</h1>}>
						<ProductItems item={item} />
					</React.Suspense>
				</CardProduct>
			))}
		</ProductWrapper>
	);
};
export default Product;
