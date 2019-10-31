import * as React from 'react';
import PropTypes from 'prop-types';
import CustomLink from '../custom-link/custom-link';
import EmailIcon from '../email-icon/email-icon';
import FacebookIcon from '../facebook-icon/facebook-icon';
import LinkedinIcon from '../linkedin-icon/linkedin-icon';
import PrinterIcon from '../printer-icon/printer-icon';
import TwitterIcon from '../twitter-icon/twitter-icon';
import './share-bar.scss';

// TODO dont depend on other component styles, e.g. card-social
const ShareBar = (props) => {
  const encodedUri = encodeURIComponent(props.link);

  return (

    <div className='share-bar'>
      <div className='card-social'>

        <div className='social-link-fb'>

          <CustomLink 
            className='facebook-share'
            url={`https://www.facebook.com/sharer/sharer.php?u=${ encodedUri }`}
            aria-label="Share this on Facebook"
          >
            <FacebookIcon/>
          </CustomLink>

        </div>

        <div className='social-link-tw'>

          <CustomLink 
            className='twitter-share'
            url={`https://twitter.com/intent/tweet?status=${ encodedUri } @ProvidenceGeeks`}
            aria-label="Share this on Twitter"
          >
            <TwitterIcon/>
          </CustomLink>

        </div>

        <div className='social-link-li'>

          <CustomLink 
            className='linkedin-share'
            url={`https://www.linkedin.com/shareArticle?mini=true&url=${ encodedUri }`}
            aria-label="Share this on LinkedIn"
          >
            <LinkedinIcon/>
          </CustomLink>

        </div>

        <div className='social-link-email'>

          <a 
            className='email-share'
            href={`mailto:?subject=Link From Providence Geeks!&body=${ encodedUri }`}
            aria-label="Email this"
          >
            <EmailIcon/>
          </a>

        </div>

        <div className='social-link-print'>
          <a 
            className='print-share'
            onClick={window.print}
            aria-label="Print this"
          >
            <PrinterIcon/>
          </a>

        </div>

      </div>
    </div>

  );
};

ShareBar.propTypes = {
  link: PropTypes.string.isRequired
};

export default ShareBar;