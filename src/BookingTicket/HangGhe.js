import React, { Component } from 'react';
import {connect} from 'react-redux';
import {datGheAction} from '../redux/actions/BookingTicketAction';

class HangGhe extends Component {

    renderGhe = () => {
        return this.props.danhSach.danhSachGhe.map((ghe,indexindex)=>{
            let cssDaDat = '';
            let disabled = false;
            if(ghe.daDat){
                cssDaDat = 'gheDuocChon'
                disabled = true;
            }
            let cssDangDat = '';
            let index = this.props.danhSachDatGhe.findIndex(gheDangDat=>gheDangDat.soGhe === ghe.soGhe);
            if(index !== -1){
                cssDangDat = 'gheDangChon';
            }

            return (
                <button disabled={disabled} className={`ghe ${cssDaDat} ${cssDangDat}`} onClick={()=>{
                    this.props.dispatch(datGheAction(ghe))
                }}>
                    {ghe.soGhe}
                </button>
            )
        })
    }

    renderHangGheDau = () => {
        return this.props.danhSach.danhSachGhe.map((gheDau,index)=>{
            return(
                <button className="rowNumber">{gheDau.soGhe}</button>
            )
        })
    }

    renderHangGhe = () => {

       if(this.props.soHang === 0){
           return (
                <div className="ml-3">
                    {this.props.danhSach.hang} {this.renderHangGheDau()}
                </div>
           )
       }else {
            return(
                <div>
                    {this.props.danhSach.hang} {this.renderGhe()}
                </div>
            )
       }
    }

    render() {
        return (
            <div className="text-light text-left mt-4 ml-5">
                {this.renderHangGhe()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachDatGhe: state.BookingTicketReducer.danhSachDatGhe
    }
}

export default connect(mapStateToProps)(HangGhe)
