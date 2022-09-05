import { useContext } from 'react';
import styled from 'styled-components';

import {
	BORDER,
	EFFECTS,
	FONTS,
	MARGINS,
	PALETTE,
	SIZES
} from '../../../../../constants/STYLES';

// import contexts
import GameIdContext from '../../../../../contexts/GameIdContext';
import PlayersDataContext from '../../../../../contexts/PlayersDataContext';
import SocketContext from '../../../../../contexts/SocketContext';

import { IsBoardReadyContext } from '../Board';

const StyledButtonTools = styled.button`
	font-family: ${FONTS.secondary};
	background-color: ${PALETTE.LIGHT_BLUE};
	color: ${PALETTE.BLUE};
	font-size: ${SIZES.l};
	padding: ${MARGINS.xs};
	border-radius: ${BORDER.radius.xxl};
	margin: ${MARGINS.xs};
	border: none;
	cursor: pointer;
	filter: ${EFFECTS.filter.basicDropShadow};
`;

const FlexColumn = styled.div`
	display: flex;
	flex-direction: column;
`;

function Tools({ boardId }) {
	const { playersData } = useContext(PlayersDataContext);
	const { gameId } = useContext(GameIdContext);
	const { socket } = useContext(SocketContext);
	const { isBoardReady } = useContext(IsBoardReadyContext);

	const isShipVertical = playersData[boardId]?.isShipVertical;
	const isEditModeOn = playersData[boardId]?.isEditModeOn;

	function handleClickToggleIsShipVertical() {
		socket.emit('toggleIsShipVertical', { gameId, boardId });
	}

	function handleClickToggleIsEditModeOn() {
		socket.emit('toggleIsEditModeOn', { gameId, boardId });
	}

	function handleClickPositionRandomly() {
		socket.emit('positionRandomly', { gameId, boardId });
	}
	return (
		<>
			{!isBoardReady && (
				<>
					<FlexColumn>
						<StyledButtonTools onClick={handleClickToggleIsShipVertical}>
							{isShipVertical ? 'vertical' : 'horizontal'}
						</StyledButtonTools>
						<StyledButtonTools onClick={handleClickToggleIsEditModeOn}>
							{isEditModeOn ? 'edit mode on' : 'edit mode off'}
						</StyledButtonTools>
						<StyledButtonTools onClick={handleClickPositionRandomly}>
							Position ships randomly
						</StyledButtonTools>
					</FlexColumn>
				</>
			)}
		</>
	);
}

export default Tools;
