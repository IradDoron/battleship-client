import io from 'socket.io-client';

const SOCKET = io('http://localhost:5000');

export default SOCKET;
