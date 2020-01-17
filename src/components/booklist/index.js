import React from 'react';

import './../../css/main.css';

import {connect} from 'react-redux';
import img_back from "../../static/img_back.png";
import { loadBookList } from './../../store/actionCreators.js';

class BookList extends React.Component {

    goBack() {
        this.props.history.go(-1)
    }

    render() {
        {console.log('data123= ', this.props.dataBookList)}
        return (
            <div>
                <div className="nav-cont">
                        <span className="nav-back" onClick={() => this.goBack()}>
                            <img src={img_back} alt="back"/>
                        </span>
                    <span className="nav-text">书籍列表</span>
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.props.initList(28519, 1, 20, 2, 2);
    }
}

const mapStateToProps = (state) => {
    return {
        dataBookList: state.get('dataBookList'),
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        initList(userId, page, pageSize, moduleId, maleChannel) {
            const action = loadBookList(userId, page, pageSize, moduleId, maleChannel);
            dispatch(action);
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
