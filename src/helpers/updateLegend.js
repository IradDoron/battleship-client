function updateLegend(legend, setLegend, currLegendIndex) {
	console.log('update legend');
	const newLegend = [...legend];
	const isCurrShipPlaced = newLegend[currLegendIndex].isPlaced;
	newLegend[currLegendIndex].isPlaced = !isCurrShipPlaced;
	setLegend(newLegend);
}

export default updateLegend;
