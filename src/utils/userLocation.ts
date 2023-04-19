export interface ICoords {
	latitude: number;
	longitude: number;
}
class HaversineLocation {
	private latitudeX: number;
	private latitudeY: number;
	private longitudeX: number;
	private longitudeY: number;
	private R: number = 6371;

	public constructor(coordsX: ICoords, coordsY: ICoords) {
		this.latitudeX = coordsX.latitude;
		this.longitudeX = coordsX.longitude;
		this.latitudeY = coordsY.latitude;
		this.longitudeY = coordsY.longitude;
	}
	private toRadians(x: number): number {
		return x * (Math.PI / 180);
	}
	private mToKm(x: number): number {
		return x * 1000;
	}
	public toUnits(x: number) {
		const meters = new Intl.NumberFormat('en', {
			style: 'unit',
			unit: 'meter',
		});
		const kilometers = new Intl.NumberFormat('en', {
			style: 'unit',
			unit: 'kilometer',
		});
		if (x <= 1.0) {
			return meters.format(this.mToKm(Number(x.toFixed(3))));
		} else if (x >= 1.0) {
			return kilometers.format(Number(x.toFixed(1)));
		}
	}

	public haversine(): number {
		const latitudeX: number = this.toRadians(this.latitudeX);
		const latitudeY: number = this.toRadians(this.latitudeY);

		const latitude: number = this.latitudeY - this.latitudeX;
		const longtitude: number = this.longitudeY - this.longitudeX;

		const Δφ: number = latitude * (Math.PI / 180);
		const Δλ: number = longtitude * (Math.PI / 180);
		const a: number =
			Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
			Math.cos(latitudeX) *
				Math.cos(latitudeY) *
				Math.sin(Δλ / 2) *
				Math.sin(Δλ / 2);
		const c: number = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		const d: number = this.R * c;

		return d;
	}
}
export default HaversineLocation;
