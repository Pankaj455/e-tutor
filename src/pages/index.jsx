import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React, { useEffect, useState } from "react";
import {categories, bestCourses} from "../utils/constant";
import { ArrowRight, } from "@phosphor-icons/react";
import { CategoryCard, CourseCard } from "../components/common";
import axios from "../axios";

const IndexPage = () => {
  const [courses, setCourses] = useState([])

  const fetchCourses = async () => {
    try {
      const {data} = await axios.get("/courses?populate=*");
      // console.log(data);
      setCourses(data.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  // console.log(courses);

  
  useEffect(() => {
    fetchCourses();
  }, [])
  

  return (
    <>
      <section className="py-100 relative hero-section">
        <div className="w-9/12 mx-auto">
          <div className="grid grid-cols-12">
            <div className="col-span-6 flex flex-col gap-10">
              <h1 className="display-02 text-grey-900">Learn with expert anytime anywhere</h1>
              <p className="body-xxxl text-grey-700">Our mission is to help people to find the best course online and learn with expert anytime, anywhere.</p>
              <Link to="#" className="btn-lg btn-primary primary w-fit">Create Account</Link>
            </div>
          </div>
        </div>
        {/* <StaticImage
          src="../images/home/hero-img.png"
          layout="constrained"
          alt="hero-background"
          loading="eager"
          className="absolute end-0 top-0"
        /> */}
      </section>

      {/* top categories  */}
      <section className="py-20">
        <div className="w-9/12 max-w-[1440px] mx-auto">
          <h2 className="heading-02 text-grey-900 text-center mb-10">Browse top category</h2>

          <div className="grid grid-cols-12 gap-6 mb-11">
            {categories.map((category, idx) => {
              return (
                <div key={idx} className="col-span-12 md:col-span-6 xl:col-span-3">
                  <CategoryCard category={category} parentStyles="flex gap-5 items-center p-5" />
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

      {/* best selling courses  */}
      <section className="bg-grey-50 py-20 overflow-hidden">
        <div className="w-9/12 max-w-[1440px] mx-auto">
          <h2 className="heading-02 text-grey-900 text-center mb-10">Best selling courses</h2>
          <div className="course-container">
            {courses.map((course) => {
              return (
                <CourseCard
                  key={course.id}
                  course={course.attributes}
                />
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
