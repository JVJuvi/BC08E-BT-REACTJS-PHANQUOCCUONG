import React, { Component } from 'react'
import {connect} from 'react-redux';

class KetQua extends Component {
    render() {
        let{taiXiu,soBanThang,tongSoBanChoi} = this.props.GameXucXacReducer;
        return (
            <div>
                <h1>Bạn chọn: <span className="game-choise">{taiXiu ? 'Tài' : 'Xỉu'}</span></h1>
                <h1>Số bàn thắng: <span className="game-core"></span>{soBanThang}</h1>
                <h1>Tổng số bàn chơi: <span className="game-goal"></span>{tongSoBanChoi}</h1>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        GameXucXacReducer: state.GameXucXacReducer
    }
}

export default connect(mapStateToProps)(KetQua)

