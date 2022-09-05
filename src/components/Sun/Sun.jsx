import styled, { keyframes } from 'styled-components';
import { FONTS, PALETTE } from '../../constants/STYLES';
import GameIdContext from '../../contexts/GameIdContext';

import { useContext } from 'react';

import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';

const SunAnimation = keyframes`
0% {
    box-shadow: 0px 0px 100px 73px ${PALETTE.YELLOW};
}

100% {
    box-shadow: 0px 0px 170px 100px ${PALETTE.YELLOW};
}
`;

const StyledSun = styled.div`
	position: absolute;
	width: 160px;
	height: 160px;
	left: 0px;
	top: 0px;

	background: ${PALETTE.YELLOW};

	border-radius: 50%;

	animation-name: ${SunAnimation};
	animation-duration: 3s;
	animation-direction: alternate;
	animation-iteration-count: infinite;
	animation-timing-function: ease-in-out;

	display: flex;
	justify-content: center;
	align-items: center;
`;

const UtilFlexCenterContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	height: 100%;
	padding: 10px;
	cursor: pointer;
`;

const SunText = styled.h1`
	font-family: ${FONTS.secondary};
	color: ${PALETTE.GREEN};
	user-select: none;
`;

function Sun() {
	const { gameId } = useContext(GameIdContext);

	const sunRef = document.getElementById('sun');
	tippy(sunRef, {
		content: 'Game ID copied!',
		trigger: 'click',
		placement: 'right',
		animation: 'scale',
	});

	function handleClick() {
		navigator.clipboard.writeText(gameId);
	}

	return (
		<>
			<StyledSun id="sun" onClick={handleClick}>
				{gameId && (
					<UtilFlexCenterContainer>
						<SunText>Game ID</SunText>
						<SunText>{gameId}</SunText>
					</UtilFlexCenterContainer>
				)}
			</StyledSun>
		</>
	);
}

export default Sun;
