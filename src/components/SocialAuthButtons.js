import React from 'react';
// import PropTypes from 'prop-types';
import Button from './Button';
import googleColorful from '../assets/images/icons/googleColorful.svg';
import twitterColorful from '../assets/images/icons/twitterColorful.svg';
import linkedinColorful from '../assets/images/icons/linkedinColorful.svg';
import facebookColorful from '../assets/images/icons/facebookColorful.svg';

function SocialAuthButtons() {
  return (
    <div className="flex flex-col space-y-4" style={{ width: 350 }}>
      <Button wrapperClassName="c-filled-btn c-filled-btn--primary flex" className="" block>
        <img src={googleColorful} alt="" className="mr-4" />
        <p>Sign in with Google</p>
      </Button>
      <Button wrapperClassName="c-filled-btn c-filled-btn--primary" className="" block>
        <img src={twitterColorful} alt="" className="mr-4" />
        <p>Sign in with Twitter</p>
      </Button>
      <Button wrapperClassName="c-filled-btn c-filled-btn--primary" className="" block>
        <img src={linkedinColorful} alt="" className="mr-4" />
        <p>Sign in with Linkedin</p>
      </Button>
      <Button wrapperClassName="c-filled-btn c-filled-btn--primary" className="" block>
        <img src={facebookColorful} alt="" className="mr-4" />
        <p>Sign in with Facebook</p>
      </Button>
    </div>
  );
}

SocialAuthButtons.propTypes = {
  //
};

export default SocialAuthButtons;
