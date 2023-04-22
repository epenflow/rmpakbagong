import React, { Provider } from 'react';

interface IDomState {
	isDropDownMenu: boolean;
	setDropDownMenu: React.Dispatch<React.SetStateAction<boolean>>;
}
interface IDomProvider {
	children: JSX.Element;
}
const DomState = React.createContext<IDomState>({
	isDropDownMenu: false,
	setDropDownMenu: () => {},
});
export const DomProvider: React.FC<IDomProvider> = ({ children }) => {
	const [isDropDownMenu, setDropDownMenu] = React.useState<boolean>(false);
	const initialValue = {
		isDropDownMenu,
		setDropDownMenu,
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
