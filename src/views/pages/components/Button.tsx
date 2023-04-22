import styled from '@emotion/styled';
import { FC, Fragment } from 'react';
import {
	MdAddShoppingCart,
	MdShoppingCart,
	MdShoppingCartCheckout,
	MdRemoveShoppingCart,
	MdFilterList,
	MdFilterListOff,
} from 'react-icons/md';
import { IFComp, IFEComp } from '../../components/IFEComp';
import { motion } from 'framer-motion';
type CartButtonProps = {
	handleClick?: () => void;
	size?: number | string;
	total?: string | number;
	iconColor?: string;
	totalColor?: string;
	textColor?: string;
	totalState?: boolean;
};
const TotalWrapper = styled(motion.div)<CartButtonProps>`
	background-color: ${({ totalColor }) =>
		totalColor ? totalColor : 'white'};
	color: ${({ textColor }) => (textColor ? textColor : 'black')};
	padding: 0.25rem;
	border-radius: 100%;
	position: absolute;
	font-size: 12px;
	border: 2px solid transparent;
`;
const CartButton: FC<CartButtonProps> = ({
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
	state?: boolean;
	iconColor?: string;
};
const CategoryButton: FC<CategoryButtonProps> = ({
	handleClick,
	size,
	state = false,
	iconColor,
}) => {
	return (
		<button
			onClick={handleClick}
			title='menu category'>
			<IFEComp
				state={state}
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
const ShoppingButtonWrapper = styled.section`
	width: 100%;
	display: flex;
	justify-content: center;
	margin: 0 0.25rem;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.25rem;
	button {
		width: 100%;
		height: 42px;
		border: 2px solid black;
		transition: all 0.5s linear;
		padding: 0 0.5rem;
		background-color: white;
		&:hover {
			transform: translate(-1%, -1%);
			filter: drop-shadow(5px 5px black);
		}
	}
`;
const ShoppingButton: FC<ShoppingButtonProps> = ({
	handleClick,
	isCart = false,
}) => {
	return (
		<ShoppingButtonWrapper>
			<IFEComp
				state={isCart}
				firstChild={
					<Fragment>
						<button onClick={handleClick}>
							<MdRemoveShoppingCart size={25} />
						</button>
						<button onClick={handleClick}>
							<MdAddShoppingCart size={25} />
						</button>
					</Fragment>
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
