import React, { Component } from 'react';
import {connect} from 'react-redux';

class XucXac extends Component {

    render() {
        return (
            <div>
                 {this.props.xucXac.map((item,index)=>{
                     return (
                         <img key={index} src={item.hinhAnh} width={50} height={50} alt="hinh1" />
                     )
                 })}       
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        xucXac: state.GameXucXacReducer.xucXac
    }
}

export default connect (mapStateToProps)(XucXac)
