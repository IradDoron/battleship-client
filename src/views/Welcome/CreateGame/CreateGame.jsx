import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import GameIdContext from '../../../contexts/GameIdContext';
import PlayerIdContext from '../../../contexts/PlayerIdContext';
import SocketContext from '../../../contexts/SocketContext';

function CreateGame({ userName }) {
	const navigate = useNavigate();
	const socket = useContext(SocketContext);
	const { playerId, setPlayerId } = useContext(PlayerIdContext);
	const { gameId, setGameId } = useContext(GameIdContext);

	console.log('just printing this for use those variables',playerId, gameId);

	function createGame() {
		const gameId = v4();
		socket.emit('createGame', {
			userName,
			gameId,
		});
		setPlayerId('player1');
		setGameId(gameId);
		navigate(`/game`);
	}
	return <button onClick={createGame}>Create game</button>;
}

export default CreateGame;
