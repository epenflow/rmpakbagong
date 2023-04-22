import styled from '@emotion/styled';

const CartProductWrapper = styled.div`
	height: 100vh;
	width: 100%;
	position: fixed;
	left: 50%;
	transform: translateX(-50%);
	background-color: white;
	color: black;
	overflow: auto;
	section:first-of-type {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
		margin: 2rem;
	}
	section:last-of-type {
		margin-bottom: 10rem;
	}
`;
type TCartItem = {
	img: string;
};
export const CartItem = styled.section<TCartItem>`
	display: flex;
	flex-direction: column;
	margin: 1rem;
	div {
		display: flex;
		flex-flow: row nowrap;
		div:first-of-type {
			flex: 2;
			height: 10rem;
			background-image: url(${(props) => props.img});
			background-size: cover;
			background-position: center;
			background-repeat: no-repeat;
			background-color: yellow;
		}
		div:last-of-type {
			flex: 1;
			display: flex;
			gap: 0.5rem;
			button {
				flex: 1;
			}
		}
	}
`;
export default CartProductWrapper;
