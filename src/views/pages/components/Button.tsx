import styled from '@emotion/styled';
import React from 'react';
import { ShoppingButtonWrapper, TotalWrapper } from './styles/button-style';
import {
	MdAddShoppingCart,
	MdShoppingCart,
	MdShoppingCartCheckout,
	MdRemoveShoppingCart,
	MdFilterList,
	MdFilterListOff,
} from 'react-icons/md';
import { IFComp, IFEComp } from '../../components/IFEComp';
import useDom from '../../../utils/contexts/dom-provider';

export type CartButtonProps = {
	handleClick?: () => void;
	size?: number | string;
	total?: string | number;
	iconColor?: string;
	totalColor?: string;
	textColor?: string;
	totalState?: boolean;
};

const CartButton: React.FC<CartButtonProps> = ({
	handleClick,
	size,
	total,
	totalColor,
	iconColor,
	textColor,
	totalState,
}) => {
	return (
		<button
			onClick={handleClick}
			style={{ transition: 'all 1s linear' }}
			title='shopping cart'>
			<MdShoppingCart
				size={size}
				color={iconColor}
			/>
			<IFComp
				state={!totalState}
				children={
					<TotalWrapper
						totalColor={totalColor}
						textColor={textColor}
						initial={{
							transform: 'translate(50%, 25%) scale(0)',
						}}
						animate={{ transform: 'translate(50%, 25%) scale(1)' }}
						exit={{ transform: 'translate(50%, 25%) scale(0)' }}
						transition={{ duration: 1, ease: 'linear' }}>
						{total}
					</TotalWrapper>
				}
			/>
		</button>
	);
};
type CategoryButtonProps = {
	handleClick?: () => void;
	size?: number | string;
	iconColor?: string;
};
const CategoryButton: React.FC<CategoryButtonProps> = ({
	handleClick,
	size,
	iconColor,
}) => {
	const { isCartProduct, setDropDownMenu } = useDom();
	React.useEffect(() => {
		if (isCartProduct) {
			setDropDownMenu((prev) => (prev = false));
		}
	}, [isCartProduct]);
	return (
		<button
			onClick={handleClick}
			title='menu category'
			disabled={isCartProduct}>
			<IFEComp
				state={isCartProduct}
				firstChild={
					<MdFilterListOff
						size={size}
						color={iconColor}
					/>
				}
				secondChild={
					<MdFilterList
						size={size}
						color={iconColor}
					/>
				}
			/>
		</button>
	);
};

type ShoppingButtonProps = {
	handleClick?: () => void;
	isCart?: boolean;
};

const ShoppingButton: React.FC<ShoppingButtonProps> = ({
	handleClick,
	isCart = false,
}) => {
	return (
		<ShoppingButtonWrapper>
			<IFEComp
				state={isCart}
				firstChild={
					<React.Fragment>
						<button onClick={handleClick}>
							<MdRemoveShoppingCart size={25} />
						</button>
						<button onClick={handleClick}>
							<MdAddShoppingCart size={25} />
						</button>
					</React.Fragment>
				}
				secondChild={
					<button onClick={handleClick}>
						<MdShoppingCartCheckout size={25} />
					</button>
				}
			/>
		</ShoppingButtonWrapper>
	);
};
export { CartButton, ShoppingButton, CategoryButton };
