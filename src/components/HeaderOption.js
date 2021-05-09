import React from 'react'
import './HeaderOption.css'

function HeaderOption({ Icon, basket }) {
    return (
        <div className='headerOption'>
            {Icon && <Icon className='headerOption__icon' />}
            <span className='headerOption__basket'>{basket}</span>
        </div>
    )
}

export default HeaderOption
