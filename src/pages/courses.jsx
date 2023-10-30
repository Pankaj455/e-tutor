import { Faders, MagnifyingGlass } from "@phosphor-icons/react";
import React, {useEffect, useState} from "react";
import axios from "../axios";
import { CourseCard, SortBy, Filter } from "../components/common";


const IndexPage = () => {
  const [courses, setCourses] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(true)

  const fetchCourses = async () => {
    try {
      const {data} = await axios.get("/courses?populate=*");
      // console.log(data);
      setCourses(data.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, [])

  return (
      <section className="mt-10">
        <div className="w-9/12 mx-auto max-w-[1440px]">
          <div className="flex justify-between items-center mb-10">
            <div className="flex gap-6">
              <button className="btn filter-btn" onClick={() =>setIsFilterOpen(prev => !prev)}>
                <Faders /> Filter <div className="filter body-sm-600"></div>
              </button>
            </div>

            {/* sort by */}
            <div className="flex gap-6 items-center">
              <p className="body-md-400 color-grey-700">Sort by:</p>
              <SortBy />
            </div>
          </div>

          {/* courses */}
          <div className="flex gap-6">
            {
              isFilterOpen && <Filter containerStyles="min-w-[315px] w-[15vw] max-w-[400px]" /> 
            }
            <div className="course-container mb-10 w-full">
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
        </div>
      </section>
  )
}

export default IndexPage

export const Head = () => <title>Courses</title>
