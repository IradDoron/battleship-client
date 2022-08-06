// import components
import Board from '../Board/Board';

// imports from libraries
import styled from 'styled-components';

const GameAreaWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border: solid red;
`;

function GameArea() {
	return (
		<>
			<GameAreaWrapper>
				<Board boardId="player1" />
				<Board boardId="player2" />
			</GameAreaWrapper>
		</>
	);
}

export default GameArea;
