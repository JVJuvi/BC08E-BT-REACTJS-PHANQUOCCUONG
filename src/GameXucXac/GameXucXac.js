import React, { Component } from 'react';
import './GameXucXac.css';
import XucXac from './XucXac';

export default class GameXucXac extends Component {
    render() {
        return (
            <div className="game">
                <div className="game-title text-center mt-5">
                    <h1>GAME XÚC XẮC</h1>
                </div>
                <div className="row text-center">
                    <div className="col-4">
                        <button className="btnGame">TÀI</button>
                    </div>
                    <div className="col-4">
                        <XucXac />
                    </div>
                    <div className="col-4">
                        <button className="btnGame">XỈU</button>
                    </div>
                </div>
            </div>
        )
    }
}
