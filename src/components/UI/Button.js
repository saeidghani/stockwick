/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import * as ICONS from '@ant-design/icons';
import { Button } from 'antd';

const _Button = ({
  type,
  size,
  block,
  onClick,
  children,
  ghost,
  loading,
  icon,
  iconPosition,
  shape,
  text,
  href,
  className,
  wrapperClassName,
  textClassName,
  iconClassName,
  justify,
  disabled,
  danger,
  htmlType,
}) => {
  const RICON = ICONS[icon];
  if (icon && typeof icon !== 'object' && typeof RICON === 'undefined' && !RICON) {
    console.warn(`icon name (${icon}) is not valid as an antd icon`);
  }

  return (
    <div className={wrapperClassName}>
      <Button
        disabled={disabled}
        className={`flex items-center justify-${justify} ${className}`}
        onClick={href ? () => {} : onClick}
        href={href}
        size={size}
        block={block}
        type={type}
        ghost={ghost}
        loading={loading}
        shape={shape}
        danger={danger}
        htmlType={htmlType}
      >
        {iconPosition === 'left' ? (
          icon && typeof icon === 'object' ? (
            icon
          ) : RICON ? (
            <RICON className={`${iconClassName} inline-flex`} />
          ) : null
        ) : null}
        {text ? <p className={`font-normal ${textClassName}`}>{text}</p> : children || null}
        {iconPosition !== 'left' ? (
          icon && typeof icon === 'object' ? (
            icon
          ) : RICON ? (
            <RICON className={`${iconClassName} inline-flex`} />
          ) : null
        ) : null}
      </Button>
    </div>
  );
};

_Button.propTypes = {
  type: PropTypes.string,
  size: PropTypes.oneOf(['large', 'middle', 'small']),
  block: PropTypes.bool,
  href: PropTypes.string,
  onClick: (props, propName) => {
    if (props.href && (!props[propName] || typeof props[propName] !== 'function')) {
      return new Error('Please provide an onClick function!');
    }
  },
  children: PropTypes.node,
  iconPosition: PropTypes.string,
  shape: PropTypes.string,
  icon: PropTypes.node,
  ghost: PropTypes.bool,
  loading: PropTypes.bool,
  text: PropTypes.string,
  className: PropTypes.string,
  wrapperClassName: PropTypes.string,
  textClassName: PropTypes.string,
  iconClassName: PropTypes.string,
  disabled: PropTypes.bool,
  danger: PropTypes.bool,
  htmlType: PropTypes.string,
  justify: PropTypes.string,
};

_Button.defaultProps = {
  type: 'primary',
  size: 'large',
  iconPosition: 'left',
  block: false,
  shape: '',
  icon: null,
  ghost: false,
  loading: false,
  className: '',
  wrapperClassName: '',
  textClassName: '',
  iconClassName: '',
  text: '',
  children: '',
  href: undefined,
  disabled: false,
  danger: false,
  htmlType: 'button',
  justify: 'center',
  // eslint-disable-next-line no-alert
  onClick: () => console.log('Coming soon'),
};

export default _Button;
