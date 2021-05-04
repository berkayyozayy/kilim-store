import React from 'react'
import './Checkout.css'

import { Link } from 'react-router-dom'


function Checkout() {
    return (
        <div className='checkout'>
            <Link to='/' style={{ textDecoration: 'none', color: '#555252' }}>
                <p className='checkout__title'>Zaylee Shop.</p>
            </Link>

        </div>
    )
}

export default Checkout
