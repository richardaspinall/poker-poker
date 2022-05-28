import SocketServer from '../SocketServer';

type Callback = () => void;
// TODO: change to "TableJoinController" and "TableLeaveController" extending some base controller
export default class TableController {
  public static tableJoin(tableName: string, seatNumber: string) {
    SocketServer.emitToTable('player:joined', tableName, { seatId: seatNumber });
  }

  public static tableLeave(tableName: string, seatNumber: string, callback: Callback) {
    SocketServer.emitToTable('player:left', tableName, { seatId: seatNumber });
    callback();
  }
}
