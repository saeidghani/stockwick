import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '../hooks/useQuery';
import RouteMap from '../routes/RouteMap';
import Layout from '../layouts/MainLayout/MainLayout';
import EditProfileForm from '../components/common/EditProfileForm';

function EditProfile() {
  const history = useHistory();
  // eslint-disable-next-line no-unused-vars
  const [parsedQuery, query, setQuery] = useQuery();

  useEffect(() => {
    setQuery({ auth: true });
  }, []);

  return (
    <Layout mainClassName="container py-8">
      <div className="bg-blueGray grid grid-cols-12 pt-4 pb-24 md:px-6 xl:w-5/6 mx-auto">
        <EditProfileForm
          wrapperClassName="col-start-2 col-span-10 bg-white
                         pt-16 pb-20 px-6 md:px-16 lg:px-32"
          afterSave={() => history.push(RouteMap.profile.index)}
        />
      </div>
    </Layout>
  );
}

export default EditProfile;
