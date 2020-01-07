import React from 'react'
import  './form-Input.styles.scss'
const FormInput = ({handleChange,lable,...restProps}) =>{
  return  <div className="group">
        <input 
            className="form-input" 
            onChange={handleChange} type="text"
            {...restProps}
        />
        {
            lable ? (<label className={`${restProps.value.length ? 'shrink' : ''} form-input-label`}>
                {lable}
            </label>):null
        }
    </div>
}
export default FormInput;