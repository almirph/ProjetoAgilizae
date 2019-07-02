import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export class Card extends Component {
  render() {
    const valores = this.props;
    return (
      <Grid>
        <Grid.Column computer={3} mobile={16} verticalAlign='top'>
          <Image
            centered
            bordered
            rounded
            src={this.props.imagem}
            size='medium'
          />
        </Grid.Column>
        <Grid.Column computer={13} mobile={16} verticalAlign='top'>
          <div className={'card' + (this.props.plain ? ' card-plain' : '')}>
            <div
              className={'header' + (this.props.hCenter ? ' text-center' : '')}
            >
              <Link to={`/user/profile/${this.props.id}`}>
                <h4 className='title'>{this.props.title}</h4>
              </Link>

              <p className='category'>{this.props.category}</p>
            </div>
            <div
              className={
                'content' +
                (this.props.ctAllIcons ? ' all-icons' : '') +
                (this.props.ctTableFullWidth ? ' table-full-width' : '') +
                (this.props.ctTableResponsive ? ' table-responsive' : '') +
                (this.props.ctTableUpgrade ? ' table-upgrade' : '')
              }
            >
              <div className='footer'>
                {this.props.legend}
                {this.props.stats != null ? <hr /> : ''}
                <div className='stats'>
                  <i className={this.props.statsIcon} /> {this.props.stats}
                </div>
              </div>
            </div>
          </div>
        </Grid.Column>
      </Grid>
      // <Grid celled>
      //   <Grid.Row>
      //     <Grid.Column width={3}>
      //       <Image src="/images/wireframe/image.png" />
      //     </Grid.Column>
      //     <Grid.Column width={13}>
      //       <Image src="/images/wireframe/centered-paragraph.png" />
      //     </Grid.Column>
      //   </Grid.Row>

      //   <Grid.Row>
      //     <Grid.Column width={3}>
      //       <Image src="/images/wireframe/image.png" />
      //     </Grid.Column>
      //     <Grid.Column width={10}>
      //       <Image src="/images/wireframe/paragraph.png" />
      //     </Grid.Column>
      //     <Grid.Column width={3}>
      //       <Image src="/images/wireframe/image.png" />
      //     </Grid.Column>
      //   </Grid.Row>
      // </Grid>
    );
  }
}

export default Card;
