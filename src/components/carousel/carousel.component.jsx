import React from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { v4 as uuidv4 } from "uuid";
import Item from "../item/item.component";
import "./item-carousel.styles.scss";
class ItemCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      goToSlide: 0,
      offsetRadius: 2,
      showNavigation: false,
      config: config.gentle,
    };
  }
  slides = this.props.items
    .map((item) => {
      return {
        key: uuidv4(),
        content: <Item item={item} />,
      };
    })
    .map((slide, index) => {
      return {
        ...slide,
        onClick: () => this.setState({ goToSlide: index }),
      };
    });
  render() {
    return (
      <div className="carousel">
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
          offsetRadius={this.state.offsetRadius}
          showNavigation={this.state.showNavigation}
          animationConfig={this.state.config}
        />
      </div>
    );
  }
}

export default ItemCarousel;
