import io from 'socket.io-client';

const url = {
	development: 'http://localhost:5001',
	production: 'https://battleship-server-irad.herokuapp.com/',
};

const SOCKET = io(url.production);

export default SOCKET;
