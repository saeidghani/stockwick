import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';
import AddPost from './AddPost';
import StockWall from './StockWall';

function StockWallForm({ wrapperClassName, maxHeight, displayChart }) {
  const [form] = Form.useForm();
  console.log(displayChart);

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={wrapperClassName}>
      <Form
        name="addPost"
        initialValues={{
          choice1: '',
          choice2: '',
          days: '',
          extraChoices: '',
          hours: '',
          minutes: '',
          question: '',
          text: '',
          uploadGif: '',
          uploadImage: '',
          uploadVideo: '',
          remember: true,
        }}
        form={form}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className="h-full"
      >
        <AddPost
          contentClassName="flex-col sm:items-start"
          postBtnClassName="self-end"
          uploadBtnClassName="bg-white w-full border border-solid border-itemBorder"
          placeholder="#stonksgame #strong, post something…"
          displayAvatar
        >
          <StockWall displayChart={displayChart} maxHeight={maxHeight} comments={[1, 2, 3]} />
        </AddPost>
      </Form>
    </div>
  );
}

StockWallForm.propTypes = {
  wrapperClassName: PropTypes.string,
  displayChart: PropTypes.bool,
  maxHeight: PropTypes.number,
};

StockWallForm.defaultProps = {
  wrapperClassName: '',
  displayChart: false,
  maxHeight: null,
};

export default StockWallForm;
