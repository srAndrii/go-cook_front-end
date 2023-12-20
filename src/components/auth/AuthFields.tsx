import React, { FC } from 'react'
import { FormState, UseFormRegister } from 'react-hook-form'
import { validEmail } from './regEx'
import Field from '../form-elements/Field'

interface IAuthFields {
    register: UseFormRegister<any>
    formState: FormState<any>
    isPasswordRequired?: boolean
}

const AuthFields: FC<IAuthFields> = ({
    isPasswordRequired = false,
    formState: { errors },
    register,
}) => {
    return (
        <>
            <Field
                {...register('email', {
                    required: 'Email is required',
                    pattern: {
                        value: validEmail,
                        message: 'Please enter a valid email address',
                    },
                })}
                placeholder="E-mail"
                // @ts-ignore
                error={errors.email}
            />
            <Field
                {...register(
                    'password',
                    isPasswordRequired
                        ? {
                              required: 'Password is required',
                              minLength: {
                                  value: 6,
                                  message: 'Min length should more 6 symbols',
                              },
                          }
                        : {}
                )}
                placeholder="Пароль"
                // @ts-ignore
                error={errors.password}
                type="password"
            />
        </>
    )
}

export default AuthFields
