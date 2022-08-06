import styled from 'styled-components';

const ICON_SIZE = '2rem';

const IconContainer = styled.div`
	width: ${ICON_SIZE};
	height: ${ICON_SIZE};
	cursor: pointer;
	position: relative;
`;

function Icon({ url }) {
	return (
		<IconContainer>
			<img src={url} alt="icon" />
		</IconContainer>
	);
}

export default Icon;
