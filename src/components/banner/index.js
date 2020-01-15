import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';

class Banner extends React.Component {

    clickBanner(index) {
        console.log('index= ', index);
    }

    render() {
        const settings = {
            // dots: true,
            infinite: true,
            autoplay: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div>
                <Slider {...settings}>
                    {
                        this.props.data.map((item, index) => {
                            return (
                                <div className="banner-div" key={item.bookid} onClick={()=> this.clickBanner(index)}>
                                    <img src={item.imgurl} alt="" className="banner-img"/>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>
        )
    }
}

export default Banner;
