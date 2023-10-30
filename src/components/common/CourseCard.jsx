import React, {useRef} from 'react'
import { StaticImage, GatsbyImage, getImage, getSrc } from 'gatsby-plugin-image';
import Divider from './Divider';
import { Star, User } from '@phosphor-icons/react';
import { format } from '../../utils/utils';

const COURSE_LABEL = {
    design: {
        bg: "bg-primary-100",
        text: "text-primary-700",
    },

    developments: {
        bg: "bg-secondary-100",
        text: "text-secondary-700",
    },

    business: {
        bg: "bg-success-100",
        text: "text-success-700",
    },

    marketing: {
        bg: "bg-secondary-100",
        text: "text-secondary-700",
    },

    music: {
        bg: "bg-warning-100",
        text: "text-warning-700",
    },

    "health & fitness": {
        bg: "bg-warning-100",
        text: "text-warning-700",
    },
}

const getCategoryTheme = (name) => {
    const nameInLowercase = name.toLowerCase();
    if(Object.keys(COURSE_LABEL).indexOf(nameInLowercase) === -1){
        // return random theme
        return {
            bg: "bg-primary-100",
            text: "text-primary-700",
        }
    }

    return COURSE_LABEL[nameInLowercase];
}

function CourseCard({course}) {
    const {category, price, title, rating, enrolled, cover} = course;
    // console.log(cover.data);
    const {url, alternativeText: alt} = cover.data.attributes;
    const imageUrl = `${process.env.STRAPI_API_URL}${url}`

    // console.log(course);
    const categoryTheme = getCategoryTheme(category)

  return (
    <div className="course-card flex flex-col bg-white cursor-pointer relative">
        <div className="course-card-img flex">
            <img src={imageUrl} alt={alt} className="w-100 object-cover" />
        </div>
        <div className="course-content py-3.5 flex flex-col gap-2.5">
            <div className="flex justify-between items-center px-3.5">
                <div className={`py-1 px-1.5 flex justify-center items-center ${categoryTheme.bg}`}>
                    <span className={`labels-sm ${categoryTheme.text} uppercase`}>{category}</span>
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
                    <span className="body-md-500 text-grey-700">{parseFloat(rating).toFixed(1)}</span>
                </div>
                <div className="flex gap-1.5 items-center">
                    <div>
                        <User size={20} className='text-secondary-500' />
                    </div>
                    <div>
                        <span className="body-md-500 text-grey-700">{format(enrolled)}</span>
                        <span className="body-md-400 text-grey-500 ms-1">students</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CourseCard