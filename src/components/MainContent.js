import React from 'react'
import './MainContent.css'

import MainContentOption from './MainContentOption'
import Slider from './Slider'


function MainContent() {
    return (
        <div className='main__content'>
            <p className='main__title'>Zaylee Shop.</p>
            <div className='mainContent__options'>
                <MainContentOption title='Home' />
                <MainContentOption title='Shop' />
                <MainContentOption title='Collection' />
                <MainContentOption title='Pages' />
                <MainContentOption title='Contact Us' />
            </div>
            <div className='slider__container'>
                <Slider />
            </div>
        </div>
    )
}

export default MainContent
