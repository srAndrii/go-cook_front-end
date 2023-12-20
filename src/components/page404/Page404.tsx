import { FC } from 'react'
import Error404 from '../../assets/404page.png'
import './Page404.css'

const Page404: FC = () => {
    return (
        <div className="page__404__wrapper">
            <img
                className="page__404__img"
                src={Error404}
                alt="Page not found"
            />
            <p className="page__404__title">
                Ууупс, такої сторінки не існує...
            </p>
        </div>
    )
}

export default Page404
