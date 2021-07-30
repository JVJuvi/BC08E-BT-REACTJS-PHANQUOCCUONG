import React, { Component } from 'react';
import KetQua from '../KetQua';
import './GameXucXac.css';
import XucXac from './XucXac';
import {connect} from 'react-redux';

class GameXucXac extends Component {
    render() {
        return (
            <div className="game">
                <div className="game-title text-center mt-5">
                    <h1>GAME XÚC XẮC by Juvi</h1>
                </div>
                <div className="row text-center">
                    <div className="col-4">
                        <button className="btnGame" onClick={()=>this.props.chonKetQua(true)}>TÀI</button>
                    </div>
                    <div className="col-4">
                        <XucXac />
                        <h1 className="mt-2">{this.props.soDiem}</h1>
                        <p className="mt-5">*Cách chơi: trên 11 điểm là TÀI, nhỏ hơn hoặc bằng 11 là XỈU</p>
                    </div>
                    <div className="col-4">
                        <button className="btnGame" onClick={()=>this.props.chonKetQua(false)}>XỈU</button>
                    </div>
                </div>
                <div className="text-center">
                    <KetQua />
                </div>
               <div className="text-center">
                    <button className="btn btn-success" onClick={()=>this.props.playGame()}>Play game</button>
               </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        soDiem: state.GameXucXacReducer.soDiem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        chonKetQua: (ketQua) => {
            const action = {
                type: 'CHON_KET_QUA',
                ketQua
            }
            dispatch(action);
        },
        playGame: () => {
            const action = {
                type: 'PLAY_GAME',
            }
            dispatch(action);
        }
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(GameXucXac)
