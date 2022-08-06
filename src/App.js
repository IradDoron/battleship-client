

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContextWrapper from './components/ContextWrapper/ContextWrapper';
import Settings from './components/Settings/Settings';
import Game from './views/Game/Game';
import Welcome from './views/Welcome/Welcome';

function App() {
	return (
		<BrowserRouter>
			<ContextWrapper>
				<Settings />
				<Routes>
					<Route path="/" element={<Welcome />} />
					<Route path="/game" element={<Game />} />
				</Routes>
			</ContextWrapper>
		</BrowserRouter>
	);
}

export default App;
