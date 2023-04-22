import React from 'react';
import CartProductWrapper, { CartItem } from './styles/cartproduct-style';
import { IFComp } from '../../components/IFEComp';
import useDom from '../../../utils/contexts/dom-provider';

interface ICartProduct {}
const CartProduct: React.FC<ICartProduct> = (): JSX.Element => {
	const { isCartProduct } = useDom();
	React.useEffect(() => {
		if (isCartProduct) {
			document.body.style.overflow = 'hidden';
		}
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isCartProduct]);
	return (
		<IFComp
			state={isCartProduct}
			children={
				<CartProductWrapper>
					<section>
						<button>remove all</button>
						<button>checkout</button>
					</section>
					{Array.from({ length: 50 }).map((_, index) => (
						<CartItem
							key={index}
							img='http://unsplash.it/1920/1080?random'>
							<h1>{index}</h1>
							<div>
								<div />
								<div>
									<button>+</button>
									<button>-</button>
								</div>
							</div>
						</CartItem>
					))}
				</CartProductWrapper>
			}
		/>
	);
};

export default CartProduct;
