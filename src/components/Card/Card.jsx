import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export class Card extends Component {
  render() {
    const valores = this.props;
    return (
      <Grid>
        <Grid.Column computer={3} mobile={16} verticalAlign='top'>
          <Link to={`/user/profile/${this.props.id}`}>
            <Image
              centered
              bordered
              rounded
              src={this.props.imagem}
              size='medium'
            />
          </Link>
        </Grid.Column>
        <Grid.Column computer={13} mobile={16} verticalAlign='top'>
          <Link to={`/user/profile/${this.props.id}`}>
            <div className={'card' + (this.props.plain ? ' card-plain' : '')}>
              <div
                className={
                  'header' + (this.props.hCenter ? ' text-center' : '')
                }
              >
                <h4 className='title'>{this.props.title}</h4>
                <i className='pe-7s-star' style={{ fontSize: '20px' }} />
                <i className='pe-7s-star' style={{ fontSize: '20px' }} />
                <i className='pe-7s-star' style={{ fontSize: '20px' }} />
                <i className='pe-7s-star' style={{ fontSize: '20px' }} />
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
                    <p className='category' style={{ marginBottom: '0' }}>
                      {this.props.adress}
                    </p>
                    <i className={this.props.statsIcon} /> {this.props.stats}
                  </div>
                </div>
              </div>
            </div>
          </Link>
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
