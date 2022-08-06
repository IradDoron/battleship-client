import SocketContext from '../../../contexts/SocketContext';
import PlayerIdContext from '../../../contexts/PlayerIdContext';
import GameIdContext from '../../../contexts/GameIdContext';

import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function JoinGame({ userName }) {
	const socket = useContext(SocketContext);
	const { playerId, setPlayerId } = useContext(PlayerIdContext);
	const { gameId, setGameId } = useContext(GameIdContext);

	const navigate = useNavigate();

	function handleJoinGame() {
		console.log('handleJoinGame');
		console.log('userName', userName);
		console.log('gameId', gameId);
		socket.emit('joinGame', {
			userName,
			gameId,
		});
		setPlayerId('player2');
		navigate(`/game`);
	}

	function handleChangeGameId(e) {
		setGameId(e.target.value);
	}

	useEffect(() => {
		console.log('gameId', gameId);
	}, [gameId]);
	return (
		<>
			<label>
				insert URL link:
				<input onChange={(e) => handleChangeGameId(e)} />
			</label>
			<button onClick={handleJoinGame}>Join</button>
		</>
	);
}

export default JoinGame;
