import io from 'socket.io-client';

const SOCKET = io('http://localhost:5001');

export default SOCKET;
