import React from 'react';
import { Form, Input } from 'antd';
import PropTypes from 'prop-types';
import {
  passwordRules,
  emailRules,
  userNameRules,
  nameRules,
  bioRules,
  mobileRules,
} from '../constants/formRules';
import Button from './Button';
import Avatar from './Avatar';

const { Item } = Form;

function EditProfileForm({ wrapperClassName }) {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={wrapperClassName}>
      <Form
        name="editProfile"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="c-edit-profile-form"
      >
        <div className="grid grid-cols-3">
          <Item className="col-start-2 justify-self-center flex flex-col">
            <Avatar />
            <div className="text-secondary mt-2">Edit Picture</div>
          </Item>
          <Item className="col-start-3 justify-self-end">
            <Button
              text="Save"
              htmlType="submit"
              wrapperClassName="c-secondary-btn"
              textClassName="text-secondary"
            />
          </Item>
        </div>

        <Item name="name" label="Name" rules={nameRules} className="c-primary-input">
          <Input placeholder="Name" className="text-primary" />
        </Item>

        <Item name="username" label="Username" rules={userNameRules} className="c-primary-input">
          <Input placeholder="Username" className="text-primary" />
        </Item>

        <Item name="bio" label="Bio" rules={bioRules} className="c-primary-input">
          <Input placeholder="Bio" className="text-primary" />
        </Item>

        <Item name="email" label="Email" rules={emailRules} className="c-primary-input">
          <Input placeholder="Email*" className="text-primary" />
        </Item>

        <Item name="mobile" label="Mobile" rules={mobileRules} className="c-primary-input">
          <Input placeholder="Mobile" className="text-primary" />
        </Item>

        <div className="text-primary text-center mt-16 mb-6">Change Password</div>

        <Item
          name="password"
          label="Your Current Password"
          rules={passwordRules}
          className="c-primary-password-input c-primary-password-input--primary-input"
        >
          <Input.Password placeholder="Your Current Password" className="text-primary" />
        </Item>

        <Item
          name="password"
          label="New Password"
          rules={passwordRules}
          className="c-primary-password-input c-primary-password-input--primary-input"
        >
          <Input.Password placeholder="New Password" className="text-primary" />
        </Item>

        <Item
          name="password"
          label="Repeat New Password"
          rules={passwordRules}
          className="c-primary-password-input c-primary-password-input--primary-input"
        >
          <Input.Password placeholder="Repeat New Password" className="text-primary" />
        </Item>
      </Form>
    </div>
  );
}

EditProfileForm.propTypes = {
  wrapperClassName: PropTypes.string,
};

EditProfileForm.defaultProps = {
  wrapperClassName: '',
};

export default EditProfileForm;
