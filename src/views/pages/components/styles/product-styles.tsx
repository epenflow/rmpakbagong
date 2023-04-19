import styled from '@emotion/styled';
const ProductWrapper = styled.div`
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	margin-top: 100px;
`;
type TCardProduct = {
	img: string;
};
export const CardProduct = styled.section<TCardProduct>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 320px;
	gap: 0.5rem;
	margin: 0.5rem;
	padding: 0.5rem;
	background-color: #ff0000;

	h1 {
		text-transform: capitalize;
		font-size: 20px;
		font-weight: 300;
		width: 100%;
		text-align: start;
	}
	h2 {
		font-size: 16px;
		width: 100%;
		text-align: start;
		font-weight: 500;
	}
	div:nth-of-type(1) {
		width: 280px;
		height: 280px;
		background-image: url(${(props) => props.img});
		background-size: cover;
	}
`;
export default ProductWrapper;
