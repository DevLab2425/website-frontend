import * as React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import LazyLoad from 'react-lazyload';
import FacebookIcon from '../facebook-icon/facebook-icon';
import TwitterIcon from '../twitter-icon/twitter-icon';
import PlacholderImage from './images/placeholder-318x180.png';
import './card.scss';

export default class Card extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  static formatHtmlContent(description = '') {
    return description.replace(/<\/?[^>]+(>|$)/g, '').substr(0, 160);
  }

  // TODO we have an issue testing for the image tag within the LazyLoad component
  // https://github.com/ProvidenceGeeks/website-frontend/issues/79
  static generateImage(imgSource, imgAlt) {
    const src = imgSource ? imgSource : PlacholderImage;
    const alt = imgAlt ? imgAlt : Card.defaultProps.imgAlt;

    return <img className="card-img" src={ src } alt={ alt } />;
  }

  static generatePlaceholderImage() {
    return <img className="card-img" src={ PlacholderImage } alt={ Card.defaultProps.imgAlt } />;
  }

  render() {
    return (

      <div className="card d-flex">

        <a className="card-link" href={ this.props.link } target="_blank" rel="noopener noreferrer">
          <div className="lazyload-wrapper">
            <LazyLoad height={233} once>
              <CSSTransitionGroup key="1"
                transitionName="fade"
                transitionAppear
                transitionAppearTimeout={500}
                transitionEnter={false}
                transitionLeave={false}>
                { Card.generateImage(this.props.imgSource, this.props.imgAlt) }
              </CSSTransitionGroup>
            </LazyLoad>
          </div>

          <div className="card-title-container align-self-end">
            <span className="card-title">{ this.props.title }</span>
          </div>
        </a>

        <div className="card-info d-flex align-self-end justify-content-between">
          <div className="card-heading">{ this.props.heading }</div>

          <div className="card-social">
            <div className="social-link-fb float-left">
              <a className="facebook-share" href={ `https://www.facebook.com/sharer/sharer.php?u=${ encodeURIComponent(this.props.facebookShareMessage) }` } target="_blank" rel="noopener noreferrer">
                <FacebookIcon />
              </a>
            </div>

            <div className="social-link-tw float-right">
              <a className="twitter-share" href={ `https://twitter.com/intent/tweet?status=${ encodeURIComponent(this.props.twitterShareMessage) }` } target="_blank" rel="noopener noreferrer">
                <TwitterIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="card-block">
          <p className="card-text">
            { this.props.body }
          </p>
        </div>
      </div>

    );
  }
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  imgSource: PropTypes.string,
  imgAlt: PropTypes.string,
  facebookShareMessage: PropTypes.string,
  twitterShareMessage: PropTypes.string
};

Card.defaultProps = {
  imgSource: null, // TODO https://github.com/ProvidenceGeeks/website-frontend/issues/70
  imgAlt: 'Event Image',
  facebookShareMessage: ' ', // TODO should hide this element if this prop is not provided?
  twitterShareMessage: ' ' // TODO should hide this element if this prop is not provided?
};