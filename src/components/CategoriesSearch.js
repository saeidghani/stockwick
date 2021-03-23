/* eslint-disable */
import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import AutoComplete from './AutoComplete';
import Button from './Button';
import { useQuery } from '../hooks/useQuery';
import searchColorfulIcon from '../assets/icons/searchColorful.svg';

const { Item } = Menu;

const menu = (
  <Menu>
    <Item key="0">
      <a href="https://www.antgroup.com">1st menu item</a>
    </Item>
    <Item key="1">
      <a href="https://www.aliyun.com">2nd menu item</a>
    </Item>
  </Menu>
);

const CategoriesMenu = () => (
  <div className="c-dropdown-hover-less bg-fadePrimary h-10 text-secondary flex items-center px-1 h-14">
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
);

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

  return (
    <div className="relative flex items-center" style={{ width: 600 }}>
      <CategoriesMenu />
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
