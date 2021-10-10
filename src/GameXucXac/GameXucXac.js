import React, { Component } from 'react';
import KetQua from './KetQua';
import './GameXucXac.css';
import XucXac from './XucXac';
import {connect} from 'react-redux';
import { playGameXucXac } from '../redux/actions/GameXucXacAction';

class GameXucXac extends Component {
    render() {
        return (
            <div className="gameXucXac">
                <div className="game-title text-center mt-5">
                    <h1>GAME XÚC XẮC by Juvi</h1>
                </div>
                <div className="row text-center">
                    <div className="col-4">
                        <button className="btnGameXucXac">TÀI</button>
                    </div>
                    <div className="col-4">
                        <XucXac />
                        <h1 className="mt-2">{this.props.soDiem}</h1>
                        <p className="mt-5">*Cách chơi: trên 11 điểm là TÀI, nhỏ hơn hoặc bằng 11 là XỈU</p>
                    </div>
                    <div className="col-4">
                        <button className="btnGameXucXac">XỈU</button>
                    </div>
                </div>
                <div className="text-center">
                    <KetQua />
                </div>
               <div className="text-center">
                    <button className="btn btn-success" onClick={()=>{
                        this.props.dispatch(playGameXucXac())
                    }}>Play game</button>
               </div>
            </div>
        )
    }
}

const mapStateToProp = (state) => {
    return {
        soDiem: state.GameXucXacReducer.soDiem
    }
}

export default connect (mapStateToProp)(GameXucXac)