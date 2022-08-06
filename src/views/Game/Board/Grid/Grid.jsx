import { useContext } from 'react';
import styled from 'styled-components';
import Cell from './Cell/Cell';

// import contexts
import PlayersDataContext from '../../../../contexts/PlayersDataContext';

const StyledGrid = styled.div`
	display: inline-grid;
	grid-template-columns: repeat(${(props) => props.gridSize}, 1fr);
`;

function Grid({ boardId }) {
	const { playersData } = useContext(PlayersDataContext);

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
