import { useContext } from 'react';
import styled from 'styled-components';
import { EFFECTS, PALETTE } from '../../../../../constants/STYLES';

// import contexts
import GameIdContext from '../../../../../contexts/GameIdContext';
import PlayersDataContext from '../../../../../contexts/PlayersDataContext';
import SocketContext from '../../../../../contexts/SocketContext';


const StyledLegendCell = styled.div`
	width: 20px;
	height: 20px;
	border: solid black;
	background-color: ${(props) => (props.isPlaced ? 'grey' : PALETTE.LIGHT_YELLOW)};
`;

const StyledLegendShip = styled.div`
	
	box-shadow: ${(props) => (props.isSelected ? EFFECTS.boxShadow.basic : '')};
	display: flex;
	cursor: ${(props) => (props.isPlaced ? 'not-allowed' : 'pointer')};
	padding: 8px ;
	border-radius: 6px;
`;

const StyledLegend = styled.div``;

function Legend({ boardId }) {
	const { playersData } = useContext(PlayersDataContext);
	const { gameId } = useContext(GameIdContext);
	const { socket } = useContext(SocketContext);
	

	const legend = playersData[boardId]?.legend;
	const isEditModeOn = playersData[boardId]?.isEditModeOn;

	function handleClickShip(index) {
		if (isEditModeOn) {
			socket.emit('clickOnAShipInLegend', {
				boardId,
				gameId,
				shipIndex: index,
			});
		}
	}


	return (
		<>
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

	
		</>
	);
}

export default Legend;
