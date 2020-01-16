import React from 'react';
import {ImageWrap, ListItem, ListWrap, SpanWrap} from './style';
import {connect} from "react-redux";
import {loadBookStack} from "../../store/actionCreators";

class BookStackBoy extends React.Component {

    render() {
        return (
            <ListWrap>
                {
                    this.props.dataBookStackBoy.get('classdata') === undefined ? <div></div> :
                        this.props.dataBookStackBoy.get('classdata').map(function (item, index) {
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
        dataBookStackBoy: state.get('dataBookStackBoy')
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        initBookStack() {
            const action = loadBookStack(28519, 0);
            dispatch(action);
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps) (BookStackBoy);
