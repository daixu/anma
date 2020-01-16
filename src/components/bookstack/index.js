import React from 'react';

import './index.css';
import img_back from './../../static/img_back.png';
import { Tabs, WhiteSpace } from 'antd-mobile';
import BookStackBoy from './bookStackBoy';
import BookStackGirl from './bookStackGirl';

class BookStack extends React.Component {

    goBack() {
        this.props.history.go(-1)
    }

    render() {
        const tabs = [
            { title: '男生' },
            { title: '女生' },
        ];

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

                <div>
                    <Tabs tabs={tabs}
                          initialPage={0}
                          prerenderingSiblingsNumber={1}
                          onChange={(tab, index) => { console.log('onChange', index, tab); }}
                          onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                        <div style={{ display: 'flex', height: '100%', backgroundColor: '#fff' }}>
                            <BookStackBoy />
                        </div>
                        <div style={{ display: 'flex', height: '100%', backgroundColor: '#ff0' }}>
                            <BookStackGirl />
                        </div>
                    </Tabs>
                    <WhiteSpace />
                </div>
            </div>
        )
    }
}

export default (BookStack);
