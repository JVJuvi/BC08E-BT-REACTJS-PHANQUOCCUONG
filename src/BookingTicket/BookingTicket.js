import React, { Component } from 'react'
import './BookingTicket.css';
import ThongTinDatGhe from './ThongTinDatGhe';
import danhSachGheData from './assets/danhSachGhe.json';
import HangGhe from './HangGhe';


export default class BookingTicket extends Component {

    renderGhe = () => {
        return danhSachGheData.map((danhSach,index)=>{
            return (
                <div key={index}>
                    <HangGhe danhSach={danhSach} soHang={index} />
                </div>
            )
        })
    }

    render() {
        return (
            <div className="bookingMovie">
                <div className="bookingMovieBlack">
                    <div className="container pt-5">
                    <div className="row">
                        <div className="col-8 text-center">
                            <h1 className="text-warning">ĐẶT VÉ XEM PHIM CYBERLEARN</h1>
                            <p className="text-light mb-0">Màn hình</p>
                            <div className="d-flex justify-content-center">
                                <div className="screen"></div>
                            </div>
                            {this.renderGhe()}
                        </div>
                        <div className="col-4 text-center">
                            <h4 className="text-light">DANH SÁCH GHẾ BẠN CHỌN</h4>
                            <ThongTinDatGhe />
                        </div>
                    </div>          
                    </div>
                </div>
            </div>
        )
    }
}
