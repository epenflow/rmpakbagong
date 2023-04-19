import styled from '@emotion/styled';
import { FC } from 'react';
import { IFComp } from '../../components/IFEComp';

const DropDownMenuWrapper = styled.section`
	width: 5rem;
	height: 7.5rem;
	background-color: white;
	position: absolute;
	left: 50%;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column !important;
	border: 2px solid black;
	&:before {
		content: '';
		width: 1rem;
		height: 1rem;
		transform: rotate(45deg);
		background-color: white;
		position: absolute;
		left: -20%;
		top: -20%;
		border: 2px solid black;
	}
	h6 {
		text-transform: capitalize;
	}
`;
const DropDownMenu: FC = ({ state = false }: { state?: boolean }) => {
	return (
		<IFComp
			state={state}
			children={
				<DropDownMenuWrapper>
					<h6>makanan</h6>
					<h6>minuman</h6>
				</DropDownMenuWrapper>
			}
		/>
	);
};

export { DropDownMenu };
