import styled from '@emotion/styled';

const CartProductWrapper = styled.div`
	height: 100vh;
	width: 100%;
	position: fixed;
	left: 50%;
	transform: translateX(-50%);
	padding: 0.5rem;
	background-color: white;
	color: black;
	overflow-y: scroll;
	section:nth-of-type(1) {
		display: flex;
		flex-flow: row nowrap;
		justify-content: space-between;
	}
	section {
		margin: 1rem;
		display: flex;
		flex-direction: column;
		div:nth-of-type(1) {
			height: 5rem;
			background-color: yellow;
		}
		div:nth-of-type(2) {
			display: flex;
			flex-flow: row wrap;
			align-items: center;
			justify-content: center;
			gap: 2rem;
		}
	}
`;

export default CartProductWrapper;
