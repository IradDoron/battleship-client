import styled from 'styled-components';

import GameIdContext from '../../../../../contexts/GameIdContext';
import PlayerIdContext from '../../../../../contexts/PlayerIdContext';
import SocketContext from '../../../../../contexts/SocketContext';
import { IsBoardReadyContext } from '../Board';

import { FONTS, MARGINS, PALETTE, SIZES } from '../../../../../constants/STYLES';



import { useContext } from 'react';

const ReadyBtnWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

const StyledReadyBtn = styled.button`
	background-color: ${(props) => (props.isBoardReady ? '#5cc15c' : PALETTE.YELLOW)};
	border: none;
	font-size: ${SIZES.xxl};
	font-family: ${FONTS.secondary};
	padding: ${MARGINS.xs};
	padding: ${MARGINS.xs};
	margin: ${MARGINS.xs};
	cursor: pointer;
	border-radius: 20px;
	color: ${PALETTE.BLACK};

`

function ReadyBtn({ boardId }) {
	const { socket } = useContext(SocketContext);
	const { gameId } = useContext(GameIdContext);
	const { playerId } = useContext(PlayerIdContext);
	const { isBoardReady } = useContext(IsBoardReadyContext);

	function handleClick() {
		socket.emit('ready', { gameId, boardId, playerId });
	}

	return (
		<ReadyBtnWrapper isBoardReady={isBoardReady}>
			<StyledReadyBtn isBoardReady={isBoardReady} onClick={handleClick}>Ready</StyledReadyBtn>
		</ReadyBtnWrapper>
	);
}

export default ReadyBtn;
