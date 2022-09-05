// import components
import Board from './Board/Board';
import TargetBoard from './TargetBoard/TargetBoard';

// imports from libraries
import styled from 'styled-components';

import IsGameOverContext from '../../../contexts/IsGameOverContext';
import IsGameStartedContext from '../../../contexts/IsGameStartedContext';
import PlayerIdContext from '../../../contexts/PlayerIdContext';
import PlayersDataContext from '../../../contexts/PlayersDataContext';

import { useContext } from 'react';

import { COLORS, FONTS, PALETTE } from '../../../constants/STYLES';

const GameAreaWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const StyledBoardContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StyledBoardHeader = styled.h1`
	color: ${COLORS.headers.main};
`;

const StyledHeader = styled.h1`
	font-family: ${FONTS.secondary};
	color: ${PALETTE.WHITE};
`;

function GameArea() {
	const { isGameStarted } = useContext(IsGameStartedContext);
	const { playerId } = useContext(PlayerIdContext);
	const { playersData } = useContext(PlayersDataContext);
	const { isGameOver } = useContext(IsGameOverContext);

	function getOpponentName(playerId) {
		if (playerId === 'player1') {
			return playersData.player2.name;
		} else {
			return playersData.player1.name;
		}
	}

	console.log(isGameStarted)
	return (
		<>
			<GameAreaWrapper>
				<StyledBoardContainer>
					<Board boardId="player1" />
					<Board boardId="player2" />
				</StyledBoardContainer>

				{isGameStarted && (
					isGameOver ? (
						<StyledHeader>
							{playersData[playerId].isWinner ? 'YOU WON!' : 'YOU LOST!'}
						</StyledHeader>
					) : (
						<StyledHeader>
							Attack
						</StyledHeader>
					)
				) }
					

				<StyledBoardContainer>
					<StyledBoardHeader>{getOpponentName(playerId)}</StyledBoardHeader>

					{isGameStarted && (
						<>
							{playerId === 'player1' ? (
								<TargetBoard boardId="player1" />
							) : (
								<TargetBoard boardId="player2" />
							)}
						</>
					)}
				</StyledBoardContainer>
			</GameAreaWrapper>
		</>
	);
}

export default GameArea;
