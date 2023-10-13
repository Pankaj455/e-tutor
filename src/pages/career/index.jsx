import { Briefcase, CheckCircle, ClipboardText, MapPinLine, PaperPlaneRight } from "@phosphor-icons/react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import { benefits, companies, jobs } from "../../utils/constant";
import { Divider, FormInput, FormTextArea, CategoryCard, IconButton, JobCard } from "../../components/common";
import {Galleries} from "../../components/sections"

const CareerPage = () => {

  return (
      <>
        <section className="w-9/12 mx-auto max-w-[1440px] pt-8">
          <div className="grid grid-cols-12 gap-20">
            <div className="col-span-6 py-20">
              <div className="flex flex-col gap-6">
                <h1 className="heading-01 text-grey-900">Join the most incredible & creative team.</h1>
                <p className="body-xl-400 text-grey-600">Proin gravida enim augue, dapibus ultrices eros feugiat et. Pellentesque bibendum orci felis, sit amet efficitur felis lacinia ac. Mauris gravida justo ac nunc consectetur.</p>
                <Link to="#" className="btn btn-primary primary w-fit">View Open Positions</Link>
              </div>
            </div>
            <div className="col-span-6">
              <StaticImage
                src="../../images/career/career-main.png"
                alt="Join our creative team"
                placeholder="none"
                loading="eager"
                className="h-full w-100"
              />
            </div>
          </div>
        </section>

        {/* join our team  */}
        <section className="bg-grey-50 py-20">
            <div className="w-9/12 mx-auto max-w-[1440px]">
                <div className="grid grid-cols-12 gap-20">
                    <div className="col-span-6">
                        <StaticImage
                        src="../../images/career/join-our-team.png"
                        alt="Join our creative team"
                        placeholder="blurred"
                        className="h-full w-100"
                        />
                    </div>
                    <div className="col-span-6">
                        <div className="flex flex-col">
                            <h2 className="heading-02 text-grey-900 mb-6">Why you will join our team</h2>
                            <p className="body-xl-400 text-grey-700 mb-10">Quisque leo leo, suscipit sed arcu sit amet, iaculis feugiat felis. Vestibulum non consectetur tortor. Morbi at orci vehicula, vehicula mi ut, vestibulum odio. </p>

                            <div className="flex flex-col gap-6">
                                <div className="flex gap-3 p-8 bg-white shadow-[0_4px_50px_0_#1d20260d]">
                                    <div className="self-start">
                                        <CheckCircle size={40} weight="fill" className="text-success-500" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h4 className="body-lg-500 text-grey-900">Ut justo ligula, vehicula sed egestas vel.</h4>
                                        <p className="body-md-400 text-grey-600">Quisque leo leo, suscipit sed arcu sit amet, iaculis feugiat felis. Vestibulum non consectetur tortor. Morbi at orci vehicula, vehicula mi ut, vestibulum odio.</p>
                                    </div>
                                </div>

                                <div className="flex gap-3 p-8 bg-white shadow-[0_4px_50px_0_#1d20260d]">
                                    <div className="self-start">
                                        <CheckCircle size={40} weight="fill" className="text-success-500" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <h4 className="body-lg-500 text-grey-900">Ut justo ligula, vehicula sed egestas vel.</h4>
                                        <p className="body-md-400 text-grey-600">Quisque leo leo, suscipit sed arcu sit amet, iaculis feugiat felis. Vestibulum non consectetur tortor. Morbi at orci vehicula, vehicula mi ut, vestibulum odio.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* perks & benefits */}
        <section className="py-20">
            <div className="w-9/12 mx-auto">
                <h2 className="heading-02 text-grey-900 text-center mb-10">Our Perks & Benefits</h2>

                <div className="grid grid-cols-12 gap-6 mb-11">
                    {benefits.map((benefit, idx) => {
                    return (
                        <div key={idx} className="col-span-12 md:col-span-6 xl:col-span-3">
                            <CategoryCard category={benefit} parentStyles="flex flex-col gap-8 items-start p-8" />
                        </div>
                    )
                    })}
                </div>
            </div>

        </section>

        <Divider />

        {/* our galleries */}
        <Galleries background="bg-white" />

        {/* trusted companies  */}
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
            </div>
        </section>

        <section className="py-20 bg-grey-50">
          <div className="w-9/12 mx-auto max-w-[1440px]">
            <h2 className="heading-02 text-grey-900 text-center mb-10">Our all open positions (4)</h2>
            <div className="grid grid-cols-12 gap-6">
                {jobs.map((job, idx) => {
                    return (
                        <div key={idx} className="col-span-4">
                            <JobCard job={job} />
                        </div>
                    )
                })}
            </div>
          </div>
        </section>

      </>
  )
}

export default CareerPage

export const Head = () => <title>Career</title>
