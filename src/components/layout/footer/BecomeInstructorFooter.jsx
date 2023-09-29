import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

function BecomeInstructorFooter() {
  return (
    <div className="py-20">
        <div className="flex justify-between items-center gap-[8vw]">
            <div className="pr-10">
                <p className="heading-02 mb-6 text-white">
                    Start teaching with us and inspire others
                </p>
                <p className="body-lg-400 text-grey-300 mb-10">
                    Become an instructor & start teaching with 26k certified instructors. Create a success story with 67.1k Students — Grow yourself with 71 countries.
                </p>

                <Link to="#" className="btn-lg btn-primary primary w-fit" >Register Now</Link>
            </div>
            <div>
                <StaticImage
                    src="../../../images/footer/become-a-instructor.png"
                    layout="fixed"
                    alt="become-a-member"
                />
            </div>
        </div>
    </div>
  )
}

export default BecomeInstructorFooter