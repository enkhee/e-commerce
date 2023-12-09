import BaseLayout from '@/layout/baseLayout';

import HomeSlider from '@/components/homeSlider';
import Image from 'next/image';
import Nested from '@/components/nested';

export default function Home() {
  return (
    <BaseLayout>
      home
      <nav>
        <div className="container">
          <div className="top-categories">
            <div className="row">
              <div className="col-20 col-lg-3">
                <Nested />
              </div>
            </div>
            <HomeSlider />
            <Image
              src={
                'https://mgl.gogo.mn/newsn/images/ck/2023/12/07/Picture6-132744-828793937.jpeg'
              }
              width={500}
              height={500}
              alt={'alt'}
              priority={true}
              className={'img-fluid'}
            />
          </div>
        </div>
      </nav>
    </BaseLayout>
  );
}
