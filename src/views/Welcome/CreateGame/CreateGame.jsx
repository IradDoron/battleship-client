import { useContext } from 'react';
import SocketContext from '../../../contexts/SocketContext';
import PlayerIdContext from '../../../contexts/PlayerIdContext';
import GameIdContext from '../../../contexts/GameIdContext';
import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';

function CreateGame({ userName }) {
	const navigate = useNavigate();
	const socket = useContext(SocketContext);
	const { playerId, setPlayerId } = useContext(PlayerIdContext);
	const { gameId, setGameId } = useContext(GameIdContext);

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
