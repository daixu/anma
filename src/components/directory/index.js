import React from 'react';

import './index.css';
import {connect} from 'react-redux';
import {loadDirectory} from './../../store/actionCreators.js';
import img_back from './../../static/img_back.png';
import {Link} from "react-router-dom";

class Directory extends React.Component {

    render() {
        const pageData = this.props.dataDirectory.get('pagedata');
        const bookId = this.props.match.params.id;
        console.log('pageData= ', pageData);
        return (
            <div>
                <div className="nav-cont">
                    <span className="nav-back">
                        <Link to={'/detail/' + bookId}>
                            <img src={img_back} alt="back"/>
                        </Link>
                    </span>
                    <span className="nav-title">
                        {this.props.dataDirectory.get('bookname')}
                    </span>
                </div>

                <div className="directory-list">
                    <div className="directory-list-content">
                        <ul className="directory-ul">
                            <li className="directory-li">
                                {this.props.dataDirectory.get('serstatus')} 共 {this.props.dataDirectory.get('chapternumber')} 章
                            </li>
                            <li className="directory-li">
                                正文卷
                            </li>
                            {
                                pageData.map(function (item) {
                                    return (
                                        <li key={item.get('cid')} className="directory-li">
                                            {item.get('title')}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        const bookId = this.props.match.params.id;
        this.props.initDetail(bookId);
    }
}

const mapStateToProps = (state) => {
    return {
        dataDirectory: state.get('dataDirectory'),
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        initDetail(bookId) {
            const action = loadDirectory(28519, bookId);
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Directory);
