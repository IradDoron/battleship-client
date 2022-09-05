import styled from 'styled-components';

import { useContext } from 'react';
import PlayersDataContext from '../../../../../contexts/PlayersDataContext';

import { COLORS } from '../../../../../constants/STYLES';

const HeaderWrapper = styled.div`
	display: flex;
	justify-content: center;
	position: absolute;
	margin: -50px 0;
`;

const StyledHeader = styled.h1`
	color: ${COLORS.headers.main};
`

function Header({ boardId }) {
	const {playersData} = useContext(PlayersDataContext);
	

	return (
		<HeaderWrapper>
			<StyledHeader>{playersData[boardId]?.name}</StyledHeader>
		</HeaderWrapper>
	);
}

export default Header;
