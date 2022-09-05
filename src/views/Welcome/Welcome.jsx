import { useState } from 'react';

import styled from 'styled-components';

import MainButton from '../../components/MainButton/MainButton';
import MainHeader from '../../components/MainHeader/MainHeader';

import StyledInput from '../../components/Input/Input';

import { MARGINS } from '../../constants/STYLES';

import { useNavigate } from 'react-router-dom';
import { v4 } from 'uuid';
import GameIdContext from '../../contexts/GameIdContext';
import PlayerIdContext from '../../contexts/PlayerIdContext';
import SocketContext from '../../contexts/SocketContext';

import Input from '../../components/Input/Input';

import { useContext, useEffect } from 'react';

const StyledFlexContainerRow = styled.div`
	display: flex;
	flex-direction: row;
	width: 320px;
	justify-content: space-between;
	margin-bottom: ${MARGINS.xxl};
`;

const StyledFlexContainerColumn = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

function Welcome() {
	const [userName, setUserName] = useState('');
	const [isCreateGame, setIsCreateGame] = useState(true);

	const { socket } = useContext(SocketContext);
	const { setPlayerId } = useContext(PlayerIdContext);
	const { gameId, setGameId } = useContext(GameIdContext);

	const navigate = useNavigate();

	function handleCreateGame() {
		const gameId = v4();
		const slicedGameId = gameId.slice(0, 4);
		socket.emit('createGame', {
			userName,
			gameId: slicedGameId,
		});
		setPlayerId('player1');
		setGameId(slicedGameId);
		navigate(`/game`);
	}

	function handleNameChange(e) {
		setUserName(e.target.value);
	}

	function handleClickCreateGame(bool) {
		setIsCreateGame(bool);
	}

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

	useEffect(() => {}, [gameId]);
	return (
		<>
			<StyledFlexContainerColumn>
				<MainHeader />
				<StyledFlexContainerRow>
					<MainButton
						isSelected={isCreateGame}
						onClick={() => handleClickCreateGame(true)}
					>
						Create Game
					</MainButton>
					<MainButton
						isSelected={!isCreateGame}
						onClick={() => handleClickCreateGame(false)}
					>
						Join Game
					</MainButton>
				</StyledFlexContainerRow>

				<StyledInput
					onChange={handleNameChange}
					type="text"
					name="name"
					placeholder="Enter your name"
				/>

				{!isCreateGame && (
					<Input
						onChange={(e) => handleChangeGameId(e)}
						type="text"
						name="name"
						placeholder="Enter Game ID"
					/>
				)}

				<MainButton onClick={isCreateGame ? handleCreateGame : handleJoinGame}>
					Play
				</MainButton>
			</StyledFlexContainerColumn>
		</>
	);
}

export default Welcome;
