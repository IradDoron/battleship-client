import { useContext } from 'react';
import styled from 'styled-components';
import GameIdContext from '../../../../../../contexts/GameIdContext';
import PlayersDataContext from '../../../../../../contexts/PlayersDataContext';
import SocketContext from '../../../../../../contexts/SocketContext';
import getCellBgColor from '../../../../../../helpers/getCellBgColor';

const CELL_SIZE = 50;

const StyledCell = styled.div`
	width: ${CELL_SIZE}px;
	height: ${CELL_SIZE}px;
	border: solid black;
	background-color: ${(props) => props.bgColor};
	cursor: default;
`;

function Cell({ cellCoords, boardId }) {
	// cellStatus is a string like 'EMPTY', 'SHIP', 'HIT', 'MISS', 'HOVER', 'SUNK', 'WAVE'
	// cellCoords is an array like [0, 0]

	const { socket } = useContext(SocketContext);
	const { gameId } = useContext(GameIdContext);
	const { playersData } = useContext(PlayersDataContext);
	const [row, col] = cellCoords;

	const cellStatus = playersData[boardId].gridData[row][col];
	const bgColor = getCellBgColor(cellStatus);

	function handleClick() {
		socket.emit('clickCell', {
			cellCoords,
			gameId,
			boardId,
		});
	}

	function handleMouseEnter() {
		socket.emit('mouseEnterCell', {
			cellCoords,
			gameId,
			boardId,
		});
	}

	function handleMouseLeave() {
		socket.emit('mouseLeaveCell', {
			cellCoords,
			gameId,
			boardId,
		});
	}
	return (
		<StyledCell
			bgColor={bgColor}
			onClick={handleClick}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		></StyledCell>
	);
}

export default Cell;
