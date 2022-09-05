/* eslint-disable react/jsx-pascal-case */
import Grid from './Grid/Grid';
import Header from './Header/Header';
import Legend from './Legend/Legend';
import ReadyBtn from './ReadyBtn/ReadyBtn';
import Tools from './Tools/Tools';


import { createContext, useContext, useEffect, useState } from 'react';

// import contexts
import IsGameStartedContext from '../../../../contexts/IsGameStartedContext';
import PlayerIdContext from '../../../../contexts/PlayerIdContext';
import PlayersDataContext from '../../../../contexts/PlayersDataContext';

// import helpers functions
import isBoardready from '../../../../helpers/isBoardready';

// import styled components
import { _SC_FlexColumn, _SC_FlexRow } from '../../../../components/_SC/layoutUtils';



export const IsBoardReadyContext = createContext();

function Board({ boardId }) {
	const [isBoardReady, setIsBoardReady] = useState(false);
	const { playersData } = useContext(PlayersDataContext);
	const { playerId } = useContext(PlayerIdContext);
	const { isGameStarted } = useContext(IsGameStartedContext);

	useEffect(() => {
		setIsBoardReady(isBoardready(boardId, playersData));
	}, [boardId, playersData]);

	return (
		<>
			{playerId === boardId && (
				<_SC_FlexRow alignItems="S">
					<IsBoardReadyContext.Provider value={{ isBoardReady }}>
						<_SC_FlexColumn >
							{!isGameStarted && <Legend boardId={boardId} />}
						</_SC_FlexColumn>

						<_SC_FlexColumn justifyContent="S" alignItems="C" >
							<Header boardId={boardId} />

							<Grid boardId={boardId} />
							{!isGameStarted && <ReadyBtn boardId={boardId} />}
						</_SC_FlexColumn>
						<_SC_FlexColumn >
							<Tools boardId={boardId} />
						</_SC_FlexColumn>
					</IsBoardReadyContext.Provider>
				</_SC_FlexRow>
			)}
		</>
	);
}

export default Board;
