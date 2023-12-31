import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { companies, funFact } from "../utils/constant";
import { FunFactCard } from "../components/common";
import {Galleries} from "../components/sections"
import quotes from "../images/about/double_quotes.svg";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const AboutPage = () => {
  return (
    <>
      <section className="w-9/12 mx-auto py-20 max-w-[1440px]">
        <div className="grid grid-cols-12 gap-28">
          <div className="col-span-6 flex flex-col justify-center">
            <h1 className="display-01 text-grey-100 mb-4">2007-2021</h1>
            <h2 className="heading-01 text-grey-900 mb-8">We share knowledge with the world</h2>
            <p className="body-xxl-400 text-grey-600">Discover a new era of learning with our innovative Learning Management System. Tailored to your needs, it's the key to limitless knowledge and growth.</p>
          </div>
          <div className="col-span-6">
            <StaticImage
              src="../images/about/about-main.png"
              alt="We share knowledge with the world"
              loading="eager"
              placeholder="none"
            />
          </div>
        </div>
      </section>

      <hr className="shadow-[0_1px_0_0_#E9EAF0_inset]" />

      {/* trusted companies */}
      <section className="w-9/12 mx-auto py-20 max-w-[1440px]">
        <div className="flex flex-col gap-20">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-4 flex flex-col justify-center">
              <h2 className="heading-03 text-grey-900 mb-5">We Just keep growing with 6.3k Companies</h2>
              <p className="body-lg-400 text-grey-600">Nullam egestas tellus at enim ornare tristique. Class aptent taciti sociosqu ad litora torquent</p>
            </div>
            <div className="col-span-8">
              <div className="grid grid-cols-12 gap-6">
                {companies.map((company, idx) => {
                  return (
                    <div key={idx} className="col-span-3">
                      <img
                        loading="lazy"
                        src={company.url}
                        alt={company.alt}
                      />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-10">
              {funFact.map((item, idx) => {
                return (
                  <div key={idx} className="col-span-2">
                    <FunFactCard
                      fact={item}
                    />
                  </div>
                )
              })}
          </div>
        </div>
      </section>

      {/* our mission */}
      <section className="bg-primary-100">
        <div className="w-9/12 mx-auto max-w-[1440px]">
          <div className="grid grid-cols-12 gap-20">
            <div className="col-span-6">
              <StaticImage
                src="../images/about/our-mission.png"
                alt="Our one billion mission"
                // layout="constrained"
                placeholder="blurred"
                className="h-full w-100"
              />
            </div>

            <div className="col-span-6 py-20">
              <span className="body-lg-500 text-primary-500 uppercase mb-2">Our one billion mission</span>
              <h2 className="heading-02 text-grey-900 mb-6">Our one billion mission sounds bold, We agree.</h2>
              <p className="body-lg-400 text-grey-700">"We cannot solve our problems with the same thinking we used when we created them."—Albert Einstein. Institutions are slow to change. Committees are where good ideas and innovative thinking go to die. Choose agility over dogma. Embrace and drive change. We need to wipe the slate clean and begin with bold, radical thinking.</p>
            </div>

          </div>
        </div>
      </section>

      {/* our gallery */}
      <Galleries />

      {/* testimonials */}
      <section className="w-9/12 mx-auto max-w-[1440px] py-20 testimonials">
        <Swiper
          className="custom-swiper"
          spaceBetween={50}
          slidesPerView={3}
          modules={[Pagination]}
          pagination={{ clickable: true }}
        >
            <SwiperSlide className="">
              <div className="flex flex-col gap-5">
                <div>
                  <div className="flex flex-col gap-2 bg-grey-50 p-6">
                    <img src={quotes} alt="blockquote" className="rotate-180 w-[48px]" />
                    <p className="body-xl-400 text-grey-900 text-center">Eduguard fit us like a glove. Their team curates fresh, up-to-date courses from their marketplace and makes them available to customers.</p>
                    <img src={quotes} alt="blockquote" className="w-[48px] ms-auto" />
                  </div>
                  <div className="down-arrow text-center"></div>
                </div>
                <div className="text-center">
                  <span className="body-lg-500 text-grey-900 mb-1.5">Sundar Pichai</span>
                  <p className="body-md-400 text-grey-600">Chief Chairman of <span className="body-md-500 text-secondary-500">Google</span></p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="flex flex-col gap-5">
                <div>
                  <div className="flex flex-col gap-2 bg-grey-50 p-6">
                    <img src={quotes} alt="blockquote" className="rotate-180 w-[48px]" />
                    <p className="body-xl-400 text-grey-900 text-center">Eduguard fit us like a glove. Their team curates fresh, up-to-date courses from their marketplace and makes them available to customers.</p>
                    <img src={quotes} alt="blockquote" className="w-[48px] ms-auto" />
                  </div>
                  <div className="down-arrow text-center"></div>
                </div>
                <div className="text-center">
                  <span className="body-lg-500 text-grey-900 mb-1.5">Satya Nadella</span>
                  <p className="body-md-400 text-grey-600">CEO of <span className="body-md-500 text-secondary-500">Microsoft</span></p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="flex flex-col gap-5">
                <div>
                  <div className="flex flex-col gap-2 bg-grey-50 p-6">
                    <img src={quotes} alt="blockquote" className="rotate-180 w-[48px]" />
                    <p className="body-xl-400 text-grey-900 text-center">Eduguard fit us like a glove. Their team curates fresh, up-to-date courses from their marketplace and makes them available to customers.</p>
                    <img src={quotes} alt="blockquote" className="w-[48px] ms-auto" />
                  </div>
                  <div className="down-arrow text-center"></div>
                </div>
                <div className="text-center">
                  <span className="body-lg-500 text-grey-900 mb-1.5">Ted Sarandos</span>
                  <p className="body-md-400 text-grey-600">Chief Executive Officer of <span className="body-md-500 text-secondary-500">Netflix</span></p>
                </div>
              </div>
            </SwiperSlide>
        </Swiper>
      </section>
    </>
  )
}

export default AboutPage

export const Head = () => <title>About</title>
