import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import './index.css';

class Banner extends React.Component {

    render() {
        const params = {
            shouldSwiperU: true,
            rebuildOnUpdate: true,
        };

        return (
            <div>
                <Swiper params={params}>
                    {
                        this.props.data.map((item) => {
                            return (
                                <div className="banner-div" key={item.bookid}>
                                    <img src={item.imgurl} alt="" className="banner-img"/>
                                </div>
                            )
                        })
                    }
                </Swiper>
            </div>
        )
    }
}

export default Banner;
