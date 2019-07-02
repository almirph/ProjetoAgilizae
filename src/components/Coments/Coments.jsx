import React, { Component } from 'react';
import { Comment, Header, Icon } from 'semantic-ui-react';

class Coments extends Component {
  render() {
    const comentList = this.props.comentList ? this.props.comentList : [];
    return (
      <div>
        <Comment.Group size='massive'>
          {comentList.map(coment => (
            <Comment>
              <Comment.Avatar as='a' src={coment.perfilImage} />

              <Comment.Content>
                <Comment.Author as='a'>{coment.nome}</Comment.Author>
                <Comment.Metadata>
                  <div>
                    <Icon name='star' />
                    {coment.nota} Estrelas
                  </div>
                </Comment.Metadata>
                <Comment.Text>{coment.feedback}</Comment.Text>
              </Comment.Content>
            </Comment>
          ))}
        </Comment.Group>
      </div>
    );
  }
}

export default Coments;
