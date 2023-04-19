import React, { createContext, useContext } from 'react';

const DomState = createContext({});

export const DomProvider = ({ children }: { children: React.ReactNode }) => {
	const initialValues = {};
	return <DomState.Provider value={initialValues} children={children} />;
};

const useDom = () => {
	const context = useContext(DomState);

	if (context === undefined) {
		throw new Error('useDom must provide DomProvider');
	}
	return context;
};

export default useDom;
