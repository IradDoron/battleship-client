import styled from 'styled-components';

import IsGameStartedContext from '../../contexts/IsGameStartedContext';

import { COLORS } from '../../constants/STYLES';

import { useContext } from 'react';

import Sun from '../Sun/Sun';

const StyledAppWrapper = styled.div`
	background: ${(props) =>
		props.isGameStarted
			? COLORS.gradients.gameStarted
			: COLORS.gradients.gameNotStarted};
	min-height: 100vh;
`;

function AppWrapper({ children }) {
	const { isGameStarted } = useContext(IsGameStartedContext);
	return (
		<StyledAppWrapper isGameStarted={isGameStarted}>
			<Sun />
			{children}
		</StyledAppWrapper>
	);
}

export default AppWrapper;
