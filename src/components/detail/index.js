import React from 'react';

import './index.css';
import default_book_cover from './../../static/default_bookcover.jpg'
import {connect} from 'react-redux';
import {loadDetail} from './../../store/actionCreators.js';

class Detail extends React.Component {

    render() {
        console.log(this.props.dataDetail.get('detailsdata').get('bookid'));
        return (
            <div>
                <div>
                    <div className="nav-cont">
                        <span className="nav-text">书籍详情</span>
                    </div>

                    <div className="book-detail-content">
                        <img src={default_book_cover} alt="" className="book-cover"/>
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
        dataDetail: state.get('dataDetail'),
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        initDetail(bookId) {
            const action = loadDetail(28519,bookId);
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
