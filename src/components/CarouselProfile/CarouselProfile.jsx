import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

export default class CarouselProfile extends Component {
  render() {
    console.log('imagem', this.props.images);
    const images = this.props.images ? this.props.images : [];
    return (
      <Carousel width='100%'>
        {images.map(image => (
          <div>
            <img src={image} />
          </div>
        ))}
      </Carousel>
    );
  }
}
