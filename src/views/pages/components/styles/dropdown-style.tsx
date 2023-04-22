import styled from '@emotion/styled';

const DropDownMenuWrapper = styled.div`
	position: fixed;
	width: 90%;
	z-index: 99;
	left: 50%;
	transform: translateX(-50%);
	padding: 1rem 1.5rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-flow: row nowrap;
	background-color: white;
	color: black;
	/* background: rgba(255, 255, 255, 0);
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
	backdrop-filter: blur(20px);
	-webkit-backdrop-filter: blur(20px); */
	button {
		font-size: 20px;
		font-weight: 400;
		text-transform: capitalize;
	}
`;

export default DropDownMenuWrapper;
