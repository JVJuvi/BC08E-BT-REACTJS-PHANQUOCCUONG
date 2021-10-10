import { DAT_CUOC, PLAY_GAME_BK, END_GAME } from '../types/GameBuaKeoType';

const stateDefault = {
    mangBuaKeo: [
        {ma: 'keo', hinhAnh: './image/buakeo/keo.png', datCuoc: true},
        {ma: 'bua', hinhAnh: './image/buakeo/bua.png', datCuoc: false},
        {ma: 'bao', hinhAnh: './image/buakeo/bao.png', datCuoc: false}
    ],
    ketQua: 'Game thôi ae',
    soBanChoi: 0,
    soBanThang: 0,  
    computer: {ma: 'keo', hinhAnh: './image/buakeo/keo.png'}
}

const GameBuaKeoReducer = (state = stateDefault, action) => {
    switch(action.type) {
       case DAT_CUOC: {
           let mangCapNhat = state.mangBuaKeo.map((item,index)=>{
               if(item.ma === action.ma) {
                   return {...item, datCuoc: true};
               }else {
                    return {...item, datCuoc: false};
               }
           })
           state.mangBuaKeo = mangCapNhat;
           return {...state};
       }
       case PLAY_GAME_BK: {
            let soNgauNhien = Math.floor(Math.random() * 3);
            let mangNgauNhien = state.mangBuaKeo[soNgauNhien];
            state.computer = mangNgauNhien;
            return {...state};
       }
       case END_GAME: {
           state.soBanChoi += 1;
           let player = state.mangBuaKeo.find(item=>item.datCuoc === true);
           let computer = state.computer;
           switch(player.ma) {
               case 'keo': {
                   if(computer.ma === 'bao') {
                       state.ketQua = 'Thắng rồi';
                       state.soBanThang += 1;
                   }else if(computer.ma === 'keo') {
                       state.ketQua = 'Hoà rồi';
                   }else {
                       state.ketQua = 'Thua rồi';
                   }
                   break;
               }
               case 'bua': {
                   if(computer.ma === 'keo') {
                       state.ketQua = 'Thắng rồi';
                       state.soBanThang += 1;
                   }else if(computer.ma === 'bua') {
                       state.ketQua = 'Hoà rồi';
                   }else {
                       state.ketQua = 'Thua rồi';
                   }
                   break;
               }
               case 'bao': {
                   if(computer.ma === 'bua') {
                       state.ketQua = 'Thắng rồi';
                       state.soBanThang += 1;
                   }else if(computer.ma === 'bao') {
                       state.ketQua = 'Hoà rồi';
                   }else {
                       state.ketQua = 'Thua rồi';
                   }
                   break;
               }
               default: state.ketQua = "Thắng rồi";
           }
           return {...state};
       }

        default: return {...state};
    }
}
export default GameBuaKeoReducer
