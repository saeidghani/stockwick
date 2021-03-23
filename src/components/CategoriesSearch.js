/* eslint-disable */
import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { Menu, Dropdown } from 'antd';
// import { DownOutlined } from '@ant-design/icons';
import searchColorfulIcon from '../assets/icons/searchColorful.svg';
import AutoComplete from './AutoComplete';
// import Button from './Button';
import Select from './Select';
import { useQuery } from '../hooks/useQuery';

/*const { Item } = Menu;

const menu = (
  <Menu>
    <Item key="0">
      <div className="text-secondary pb-4 px-4">stocks</div>
    </Item>
    <Item key="1">
      <div className="text-secondary pb-2 px-4">crypto</div>
    </Item>
    <Item key="2">
      <div className="text-secondary pb-2 px-4">people</div>
    </Item>
    <Item key="3">
      <div className="text-secondary pb-2 px-4">index</div>
    </Item>
  </Menu>
);

const CategoriesMenu = () => (
  <div className="c-dropdown bg-fadePrimary text-secondary flex items-center px-2 h-14 w-32">
    <Dropdown overlay={menu} trigger={['click']}>
      <Button
        text="stocks"
        type="link"
        icon="DownOutlined"
        iconPosition="right"
        textClassName="mr-3 text-secondary"
        iconClassName="pt-1 text-secondary"
        onClick={(e) => e.preventDefault()}
      />
    </Dropdown>
  </div>
);*/

const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});

function CategoriesSearch() {
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
    <div className="relative flex items-center" style={{ width: 600 }}>
      <div className="c-select">
        <Select
          onChange={() => {}}
          options={categories}
          wrapperClassName="h-14 w-40"
          dropdownClassName="bg-fadePrimary2 relative bottom-4"
          className="text-secondary text-base"
          optionClassName="text-secondary"
          defaultValue={1}
        />
      </div>
      <AutoComplete
        options={
          options?.length > 0
            ? options.map(({ value }, index) => ({ label: value, value, id: index }))
            : [{ label: 'no result found' }]
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
  );
}

CategoriesSearch.propTypes = {
  //
};

export default CategoriesSearch;
