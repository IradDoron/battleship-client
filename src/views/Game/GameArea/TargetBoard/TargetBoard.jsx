import { useContext } from 'react';
import styled from 'styled-components';
import TargetCell from './TargetCell/TargetCell';

// import contexts
import PlayersDataContext from '../../../../contexts/PlayersDataContext';

const StyledGrid = styled.div`
	display: inline-grid;
	grid-template-columns: repeat(${(props) => props.gridSize}, 1fr);
`;

function TargetBoard({ boardId }) {
	const { playersData } = useContext(PlayersDataContext);
	const gridSize = playersData[boardId]?.gridData?.length;
	return (
		<>
			<StyledGrid gridSize={gridSize}>
				{playersData[boardId]?.opponentGridData.map((row, indexRow) => {
					return row.map((col, indexCol) => {
						return (
							<>
								<TargetCell
									key={`${indexRow}${indexCol}`}
									cellCoords={[indexRow, indexCol]}
									boardId={boardId}
									cellStatus={col}
								/>
							</>
						);
					});
				})}
			</StyledGrid>
		</>
	);
}

export default TargetBoard;
