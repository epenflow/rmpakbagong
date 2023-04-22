import React, { Provider } from 'react';

interface IDomState {
	isDropDownMenu: boolean;
	setDropDownMenu: React.Dispatch<React.SetStateAction<boolean>>;

	isCartProduct: boolean;
	setCartProduct: React.Dispatch<React.SetStateAction<boolean>>;
}
interface IDomProvider {
	children: JSX.Element;
}
const DomState = React.createContext<IDomState>({
	isDropDownMenu: false,
	setDropDownMenu: () => {},
	isCartProduct: false,
	setCartProduct: () => {},
});
export const DomProvider: React.FC<IDomProvider> = ({ children }) => {
	const [isDropDownMenu, setDropDownMenu] = React.useState<boolean>(false);
	const [isCartProduct, setCartProduct] = React.useState<boolean>(false);
	const initialValue = {
		isDropDownMenu,
		setDropDownMenu,
		isCartProduct,
		setCartProduct,
	};
	return (
		<DomState.Provider
			value={initialValue}
			children={children}
		/>
	);
};

const useDom = (): IDomState => {
	const context = React.useContext<IDomState>(DomState);
	if (context === undefined) {
		throw new Error('useDom must provide DomProvider');
	}
	return context;
};

export default useDom;
