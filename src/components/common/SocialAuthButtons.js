import React from 'react';
import PropTypes from 'prop-types';
import Button from '../UI/Button';
import googleColorful from '../../assets/icons/googleColorful.svg';
import twitterColorful from '../../assets/icons/twitterColorful.svg';
import linkedinColorful from '../../assets/icons/linkedinColorful.svg';
import facebookColorful from '../../assets/icons/facebookColorful.svg';

function SocialAuthButtons({
  wrapperClassName,
  // eslint-disable-next-line no-unused-vars
  onGetGoogleAuth,
  onGetFacebookAuth,
  onGetTwitterAuth,
  onGetLinkedinAuth,
}) {
  return (
    <div className={`flex flex-col space-y-4 w-full ${wrapperClassName}`}>
      <Button
        wrapperClassName="c-filled-btn c-filled-btn--primary flex"
        className="justify-center xs:justify-start"
        href="http://165.227.34.172:3020/api/users/auth/google"
        target="_blank"
        block
      >
        <img src={googleColorful} alt="" className="mr-4" />
        <p>Sign in with Google</p>
      </Button>
      <div className="grid grid-cols-3 gap-x-2 xs:grid-cols-1 xs:gap-y-4">
        <Button
          wrapperClassName="c-filled-btn c-filled-btn--primary w-full"
          className="justify-center xs:justify-start"
          onClick={onGetTwitterAuth}
          block
        >
          <img src={twitterColorful} alt="" className="mr-4" />
          <p className="hidden xs:block">Sign in with Twitter</p>
        </Button>
        <Button
          wrapperClassName="c-filled-btn c-filled-btn--primary w-full"
          className="justify-center xs:justify-start"
          onClick={onGetLinkedinAuth}
          block
        >
          <img src={linkedinColorful} alt="" className="mr-4" />
          <p className="hidden xs:block">Sign in with Linkedin</p>
        </Button>
        <Button
          wrapperClassName="c-filled-btn c-filled-btn--primary w-full"
          className="justify-center xs:justify-start"
          onClick={onGetFacebookAuth}
          block
        >
          <img src={facebookColorful} alt="" className="mr-4" />
          <p className="hidden xs:block">Sign in with Facebook</p>
        </Button>
      </div>
    </div>
  );
}

SocialAuthButtons.propTypes = {
  wrapperClassName: PropTypes.string,
  onGetGoogleAuth: PropTypes.func,
  onGetFacebookAuth: PropTypes.func,
  onGetTwitterAuth: PropTypes.func,
  onGetLinkedinAuth: PropTypes.func,
};

SocialAuthButtons.defaultProps = {
  wrapperClassName: '',
  onGetGoogleAuth: () => {},
  onGetFacebookAuth: () => {},
  onGetTwitterAuth: () => {},
  onGetLinkedinAuth: () => {},
};

export default SocialAuthButtons;
