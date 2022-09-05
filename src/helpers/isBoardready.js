function isBoardready(boardId, playersData) {
	if (boardId === 'player1') {
		return playersData?.player1?.isReady;
	} else {
		return playersData?.player2?.isReady;
	}
}

export default isBoardready;
