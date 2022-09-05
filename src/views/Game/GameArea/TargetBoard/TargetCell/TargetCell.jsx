import { useContext } from 'react';
import styled from 'styled-components';
import GameIdContext from '../../../../../contexts/GameIdContext';
import PlayerIdContext from '../../../../../contexts/PlayerIdContext';
import PlayersDataContext from '../../../../../contexts/PlayersDataContext';
import SocketContext from '../../../../../contexts/SocketContext';
import getCellBgColor from '../../../../../helpers/getCellBgColor';

import { FONTS, PALETTE, SIZES } from '../../../../../constants/STYLES';

const CELL_SIZE = 50;

const StyledTargetCell = styled.div`
	width: ${CELL_SIZE}px;
	height: ${CELL_SIZE}px;
	border: solid black;
	background-color: ${(props) => props.bgColor};
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: ${SIZES.xl};
	font-family: ${FONTS.secondary};
	color: ${PALETTE.BLACK};
	user-select: none;
`;

function TargetCell({ cellCoords, boardId }) {
	// const [cellStatus, setCellStatus] = useState(null);

	const { socket } = useContext(SocketContext);
	const { playerId } = useContext(PlayerIdContext);
	const { gameId } = useContext(GameIdContext);
	const { playersData } = useContext(PlayersDataContext);

	const [row, col] = cellCoords;

	// useEffect(() => {
	//     setCellStatus(playersData[boardId]?.opponentGridData[row][col].cellStatus)
	// }, [boardId, col, , playersData, row]);

	const cellStatus = playersData[boardId].opponentGridData[row][col].cellStatus;
	const bgColor = getCellBgColor(cellStatus);

	function handleClickCell() {
		socket.emit('clickTargetCell', {
			cellCoords,
			gameId,
			playerId,
		});
	}

	function handleMouseEnter() {
		socket.emit('mouseEnterTargetCell', {
			cellCoords,
			gameId,
			playerId,
		});
	}

	function handleMouseLeave() {
		socket.emit('mouseLeaveTargetCell', {
			cellCoords,
			gameId,
			playerId,
		});
	}

	return (
		<StyledTargetCell
			onClick={handleClickCell}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			bgColor={bgColor}
		>
			{cellStatus === 'HIT' ? 'X' : ''}
		</StyledTargetCell>
	);
}

export default TargetCell;
