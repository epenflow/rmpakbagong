import React from 'react';
import Product from '../components/Product';
import Header from '../components/Header';
import useDevice from '../../../utils/hooks/useDevice';
import { Navigate } from 'react-router-dom';
import { useGeolocated } from 'react-geolocated';
import HaversineLocation, { ICoords } from '../../../utils/userLocation';
export const MainLayouts = () => {
	const { isAndroid, isIOS } = useDevice();
	const [getUserLocations, setUserLocations] = React.useState<ICoords>({
		latitude: 0,
		longitude: 0,
	});
	const radius = 0.02;
	const x: ICoords = {
		latitude: -8.466573923064276,
		longitude: 115.35061299320614,
	};
	const y: ICoords = {
		latitude: -8.46648611118884,
		longitude: 115.35059493301397,
	};
	const z: ICoords = {
		latitude: -8.462960491202429,
		longitude: 115.35355584306912,
	};
	navigator.geolocation.getCurrentPosition(
		function (position: GeolocationPosition) {
			setUserLocations((prev) => ({
				...prev,
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
			}));
		}.bind(this),
		function (msg: GeolocationPositionError) {
			alert(`silahkan hidupkan gps`);
		}
	);
	const userLocations = new HaversineLocation(x, getUserLocations);
	if (userLocations.haversine() >= radius) {
		return (
			<h1>
				radius lokasi anda&nbsp;:&nbsp;
				{userLocations.toUnits(userLocations.haversine())}
			</h1>
		);
	}
	console.info(userLocations.haversine());
	console.info(userLocations.toUnits(userLocations.haversine()));
	return (
		<React.Fragment>
			{!isAndroid && !isIOS ? (
				<h1>silahkan buka di mobile</h1>
			) : (
				<React.Fragment>
					<Header />
					<Product />
				</React.Fragment>
			)}
		</React.Fragment>
	);
};
/**
 * react-device-detect
 */
