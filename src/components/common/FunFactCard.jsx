import React from 'react'

const defaultIconProps = {
    size: 40,
    weight: "duotone",
}

function FunFactCard({fact}) {
  const {title, count, iconColor, Icon} = fact;

  // const categoryCardClassName = `p-5 h-full flex gap-5 cursor-pointer group bg-${theme}-100 hover:bg-white category-card`;
  // const categoryIconClassName = `p-4 flex items-center category-icon group-hover:bg-${theme}-500 bg-white`;
  // const cpuIconClassName = `text-${theme}-500 group-hover:text-white`;
  
  return (
    <div className="flex gap-4">
        <Icon {...defaultIconProps} className={`${iconColor} self-start`}/>
        <div className="flex flex-col gap-2">
            <p className="heading-03 text-grey-900">{count}</p>
            <span className="body-md-500 text-grey-700">{title}</span>
        </div>
    </div>
  )
  
}

export default FunFactCard