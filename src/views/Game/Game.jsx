import SocketContext from '../../contexts/SocketContext';
import GridDataContext from '../../contexts/GridDataContext';
import PlayersDataContext from '../../contexts/PlayersDataContext';
import { useContext, useState } from 'react';
import GameArea from './GameArea/GameArea';

function Game() {
	const { playersData, dispatchPlayersData } = useContext(PlayersDataContext);

	return (
		<>
			<h1>Game view</h1>
			<h2>Game id: {playersData?.gameId}</h2>
			<h2>Player 1: {playersData?.player1?.name}</h2>
			<h2>Player 2: {playersData?.player2?.name}</h2>
			{playersData && <GameArea />}
		</>
	);
}

export default Game;
