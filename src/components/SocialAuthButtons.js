import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import googleColorful from '../assets/icons/googleColorful.svg';
import twitterColorful from '../assets/icons/twitterColorful.svg';
import linkedinColorful from '../assets/icons/linkedinColorful.svg';
import facebookColorful from '../assets/icons/facebookColorful.svg';

function SocialAuthButtons({ wrapperClassName }) {
  return (
    <div className={`flex flex-col space-y-4 w-full ${wrapperClassName}`}>
      <Button
        wrapperClassName="c-filled-btn c-filled-btn--primary flex"
        className="justify-center md:justify-start"
        block
      >
        <img src={googleColorful} alt="" className="mr-4" />
        <p>Sign in with Google</p>
      </Button>
      <div className="grid grid-cols-3 gap-x-2 md:grid-cols-1 md:gap-y-4">
        <Button
          wrapperClassName="c-filled-btn c-filled-btn--primary w-full"
          className="justify-center md:justify-start"
          block
        >
          <img src={twitterColorful} alt="" className="mr-4" />
          <p className="hidden md:block">Sign in with Twitter</p>
        </Button>
        <Button
          wrapperClassName="c-filled-btn c-filled-btn--primary w-full"
          className="justify-center md:justify-start"
          block
        >
          <img src={linkedinColorful} alt="" className="mr-4" />
          <p className="hidden md:block">Sign in with Linkedin</p>
        </Button>
        <Button
          wrapperClassName="c-filled-btn c-filled-btn--primary w-full"
          className="justify-center md:justify-start"
          block
        >
          <img src={facebookColorful} alt="" className="mr-4" />
          <p className="hidden md:block">Sign in with Facebook</p>
        </Button>
      </div>
    </div>
  );
}

SocialAuthButtons.propTypes = {
  wrapperClassName: PropTypes.string,
};

SocialAuthButtons.defaultProps = {
  wrapperClassName: '',
};

export default SocialAuthButtons;
