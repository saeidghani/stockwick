import React, { useEffect } from 'react';
import Layout from '../layouts/MainLayout/MainLayout';
import { useQuery } from '../hooks/useQuery';

function NotFound() {
  // eslint-disable-next-line no-unused-vars
  const [parsedQuery, query, setQuery] = useQuery();

  useEffect(() => {
    setQuery({ auth: true });
  }, []);

  return (
    <Layout>
      <div className="min-h-screen flex justify-center">
        <h1>Not Found</h1>
      </div>
    </Layout>
  );
}

export default NotFound;
//
