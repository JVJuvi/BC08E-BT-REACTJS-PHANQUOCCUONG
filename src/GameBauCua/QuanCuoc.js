import React from 'react';
import { useDispatch } from 'react-redux';

export default function QuanCuoc(props) {
 
    const dispatch = useDispatch();

    return (
        <div>
            <img src={props.item.img} width={150} />
            <div style={{marginTop: '20px', marginBottom: '20px'}}>
                <button className="btn btn-danger" onClick={()=>{
                    const action = {
                        type: 'DAT_CUOC_BAU_CUA',
                        amount: 100,
                        item: props.item
                    }
                    dispatch(action)
                }}>+</button>
                <span style={{marginRight: '10px', marginLeft: '10px'}}>{props.item.diemCuoc}$</span>
                <button className="btn btn-danger" onClick={()=>{
                    const action = {
                        type: 'DAT_CUOC_BAU_CUA',
                        amount: -100,
                        item: props.item
                    }
                    dispatch(action)

                }}>-</button>
            </div>
        </div>
    )
}
