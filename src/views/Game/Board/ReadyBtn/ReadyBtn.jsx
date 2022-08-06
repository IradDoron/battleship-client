import styled from 'styled-components';

const ReadyBtnWrapper = styled.div`
	display: flex;
	justify-content: center;
`;

function ReadyBtn() {
	return (
		<ReadyBtnWrapper>
			<button>Ready</button>
		</ReadyBtnWrapper>
	);
}

export default ReadyBtn;
