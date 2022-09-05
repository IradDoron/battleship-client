import styled from 'styled-components';

function getFlexPosition(input) {
	// except to get "C" for center, "S" for start, "E" for end
	const position = input?.toUpperCase();
	switch (position) {
		case 'C':
			return 'center';
		case 'S':
			return 'flex-start';
		case 'E':
			return 'flex-end';
		default:
			return 'flex-start';
	}
}

export const _SC_FlexRow = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: ${(props) => getFlexPosition(props.justifyContent)};
	align-items: ${(props) => getFlexPosition(props.alignItems)};
`;

export const _SC_FlexColumn = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: ${(props) => getFlexPosition(props.justifyContent)};
	align-items: ${(props) => getFlexPosition(props.alignItems)};
`;
