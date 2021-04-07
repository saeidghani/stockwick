import React from 'react';
import { Form, Input } from 'antd';
import PropTypes from 'prop-types';
import {
  emailRules,
  userNameRules,
  nameRules,
  bioRules,
  mobileRules,
} from '../../constants/formRules';
import googleColorfulIcon from '../../assets/icons/googleColorful.svg';
import Button from '../UI/Button';
import Avatar from '../UI/Avatar';

const { Item } = Form;

function EditProfileForm({ wrapperClassName, afterSave }) {
  const onFinish = (values) => {
    console.log('Success:', values);
    afterSave();
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
        <Button
          text="Save"
          htmlType="submit"
          wrapperClassName="block xs:hidden absolute top-2 right-1"
          textClassName="text-white px-1"
          type="link"
        />
        <div className="grid grid-cols-3">
          <Item className="col-start-2 justify-self-center flex flex-col items-center">
            <Avatar avatarClassName="w-26 h-26" />
            <div className="text-primary xs:text-secondary text-center mt-2">Edit Picture</div>
          </Item>
          <Item className="col-start-3 justify-self-end">
            <Button
              text="Save"
              htmlType="submit"
              wrapperClassName="c-secondary-btn hidden xs:block"
              textClassName="text-secondary px-1"
            />
          </Item>
        </div>

        <Item name="name" label="Name" rules={nameRules} className="c-primary-input">
          <Input className="text-primary" />
        </Item>

        <Item name="username" label="Username" rules={userNameRules} className="c-primary-input">
          <Input className="text-primary" />
        </Item>

        <Item name="bio" label="Bio" rules={bioRules} className="c-primary-input">
          <Input className="text-primary" />
        </Item>

        <Item name="email" label="Email" rules={emailRules} className="c-primary-input">
          <Input className="text-primary" />
        </Item>

        <Item name="mobile" label="Mobile" rules={mobileRules} className="c-primary-input">
          <Input className="text-primary" />
        </Item>
        <div className="flex items-center mt-6 mb-6">
          <img src={googleColorfulIcon} alt="" />
          <div className="boldPrimaryText text-sm ml-4">Logged in with Google</div>
        </div>
      </Form>
    </div>
  );
}

EditProfileForm.propTypes = {
  wrapperClassName: PropTypes.string,
  afterSave: PropTypes.func,
};

EditProfileForm.defaultProps = {
  wrapperClassName: '',
  afterSave: () => {},
};

export default EditProfileForm;
