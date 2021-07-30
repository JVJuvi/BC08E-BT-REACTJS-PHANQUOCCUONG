import { map } from 'async';
import React, { Component } from 'react'
import {connect} from 'react-redux';

class KetQua extends Component {
    render() {
        return (
            <div>
                <h1 className="game-choise">Bạn chọn: <span>{this.props.taiXiu ? 'Tài' : 'Xỉu'}</span></h1>
                <h1 className="game-core">Số bàn thắng: <span>{this.props.soBanThang}</span></h1>
                <h1 className="game-goal">Tổng số bàn chơi <span>{this.props.tongSoBanChoi}</span></h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        taiXiu: state.GameXucXacReducer.taiXiu,
        soBanThang: state.GameXucXacReducer.soBanThang,
        tongSoBanChoi: state.GameXucXacReducer.tongSoBanChoi
    }
}

export default connect(mapStateToProps,null)(KetQua)

