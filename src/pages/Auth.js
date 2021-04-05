import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import Cookie from 'js-cookie';
import { useQuery } from '../hooks/useQuery';
import Layout from '../layouts/MainLayout/MainLayout';

function Auth() {
  // eslint-disable-next-line no-unused-vars
  const [parsedQuery, query, setQuery] = useQuery();

  useEffect(() => {
    Cookie.set('token', parsedQuery.code);
  }, []);

  return (
    <Layout mainClassName="min-h-screen">
      <div className="">Auth Page</div>
      <div className="">code: {parsedQuery.code}</div>
    </Layout>
  );
}

Auth.propTypes = {
  //
};

export default Auth;
