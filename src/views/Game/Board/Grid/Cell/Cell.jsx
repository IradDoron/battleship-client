import { useContext } from 'react';
import styled from 'styled-components';
import ACTIONS from '../../../../../constants/ACTIONS';
import CELL_STATUSES from '../../../../../constants/CELL_STATUSES';
import GameIdContext from '../../../../../contexts/GameIdContext';
import LegendContext from '../../../../../contexts/LegendContext';
import PlayersDataContext from '../../../../../contexts/PlayersDataContext';
import SocketContext from '../../../../../contexts/SocketContext';
const CELL_SIZE = 50;

function getCellBgColor(cellStatus) {
	if (typeof cellStatus === 'number') {
		return '#321dbb';
	}
	switch (cellStatus) {
		case CELL_STATUSES.EMPTY:
			return '#fff';
		case CELL_STATUSES.HAS_SHIP:
			return '#321dbb';
		case CELL_STATUSES.HIT:
			return '#dc2626';
		case CELL_STATUSES.MISS:
			return '#f9c78f';
		case CELL_STATUSES.HOVER:
			return '#64533e';
		case CELL_STATUSES.SUNK:
			return '#33398d';
		case CELL_STATUSES.WAVE:
			return '#1f213a';

		default:
			return '#fff';
	}
}

const StyledCell = styled.div`
	width: ${CELL_SIZE}px;
	height: ${CELL_SIZE}px;
	border: solid black;
	background-color: ${(props) => props.bgColoc};
	cursor: default;
`;

function Cell({ cellCoords, boardId }) {
	// cellStatus is a string like 'EMPTY', 'SHIP', 'HIT', 'MISS', 'HOVER', 'SUNK', 'WAVE'
	// cellCoords is an array like [0, 0]

	const socket = useContext(SocketContext);
	const { gameId } = useContext(GameIdContext);
	const { playersData } = useContext(PlayersDataContext);
	const [row, col] = cellCoords;

	// console.log('boardId', boardId);
	// console.log('playersData', playersData);
	// console.log('playersData[boardId]', playersData[boardId]);
	// console.log('playersData[boardId].gridData', playersData[boardId].gridData);
	// console.log('[row, col]', [row, col]);
	// console.log(
	// 	'playersData[boardId].gridData[row][col]',
	// 	playersData[boardId].gridData[row][col]
	// );
	const cellStatus = playersData[boardId].gridData[row][col];
	const bgColor = getCellBgColor(cellStatus);
	console.log('playersData', playersData);

	function handleClick() {}

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
			bgColoc={bgColor}
			// onClick={handleClick}
			onMouseEnter={handleMouseEnter}
			 onMouseLeave={handleMouseLeave}
		>
			{cellStatus}
		</StyledCell>
	);
}

export default Cell;
