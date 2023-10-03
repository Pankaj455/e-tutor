import { Cpu } from '@phosphor-icons/react'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const defaultIconProps = {
    size: 32,
    weight: "duotone",
}

function CategoryCard({category}) {
  const {name, count, theme, Icon} = category;

  // const categoryCardClassName = `p-5 h-full flex gap-5 cursor-pointer group bg-${theme}-100 hover:bg-white category-card`;
  // const categoryIconClassName = `p-4 flex items-center category-icon group-hover:bg-${theme}-500 bg-white`;
  // const cpuIconClassName = `text-${theme}-500 group-hover:text-white`;
  
  return (
    <div className={`p-5 h-full flex gap-5 cursor-pointer group bg-${theme}-100 hover:bg-white category-card`}>
        <div className={`p-4 flex items-center category-icon bg-white`}>
          {
            Icon ? (<Icon {...defaultIconProps} className={`text-${theme}-500`} />) : (<Cpu size={32} weight="duotone" className={`text-${theme}-500`} />)

          }
        </div>
        <div className="flex flex-col gap-2">
            <span className="body-lg-500 text-grey-900">{name}</span>
            <span className="body-md-400 text-grey-600">{count} Courses</span>
        </div>
    </div>
  )


























  
}

export default CategoryCard