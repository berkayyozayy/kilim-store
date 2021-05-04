import React from 'react'
import './MainContent.css'
import MainContentOption from './MainContentOption'

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
        </div>
    )
}

export default MainContent
