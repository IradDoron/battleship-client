import CELL_STATUSES from '../constants/CELL_STATUSES';

function isCouldPositionShip(
	isShipVertical,
	currShipSize,
	newState,
	cellCoords
) {
	const [rowIndex, colIndex] = cellCoords;
	let flag = true;
	if (isShipVertical) {
		for (let row = rowIndex; row < rowIndex + currShipSize; row++) {
			if (!(newState[row][colIndex] === CELL_STATUSES.HOVER)) {
				flag = false;
				return flag;
			}
		}
	} else {
		for (let col = colIndex; col < colIndex + currShipSize; col++) {
			if (!(newState[rowIndex][col] === CELL_STATUSES.HOVER)) {
				flag = false;
				return flag;
			}
		}
	}

	return flag;
}

export default isCouldPositionShip;
