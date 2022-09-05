import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ContextWrapper from './components/ContextWrapper/ContextWrapper';
import Settings from './components/Settings/Settings';
import SocketWrapper from './components/SocketWrapper/SocketWrapper';
import Game from './views/Game/Game';
import Welcome from './views/Welcome/Welcome';

import AppWrapper from './components/AppWrapper/AppWrapper';

function App() {
	return (
		<BrowserRouter>
			<ContextWrapper>
				<SocketWrapper>
					<AppWrapper>
						<Settings />
						<Routes>
							<Route path="/" element={<Welcome />} />
							<Route path="/game" element={<Game />} />
						</Routes>
					</AppWrapper>
				</SocketWrapper>
			</ContextWrapper>
		</BrowserRouter>
	);
}

export default App;
