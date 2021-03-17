import React from 'react';
import Layout from '../layouts/MainLayout/MainLayout';

export default function HomeAuth() {
  return (
    <Layout isAuth>
      <div className="bg-primaryColor flex flex-col items-center space-y-4 p-8 min-h-screen" />
    </Layout>
  );
}
