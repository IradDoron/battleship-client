function playersDataReducer(state, data) {
	const { type, payload } = data;
	const { gameId, player1, player2 } = payload;
	const newState = { ...state };

	switch (type) {
		case 'SET_INIT_ROOM_DATA': {
			console.log('SET_INIT_ROOM_DATA');
			newState.gameId = gameId;
			newState.player1 = { ...player1 };
			newState.player2 = { ...player2 };
			return newState;
		}

		case 'PLAYER_JOINED': {
			console.log('PLAYER_JOINED');
			newState.gameId = gameId;
			newState.player1 = { ...player1 };
			newState.player2 = { ...player2 };
			return newState;
		}

		case 'CLICK_ON_A_SHIP_IN_LEGEND': {
			console.log('CLICK_ON_A_SHIP_IN_LEGEND');
			newState.player1 = { ...player1 };
			newState.player2 = { ...player2 };
			return newState;
		}

		case 'TOGGLE_IS_SHIP_VERTICAL': {
			newState.player1 = { ...player1 };
			newState.player2 = { ...player2 };

			return newState;
		}

		case 'TOGGLE_IS_EDIT_MODE_ON': {
			newState.player1 = { ...player1 };
			newState.player2 = { ...player2 };

			return newState;
		}

		case 'MOUSE_ENTER_CELL': {
			console.log('MOUSE_ENTER_CELL');
			newState.player1 = { ...player1 };
			newState.player2 = { ...player2 };
			return newState;
		}

		case 'MOUSE_LEAVE_CELL': {
			console.log('MOUSE_LEAVE_CELL');
			newState.player1 = { ...player1 };
			newState.player2 = { ...player2 };
			return newState;
		}
		// case 'TOGGLE_IS_EDIT_MODE_ON': {
		// 	console.log('TOGGLE_IS_EDIT_MODE_ON');
		// 	newState[playerId].isEditModeOn = !newState[playerId].isEditModeOn;
		// 	return newState;
		// }
		default: {
			return newState;
		}
	}

	// const [row, col] = cellCoords;
	// const newState = [...state];
	// const currShipSize = legend[currLegendIndex].size;
	// switch (action) {
	// case ACTIONS.MOUSE_ENTER: {
	// 	if (
	// 		canHover(isShipVertical, currShipSize, newState, cellCoords) &&
	// 		!legend[currLegendIndex].isPlaced
	// 	) {
	// 		if (isShipVertical) {
	// 			for (let count = 0; count < currShipSize; count++) {
	// 				if (newState[row + count][col] === CELL_STATUSES.EMPTY) {
	// 					newState[row + count][col] = CELL_STATUSES.HOVER;
	// 				}
	// 			}
	// 		} else {
	// 			for (let count = 0; count < currShipSize; count++) {
	// 				if (newState[row][col + count] === CELL_STATUSES.EMPTY) {
	// 					newState[row][col + count] = CELL_STATUSES.HOVER;
	// 				}
	// 			}
	// 		}
	// 		return newState;
	// 	}
	// 	return newState;
	// }

	// 	case ACTIONS.MOUSE_LEAVE: {
	// 		for (let row = 0; row < newState.length; row++) {
	// 			for (let col = 0; col < newState[row].length; col++) {
	// 				if (newState[row][col] === CELL_STATUSES.HOVER) {
	// 					newState[row][col] = CELL_STATUSES.EMPTY;
	// 				}
	// 			}
	// 		}
	// 		return newState;
	// 	}
	// 	case ACTIONS.CLICK: {
	// 		// define placing ships logic
	// 		if (
	// 			isEditModeOn &&
	// 			isCouldPositionShip(isShipVertical, currShipSize, newState, cellCoords)
	// 		) {
	// 			if (isShipVertical) {
	// 				for (let count = 0; count < currShipSize; count++) {
	// 					newState[row + count][col] = currLegendIndex + 1;
	// 				}
	// 			} else {
	// 				for (let count = 0; count < currShipSize; count++) {
	// 					newState[row][col + count] = currLegendIndex + 1;
	// 				}
	// 			}

	// 			updateLegend(legend, setLegend, currLegendIndex);
	// 			return newState;
	// 		}

	// 		// define remove ship
	// 		if (isEditModeOn && typeof newState[row][col] === 'number') {
	// 			const removeShipAtIndex = newState[row][col] - 1;
	// 			console.log(removeShipAtIndex);
	// 			updateLegend(legend, setLegend, removeShipAtIndex);
	// 			for (let row = 0; row < newState.length; row++) {
	// 				for (let col = 0; col < newState[row].length; col++) {
	// 					if (newState[row][col] === removeShipAtIndex + 1) {
	// 						newState[row][col] = CELL_STATUSES.EMPTY;
	// 					}
	// 				}
	// 			}

	// 			return newState;
	// 		}
	// 		return newState;
	// 	}
	// 	default: {
	// 		return state;
	// 	}
	// }
}

export default playersDataReducer;
