import React, { useState, MouseEvent } from 'react'
import { motion } from 'framer-motion'

import Logo from '../../assets/logo.png'

import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { useAuth } from '../../hooks/useAuth'
import { useActions } from '../../hooks/useActions'
import { Link } from 'react-router-dom'

import './Navbar.css'
const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '100%' },
}

const Navbar = () => {
    const [show, setShow] = useState(false)
    const { user } = useAuth()

    const { logout } = useActions()
    const handleLogout = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        logout()
    }
    return (
        <>
            <div className="header">
                <Link to={`/`}>
                    <img className="header__logo" src={Logo} alt="Logo" />
                </Link>
            </div>
            <motion.nav
                animate={show ? 'open' : 'closed'}
                variants={variants}
                initial="closed"
                transition={{ duration: 0.5 }}
                className="mobile_navbar"
            >
                <motion.div className="inner_nav">
                    {user ? (
                        <>
                            <div onClick={() => setShow((show) => !show)}>
                                {user?.email}
                            </div>
                            <div>
                                <span onClick={handleLogout}>
                                    <span>Вийти</span>
                                </span>
                            </div>
                        </>
                    ) : (
                        <>
                            <div onClick={() => setShow((show) => !show)}>
                                <Link
                                    to={`/auth`}
                                    style={{
                                        textDecoration: 'none',
                                        color: '#e7f5dc',
                                    }}
                                >
                                    Увійти
                                </Link>
                            </div>
                        </>
                    )}
                </motion.div>
            </motion.nav>
            <motion.button
                className="toggle"
                onClick={() => setShow((show) => !show)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                {show ? <HiX /> : <HiMenuAlt4 />}
            </motion.button>
        </>
    )
}

export default Navbar
