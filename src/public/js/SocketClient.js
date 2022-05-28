class SocketClient {
  static _socket = null;

  static emit(event, args) {
    this._socket.emit(event, args);
  }

  static addSocketEventListener(event, callback) {
    this._socket.on(event, callback);
  }

  static create(socket) {
    if (this._socket == null) {
      this._socket = socket;
    } else {
      console.log('SocketClient already initilized');
    }
  }
}

// eslint-disable-next-line no-undef
SocketClient.create(io('/'));

export default SocketClient;
