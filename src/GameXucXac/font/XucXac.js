import React, { Component } from 'react';
import {connect} from 'react-redux';

class XucXac extends Component {

    renderImage = () => {
        return this.props.mangXucXac.map((xx,index) => {
            return(
                <img key={index} src={xx.hinhAnh} width={50} height={50}/>       
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderImage()}              
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mangXucXac: state.GameXucXacReducer.mangXucXac
    }
}

export default connect (mapStateToProps,null)(XucXac)

