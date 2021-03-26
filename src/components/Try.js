import facebookIcon from '../assets/icons/facebook.svg';
import twitterIcon from '../assets/icons/twitter.svg';
import linkedinIcon from '../assets/icons/linkedin.svg';

<div className="flex space-x-2">
  <ShareTo text="select all" textClassName="sm:pl-0" />
  <ShareTo text="facebook">
    <img src={facebookIcon} alt="" />
  </ShareTo>
  <ShareTo text="twitter">
    <img src={twitterIcon} alt="" />
  </ShareTo>
  <ShareTo text="linkedin">
    <img src={linkedinIcon} alt="" />
  </ShareTo>
</div>;
