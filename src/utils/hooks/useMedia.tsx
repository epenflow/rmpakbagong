import { useEffect, useMemo, useState } from 'react';

const useMedia = ({
	maxWidth = 420,
	minWidth = 0,
}: {
	maxWidth: number;
	minWidth: number;
}) => {
	const [isWidth, setWidth] = useState<boolean>(false);
	const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);
	const handleResize = () => {
		setInnerWidth(window.innerWidth);
	};
	useEffect(() => {
		window.addEventListener('resize', handleResize);
		if (maxWidth >= innerWidth && innerWidth >= minWidth) {
			setWidth(true);
		} else {
			setWidth(false);
		}
	}, [innerWidth]);
	const memorizeWidth = useMemo(() => {
		return [isWidth, maxWidth, minWidth];
	}, [isWidth, maxWidth, minWidth]);
	return memorizeWidth;
};

export default useMedia;
