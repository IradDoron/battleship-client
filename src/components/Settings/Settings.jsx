import { useContext, useState } from 'react';
import { animated, useSpring, useTransition } from 'react-spring';
import styled from 'styled-components';
import Icon from '../Icon/Icon';

import SettingsContext from '../../contexts/SettingsContext';
import LabelIcon from '../LabelIcon/LabelIcon';


import SocketContext from '../../contexts/SocketContext';

const SettingsContainer = styled.div`
	position: absolute;
	top: 10px;
	right: 10px;
	display: flex;
	flex-direction: row-reverse;
	align-items: center;
	height: 40px;
`;

const ToolsContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: row-reverse;
	right: 10px;
`;

function Settings() {
	const [isOpen, setIsOpen] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);
	const { settings, setSettings } = useContext(SettingsContext);
	const { isMusicOn, isFxSoundsOn, apperenceMode } = settings;

	const  socket = useContext(SocketContext);

	const props = useSpring({
		from: {
			transform: 'rotate(0deg)',
		},
		to: {
			transform: 'rotate(360deg)',
		},
		loop: handleLoop,
		cancel: !isAnimating,
	});

	const transition = useTransition(isOpen, {});

	function handleLoop() {
		setIsAnimating(false);
		return true;
	}

	function handleMouseEnter() {
		setIsAnimating(true);
	}

	function handleModeClick() {
		setSettings({
			...settings,
			apperenceMode: apperenceMode === 'dark' ? 'light' : 'dark',
		});
	}

	function handleMusicClick() {
		setSettings({
			...settings,
			isMusicOn: !isMusicOn,
		});
	}

	function handleFxSoundsClick() {
		setSettings({
			...settings,
			isFxSoundsOn: !isFxSoundsOn,
		});
	}

	function handleResetRooms() {
		console.log('reset rooms');
		socket.emit('resetRooms', {});
	}

	return (
		<>
			<SettingsContainer>
				<animated.div
					onMouseEnter={handleMouseEnter}
					style={props}
					onClick={() => setIsOpen(!isOpen)}
				>
					<Icon url="./icons/Setting Wheel 01.svg" />
				</animated.div>
				{transition((style, item) =>
					item ? (
						<ToolsContainer as={animated.div}>
							<LabelIcon
								clickHandler={handleModeClick}
								label={apperenceMode === 'light' ? 'light mode' : 'dark mode'}
								url={
									apperenceMode === 'light'
										? './icons/light-mode.svg'
										: './icons/dark-mode.svg'
								}
							/>
							<LabelIcon
								clickHandler={handleMusicClick}
								label={isMusicOn ? 'music off' : 'music on'}
								url={
									isMusicOn ? './icons/music-on.svg' : './icons/music-off.svg'
								}
							/>
							<LabelIcon
								clickHandler={handleFxSoundsClick}
								label={isFxSoundsOn ? 'fx sounds off' : 'fx sounds on'}
								url={isFxSoundsOn ? './icons/fx-on.svg' : './icons/fx-off.svg'}
							/>
							<button onClick={handleResetRooms}>Reset rooms</button>
						</ToolsContainer>
					) : null
				)}
			</SettingsContainer>
		</>
	);
}

export default Settings;
