import { AnimatePresence } from 'framer-motion';
import React, { FC, Fragment } from 'react';

type IFECompProps = {
	state: boolean;
	firstChild: React.ReactElement;
	secondChild: React.ReactElement;
};
const IFEComp: FC<IFECompProps> = ({ state, firstChild, secondChild }) => {
	return (
		<Fragment>
			<AnimatePresence initial={true}>
				{state ? firstChild : secondChild}
			</AnimatePresence>
		</Fragment>
	);
};

type IFCompProps = {
	state: boolean;
	children: React.ReactElement;
};
const IFComp: FC<IFCompProps> = ({ state, children }) => {
	return (
		<Fragment>
			<AnimatePresence initial={true}>
				{state ? children : null}
			</AnimatePresence>
		</Fragment>
	);
};

export { IFComp, IFEComp };
