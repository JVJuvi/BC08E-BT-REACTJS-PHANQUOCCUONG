
const stateDefault = {
    danhSachCuoc: [
        {ma: 'bau', img: './image/BauCua/bau.png', diemCuoc: 0},
        {ma: 'cua', img: './image/BauCua/cua.png', diemCuoc: 0},
        {ma: 'ca', img: './image/BauCua/ca.png', diemCuoc: 0},
        {ma: 'ga', img: './image/BauCua/ga.png', diemCuoc: 0},
        {ma: 'tom', img: './image/BauCua/tom.png', diemCuoc: 0},
        {ma: 'nai', img: './image/BauCua/nai.png', diemCuoc: 0},
    ],
    tongDiem: 1000,
    mangXucXac: [
        {ma: 'bau', img: './image/BauCua/bau.png'},
        {ma: 'cua', img: './image/BauCua/cua.png'},
        {ma: 'ca', img: './image/BauCua/ca.png'},
    ]
}

const GameBauCuaReducer = (state = stateDefault ,action) => {
    switch(action.type) {
        case 'SOC': {
            let mangXXmoi = [];
            for(let i = 0; i < 3; i++) {
                let indexNgauNhien = Math.floor(Math.random() * 6);
                let mangNgauNhien = state.danhSachCuoc[indexNgauNhien];
                mangXXmoi.push(mangNgauNhien);
            }
            state.mangXucXac = mangXXmoi;

            state.mangXucXac.forEach((xx,index)=>{
                let indexDatCuoc = state.danhSachCuoc.findIndex(dc => dc.ma === xx.ma);
                if(indexDatCuoc !== -1) {
                    state.tongDiem += state.danhSachCuoc[indexDatCuoc].diemCuoc;
                }
            })

            state.danhSachCuoc.forEach((dc,index)=>{
                let indexXX = state.mangXucXac.findIndex(xx => xx.ma === dc.ma);
                if(indexXX !== -1) {
                    state.tongDiem += state.mangXucXac[indexXX].diemCuoc;
                }
            })

            state.danhSachCuoc = state.danhSachCuoc.map((sc,index)=>{
                return {...sc, diemCuoc: 0};
            })

            return {...state};
        }
        case 'DAT_CUOC_BAU_CUA': {
            let danhSachCapNhat = [...state.danhSachCuoc];
            let index = danhSachCapNhat.findIndex(ds => ds.ma === action.item.ma);
            if(index !== -1) {
                danhSachCapNhat[index].diemCuoc += action.amount;
                state.tongDiem -= action.amount;
                if(state.tongDiem < 0) {
                    danhSachCapNhat[index].diemCuoc -= action.amount;
                    state.tongDiem += action.amount;
                }
                if(danhSachCapNhat[index].diemCuoc < 0) {
                    danhSachCapNhat[index].diemCuoc -= action.amount;
                    state.tongDiem += action.amount;
                }
            }
            state.danhSachCuoc = danhSachCapNhat;

            return {...state};
        }
        case 'CHOI_LAI': {
            state.tongDiem = 1000;
            state.danhSachCuoc = state.danhSachCuoc.map((ds,index)=>{
                return {...ds, diemCuoc: 0};
            })
        }
        default: return {...state}
    }
}
export default GameBauCuaReducer