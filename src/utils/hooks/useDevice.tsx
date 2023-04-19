import React from 'react';
const useDevice = () => {
	const isAndroid = navigator.userAgent.search('Android') != -1;
	const isIOS = navigator.userAgent.search('like Mac') != -1;

	const memorizeDevice = React.useMemo(() => {
		return {
			isAndroid,
			isIOS,
		};
	}, [isAndroid, isIOS]);
	console.info(`isAndroid\t:${isAndroid}`, `\nisIOS\t\t:${isIOS}`);
	return memorizeDevice;
};
export default useDevice;
