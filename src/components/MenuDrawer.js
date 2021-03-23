import React, { useState } from 'react';
import { Drawer } from 'antd';
import Button from './Button';

function MenuDrawer() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="link" onClick={showDrawer} icon="MenuOutlined" iconClassName="text-white" />
      <Drawer
        title={<span className="textLogo text-center">stockwick</span>}
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <Button
          text="Login"
          type="link"
          wrapperClassName="flex justify-center mb-6"
          textClassName="text-white"
          onClick={() => {}}
        />
        <Button
          text="Register"
          type="link"
          wrapperClassName="flex justify-center mb-6"
          textClassName="text-white"
          onClick={() => {}}
        />
        <Button
          text="Change Time Zone"
          type="link"
          wrapperClassName="flex justify-center mb-6"
          textClassName="text-white"
          onClick={() => {}}
        />
        <Button
          text="Change Market"
          type="link"
          wrapperClassName="flex justify-center mb-6"
          textClassName="text-white"
          onClick={() => {}}
        />
      </Drawer>
    </>
  );
}

export default MenuDrawer;
