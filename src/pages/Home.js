import React from 'react';
import Layout from '../layouts/MainLayout/MainLayout';
import CategoriesSearch from '../components/common/CategoriesSearch';

export default function Home() {
  return (
    <Layout>
      <div
        className="min-h-screen bg-primary flex flex-col justify-center items-center space-y-4 px-2
                     sm:px-8 pb-12"
      >
        <div className="textLogo text-5xl sm:text-6xl md:text-7xl mb-10">stockwick</div>
        <div className="w-full grid grid-cols-12">
          <CategoriesSearch
            wrapperClassName="col-start-1 col-span-12 px-3 sm:col-start-2 sm:col-span-10
                              lg:col-start-3 lg:col-span-8 xl:col-start-4 xl:col-span-6 xl:px-6"
          />
        </div>
      </div>
    </Layout>
  );
}
