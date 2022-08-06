import styled from 'styled-components';

import PlayersDataContext from '../../../../contexts/PlayersDataContext';
import { useContext } from 'react';

const HeaderWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

function Header({ boardId }) {
	const playersData = useContext(PlayersDataContext);
	return (
		<HeaderWrapper>
			<h1>{playersData[boardId]?.name}</h1>
		</HeaderWrapper>
	);
}

export default Header;
