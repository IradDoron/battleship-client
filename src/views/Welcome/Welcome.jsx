import { useState } from 'react';

import CreateGame from './CreateGame/CreateGame';
import JoinGame from './JoinGame/JoinGame';

function Welcome() {
	const [userName, setUserName] = useState('');

	function handleNameChange(e) {
		setUserName(e.target.value);
	}
	return (
		<>
			<h1>Welcome to Battleship!</h1>
			<input
				onChange={handleNameChange}
				type="text"
				name="name"
				placeholder="Enter your name"
			/>
			<h2>Hello {userName}</h2>
			<CreateGame userName={userName} />
			<JoinGame userName={userName} />
		</>
	);
}

export default Welcome;
