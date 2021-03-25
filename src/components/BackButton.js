import React from 'react';
import PropTypes from 'prop-types';
import { LeftOutlined } from '@ant-design/icons';
import Button from './Button';

function BackButton({ onClick, wrapperClassName, iconClassName, textClassName }) {
  return (
    <div className={wrapperClassName}>
      <Button
        type="link"
        wrapperClassName="cursor-pointer flex items-center"
        className="pl-0"
        onClick={onClick}
      >
        <LeftOutlined className={iconClassName || 'text-primary text-base mr-2'} />
        <div className={textClassName || 'text-primary text-base pt-0.5'}>BACK</div>
      </Button>
    </div>
  );
}

BackButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  iconClassName: PropTypes.string,
  textClassName: PropTypes.string,
};

BackButton.defaultProps = {
  iconClassName: '',
  textClassName: '',
};

export default BackButton;
