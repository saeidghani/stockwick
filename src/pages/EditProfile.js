import React, { useEffect } from 'react';
import Layout from '../layouts/MainLayout/MainLayout';
import EditProfileForm from '../components/common/EditProfileForm';
import { useQuery } from '../hooks/useQuery';

function EditProfile() {
  // eslint-disable-next-line no-unused-vars
  const [parsedQuery, query, setQuery] = useQuery();

  useEffect(() => {
    setQuery({ auth: true });
  }, []);

  return (
    <Layout mainClassName="container pt-8">
      <div className="bg-blueGray grid grid-cols-12 pt-4 pb-24">
        <EditProfileForm
          wrapperClassName="col-start-2 col-span-10 bg-white
                         pt-16 pb-20 px-10 sm:px-16 md:px-24"
        />
      </div>
    </Layout>
  );
}

export default EditProfile;
