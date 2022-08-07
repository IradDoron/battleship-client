import io from 'socket.io-client';

const SOCKET = io('https://battleship-server-irad.herokuapp.com/');

export default SOCKET;
