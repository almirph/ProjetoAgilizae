import React, { Component } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { Image } from 'semantic-ui-react';

export default class CarouselProfile extends Component {
  render() {
    return (
      <div>
        <Carousel width='100%'>
          <div>
            <img src='https://media-cdn.tripadvisor.com/media/photo-s/07/84/1d/64/sao-bartolomeu.jpg' />
          </div>
          <div>
            <img src='https://media-cdn.tripadvisor.com/media/photo-f/07/84/1d/5d/sao-bartolomeu.jpg' />
          </div>
          <div>
            <img src='https://media-cdn.tripadvisor.com/media/photo-f/07/84/1f/a4/arte-no-sao-bartolomeu.jpg' />
          </div>
        </Carousel>
      </div>
    );
  }
}
