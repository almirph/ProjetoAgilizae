import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import Card from "../components/Card/Card.jsx";
import { Grid, Image } from "semantic-ui-react";
import BaresDados from "../Dados/Bares.json";
import Carousel from "semantic-ui-carousel-react";
import DadosBares from "../Dados/Bares.json"
import "./cssglobal.css";

const elements = DadosBares[0].CarroselImages.map(imagemCarrosel => {
  return ({
    render: () => <Image src={imagemCarrosel} />
  });
});

class BarProfile extends Component {
  render() {
    return (
      <div style={{ padding: "50px" }}>
        <div>
          <h2>São Bartolomeu</h2>
          <i className="pe-7s-star" style={{ fontSize: "40px" }} />
          <i className="pe-7s-star" style={{ fontSize: "40px" }} />
          <i className="pe-7s-star" style={{ fontSize: "40px" }} />
        </div>

        <Carousel className="ui.card"
          elements={elements}
          duration={3000}
          animation="slide left"
          showNextPrev={false}
          showIndicators={true}
        />

        {/* <Grid style={{ paddingTop: "50px" }}>
          <Grid.Column computer="6">
          <Image
          centered
              bordered
              rounded
              src="https://media-cdn.tripadvisor.com/media/photo-s/07/84/1d/64/sao-bartolomeu.jpg"
              size="large"
            />
          </Grid.Column>
          <Grid.Column computer="5">
            <Image
              centered
              bordered
              rounded
              src="https://media-cdn.tripadvisor.com/media/photo-f/07/84/1d/5d/sao-bartolomeu.jpg"
              size="large"
            />
          </Grid.Column>
          <Grid.Column computer="5">
            <Image
              centered
              bordered
              rounded
              src="https://media-cdn.tripadvisor.com/media/photo-f/07/84/1f/a4/arte-no-sao-bartolomeu.jpg"
              size="medium"
            />
            <Image
              centered
              bordered
              rounded
              src="https://media-cdn.tripadvisor.com/media/photo-f/07/84/1f/a4/arte-no-sao-bartolomeu.jpg"
              size="medium"
            />
          </Grid.Column>
        </Grid> */}
      </div>
    );
  }
}

export default BarProfile;
