import styled from 'styled-components';
import Cell from './Cell/Cell';
import { useContext } from 'react';

// import contexts
import PlayersDataContext from '../../../../contexts/PlayersDataContext';
import SocketContext from '../../../../contexts/SocketContext';

const StyledGrid = styled.div`
	display: inline-grid;
	grid-template-columns: repeat(${(props) => props.gridSize}, 1fr);
`;

function Grid({ boardId }) {
	const { playersData, dispatchPlayersData } = useContext(PlayersDataContext);

	const gridData = playersData[boardId]?.gridData;
	const gridSize = gridData?.length;

	return (
		<>
			<StyledGrid gridSize={gridSize}>
				{gridData.map((row, indexRow) => {
					return row.map((col, indexCol) => {
						return (
							<>
								<Cell
									key={`${indexRow}${indexCol}`}
									cellStatus={col}
									cellCoords={[indexRow, indexCol]}
									boardId={boardId}
								/>
							</>
						);
					});
				})}
			</StyledGrid>
		</>
	);
}

export default Grid;
