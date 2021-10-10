import React, { Component } from 'react';
import {connect} from 'react-redux';
import { huyGheAction } from '../redux/actions/BookingTicketAction';

class ThongTinDatGhe extends Component {
    render() {
        return (
            <div className="text-left">
                <div>
                    <button className="gheDuocChon"></button> <span className="text-light" style={{fontSize: '20px'}}>Ghế đã đặt</span>
                    <br />
                    <button className="gheDangChon"></button> <span className="text-light" style={{fontSize: '20px'}}>Ghế đang chọn</span>
                    <br />
                    <button className="ghe ml-0"></button> <span className="text-light" style={{fontSize: '20px'}}>Ghế chưa đặt</span>
                </div>
                <div className="mt-2">
                    <table className="table" border="2">
                        <thead>
                            <tr className="text-light" style={{fontSize: '25px'}}>
                                <th>Số ghế</th>
                                <th>Giá</th>
                                <th>Huỷ</th>
                            </tr>
                        </thead>
                        <tbody>
                           {this.props.danhSachDatGhe.map((danhSach,index)=>{
                               return (
                                   <tr className="text-info" key={index}>
                                       <td>{danhSach.soGhe}</td>
                                       <td>{danhSach.gia}</td>
                                       <td><button className="btn btn-danger" onClick={()=>{
                                           this.props.dispatch(huyGheAction(danhSach.soGhe))
                                       }}>Huỷ</button></td>
                                   </tr>
                               )
                           })}
                        </tbody>
                        <tfoot>
                           <tr className="text-success">
                               <td>Tổng tiền</td>
                               <td>
                                   {this.props.danhSachDatGhe.reduce((tongTien,danhSach,index)=>{
                                       return tongTien += danhSach.gia;
                                   },0).toLocaleString()}
                               </td>
                           </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachDatGhe: state.BookingTicketReducer.danhSachDatGhe
    }
}

export default connect(mapStateToProps)(ThongTinDatGhe)
