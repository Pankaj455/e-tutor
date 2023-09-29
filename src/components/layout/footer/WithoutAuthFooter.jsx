import React from 'react'
import { Link } from 'gatsby'

function WithoutAuthFooter() {
  return (
    <div className="py-100">
        <div className="grid grid-cols-12 gap-8">
        <div className="col-span-6 flex flex-col gap-8">
            <p className="heading-02 text-white">Start learning with 67.1k students around the world.</p>
            <div className="flex gap-4">
                <Link to="#" className="btn btn-primary primary">Join The Family</Link>
                <Link to="#" className="btn btn-secondary bg-[#ffffff0d] text-white hover:bg-[#ffffff1f]">Browse all courses</Link>
            </div>
        </div>
        <div className="col-span-6 flex gap-6">
            <div className="flex flex-col gap-3">
                <span className="heading-02 text-white">6.3k</span>
                <span className="body-lg-500 text-grey-300">Online courses</span>
            </div>
            <div className="flex flex-col gap-3">
                <span className="heading-02 text-white">26k</span>
                <span className="body-lg-500 text-grey-300">Certified Instructor</span>
            </div>
            <div className="flex flex-col gap-3">
                <span className="heading-02 text-white">99.9%</span>
                <span className="body-lg-500 text-grey-300">Sucess Rate</span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default WithoutAuthFooter