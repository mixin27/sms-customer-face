import React from "react";
import { Carousel } from "antd";
import SliderOne from "../../images/wp1.jpg";
import SliderTwo from "../../images/wp2.jpg";
import SliderThree from "../../images/wp3.jpg";

class Slider extends React.Component {
  onChange(a, b, c) {
    console.log(a, b, c);
  }

  render() {
    return (
      <Carousel
        autoplay
        // effect="fade"
        afterChange={this.onChange}
        className="slider"
      >
        <div>
          <img alt="slider" src={SliderThree} />
        </div>
        <div>
          <img alt="slider" src={SliderOne} />
        </div>
        <div>
          <img alt="slider" src={SliderTwo} />
        </div>
      </Carousel>
    );
  }
}

export default Slider;
