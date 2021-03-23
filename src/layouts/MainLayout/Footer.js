import React from 'react';
import facebook from '../../assets/icons/facebook.png';
import linkedin from '../../assets/icons/linkedin.png';
import twitter from '../../assets/icons/twitter.png';

function Footer() {
  return (
    <footer className="bg-primary pt-4 pb-12 sm:pb-4">
      <div className="flex flex-col items-center space-y-2">
        <div className="text-white opacity-50">socialize with us</div>
        <div className="flex space-x-4">
          <img src={facebook} alt="" />
          <img src={linkedin} alt="" />
          <img src={twitter} alt="" />
        </div>
        <div className="text-white opacity-50">© stockwick inc.</div>
      </div>
    </footer>
  );
}

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
