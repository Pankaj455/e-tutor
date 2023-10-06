import React from 'react'

function FormTextArea({label, placeholder, styles}) {
  return (
    <div className="flex flex-col gap-1.5">
        <label className="body-md-400 text-grey-900" htmlFor={label}>{label}</label>
        <textarea
            id={label}
            placeholder={placeholder}
            className={`form-input ${styles}`}
            data-type="textarea"
        />
    </div>
  )
}

export default FormTextArea