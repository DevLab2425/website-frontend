import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const CustomLink = (props) => {
  const isExternalLink = (/http/).test(props.url);
  let ariaProps = {}; 
  
  Object
    .keys(props)
    .filter((key) => key.match(/aria-/))
    .forEach((attr) => {
      ariaProps[attr] = props[attr];
    });

  return (
    <div className='custom-link'>
      {
        isExternalLink
          ? <a href={ props.url } target='_blank' rel='noopener noreferrer' {...ariaProps}> { props.children }</a>
          : <Link to={ props.url }> { props.children } </Link>
      }
    </div>
  );

};

CustomLink.propTypes = {
  url: PropTypes.string.isRequired,
  children: PropTypes.any
};

export default CustomLink;