"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css";

import Image from "next/image";


const HeroCarousel = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={false}
      autoplay={{
        delay: 2000,
        disableOnInteraction: true,
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination]}

      className="hero-carousel w-full h-full"
    >
      {/* Existing Slide 1 */}
      <SwiperSlide className="w-full h-full">
        <div className="flex items-center justify-between w-full h-full pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
          <div className="max-w-[394px] py-10 sm:py-15 lg:py-24.5 pl-4 sm:pl-7.5 lg:pl-12.5">
            <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
              <span className="block font-semibold text-heading-3 sm:text-heading-1 text-blue">
                30%
              </span>
              <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
                Sale
                <br />
                Off
              </span>
            </div>

            <h1 className="font-semibold text-dark text-xl sm:text-3xl mb-3">
              <a href="#">True Wireless Noise Cancelling Headphone</a>
            </h1>

            <p>

              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at ipsum at risus euismod lobortis in
            </p>

            <a
              href="#"
              className="inline-flex font-medium text-white text-custom-sm rounded-md bg-blue py-3 px-9 ease-out duration-200 hover:bg-blue-dark mt-10"
            >
              Shop Now
            </a>
          </div>

          <div className="flex-1 flex justify-end">
            <Image
              src="/images/hero/hero-01.png"
              alt="headphone"
              width={351}
              height={358}
              className="object-cover"
            />
          </div>
        </div>
      </SwiperSlide>

      {/* Existing Slide 2 */}
      <SwiperSlide className="w-full h-full">
        <div className="flex items-center justify-between w-full h-full pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
          <div className="max-w-[394px] py-10 sm:py-15 lg:py-26 pl-4 sm:pl-7.5 lg:pl-12.5">
            <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
              <span className="block font-semibold text-heading-3 sm:text-heading-1 text-blue">
                30%
              </span>
              <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
                Sale
                <br />
                Off
              </span>
            </div>

            <h1 className="font-semibold text-dark text-xl sm:text-3xl mb-3">
              <a href="#">True Wireless Noise Cancelling Headphone</a>
            </h1>

            <p>
              Lorem ipsum dolor sit, consectetur elit nunc suscipit non ipsum
              nec suscipit.
            </p>

            <a
              href="#"
              className="inline-flex font-medium text-white text-custom-sm rounded-md bg-blue py-3 px-9 ease-out duration-200 hover:bg-blue-dark mt-10"
            >
              Shop Now
            </a>
          </div>

          <div className="flex-1 flex justify-end">
            <Image
              src="/images/hero/hero-01.png"
              alt="headphone"
              width={351}
              height={358} 
              className="object-cover"
            />
          </div>
        </div>
      </SwiperSlide>

      {/* New Slide 3 - iPhone 14 Plus & 14 Pro Max */}
      <SwiperSlide className="w-full h-full">
        <div className="flex items-center justify-between w-full h-full pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
          <div className="max-w-[394px] py-10 sm:py-15 lg:py-24.5 pl-4 sm:pl-7.5 lg:pl-12.5">
            <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
              <span className="block font-semibold text-heading-3 sm:text-heading-1 text-blue">
                30%
              </span>
              <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
                Sale
                <br />
                Off
              </span>
            </div>

            <h1 className="font-semibold text-dark text-xl sm:text-3xl mb-3">
              <a href="#">iPhone 14 Plus & 14 Pro Max</a>
            </h1>

            <p>
              Limited time offer. Get the latest iPhone at a discounted price.
            </p>

            <a
              href="#"
              className="inline-flex font-medium text-white text-custom-sm rounded-md bg-blue py-3 px-9 ease-out duration-200 hover:bg-blue-dark mt-10"
            >
              Shop Now
            </a>
          </div>

          <div className="flex-1 flex justify-end">
            <Image
              src="/images/hero/hero-02.png"
              alt="iPhone"
              width={351}
              height={358}
              className="object-cover"
            />
          </div>
        </div>
      </SwiperSlide>

      {/* New Slide 4 - Wireless Headphone */}
      <SwiperSlide className="w-full h-full">
        <div className="flex items-center justify-between w-full h-full pt-6 sm:pt-0 flex-col-reverse sm:flex-row">
          <div className="max-w-[394px] py-10 sm:py-15 lg:py-24.5 pl-4 sm:pl-7.5 lg:pl-12.5">
            <div className="flex items-center gap-4 mb-7.5 sm:mb-10">
              <span className="block font-semibold text-heading-3 sm:text-heading-1 text-blue">
                30%
              </span>
              <span className="block text-dark text-sm sm:text-custom-1 sm:leading-[24px]">
                Sale
                <br />
                Off
              </span>
            </div>

            <h1 className="font-semibold text-dark text-xl sm:text-3xl mb-3">
              <a href="#">Wireless Headphone</a>
            </h1>

            <p>
              Experience high-quality sound with our latest wireless headphones.
            </p>

            <a
              href="#"
              className="inline-flex font-medium text-white text-custom-sm rounded-md bg-blue py-3 px-9 ease-out duration-200 hover:bg-blue-dark mt-10"
            >
              Shop Now
            </a>
          </div>

          <div className="flex-1 flex justify-end">
            <Image
              src="/images/hero/hero-01.png"
              alt="Wireless Headphone"
              width={351}
              height={358}
              className="object-cover"
            />
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousel;
