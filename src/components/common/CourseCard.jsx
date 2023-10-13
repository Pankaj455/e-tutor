import React, {useRef} from 'react'
import { StaticImage } from 'gatsby-plugin-image';
import Divider from './Divider';
import { Star } from '@phosphor-icons/react';

function CourseCard({course}) {
    const {category, price, title, rating, enrolled} = course;

  return (
    <div className="course-card flex flex-col bg-white cursor-pointer relative">
        <div className="course-card-img flex">
            <StaticImage 
                src={`../../images/home/best-course-img.png`}
                placeholder="blurred"
                layout="fixed"
                className="w-100 grow h-[185px]"
            />
        </div>
        <div className="course-content py-3.5 flex flex-col gap-2.5">
            <div className="flex justify-between items-center px-3.5">
                <div className={`py-1 px-1.5 flex justify-center items-center bg-${category.theme}-100`}>
                    <span className={`labels-sm text-${category.theme}-700 uppercase`}>{category.name}</span>
                </div>
                <span className="body-lg-500 text-primary-500">${price}</span>
            </div>
            <p className="body-md-500 text-grey-900 px-3.5">{title}</p>
            <Divider />
            <div className="flex justify-between items-center px-3.5">
                <div className="flex gap-1">
                    <div>
                        <Star size={16} weight="fill" className="text-warning-500" />
                    </div>
                    <span className="body-md-500 text-grey-700">{rating}</span>
                </div>
                <div>
                    <span className="body-md-500 text-grey-700">{enrolled}</span>
                    <span className="body-md-400 text-grey-500 ms-1">students</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CourseCard