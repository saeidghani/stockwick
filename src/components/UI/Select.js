/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

const { Option } = Select;

const _Dropdown = ({
  loading,
  onChange,
  value,
  labelInValue,
  wrapperClassName,
  className,
  dropdownClassName,
  optionClassName,
  placeholder,
  showSearch,
  size,
  type,
  defaultValue,
  options,
  ...props
}) => (
  <div className={wrapperClassName}>
    <Select
      loading={loading}
      showSearch={showSearch}
      className={`c-arrow-color text-xs ${className} ${type}-dropdown w-full`}
      dropdownClassName={dropdownClassName}
      onChange={onChange}
      placeholder={placeholder}
      size={size}
      labelInValue={labelInValue}
      value={value || undefined}
      defaultValue={defaultValue || undefined}
      dropdownAlign={{ offset: [0, -2] }}
      {...props}
    >
      {options?.length > 0
        ? options.map((el, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Option key={i} value={el.value}>
              <span className={optionClassName}>{el.title}</span>
            </Option>
          ))
        : null}
    </Select>
  </div>
);

_Dropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  wrapperClassName: PropTypes.string,
  className: PropTypes.string,
  optionClassName: PropTypes.string,
  dropdownClassName: PropTypes.string,
  placeholder: PropTypes.string,
  showSearch: PropTypes.bool,
  size: PropTypes.string,
  type: PropTypes.string,
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  labelInValue: PropTypes.bool,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
      title: PropTypes.string,
    }),
  ).isRequired,
};

_Dropdown.defaultProps = {
  loading: false,
  wrapperClassName: '',
  className: '',
  dropdownClassName: '',
  optionClassName: '',
  placeholder: '',
  showSearch: true,
  size: 'large',
  type: '',
  defaultValue: '',
  value: '',
  labelInValue: false,
};

export default _Dropdown;
