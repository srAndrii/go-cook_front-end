import React, { FC } from 'react'

import Card from './categoryCard/Card'
import { useGetCategoriesQuery } from '../../redux/categoriesApi'
import { Link, useParams } from 'react-router-dom'

import './home.css'

interface ICard {
    title: string
    icon: string
    _id: string
}

const Home: FC = () => {
    const { data = [] } = useGetCategoriesQuery([])
    return (
        <div className="home">
            {data.map((item: ICard) => (
                <Link
                    to={`/category/${item._id}`}
                    style={{ textDecoration: 'none' }}
                    key={item._id}
                >
                    <Card title={item.title} icon={item.icon} />
                </Link>
            ))}
        </div>
    )
}

export default Home
