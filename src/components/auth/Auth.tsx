import { FC, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useAuth } from '../../hooks/useAuth'
import { IAuthInput } from './auth.interface'
import AuthFields from './AuthFields'
import Button from '../form-elements/Button'
import { useActions } from '../../hooks/useActions'
import { useNavigate } from 'react-router-dom'

import './Auth.css'
const Auth: FC = () => {
    const { isLoading } = useAuth()

    const [type, setType] = useState<'login' | 'register'>('login')

    const navigate = useNavigate()

    const {
        register: registerInput,
        handleSubmit,
        formState,
        reset,
    } = useForm<IAuthInput>({
        mode: 'onChange',
    })

    const { login, register } = useActions()

    const onSubmit: SubmitHandler<IAuthInput> = (data) => {
        if (type === 'login') login(data)
        else if (type === 'register') register(data)
        reset()
        navigate(-1)
    }

    return (
        <>
            <section className="wrapper">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <span className="auth__title">Авторизація</span>
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
