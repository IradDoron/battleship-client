import { useContext } from 'react';
import styled from 'styled-components';

// import contexts
import GameIdContext from '../../../../contexts/GameIdContext';
import PlayerIdContext from '../../../../contexts/PlayerIdContext';
import PlayersDataContext from '../../../../contexts/PlayersDataContext';
import SocketContext from '../../../../contexts/SocketContext';

const StyledLegendCell = styled.div`
	width: 20px;
	height: 20px;
	border: solid black;
	background-color: ${(props) => (props.isPlaced ? 'grey' : 'salmon')};
`;

const StyledLegendShip = styled.div`
	border-style: solid;
	border-color: ${(props) => (props.isSelected ? 'red' : 'black')};
	display: flex;
	cursor: ${(props) => (props.isPlaced ? 'not-allowed' : 'pointer')};
`;

const StyledLegend = styled.div``;

function Legend({ boardId }) {
	const { playersData } = useContext(PlayersDataContext);
	const { playerId } = useContext(PlayerIdContext);
	const { gameId } = useContext(GameIdContext);
	const socket = useContext(SocketContext);

	const legend = playersData[boardId]?.legend;
	const isShipVertical = playersData[boardId]?.isShipVertical;
	const isEditModeOn = playersData[boardId]?.isEditModeOn;

	function handleClickShip(index) {
		console.log(playersData[playerId].currLegendIndex === index);

		if (isEditModeOn) {
			socket.emit('clickOnAShipInLegend', {
				boardId,
				gameId,
				shipIndex: index,
			});
		}
	}

	function handleClickToggleIsShipVertical() {
		socket.emit('toggleIsShipVertical', { gameId, boardId });
		console.log('emit toggleIsShipVertical');
	}

	function handleClickToggleIsEditModeOn() {
		socket.emit('toggleIsEditModeOn', { gameId, boardId });
	}

	return (
		<>
			<h1>Legend</h1>
			<StyledLegend>
				{legend.map((legendShip, shipIndex) => {
					const shipSize = legendShip.size;
					const sizeArray = new Array(shipSize).fill(0);
					return (
						<StyledLegendShip
							onClick={() => handleClickShip(shipIndex)}
							key={shipIndex}
							isSelected={shipIndex === playersData[boardId].currLegendIndex}
							isPlaced={legend[shipIndex].isPlaced}
						>
							{sizeArray.map((legendCell, cellIndex) => {
								return (
									<StyledLegendCell
										key={cellIndex}
										isPlaced={legend[shipIndex].isPlaced}
									/>
								);
							})}
						</StyledLegendShip>
					);
				})}
			</StyledLegend>
			<button onClick={handleClickToggleIsShipVertical}>
				{isShipVertical ? 'vertical' : 'horizontal'}
			</button>
			<button onClick={handleClickToggleIsEditModeOn}>
				{isEditModeOn ? 'edit mode on' : 'edit mode off'}
			</button>
		</>
	);
}

export default Legend;
