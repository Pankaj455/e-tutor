import { CheckSquare, Square } from '@phosphor-icons/react'
import React, { useState } from 'react'
import {StringParam, useQueryParams} from "use-query-params"

function FilterCheck({id, label, count, ...restProps}) {
    const [checked, setChecked] = useState(false)
    const {iconColorDefault, iconColorActive} = restProps;
    
    const updateUrl = () => {
      if(checked){
        // add
        const params = new URLSearchParams(window.location.search);
        console.log(params.getAll("category"));
      }else{
        // remove
      }
    }

  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-3 items-center">
          <input
            type="checkbox"
            id={id}
            className="hidden"
            checked={checked}
            onChange={() => {
              updateUrl()
              setChecked(prevState => !prevState)
            }}
          />
          {
              !checked ? <Square size={20} className={`${iconColorDefault ? iconColorDefault : "text-grey-200"}`} /> : <CheckSquare size={20} weight="fill" className={`${iconColorActive ? iconColorActive : "text-primary-500"}`} />
          }
          
          <label htmlFor={id} className={`body-md-400 cursor-pointer select-none ${checked ? "font-medium text-primary-500" : "text-grey-700"}`}>{label}</label>
      </div>
      <span className={`select-none ${checked ? "body-sm-500 text-grey-700" : "body-sm-400 text-grey-500"}`}>{count}</span>
    </div>
  )
}

export default FilterCheck