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

function AddPoll({ wrapperClassName, pollPlusClassName, pollWidth }) {
  return (
    <div className={wrapperClassName}>
      <div className="relative child-mb--sm">
        <Item
          name="question"
          validateTrigger={['onChange', 'onBlur']}
          rules={questionRules}
          className={`c-input-border-none primary-placeholder--fade ${pollWidth || 'w-3/4'}`}
        >
          <Input placeholder="Ask a Question…" />
        </Item>
        <Item
          name="choice1"
          validateTrigger={['onChange', 'onBlur']}
          rules={choiceRules}
          className={`c-round-filled-input primary-placeholder--fade ${pollWidth || 'w-3/4'}`}
        >
          <Input placeholder="choice text" />
        </Item>
        <Item
          name="choice2"
          validateTrigger={['onChange', 'onBlur']}
          rules={choiceRules}
          className={`c-round-filled-input primary-placeholder--fade ${pollWidth || 'w-3/4'}`}
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
                <Item
                  className={`relative ${pollWidth || 'w-3/4'}`}
                  required={false}
                  key={field.key}
                >
                  <Item
                    {...field}
                    validateTrigger={['onChange', 'onBlur']}
                    rules={choiceRules}
                    className="c-round-filled-input primary-placeholder--fade"
                  >
                    <Input placeholder="choice text" />
                  </Item>
                  <MinusCircleOutlined
                    className="absolute top-5 -left-6 text-primary text-base"
                    onClick={() => remove(field.name)}
                  />
                </Item>
              ))}
              <Item className={pollPlusClassName || 'absolute top-28 right-20'}>
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
        <div className={pollWidth || 'w-3/4'}>
          <p className="text-primary text-base mb-2">Poll Length</p>
          <div className="grid grid-cols-3 gap-x-4">
            <Item
              className="relative c-round-filled-select-item c-round-filled-select mb-0"
              name="days"
              label="Days"
              rules={daysRules}
            >
              <Select>
                <Option value={1}>
                  <span className="text-primary">1</span>
                </Option>
                <Option value={2}>
                  <span className="text-primary">2</span>
                </Option>
                <Option value={3}>
                  <span className="text-primary">3</span>
                </Option>
                <Option value={4}>
                  <span className="text-primary">4</span>
                </Option>
              </Select>
            </Item>
            <Item
              className="relative c-round-filled-select-item c-round-filled-select mb-0"
              name="hours"
              label="Hours"
              rules={hoursRules}
            >
              <Select>
                <Option value={1}>
                  <span className="text-primary">1</span>
                </Option>
                <Option value={2}>
                  <span className="text-primary">2</span>
                </Option>
                <Option value={3}>
                  <span className="text-primary">3</span>
                </Option>
                <Option value={4}>
                  <span className="text-primary">4</span>
                </Option>
              </Select>
            </Item>
            <Item
              className="relative c-round-filled-select-item c-round-filled-select mb-0"
              name="minutes"
              label="Minutes"
              rules={minutesRules}
            >
              <Select>
                <Option value={1}>
                  <span className="text-primary">1</span>
                </Option>
                <Option value={2}>
                  <span className="text-primary">2</span>
                </Option>
                <Option value={3}>
                  <span className="text-primary">3</span>
                </Option>
                <Option value={4}>
                  <span className="text-primary">4</span>
                </Option>
              </Select>
            </Item>
          </div>
        </div>
      </div>
    </div>
  );
}

AddPoll.propTypes = {
  wrapperClassName: PropTypes.string,
  pollPlusClassName: PropTypes.string,
  displayAvatar: PropTypes.bool,
  pollWidth: PropTypes.string,
};

AddPoll.defaultProps = {
  wrapperClassName: '',
  pollPlusClassName: '',
  displayAvatar: false,
  pollWidth: '',
};

export default AddPoll;
