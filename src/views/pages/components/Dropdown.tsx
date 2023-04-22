import React from 'react';
import { IFComp } from '../../components/IFEComp';
import DropDownMenuWrapper from './styles/dropdown-style';
import useDom from '../../../utils/contexts/dom-provider';

const DropDownMenu: React.FC = (): JSX.Element => {
	const { isDropDownMenu } = useDom();
	return (
		<IFComp
			state={isDropDownMenu}
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
