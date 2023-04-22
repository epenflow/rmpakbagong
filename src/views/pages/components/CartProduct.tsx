import React from 'react';
import CartProductWrapper from './styles/cartproduct-style';
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
					{Array.from({ length: 20 }).map((_, index) => (
						<section key={index}>
							<h1>{index}</h1>
							<div />
							<div>
								<button>remove items</button>
								<button>add</button>
								<button>remove item</button>
							</div>
						</section>
					))}
				</CartProductWrapper>
			}
		/>
	);
};

export default CartProduct;
