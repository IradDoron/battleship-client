import styled from 'styled-components';
import { COLORS, EFFECTS, FONTS, MARGINS, SIZES } from '../../constants/STYLES';

const StyeldHeaderContainer = styled.div`
	color: ${COLORS.headers.main};
	font-family: ${FONTS.primary};
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding-top: ${MARGINS.xxxxxl};
	padding-bottom: ${MARGINS.xl};

	margin-bottom: ${MARGINS.xxl};
`;

const StyledTopHeader = styled.h1`
	font-size: ${SIZES.xxxxxl};
	filter: ${EFFECTS.filter.basicDropShadow};
`;
const StyledButtomHeader = styled.h1`
	font-size: ${SIZES.xxl};
	filter: ${EFFECTS.filter.basicDropShadow};
`;

function MainHeader() {
	return (
		<StyeldHeaderContainer>
			<StyledTopHeader>Battleship</StyledTopHeader>
			<StyledButtomHeader>Real-time</StyledButtomHeader>
		</StyeldHeaderContainer>
	);
}

export default MainHeader;
