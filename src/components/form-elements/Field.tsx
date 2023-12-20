import React, { FC, forwardRef } from 'react'
import { IField } from './form.interface'
import cn from 'classnames'
import './form.css'

const Field = forwardRef<HTMLInputElement, IField>(
    ({ placeholder, error, type = 'text', style, ...rest }, ref) => {
        return (
            <div className={cn('common', 'field')} style={style}>
                <label>
                    <span>{placeholder}</span>
                    <input type={type} ref={ref} {...rest} />
                </label>
                {error && <div className="error">{error.message}</div>}
            </div>
        )
    }
)
Field.displayName = 'Field'

export default Field
