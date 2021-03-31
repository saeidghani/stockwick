import React from 'react';
import { Link } from 'react-router-dom';
import facebook from '../../assets/icons/facebook.png';
import linkedin from '../../assets/icons/linkedin.png';
import twitter from '../../assets/icons/twitter.png';

function Footer() {
  return (
    <footer className="bg-primary pt-4 pb-12 sm:pb-4" style={{ height: 115 }}>
      <div className="flex flex-col items-center space-y-2">
        <div className="text-white opacity-50">socialize with us</div>
        <div className="flex space-x-4">
          <Link to="#">
            <img src={facebook} alt="" />
          </Link>
          <Link to="#">
            <img src={linkedin} alt="" />
          </Link>
          <Link to="#">
            <img src={twitter} alt="" />
          </Link>
        </div>
        <div className="text-white opacity-50">© stockwick inc.</div>
      </div>
    </footer>
  );
}

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
