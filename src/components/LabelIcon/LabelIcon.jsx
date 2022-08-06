import Icon from '../Icon/Icon';
import styled from 'styled-components';

const StyledButton = styled.button`
	height: 40px;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	background: none;
	text-transform: capitalize;
	cursor: pointer;
	&:hover {
		background: #f5f5f5;
	}
`;

function LabelIcon({ url, label, clickHandler }) {
	return (
		<StyledButton onClick={clickHandler}>
			<Icon url={url} />
			<span>{label}</span>
		</StyledButton>
	);
}

export default LabelIcon;
