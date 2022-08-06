import Header from './Header/Header';
import Grid from './Grid/Grid';
import Legend from './Legend/Legend';
import ReadyBtn from './ReadyBtn/ReadyBtn';

import styled from 'styled-components';

const BoardWrapper = styled.div`
	border: solid blue;
`;

const LayoutFlexRow = styled.div`
	display: flex;
`;

function Board({ boardId }) {
	return (
		<>
			<BoardWrapper>
				<Header boardId={boardId} />
				<LayoutFlexRow>
					<Legend boardId={boardId} />
					<Grid boardId={boardId} />
				</LayoutFlexRow>
				<ReadyBtn />
			</BoardWrapper>
		</>
	);
}

export default Board;
