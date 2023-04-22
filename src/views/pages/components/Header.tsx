import React from 'react';
import { CartButton, CategoryButton } from './Button';
import HeaderWrapper from './styles/header-styles';
import DropDownMenuWrapper from './styles/dropdown-style';
import useDom from '../../../utils/contexts/dom-provider';
const Header = () => {
	const [isActive, setActive] = React.useState<boolean>(false);
	const { isDropDownMenu, setDropDownMenu, setCartProduct, isCartProduct } =
		useDom();

	const handleDropDownMenu = () => {
		setDropDownMenu((prev) => !prev);
	};
	const handleCartProduct = () => {
		setCartProduct((prev) => !prev);
	};
	return (
		<HeaderWrapper title='header container'>
			<section title='rm pak bagong'>
				<h1 title='rm pak bagong mujair khas bangli'>rm. pak bagong</h1>
			</section>
			<section title='button section'>
				<CategoryButton
					size={25}
					handleClick={handleDropDownMenu}
				/>
				<CartButton
					handleClick={handleCartProduct}
					size={25}
					total={40}
					iconColor={'black'}
					totalColor='red'
					textColor='white'
					totalState={!isCartProduct}
				/>
			</section>
		</HeaderWrapper>
	);
};
export default Header;
