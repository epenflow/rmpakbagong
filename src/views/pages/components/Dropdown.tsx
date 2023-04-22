import styled from '@emotion/styled';
import { FC } from 'react';
import { IFComp } from '../../components/IFEComp';
import DropDownMenuWrapper from './styles/dropdown-style';

interface IDropDownMenu {
	state: boolean;
}
const DropDownMenu: FC<IDropDownMenu> = ({ state = false }): JSX.Element => {
	return (
		<IFComp
			state={state}
			children={
				<DropDownMenuWrapper>
					<button>makanan</button>
					<button>minuman</button>
				</DropDownMenuWrapper>
			}
		/>
	);
};

export default DropDownMenu;
