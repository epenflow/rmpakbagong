import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { CartButtonProps } from '../Button';
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
export { ShoppingButtonWrapper, TotalWrapper };
