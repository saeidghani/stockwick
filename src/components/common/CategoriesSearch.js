import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import searchColorfulIcon from '../../assets/icons/searchColorful.svg';
import AutoComplete from '../UI/AutoComplete';
import Select from '../UI/Select';
import { useQuery } from '../../hooks/useQuery';
import RouteMap from '../../routes/RouteMap';
import arrowDownIcon from '../../assets/icons/arrowDown.svg';

const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});

function CategoriesSearch({
  wrapperClassName,
  selectWrapperClassName,
  autoCompleteClassName,
  height,
}) {
  const [options, setOptions] = useState([]);
  const [parsedQuery, query, setQuery] = useQuery();
  const { qs } = parsedQuery || {};

  const history = useHistory();

  useEffect(() => {
    if (qs) {
      setOptions([mockVal(qs), mockVal(qs, 2), mockVal(qs, 3)]);
    }
  }, [query, qs]);

  const onSelect = (data) => {
    if (parsedQuery?.categoryTitle === 'stocks') {
      history.push(RouteMap.stock.view(1));
    } else if (parsedQuery?.categoryTitle === 'crypto') {
      history.push(`${RouteMap.stock.view(1)}?isCrypto=true`);
    } else if (parsedQuery?.categoryTitle === 'people') {
      history.push(`${RouteMap.profile.index}?othersProfile=true`);
    }
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
          onChange={(val) => {
            const categoryTitle = categories?.find((c) => c?.value === val)?.title;
            setQuery({ categoryTitle });
          }}
          options={categories}
          wrapperClassName={`${height || 'h-14'} ${selectWrapperClassName || 'w-28 md:w-32'}`}
          dropdownClassName="bg-fadePrimary2 relative bottom-4"
          className="text-secondary text-base"
          optionClassName="text-secondary"
          defaultValue={1}
          suffixIcon={<img className="mt-1" src={arrowDownIcon} alt="" />}
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
          className={`${height || 'h-14'} ${autoCompleteClassName}`}
        />
        <img src={searchColorfulIcon} className="absolute top-4 right-4 w-6" alt="" />
      </div>
    </div>
  );
}

CategoriesSearch.propTypes = {
  wrapperClassName: PropTypes.string,
  selectWrapperClassName: PropTypes.string,
  autoCompleteClassName: PropTypes.string,
  height: PropTypes.string,
};

CategoriesSearch.defaultProps = {
  wrapperClassName: '',
  selectWrapperClassName: '',
  autoCompleteClassName: '',
  height: 'h-14',
};

export default CategoriesSearch;
