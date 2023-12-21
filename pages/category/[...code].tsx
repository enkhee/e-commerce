import BaseLayout from '@/layout/baseLayout';
import { useRouter } from 'next/router';

const Category = () => {
  const router = useRouter();
  const { code, uls } = router.query as any;
  console.log('code', code);
  console.log('uls', uls);
  return (
    <BaseLayout>
      breancrumb:
      <>
        {code &&
          code?.map((item: any, index: number) => {
            return <span key={index}>{item},</span>;
          })}
      </>
      category huudas
    </BaseLayout>
  );
};

export default Category;
