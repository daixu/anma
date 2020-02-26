import React from 'react';

import './../../css/main.css';
import Choice from './../choice';
import Recommend from './../recommend';
import BestsellerList from './../bestseller';
import NewBook from './../newbook';
import ChoiceMore from './../choicemore';
import Banner from './../banner';

import {connect} from 'react-redux';
import {getChoiceList, loadBanner} from './../../store/actionCreators.js';

class Home extends React.Component {

    render() {

        return (
            <div>
                <div>
                  <div className="nav-cont">
                    <span className="nav-text">首页</span>
                  </div>
                </div>

                <Banner data={this.props.dataBanner.picdata || []}/>

                <Choice/>
                <div className="main-content">
                  <Recommend data={this.props.dataObj.get('heavydata')}/>
                  <BestsellerList data={this.props.dataObj.get('searchdata')}/>
                  <NewBook data={this.props.dataObj.get('completedata')}/>
                  <ChoiceMore />
                </div>
            </div>
        )
    }

    componentDidMount() {
        this.props.initList();
        this.props.loadBanner();
    }
}

const mapStateToProps = (state) => {
    return {
        dataObj: state.get('dataObj'),
        dataBanner: state.get('dataBanner')
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

        loadBanner() {
            const action = loadBanner(28519,1, 0);
            dispatch(action);
        },
        initList() {
            const action = getChoiceList(28519,2);
            dispatch(action);
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
