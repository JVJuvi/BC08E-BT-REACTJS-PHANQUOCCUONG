


const stateDefault = {
    taiXiu: true, // < 11 xỉu trên 11 là tài
    mangXucXac: [
        {ma: 1, hinhAnh: './image/1.png'},
        {ma: 1, hinhAnh: './image/1.png'},
        {ma: 1, hinhAnh: './image/1.png'}
    ],
    soBanThang: 0,
    tongSoBanChoi: 0,
    soDiem: 3,
}

const GameXucXacReducer = (state = stateDefault, action) => {
    switch(action.type){
        case 'CHON_KET_QUA': {
            let taiXiuMoi = action.ketQua; 
            state.taiXiu = taiXiuMoi;
            return {...state};
        }
        case 'PLAY_GAME': {
            let mangXucXacMoi = [];
            // dùng vòng lặp để random từng xúc xắc rồi quăng vào mảng
            for(let i = 0 ; i < 3; i++){
                let soNgauNhien = Math.floor(Math.random() * 6) + 1;
                let xucXacNgauNhien = {ma: soNgauNhien, hinhAnh: `./image/${soNgauNhien}.png`};
                mangXucXacMoi.push(xucXacNgauNhien);
            }
            state.mangXucXac = mangXucXacMoi;

            state.tongSoBanChoi += 1;

            // số điểm
            let soDiemXucXac = mangXucXacMoi.reduce((tongDiem,xx,index)=>{
                return tongDiem += xx.ma
            },0)
            state.soDiem = soDiemXucXac;
            //xét thắng hay thua
            if((state.soDiem > 11 && state.taiXiu === true) || (state.soDiem <= 11 && state.taiXiu === false)){
                state.soBanThang += 1;
            }
            return {...state};
        }
        default: return {...state}
    }
}
export default GameXucXacReducer;