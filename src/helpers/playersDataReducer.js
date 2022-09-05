function playersDataReducer(state, data) {
	const { type, payload } = data;
	const { gameId, player1, player2 } = payload;
	const newState = { ...state };

	switch (type) {
		case 'SET_INIT_ROOM_DATA': {
			newState.gameId = gameId;
			newState.player1 = { ...player1 };
			newState.player2 = { ...player2 };
			return newState;
		}

		case 'PLAYER_JOINED': {
			newState.gameId = gameId;
			newState.player1 = { ...player1 };
			newState.player2 = { ...player2 };
			return newState;
		}

		case 'CLICK_ON_A_SHIP_IN_LEGEND': {
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
			newState.player1 = { ...player1 };
			newState.player2 = { ...player2 };
			return newState;
		}

		case 'MOUSE_LEAVE_CELL': {
			newState.player1 = { ...player1 };
			newState.player2 = { ...player2 };
			return newState;
		}

		case 'CLICK_CELL': {
			newState.player1 = { ...player1 };
			newState.player2 = { ...player2 };
			return newState;
		}

		case 'PLAYER_READY': {
			newState.player1 = { ...player1 };
			newState.player2 = { ...player2 };
			//console.log('ready in reducer', newState);
			return newState;
		}
		case 'START_GAME': {
			const { playersData } = payload;
			newState.player1 = { ...playersData.player1 };
			newState.player2 = { ...playersData.player2 };
			newState.isGameStarted = playersData.isGameStarted;
			return newState;
		}

		case 'POSITION_RANDOMLY': {
			newState.player1 = { ...player1 };
			newState.player2 = { ...player2 };
			return newState;
		}

		case 'CLICK_TARGET_CELL': {
			newState.player1 = { ...player1 };
			newState.player2 = { ...player2 };
			return newState;
		}

		case 'MOUSE_ENTER_TARGET_CELL': {
			newState.player1 = { ...player1 };
			newState.player2 = { ...player2 };
			return newState;
		}

		case 'MOUSE_LEAVE_TARGET_CELL': {
			newState.player1 = { ...player1 };
			newState.player2 = { ...player2 };
			return newState;
		}

		case 'END_GAME': {
			newState.player1 = { ...player1 };
			newState.player2 = { ...player2 };
			return newState;
		}

		default: {
			return newState;
		}
	}
}

export default playersDataReducer;
