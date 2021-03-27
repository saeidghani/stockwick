/* eslint-disable */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import searchColorfulIcon from '../../assets/icons/searchColorful.svg';
import AutoComplete from '../UI/AutoComplete';
import Select from '../UI/Select';
import { useQuery } from '../../hooks/useQuery';

const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});

function CategoriesSearch({ wrapperClassName }) {
  const [options, setOptions] = useState([]);
  const [parsedQuery, query, setQuery] = useQuery();
  const { qs } = parsedQuery || {};

  useEffect(() => {
    if (qs) {
      setOptions([mockVal(qs), mockVal(qs, 2), mockVal(qs, 3)]);
    }
  }, [query, qs]);

  const onSelect = (data) => {
    console.log('onSelect', data);
  };

  const categories = [
    { value: 1, title: 'stocks' },
    { value: 2, title: 'crypto' },
    { value: 3, title: 'people' },
    { value: 4, title: 'index' },
  ];

  return (
    <div className={`flex items-center w-full ${wrapperClassName}`}>
      <div className="c-select">
        <Select
          onChange={() => {}}
          options={categories}
          wrapperClassName="h-14 w-20 md:w-32"
          dropdownClassName="bg-fadePrimary2 relative bottom-4"
          className="text-secondary text-base"
          optionClassName="text-secondary"
          defaultValue={1}
        />
      </div>
      <div className="relative w-full">
        <AutoComplete
          options={
            options?.length > 0
              ? options.map(({ value }, index) => ({ label: value, value, id: index }))
              : [{ label: 'no result found', id: 0 }]
          }
          onChange={(text) => {
            setQuery({ qs: text });
          }}
          onSelect={onSelect}
          value={qs}
          placeholder="Start Typing"
          wrapperClassName="w-full"
          className="h-14"
        />
        <img src={searchColorfulIcon} className="absolute top-4 right-4 w-6" alt="" />
      </div>
    </div>
  );
}

CategoriesSearch.propTypes = {
  wrapperClassName: PropTypes.string,
};

CategoriesSearch.defaultProps = {
  wrapperClassName: '',
};

export default CategoriesSearch;
