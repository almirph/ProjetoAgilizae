import React, { Component } from 'react';
import { Card, Icon } from 'semantic-ui-react';

export default class CardDescription extends Component {
  render() {
    console.log(this.props.description);
    return (
      <div>
        <Card>
          <Card.Content header={this.props.title} />
          <Card.Content description={this.props.description} />
        </Card>
      </div>
    );
  }
}
