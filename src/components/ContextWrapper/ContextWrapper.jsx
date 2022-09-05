// import contexts
import GameIdContext from '../../contexts/GameIdContext';
import IsGameOverContext from '../../contexts/IsGameOverContext';
import IsGameStartedContext from '../../contexts/IsGameStartedContext';
import IsPlayerReadyContext from '../../contexts/IsPlayerReadyContext';
import PlayerIdContext from '../../contexts/PlayerIdContext';
import PlayersDataContext from '../../contexts/PlayersDataContext';
import SettingsContext from '../../contexts/SettingsContext';
import SocketContext from '../../contexts/SocketContext';

// import constants
import socket from '../../constants/SOCKET';

// imports from react
import { useEffect, useReducer, useState } from 'react';

// import helpers functions
import playersDataReducer from '../../helpers/playersDataReducer';

function ContextWrapper({ children }) {
	const [settings, setSettings] = useState({
		isMusicOn: false,
		isFxSoundsOn: false,
		apperenceMode: 'light',
	});

	const [playerId, setPlayerId] = useState(null);
	const [gameId, setGameId] = useState(null);

	const [playersData, dispatchPlayersData] = useReducer(
		playersDataReducer,
		null
	);

	const [isPlayer1Ready, setIsPlayer1Ready] = useState(false);
	const [isPlayer2Ready, setIsPlayer2Ready] = useState(false);

	const [isGameStarted, setIsGameStarted] = useState(false);

	const [isGameOver, setIsGameOver] = useState(false);

	useEffect(() => {}, [playersData]);

	return (
		<>
			<SettingsContext.Provider
				value={{
					settings,
					setSettings,
				}}
			>
				<SocketContext.Provider value={{ socket }}>
					<PlayersDataContext.Provider
						value={{
							playersData,
							dispatchPlayersData,
						}}
					>
						<PlayerIdContext.Provider value={{ playerId, setPlayerId }}>
							<GameIdContext.Provider value={{ gameId, setGameId }}>
								<IsPlayerReadyContext.Provider
									value={{
										isPlayer1Ready,
										setIsPlayer1Ready,
										isPlayer2Ready,
										setIsPlayer2Ready,
									}}
								>
									<IsGameStartedContext.Provider
										value={{
											isGameStarted,
											setIsGameStarted,
										}}
									>
										<IsGameOverContext.Provider
											value={{ isGameOver, setIsGameOver }}
										>
											{children}
										</IsGameOverContext.Provider>
									</IsGameStartedContext.Provider>
								</IsPlayerReadyContext.Provider>
							</GameIdContext.Provider>
						</PlayerIdContext.Provider>
					</PlayersDataContext.Provider>
				</SocketContext.Provider>
			</SettingsContext.Provider>
		</>
	);
}

export default ContextWrapper;
