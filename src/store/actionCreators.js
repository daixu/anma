import axios from 'axios';
import * as constants from './constants';
import {fromJS} from 'immutable';

export const getBanner = (data) => ({
    type: constants.GET_BANNER,
    data: data
});

export const initData = (data) => ({
    type: constants.INIT_LIST,
    data: fromJS(data)
});

export const getMoreList = (data) => ({
    type: constants.GET_MORE_LIST,
    data: fromJS(data)
});

export const initDetail = (data) => ({
    type: constants.GET_DETAIL,
    data: fromJS(data)
});

export const initDirectory = (data) => ({
    type: constants.GET_DIRECTORY,
    data: fromJS(data)
});

export const getChoiceList = (userId, pageIndex) => {
    return (dispatch) => {
        axios.get('/api/newbookinfo/get-selectmodule', {
            headers: {
                'accounttoken': 'c0bc5c335284998f4520de0c47ccc8bf',
            },
            params: {
                userid: userId,
                pagecount: pageIndex,
                channel: 1001
            },
        })
            .then((response) => {
                const data = response.data;
                const action = initData(data.data);
                dispatch(action);
            }).catch(() => {
            console.log("error")
        })
    }
};

export const loadMoreList = (userId, pageIndex, maleChannel) => {
    return (dispatch) => {
        axios.get('/api/newbookinfo/get-bookdatapage', {
            headers: {
                'accounttoken': 'c0bc5c335284998f4520de0c47ccc8bf',
            },
            params: {
                userid: userId,
                page: pageIndex,
                pagesize: 7,
                malechannel: maleChannel,
                channel: 1001,
                status: 0,
            },
        }).then((response) => {
            const data = response.data;
            const action = getMoreList(data.data);
            dispatch(action);
        }).catch(() => {
            console.log("error")
        })
    }
};

export const loadBanner = (userId, maleChannel, type) => {
    return (dispatch) => {
        axios.get('/api/configure/get-picconfig', {
            headers: {
                'accounttoken': 'c0bc5c335284998f4520de0c47ccc8bf',
            },
            params: {
                userid: userId,
                channel: 1001,
                platform: 2,
                malechannel: maleChannel,
                pictype: type,
            },
        }).then((response) => {
            const data = response.data;
            console.log("data", data);
            const action = getBanner(data.data);
            dispatch(action);
        })
    }
};

export const loadDetail = (userId, bookId) => {
    return (dispatch) => {
        axios.get('/api/bookinfo/get-bookdetails', {
            headers: {
                'accounttoken': 'c0bc5c335284998f4520de0c47ccc8bf',
            },
            params: {
                userid: userId,
                channel: 1001,
                platform: 2,
                bookid: bookId,
                clicktype: 101
            },
        }).then((response) => {
            const data = response.data;
            const action = initDetail(data.data);
            dispatch(action);
        }).catch(() => {
            console.log("error")
        })
    }
};

export const loadDirectory = (userId, bookId) => {
    return (dispatch) => {
        axios.get('/api/chapter/get-chapterpage', {
            headers: {
                'accounttoken': 'c0bc5c335284998f4520de0c47ccc8bf',
            },
            params: {
                userid: userId,
                channel: 1001,
                bookid: bookId,
                page: 1,
                pagesize: 0
            },
        }).then((response) => {
            const data = response.data;
            const action = initDirectory(data.data);
            dispatch(action);
        }).catch(() => {
            console.log("error")
        })
    }
};
