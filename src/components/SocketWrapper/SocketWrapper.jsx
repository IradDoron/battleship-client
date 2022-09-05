import IsGameOverContext from '../../contexts/IsGameOverContext';
import IsGameStartedContext from '../../contexts/IsGameStartedContext';
import PlayersDataContext from '../../contexts/PlayersDataContext';
import SocketContext from '../../contexts/SocketContext';

import { useContext } from 'react';

function SocketWrapper({ children }) {
	const { socket } = useContext(SocketContext);
	const { dispatchPlayersData } = useContext(PlayersDataContext);
	const { setIsGameStarted } = useContext(IsGameStartedContext);
	const { setIsGameOver } = useContext(IsGameOverContext);

	socket.on('gameCreated', (data) => {
		dispatchPlayersData({
			type: 'SET_INIT_ROOM_DATA',
			payload: { ...data.roomData },
		});
	});

	socket.once('gameJoined', (data) => {
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

	socket.once('clickCell', ({ playersData }) => {
		const { gameId, player1, player2 } = playersData;
		dispatchPlayersData({
			type: 'CLICK_CELL',
			payload: { gameId, player1, player2 },
		});
	});

	socket.once('ready', (data) => {
		const {  player1, player2 } = data;
		dispatchPlayersData({
			type: 'PLAYER_READY',
			payload: { player1, player2 },
		});
	});

	socket.on('gameCreated', (data) => {
		dispatchPlayersData({
			type: 'gameCreated',
			payload: data,
		});
	});
	socket.on('gameJoined', (data) => {});

	socket.once('startGame', (data) => {
		setIsGameStarted(true);
		dispatchPlayersData({
			type: 'START_GAME',
			payload: data,
		});
	});

	socket.once('positionRandomly', ({ playersData }) => {
		const { gameId, player1, player2 } = playersData;
		dispatchPlayersData({
			type: 'POSITION_RANDOMLY',
			payload: { gameId, player1, player2 },
		});
	});

	socket.once('clickTargetCell', ({ playersData }) => {
		const { gameId, player1, player2 } = playersData;
		dispatchPlayersData({
			type: 'CLICK_TARGET_CELL',
			payload: { gameId, player1, player2 },
		});
	});

	socket.once('mouseEnterTargetCell', ({ playersData }) => {
		const { gameId, player1, player2 } = playersData;
		dispatchPlayersData({
			type: 'MOUSE_ENTER_TARGET_CELL',
			payload: { gameId, player1, player2 },
		});
	});

	socket.once('mouseLeaveTargetCell', ({ playersData }) => {
		const { gameId, player1, player2 } = playersData;
		dispatchPlayersData({
			type: 'MOUSE_LEAVE_TARGET_CELL',
			payload: { gameId, player1, player2 },
		});
	});

	socket.once('endGame', (data) => {
		const { playersData } = data;
		const { gameId, player1, player2 } = playersData;
		setIsGameOver(true);
		dispatchPlayersData({
			type: 'END_GAME',
			payload: { gameId, player1, player2 },
		});
	});

	return <>{children}</>;
}

export default SocketWrapper;
