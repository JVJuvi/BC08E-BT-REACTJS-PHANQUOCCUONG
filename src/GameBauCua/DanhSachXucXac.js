import React from 'react'
import XucXac from './XucXac';
import { useSelector, useDispatch } from 'react-redux';

export default function DanhSachXucXac() {

    const mangXucXac = useSelector(state => state.GameBauCuaReducer.mangXucXac);

    const dispatch = useDispatch();

    return (
        <div>
            <div className="text-center" style={{marginBottom: '20px'}}>
            <button style={{marginRight: '124px'}} className="btn btn-danger" onClick={()=>{
                const action = {
                    type: 'SOC'
                }
                dispatch(action);
            }}>Sốc</button>
        </div>
        <div style={{width: '300px', height: '300px', borderRadius: '50%', background: 'white'}}>
            <div className="row">
                <div className="col-12 text-center" style={{paddingTop: '70px',paddingBottom: '20px'}}>
                    <XucXac xucXacItem={mangXucXac[0]}/>
                </div>
                <div className="col-6 text-left" style={{paddingLeft: '70px'}}>
                    <XucXac xucXacItem={mangXucXac[1]}/>
                </div>
                <div className="col-6 text-right" style={{paddingRight: '70px'}}>
                    <XucXac xucXacItem={mangXucXac[2]}/>
                </div>
            </div>
        </div>
        </div>
    )
}
