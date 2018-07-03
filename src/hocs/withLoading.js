import React from 'react';
import PropTypes from 'prop-types';
import loading from '../assets/loading.svg';

export const withLoading = Component => {
  const WithLoading = (props) =>
    !!props.isLoading
      ? <Component {...props}/>
      : <img
        alt="Loading"
        className="App-logo"
        src={loading}
        style={{ display: 'block', margin: '0 auto' }}
      />

  WithLoading.propTypes = {
    isLoading: PropTypes.bool
  }

  return WithLoading;
};