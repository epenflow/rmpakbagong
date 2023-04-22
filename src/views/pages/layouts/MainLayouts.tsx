import React from 'react';
import Product from '../components/Product';
import Header from '../components/Header';
import useDevice from '../../../utils/hooks/useDevice';
import HaversineLocation, { ICoords } from '../../../utils/userLocation';
import DropDownMenu from '../components/Dropdown';
import useDom from '../../../utils/contexts/dom-provider';

export const MainLayouts = () => {
	const { isAndroid, isIOS } = useDevice();
	const { isDropDownMenu } = useDom();
	const [getUserLocations, setUserLocations] = React.useState<ICoords>({
		latitude: 0,
		longitude: 0,
	});
	const radius = 0.02;
	const x: ICoords = {
		latitude: -8.466573923064276,
		longitude: 115.35061299320614,
	};
	// navigator.geolocation.getCurrentPosition(
	// 	function (position: GeolocationPosition) {
	// 		setUserLocations((prev) => ({
	// 			...prev,
	// 			latitude: position.coords.latitude,
	// 			longitude: position.coords.longitude,
	// 		}));
	// 	}.bind(this),
	// 	function (msg: GeolocationPositionError) {
	// 		alert(`silahkan hidupkan gps`);
	// 	}
	// );
	// const userLocations = new HaversineLocation(x, getUserLocations);
	// if (userLocations.haversine() >= radius) {
	// 	return (
	// 		<h1>
	// 			radius lokasi anda&nbsp;:&nbsp;
	// 			{userLocations.toUnits(userLocations.haversine())}
	// 		</h1>
	// 	);
	// }
	return !isAndroid && !isIOS ? (
		<h1>silahkan buka di mobile</h1>
	) : (
		<React.Fragment>
			<Header />
			<DropDownMenu state={isDropDownMenu} />
			<Product />
		</React.Fragment>
	);
};
/**
 * react-device-detect
 */
