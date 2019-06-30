import React, { Component } from "react";
import Card from "../components/Card/Card.jsx";

export default class Bares extends Component {
  render() {
    return (
      <div style={{ padding: "50px" }}>
        <Card
          title="BAR TESTE "
          category="coisas sobre o bar"
          imagem="https://media-cdn.tripadvisor.com/media/photo-s/07/84/1d/64/sao-bartolomeu.jpg"
        />

        <Card
          title="BAR TESTE "
          category="coisas sobre o bar"
          imagem="https://media-cdn.tripadvisor.com/media/photo-s/07/84/1d/64/sao-bartolomeu.jpg"
        />

        <Card
          title="BAR TESTE "
          category="coisas sobre o bar"
          imagem="https://media-cdn.tripadvisor.com/media/photo-s/07/84/1d/64/sao-bartolomeu.jpg"
        />

        <Card
          title="BAR TESTE "
          category="coisas sobre o bar"
          imagem="https://media-cdn.tripadvisor.com/media/photo-s/07/84/1d/64/sao-bartolomeu.jpg"
        />
      </div>
    );
  }
}
