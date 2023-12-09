import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import Link from 'next/link';
import { getBanners } from '@/content/banners';
import Image from 'next/image';
import { isMobile } from 'react-device-detect';
const HomeSlider = () => {
  const banners = getBanners;
  return (
    <div className="col-60 col-lg-9">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        className={'top-slide'}
        // centeredSlides={true}
        roundLengths={true}
        autoHeight={true}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
      >
        <div className="swiper-wrapper">
          {banners &&
            banners.map(banner => {
              return (
                <SwiperSlide key={banner.id}>
                  <Link href={banner.link}>
                    <Image
                      src={banner?.img}
                      alt={banner.name}
                      fill
                      className={'img-fluid'}
                      sizes="(max-width: 768px) 100%, (max-width: 1200px) 50%, 33%"
                      priority
                    />
                  </Link>
                </SwiperSlide>
              );
            })}
        </div>
        <div className="swiper-button-next" />
        <div className="swiper-button-prev" />
        <div className="swiper-pagination" />
      </Swiper>
    </div>
  );
};

export default HomeSlider;
