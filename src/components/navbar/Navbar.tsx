import React, { useState } from 'react'
import { motion } from 'framer-motion'

import Logo from '../../assets/logo.png'
import './Navbar.css'
import { HiMenuAlt4, HiX } from 'react-icons/hi'

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: '100%' },
}

const Navbar = () => {
    const [show, setShow] = useState(false)
    return (
        <>
            <div className="header">
                <img className="header__logo" src={Logo} alt="Logo" />
            </div>
            <motion.nav
                animate={show ? 'open' : 'closed'}
                variants={variants}
                initial="closed"
                transition={{ duration: 0.5 }}
                className="mobile_navbar"
            >
                <motion.div className="inner_nav">
                    <div onClick={() => setShow((show) => !show)}>menu</div>
                    <div onClick={() => setShow((show) => !show)}>menu</div>
                    <div onClick={() => setShow((show) => !show)}>menu</div>
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
