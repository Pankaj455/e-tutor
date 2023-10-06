import React from 'react'

function FormInput({label, type, placeholder}) {
  return (
    <div className="flex flex-col gap-1.5">
        <label className="body-md-400 text-grey-900" htmlFor={label}>{label}</label>
        <input
            id={label}
            type={type}
            placeholder={placeholder}
            className="form-input"
        />
    </div>
  )
}

export default FormInput