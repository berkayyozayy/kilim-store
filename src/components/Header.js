import React from 'react'
import './Header.css'

import SearchIcon from '@material-ui/icons/Search';
import { Avatar } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import { Link } from 'react-router-dom'

import HeaderOption from './HeaderOption'
import { useStateValue } from '../StateProvider';

function Header() {

    const [{ basket }, dispatch] = useStateValue()

    return (
        <div className='header'>
            <div className='header__left'>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <h1 className='header__title'>Zaylee Shop.</h1>
                </Link>
                <p>USD</p>
                <p>Call Us +1 (503) 941-6545</p>
            </div>

            <div className='header__right'>
                <HeaderOption Icon={SearchIcon} />
                <HeaderOption Icon={FavoriteIcon} />
                <Link to='/checkout' style={{ textDecoration: 'none' }}>
                    <HeaderOption Icon={ShoppingCartIcon} basket={basket?.length} />
                </Link>
                <HeaderOption Icon={Avatar} />
            </div>

        </div>
    )
}

export default Header
