import styled from '@emotion/styled';
const HeaderWrapper = styled.header`
	position: fixed;
	display: flex;
	top: 0;
	left: 0;
	height: 60px;
	width: 100%;
	z-index: 9999;
	padding: 0.25rem 2.5rem;
	box-sizing: border-box;
	justify-content: space-between;
	align-items: center;
	overflow: hidden !important;
	border-bottom: 2px solid black;
	background-color: white;
	color: black;
	/* background: rgba(255, 255, 255, 0);
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(20px);
	-webkit-backdrop-filter: blur(20px); */

	h1 {
		text-transform: capitalize;
		font-size: 20px;
	}

	section:nth-of-type(2) {
		display: flex;
		flex-direction: row !important;
		gap: 1.5rem;
	}
`;
export default HeaderWrapper;
