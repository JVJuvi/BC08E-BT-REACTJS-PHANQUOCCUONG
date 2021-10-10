import React from 'react';
import './XucXacItem.css';
import DanhSachCuoc from './DanhSachCuoc';
import DanhSachXucXac from './DanhSachXucXac';
import { useSelector, useDispatch } from 'react-redux';

export default function GameBauCua() {

    const tongDiem = useSelector(state => state.GameBauCuaReducer.tongDiem);

    const dispatch = useDispatch();

    return (
        <div className="home">
            <div className="container-fluid">
                <div className="text-center mt-3">
                    <img src="./image/BauCua/Logo.png" width={700} />
                    <div>
                        <h3 style={{color: 'yellow', background: 'red',display: 'inline-block',padding: '10px'}}>Tiền thưởng: <span style={{fontSize: '50px', color: 'white'}}>{tongDiem}</span>$</h3>
                    </div>
                    <button className="btn btn-success" onClick={()=>{
                        const action = {
                            type: 'CHOI_LAI'
                        }
                        dispatch(action);
                    }}>Chơi lại</button>
                </div>
                <div className='row mt-5'>
                        <div className="col-8 text-center">
                            <DanhSachCuoc />
                        </div>
                        <div className="col-4" style={{alignSelf: 'center'}}>
                            <DanhSachXucXac />
                        </div>
                    </div>
            </div>
        </div>
    )
}
