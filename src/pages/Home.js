import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import Layout from '../layouts/MainLayout';

export default function App() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center space-y-10">
        <h1>The count is {count}</h1>
        <Button onClick={() => dispatch.count.increment(1)}>increment</Button>
        <Button onClick={() => dispatch.count.incrementAsync(1)}>incrementAsync</Button>
      </div>
    </Layout>
  );
}
