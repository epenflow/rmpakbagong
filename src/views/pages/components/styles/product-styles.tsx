import styled from '@emotion/styled';
type TCardProduct = {
	width: string;
};
const ProductWrapper = styled.main`
	display: flex;
	flex-flow: row wrap;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	margin-top: 60px;
`;
export const CardProduct = styled.section<TCardProduct>`
	width: ${(props) => props.width};
	margin: 0.5rem;
	padding: 0.5rem;
	border: 2px solid black;
	background-color: white;
	transition: all 1s linear;
	&:hover {
		filter: drop-shadow(5px 5px 0 black);
	}
`;
type TProductItemWrapper = {
	img: string;
	isText: boolean;
	width: string;
};
export const ProductItemWrapper = styled.div<TProductItemWrapper>`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	div:first-of-type {
		width: 280px;
		height: 280px;
		background-image: url(${(props) => props.img});
		background-size: cover;
	}
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
	p {
		text-align: justify;
		overflow: hidden;
		white-space: ${(props) => (props.isText ? 'normal' : 'nowrap')};
		text-overflow: ${(props) => (props.isText ? 'unset' : 'ellipsis')};
		width: ${(props) => props.width};

		&:hover {
			cursor: pointer;
		}
	}
`;
export default ProductWrapper;
