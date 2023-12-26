import BaseLayout from '@/layout/baseLayout';

import withAuth from '@/hocs/withAuth';

interface ProfilePageProps {
  user: any;
  loading: boolean;
}

const ProfilePage: React.FC = (user, loading) => {
  return (
    <BaseLayout>
      <div className="container">
        <h1>Profile Page</h1>
      </div>
    </BaseLayout>
  );
};

export default withAuth(ProfilePage);
