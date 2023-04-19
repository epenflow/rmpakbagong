import { Navigate } from 'react-router-dom';
import styled from '@emotion/styled';
import HaversineLocation, { ICoords } from '../../../utils/userLocation';
import React from 'react';
const NotFoundWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100vh;
	h1 {
		text-transform: capitalize;
	}
`;
export const NotFound = () => {
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
	const [getUserLocations, setUserLocations] = React.useState<ICoords>({
		latitude: 0,
		longitude: 0,
	});
	const radius = 0.25;
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
	const newUserLocations = new HaversineLocation(x, getUserLocations);

	if (newUserLocations.haversine() <= radius) {
		return <Navigate to={'notfound'} />;
	}
	console.info(newUserLocations.haversine());
	console.info(newUserLocations.toUnits(newUserLocations.haversine()));
	return (
		<NotFoundWrapper>
			<h1>
				radius lokasi anda jauh&nbsp;:&nbsp;
				{newUserLocations.toUnits(newUserLocations.haversine())}
			</h1>
		</NotFoundWrapper>
	);
};
