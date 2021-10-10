
import { DAT_GHE, HUY_GHE } from '../types/BookingTicketType';
const stateDefault = {
    danhSachDatGhe: [
        {soGhe: 'A1', gia: 75000},
    ]
}

const BookingTicketReducer = (state = stateDefault, action) => {
    switch(action.type){
        case DAT_GHE: {
            let danhSachCapNhat = [...state.danhSachDatGhe];
            let index = danhSachCapNhat.findIndex(danhSach=>danhSach.soGhe === action.ghe.soGhe);
            if(index !== -1) {
                danhSachCapNhat.splice(index,1);
            }else {
                danhSachCapNhat.push(action.ghe);
            }
            state.danhSachDatGhe = danhSachCapNhat;
            return {...state};
        }
        case HUY_GHE: {
            let danhSachCapNhat = [...state.danhSachDatGhe];
            let index = danhSachCapNhat.findIndex(danhSach=>danhSach.soGhe === action.soGhe);
            if(index !== -1) {
                danhSachCapNhat.splice(index,1);
            }
            state.danhSachDatGhe = danhSachCapNhat;
            return {...state};
        }
        default: return{...state}
    }
}

export default BookingTicketReducer;