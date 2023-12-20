import React, { FC } from 'react'

import cn from 'classnames'

import { IButton } from './form.interface'

import './form.css'

const Button: FC<IButton> = ({ children, className, ...rest }) => {
    return (
        <button className={cn('button', className)} {...rest}>
            {children}
        </button>
    )
}

export default Button
