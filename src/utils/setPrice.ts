const idrFormat = new Intl.NumberFormat('id-ID', {
	style: 'currency',
	currency: 'idr',
});
const setPrice = (price: number) => {
	return idrFormat.format(price);
};
export default setPrice;
