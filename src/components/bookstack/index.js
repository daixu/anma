import React from 'react';

import './index.css';
import img_back from './../../static/img_back.png';

class BookStack extends React.Component {

    goBack() {
        this.props.history.go(-1)
    }

    render() {
        return (
            <div>
                <div className="nav-cont">
                    <span className="nav-back" onClick={() => this.goBack()}>
                        <img src={img_back} alt="back"/>
                    </span>
                    <span className="nav-title">
                        书库
                    </span>
                </div>
            </div>
        )
    }
}

export default (BookStack);
