import styled from 'styled-components';
import { COLORS, EFFECTS, FONTS, SIZES } from '../../constants/STYLES';

const StyledButton = styled.button`
	background-color: ${(props) =>
		props.isSelected ? COLORS.buttons.selected : COLORS.buttons.notSelected};
	color: ${(props) =>
		props.isSelected
			? COLORS.buttons.selectedText
			: COLORS.buttons.notSelectedText};
	font-family: ${FONTS.primary};
	font-size: ${SIZES.l};
	border-radius: 34px;
	padding: 10px;
	border: none;
	filter: ${EFFECTS.filter.basicDropShadow};
    cursor: pointer;
`;

function MainButton({ isSelected, children, onClick }) {
	return <StyledButton isSelected={isSelected} onClick={onClick}>{children}</StyledButton>;
}

export default MainButton;
