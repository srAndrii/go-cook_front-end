import React, { FC, useState } from 'react'

import { SubmitHandler, useForm } from 'react-hook-form'
//
// import { IAuthInput } from './auth.interface'
//
// import Meta from '../../../utils/meta/Meta'
// import Heading from '../../../ui/heading/Heading'
// import Button from '../../../ui/form-elements/Button'
// import AuthFields from './AuthFields'
//
// import { useAuthRedirect } from './useAuthRedirect'
// import { useAuth } from '../../../hooks/useAuth'
// import { useActions } from '../../../hooks/useActions'

import './Auth.css'
import { useAuth } from '../../hooks/useAuth'
import { IAuthInput } from './auth.interface'
import AuthFields from './AuthFields'
import Button from '../form-elements/Button'
import { useActions } from '../../hooks/useActions'

const Auth: FC = () => {
    // useAuthRedirect()

    const { user, isLoading } = useAuth()

    const [type, setType] = useState<'login' | 'register'>('login')

    const {
        register: registerInput,
        handleSubmit,
        formState,
        reset,
    } = useForm<IAuthInput>({
        mode: 'onChange',
    })

    const { login, register } = useActions()

    // const login = (data: IAuthInput) => {
    //     console.log(data)
    // }
    // const register = (data: IAuthInput) => {
    //     console.log(data)
    // }

    const onSubmit: SubmitHandler<IAuthInput> = (data) => {
        if (type === 'login') login(data)
        else if (type === 'register') register(data)
        reset()
    }

    return (
        <>
            {/*<Meta title="Auth" />*/}
            <section className="wrapper">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <span className="auth__title">Авторизація</span>
                    {/*<Heading title="Auth" className="mb-6" />*/}
                    <AuthFields
                        register={registerInput}
                        formState={formState}
                        isPasswordRequired
                    />
                    <div className="buttons">
                        <Button
                            type="submit"
                            onClick={() => setType('login')}
                            disabled={isLoading}
                        >
                            Увійти
                        </Button>
                        <Button
                            type="submit"
                            onClick={() => setType('register')}
                            disabled={isLoading}
                        >
                            Зареєструватись
                        </Button>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Auth
