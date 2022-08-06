// import contexts
import GameIdContext from '../../contexts/GameIdContext';
import PlayerIdContext from '../../contexts/PlayerIdContext';
import PlayersDataContext from '../../contexts/PlayersDataContext';
import SettingsContext from '../../contexts/SettingsContext';
import SocketContext from '../../contexts/SocketContext';

// import constants
import socket from '../../constants/SOCKET';

// imports from react
import { useEffect, useReducer, useState } from 'react';

// import helpers functions
import playersDataReducer from '../../helpers/playersDataReducer';

function ContextWrapper({ children }) {
	const [settings, setSettings] = useState({
		isMusicOn: false,
		isFxSoundsOn: false,
		apperenceMode: 'light',
	});

	const [playerId, setPlayerId] = useState(null);
	const [gameId, setGameId] = useState(null);

	const [playersData, dispatchPlayersData] = useReducer(
		playersDataReducer,
		null
	);

	useEffect(() => {}, [playersData]);

	socket.on('gameCreated', (data) => {
		dispatchPlayersData({
			type: 'SET_INIT_ROOM_DATA',
			payload: { ...data.roomData },
		});
	});

	socket.once('gameJoined', (data) => {
		console.log(data);
		dispatchPlayersData({
			type: 'PLAYER_JOINED',
			payload: { ...data.roomData },
		});
	});

	socket.once('toggleIsShipVertical', ({ playersData }) => {
		const { gameId, player1, player2 } = playersData;
		dispatchPlayersData({
			type: 'TOGGLE_IS_SHIP_VERTICAL',
			payload: { gameId, player1, player2 },
		});
	});

	socket.once('toggleIsEditModeOn', ({ playersData }) => {
		const { gameId, player1, player2 } = playersData;
		dispatchPlayersData({
			type: 'TOGGLE_IS_EDIT_MODE_ON',
			payload: { gameId, player1, player2 },
		});
	});

	socket.once('clickOnAShipInLegend', ({ playersData }) => {
		const { gameId, player1, player2 } = playersData;
		dispatchPlayersData({
			type: 'CLICK_ON_A_SHIP_IN_LEGEND',
			payload: { gameId, player1, player2 },
		});
	});

	socket.once('mouseEnterCell', ({ playersData }) => {
		const { gameId, player1, player2 } = playersData;
		dispatchPlayersData({
			type: 'MOUSE_ENTER_CELL',
			payload: { gameId, player1, player2 },
		});
	});

	socket.once('mouseLeaveCell', ({ playersData }) => {
		const { gameId, player1, player2 } = playersData;
		dispatchPlayersData({
			type: 'MOUSE_LEAVE_CELL',
			payload: { gameId, player1, player2 },
		});
	});
	


	socket.on('gameCreated', (data) => {
		//console.log('gameCreated', data);
		dispatchPlayersData({
			type: 'gameCreated',
			payload: data,
		});
	});
	socket.on('gameJoined', (data) => {});

	return (
		<>
			<SettingsContext.Provider
				value={{
					settings,
					setSettings,
				}}
			>
				<SocketContext.Provider value={socket}>
					<PlayersDataContext.Provider
						value={{
							playersData,
							dispatchPlayersData,
						}}
					>
						<PlayerIdContext.Provider value={{ playerId, setPlayerId }}>
							<GameIdContext.Provider value={{ gameId, setGameId }}>
								{children}
							</GameIdContext.Provider>
						</PlayerIdContext.Provider>
					</PlayersDataContext.Provider>
				</SocketContext.Provider>
			</SettingsContext.Provider>
		</>
	);
}

export default ContextWrapper;
