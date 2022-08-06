import GameIdContext from '../../../contexts/GameIdContext';
import PlayerIdContext from '../../../contexts/PlayerIdContext';
import SocketContext from '../../../contexts/SocketContext';

import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function JoinGame({ userName }) {
	const socket = useContext(SocketContext);
	const { playerId, setPlayerId } = useContext(PlayerIdContext);
	const { gameId, setGameId } = useContext(GameIdContext);

	const navigate = useNavigate();

	console.log('just printing this for use those variables',playerId, gameId);


	function handleJoinGame() {
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
