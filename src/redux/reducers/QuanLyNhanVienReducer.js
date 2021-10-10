
const stateDefault = {
    mangNhanVien: [
        {tk: 'nguyenvana', hoTen: 'Nguyễn Văn A', mk: '123456789',email: 'nguyenvana@gmail.com', sdt: '02345754', loaiNguoiDung: 'khachHang'}
    ],
    nguoiDung: {
        values: {
            tk: '',
            mk: '',
            email: '',
            hoTen: '',
            sdt: '',
            loaiNguoiDung: 'Khách hàng'
        },
        errors: {
            tk: '',
            mk: '',
            email: '',
            hoTen: '',
            sdt: '',
            loaiNguoiDung: ''
        }
    }
}

export const QuanLyNhanVienReducer = (state = stateDefault, action) => {
    switch(action.type) {
        case 'HANDEL_INPUT': {
            state.nguoiDung = action.nguoiDung;
            console.log(state.nguoiDung)
            return {...state};
        }
        case 'THEM_NHAN_VIEN': {
            state.mangNhanVien = [...state.mangNhanVien, action.nguoiDung];
            return {...state}; 
        }
        case 'XOA_NHAN_VIEN': {
            let mangCapNhat = [...state.mangNhanVien];
            let mangConLai = mangCapNhat.filter(nhanVien=>nhanVien.tk !== action.taiKhoanNV);
            state.mangNhanVien = mangConLai;
            return {...state};            
        }
        case 'CHINH_SUA_NHAN_VIEN': {
            state.nguoiDung.values = action.nhanVienCS;
            state.nguoiDung = {...state.nguoiDung};
            return {...state};            
        }
        case 'CAP_NHAT': {
            let mangCapNhat = [...state.mangNhanVien];
            let index = mangCapNhat.findIndex(nhanVien=>nhanVien.tk === action.nguoiDungCapNhat.tk);
            if(index !== -1) {
                mangCapNhat[index] = action.nguoiDungCapNhat;
            }
            state.mangNhanVien = mangCapNhat;
            return {...state};
        }
        default: return {...state};
    }
}