import React from 'react'
import style from './home.module.scss'
import { Link } from 'react-router-dom'

const Home = () => {
    return <div className={style.body}>
        <div className={style.buttonContainer}>
            <Link to='/character' className={style.genericButton}>Customize Character</Link>
            <Link to='/place' className={style.genericButton}>Customize Place</Link>
        </div>
    </div>
}

export default Home