/*eslint-disable*/
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Select } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import Button from '../UI/Button';
import {
  choiceRules,
  daysRules,
  hoursRules,
  minutesRules,
  questionRules,
  testRules,
} from '../../constants/formRules';

const { Item, List, ErrorList } = Form;
const { Option } = Select;

function AddPoll({ wrapperClassName }) {
  return (
    <div className={wrapperClassName}>
      <div name="pollForm" className="relative w-full child-mb--sm" style={{ width: 720 }}>
        <Item
          name="question"
          validateTrigger={['onChange', 'onBlur']}
          rules={questionRules}
          className="c-input-border-none primary-placeholder--fade"
          style={{ width: 650 }}
        >
          <Input placeholder="Ask a Question…" />
        </Item>
        <Item
          name="choice1"
          validateTrigger={['onChange', 'onBlur']}
          rules={choiceRules}
          className="w-4/5 c-round-filled-input primary-placeholder--fade"
          style={{ width: 650 }}
        >
          <Input placeholder="choice text" />
        </Item>
        <Item
          name="choice2"
          validateTrigger={['onChange', 'onBlur']}
          rules={choiceRules}
          className="w-4/5 c-round-filled-input primary-placeholder--fade"
          style={{ width: 650 }}
        >
          <Input placeholder="choice text" />
        </Item>
        <List
          name="extraChoices"
          className="flex"
          rules={
            [
              /*{
              validator: async (_, extraChoices) => {
                if (!extraChoices || extraChoices.length < 2) {
                  return Promise.reject(new Error('At least 2 choices'));
                }
              },
            },*/
            ]
          }
        >
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields.map((field) => (
                <Item className="relative" required={false} key={field.key}>
                  <Item
                    {...field}
                    validateTrigger={['onChange', 'onBlur']}
                    rules={choiceRules}
                    className="w-4/5 c-round-filled-input primary-placeholder--fade"
                    style={{ width: 650 }}
                  >
                    <Input placeholder="choice text" />
                  </Item>
                  <MinusCircleOutlined
                    className="absolute top-5 -left-6 text-primary text-base"
                    onClick={() => remove(field.name)}
                  />
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
            className="relative c-round-filled-select-item c-round-filled-select mb-0"
            name="days"
            label="Days"
            rules={daysRules}
          >
            <Select>
              <Option value={1}>1</Option>
              <Option value={2}>2</Option>
              <Option value={3}>3</Option>
              <Option value={4}>4</Option>
            </Select>
          </Item>
          <Item
            className="relative c-round-filled-select-item c-round-filled-select mb-0"
            name="hours"
            label="Hours"
            rules={hoursRules}
          >
            <Select>
              <Option value={1}>1</Option>
              <Option value={2}>2</Option>
              <Option value={3}>3</Option>
              <Option value={4}>4</Option>
            </Select>
          </Item>
          <Item
            className="relative c-round-filled-select-item c-round-filled-select mb-0"
            name="minutes"
            label="Minutes"
            rules={minutesRules}
          >
            <Select>
              <Option value={1}>1</Option>
              <Option value={2}>2</Option>
              <Option value={3}>3</Option>
              <Option value={4}>4</Option>
            </Select>
          </Item>
        </div>
      </div>
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
