import styled from 'styled-components';

import { FONTS, MARGINS, SIZES } from '../../constants/STYLES';

const StyledInput = styled.input`
	font-size: ${SIZES.l};
	font-family: ${FONTS.secondary};
	text-align: center;
	margin-bottom: ${MARGINS.xxl};
`;

function Input({ placeholder, onChange }) {
	return <StyledInput placeholder={placeholder} onChange={onChange} />;
}

export default Input;
