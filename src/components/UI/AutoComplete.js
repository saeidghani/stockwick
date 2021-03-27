import React from 'react';
import PropTypes from 'prop-types';
import { AutoComplete } from 'antd';

const { Option } = AutoComplete;

const _AutoComplete = ({
  wrapperClassName,
  className,
  onSelect,
  options,
  name,
  size,
  placeholder,
  onChange,
  value,
  errorMessage,
  loading,
  disabled,
}) => (
  <div name={name} className={`${wrapperClassName}`}>
    <AutoComplete
      disabled={disabled}
      loading={loading}
      placeholder={placeholder}
      id={name}
      value={value}
      className={`c-autocomplete text-12px w-full ${className}`}
      dropdownClassName=""
      onSelect={(_, val) => {
        const selectedItem = options.find(({ id }) => id * 1 === val.key * 1);

        onSelect(selectedItem);
      }}
      onChange={(txt, selectedItem) => onChange(selectedItem.children || txt)}
      size={size}
    >
      {options.map(({ id, label }) => (
        <Option key={id}>{label}</Option>
      ))}
    </AutoComplete>

    {errorMessage && <p className="text-red-500">{errorMessage}</p>}
  </div>
);

_AutoComplete.propTypes = {
  wrapperClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      label: PropTypes.string,
    }),
  ).isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
};

_AutoComplete.defaultProps = {
  wrapperClassName: '',
  className: '',
  value: '',
  placeholder: '',
  name: '',
  size: 'large',
  errorMessage: '',
  loading: false,
  disabled: false,
};

export default _AutoComplete;
