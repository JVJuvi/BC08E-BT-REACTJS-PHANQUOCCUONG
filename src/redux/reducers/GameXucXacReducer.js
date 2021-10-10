import { PLAY_GAME_XX } from '../types/GameXucXacType';


const stateDefault = {
    xucXac: [
        {ma:1, hinhAnh: './image/xucxac/1.png'},
        {ma:1, hinhAnh: './image/xucxac/1.png'},
        {ma:1, hinhAnh: './image/xucxac/1.png'},
    ],
    taiXiu: true,
    soBanThang: 0,
    tongSoBanChoi: 0,
    soDiem: 0,
}

const GameXucXacReducer = (state = stateDefault, action) => {
    switch(action.type){
       case PLAY_GAME_XX :{
            let mangXucXac = [];
            for(let i = 0; i < 3; i++){
                let soNgauNhien = Math.floor(Math.random() * 6) + 1;
                let mangSoNgauNhien = {ma: soNgauNhien, hinhAnh: `./image/xucxac/${soNgauNhien}.png`};
                mangXucXac.push(mangSoNgauNhien);
            }
            state.xucXac = mangXucXac;
            state.tongSoBanChoi += 1;
            //tính điểm
            let soDiem = state.xucXac.reduce((td,xx,index)=>{
                return td += xx.ma;
            },0)
            state.soDiem = soDiem;
            // so sánh để tìm kết quả
            if((soDiem > 11 && state.taiXiu === true) || (soDiem <= 11 && state.taiXiu === false)) {
                state.soBanThang += 1
            }

            return {...state};
       }
        
        default: return {...state}
    }
}
export default GameXucXacReducer;