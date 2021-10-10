import { combineReducers } from "redux";
import GameXucXacReducer from './GameXucXacReducer';
import GameBuaKeoReducer from './GameBuaKeoReducer';
import BookingTicketReducer from './BookingTicketReducer';
import { QuanLyNhanVienReducer } from './QuanLyNhanVienReducer';
import GameBauCuaReducer from './GameBauCuaReducer';




const rootReducer = combineReducers ({
    GameXucXacReducer,
    GameBuaKeoReducer,
    BookingTicketReducer,
    QuanLyNhanVienReducer,
    GameBauCuaReducer
})

export default rootReducer;