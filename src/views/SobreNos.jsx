import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import avatar from "assets/img/faces/face-5.jpg";
import Admin from './../layouts/Admin';

class SobreNos extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col>
              <h1>Sobre nós</h1>
              <hr />

              <h3>Como tudo começou?</h3>
              <p>Tudo começou quando um grupo de 4 estudantes estavam em um bar bebendo. O estabelecimento estava lotado
                 e sempre que decidíamos pedir outra cerveja era uma luta, de fato o atendimento era muito ruim. E no final ainda,
                 a conta veio errada, e nessa situação, como provar que o garçon errou e não você? </p>
              <p>Com isso em mente, decidimos investir na idéia de um sistema de bares, onde os estabelecimentos poderão cadastrar os seus bares
                e as pessoas irão conseguir acessa-los, e ver feedback de outros consumidores, ver cardápios, eventos, e até mesmo resgatar cupons de desconto.
                Dessa forma você não passa pelo que nós passamos aquela noite.
                Gaçon, Agilizaê!
              </p>
              <hr />

              <h3>Sistema de Feedbacks?</h3>
              <div style={{ textAlign: 'center' }}>
                <img src="https://s3.amazonaws.com/kp-blog/wp-content/uploads/2018/06/18113204/o-que-e-feedback-como-fazer-e-porque-usar-na-sua-empresa.jpg" />
              </div>
                <p>Com o sistema de feedbacks do Agilizaê os consumidores e bares ganham muito. Dessa forma os clientes vão conseguir extrair boas 
                  experiências com base nas experiências de outros usuários. E os bares tem a ganhar pois com os feedbacks eles vão conseguir 
                  melhorar o serviço.
                  </p>

            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default SobreNos;
