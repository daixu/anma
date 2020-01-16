import React from 'react';

import {ImageWrap, ListItem, ListWrap, SpanWrap} from './style';
import {connect} from 'react-redux';
import {loadBookStack} from "../../store/actionCreators";

class BookStackGirl extends React.Component {

    render() {
        return (
            <ListWrap>
                {
                    this.props.dataBookStackGirl.get('classdata') === undefined ? <div></div> :
                        this.props.dataBookStackGirl.get('classdata').map(function (item, index) {
                            return (
                                <ListItem key={item.get('classid')}>
                                    <ImageWrap src={item.get('classimage')}/>
                                    <SpanWrap>{item.get('classname')}</SpanWrap>
                                </ListItem>
                            );
                        })
                }
            </ListWrap>
        )
    }

    componentDidMount() {
        this.props.initBookStack();
    }
}

const mapStateToProps = (state) => {
    return {
        dataBookStackGirl: state.get('dataBookStackGirl')
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        initBookStack() {
            const action = loadBookStack(28519, 1);
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BookStackGirl);
