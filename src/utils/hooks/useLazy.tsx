import React, { lazy } from 'react';

// const FNPath = (path: string): { newPath: Promise<any>; name: string } => {
// 	let newPath: string[] = path.split('/');
// 	return {
// 		newPath: import(`${path.toString()}`),
// 		name: newPath[newPath.length - 1],
// 	};
// };

const useLazy = (
	path: Promise<any>,
	name: string
): React.LazyExoticComponent<any> => {
	const result = lazy(() =>
		path.then((module) => ({ default: module[`${name}`] }))
	);
	return result;
};

export default useLazy;
