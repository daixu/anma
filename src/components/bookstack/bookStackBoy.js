import React from 'react';
import {ImageWrap, ListItem, ListWrap, SpanWrap} from './style';
import {connect} from "react-redux";
import {loadBookStack} from "../../store/actionCreators";

class BookStackBoy extends React.Component {

    render() {
        {console.log('data= ', this.props.dataBookStack.get('classdata'))}
        return (
            <ListWrap>
                {
                    this.props.dataBookStack.get('classdata') === undefined ? <div></div> :
                        this.props.dataBookStack.get('classdata').map(function (item, index) {
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
        dataBookStack: state.get('dataBookStack')
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
