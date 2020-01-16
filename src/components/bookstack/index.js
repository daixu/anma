import React from 'react';

import './index.css';
import img_back from './../../static/img_back.png';
import {Link} from "react-router-dom";

class BookStack extends React.Component {

    render() {
        return (
            <div>
                <div className="nav-cont">
                    <span className="nav-back">
                        <Link to={'/index'}>
                            <img src={img_back} alt="back"/>
                        </Link>
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
