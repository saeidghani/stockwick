import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import Input from './Input';
import Button from './Button';
import Select from './Select';
// import TextArea from './TextArea';
import { choiceRules, daysRules } from '../constants/formRules';

const { Item, List, ErrorList } = Form;

function AddPoll({ wrapperClassName }) {
  const onFinish = (values) => {
    console.log('Received values of form:', values);
  };

  return (
    <div className={wrapperClassName}>
      <Form
        name="pollForm"
        onFinish={onFinish}
        className="relative w-full child-mb--sm"
        style={{ width: 720 }}
      >
        <Item validateTrigger={['onChange', 'onBlur']} rules={choiceRules} noStyle>
          <Input
            wrapperStyles={{ width: 650 }}
            wrapperClassName="c-input-border-none primary-placeholder--fade"
            placeholder="Ask a Question…"
          />
        </Item>
        <Item
          className="w-4/5"
          validateTrigger={['onChange', 'onBlur']}
          rules={choiceRules}
          noStyle
        >
          <Input
            wrapperClassName="c-round-filled-input primary-placeholder--fade"
            wrapperStyles={{ width: 650 }}
            placeholder="choice text"
          />
        </Item>
        <Item
          className="w-4/5"
          validateTrigger={['onChange', 'onBlur']}
          rules={choiceRules}
          noStyle
        >
          <Input
            wrapperClassName="c-round-filled-input primary-placeholder--fade"
            wrapperStyles={{ width: 650 }}
            placeholder="choice text"
          />
        </Item>
        <List
          name="names"
          className="flex"
          rules={[
            {
              validator: async (_, names) => {
                if (!names || names.length < 2) {
                  return Promise.reject(new Error('At least 2 choices'));
                }
              },
            },
          ]}
        >
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields.map((field) => (
                <Item className="relative" required={false} key={field.key}>
                  <Item
                    {...field}
                    className="w-4/5"
                    validateTrigger={['onChange', 'onBlur']}
                    rules={choiceRules}
                    noStyle
                  >
                    <Input
                      wrapperClassName="c-round-filled-input primary-placeholder--fade"
                      wrapperStyles={{ width: 650 }}
                      placeholder="choice text"
                    />
                  </Item>
                  {fields.length > 1 ? (
                    <MinusCircleOutlined
                      className="absolute top-5 -left-6 text-primary text-base"
                      onClick={() => remove(field.name)}
                    />
                  ) : null}
                </Item>
              ))}
              <Item className="absolute top-24 right-4 mt-2 ml-4">
                <Button
                  type="link"
                  onClick={() => add()}
                  icon={<PlusOutlined className="text-primary text-2xl" />}
                />
                <ErrorList errors={errors} />
              </Item>
            </>
          )}
        </List>
        <p className="text-primary text-base">Poll Length</p>
        <div className="grid grid-cols-3 gap-x-4" style={{ width: 650 }}>
          <Item
            className="relative c-round-filled-select-item"
            name="days"
            label="Days"
            rules={daysRules}
          >
            <Select
              wrapperClassName="c-round-filled-select"
              placeholder="select"
              onChange={() => {}}
              allowClear
              options={[{ value: 'male' }, { value: 'female' }, { value: 'other' }]}
            />
          </Item>
          <Item
            className="relative c-round-filled-select-item"
            name="hours"
            label="Hours"
            rules={daysRules}
          >
            <Select
              wrapperClassName="c-round-filled-select"
              placeholder="select"
              onChange={() => {}}
              allowClear
              options={[{ value: 'male' }, { value: 'female' }, { value: 'other' }]}
            />
          </Item>
          <Item
            className="relative c-round-filled-select-item"
            name="minutes"
            label="Minutes"
            rules={daysRules}
          >
            <Select
              wrapperClassName="c-round-filled-select"
              placeholder="select"
              onChange={() => {}}
              allowClear
              options={[{ value: 'male' }, { value: 'female' }, { value: 'other' }]}
            />
          </Item>
        </div>
      </Form>
    </div>
  );
}

AddPoll.propTypes = {
  wrapperClassName: PropTypes.string,
};

AddPoll.defaultProps = {
  wrapperClassName: '',
};

export default AddPoll;
