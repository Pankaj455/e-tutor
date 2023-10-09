import React from 'react'
import { ArrowRight } from "@phosphor-icons/react";
import { Link } from "gatsby";
import { StaticImage } from 'gatsby-plugin-image';


function Galleries({background}) {
  return (
    <section className={background ? background : `bg-grey-50`}>
        <div className="w-9/12 mx-auto max-w-[1440px] py-20">
            <div className="grid grid-cols-12 gap-16">
            <div className="col-span-4 flex">
                <div className="self-center">
                <span className="body-lg-500 text-primary-500 uppercase mb-2">Our gallery</span>
                <h2 className="heading-02 text-grey-900 mb-6">We’ve been here almost 17 years</h2>
                <p className="body-lg-400 text-grey-700 mb-6">Fusce lobortis leo augue, sit amet tristique nisi commodo in. Aliquam ac libero quis tellus venenatis imperdiet. Sed sed nunc libero. Curabitur in urna ligula. torquent per conubia nostra.</p>
                <Link to="#" className="btn btn-primary primary w-fit">
                    Join Our Team <ArrowRight />
                </Link>
                </div>
            </div>
            <div className="col-span-8">
                <StaticImage
                src="../../images/about/gallery.png"
                alt="our gallery"
                placeholder="blurred"
                className="h-full w-full"
                />
            </div>
            </div>
        </div>
    </section>
  )
}

export default Galleries