import { useContext, useEffect, useState } from 'react';
import MainHeader from '../../components/MainHeader/MainHeader';
import PlayersDataContext from '../../contexts/PlayersDataContext';
import GameArea from './GameArea/GameArea';

import IsGameOverContext from '../../contexts/IsGameOverContext';

function Game() {
	const { playersData } = useContext(PlayersDataContext);
	const { isGameOver } = useContext(IsGameOverContext);

	// instead of using the regular useState syntax, we use the destructuring syntax
	const setWinner = useState(null)[1];

	useEffect(() => {
		if (isGameOver) {
			if (playersData.player1.isWinner) {
				setWinner(playersData.player1.name);
			}
		}
	}, [isGameOver, playersData, setWinner]);

	return (
		<>
			{/* {winner && <h2>{winner} is the winner</h2>} */}

			<MainHeader />

			{playersData && <GameArea />}
		</>
	);
}

export default Game;
