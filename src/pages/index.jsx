import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import CategoryCard from "../components/common/CategoryCard";
import {categories} from "../utils/constant";
import { ArrowRight } from "@phosphor-icons/react";

const IndexPage = () => {
  return (
    <>
      <section className="py-100 relative hero-section">
        <div className="w-9/12 mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-6 flex flex-col gap-10">
              <h1 className="display-02 text-grey-900">Learn with expert anytime anywhere</h1>
              <p className="body-xxxl text-grey-700">Our mision is to help people to find the best course online and learn with expert anytime, anywhere.</p>
              <Link to="#" className="btn-lg btn-primary primary w-fit">Create Account</Link>
            </div>
          </div>
        </div>
        <StaticImage
          src="../images/home/hero-img.png"
          layout="constrained"
          alt="hero-background"
          loading="eager"
          className="absolute end-0 top-0"
        />
      </section>


      <section className="py-20">
        <div className="w-9/12 mx-auto">
          <h2 className="heading-02 text-grey-900 text-center mb-10">Browse top category</h2>

          <div className="grid grid-cols-12 gap-6 mb-11">
            {categories.map((category, idx) => {
              return (
                <div key={idx} className="col-span-12 md:col-span-6 xl:col-span-3">
                  <CategoryCard category={category} />
                </div>
              )
            })}
          </div>

          <div className="flex justify-center items-center gap-3">
            <span className="body-md-400 text-grey-700">We have more category & subcategory.</span>
            <Link to="#" className="btn-link-sm btn-link-primary">Browse All <ArrowRight /></Link>
          </div>
        </div>

      </section>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
