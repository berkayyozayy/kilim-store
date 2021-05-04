import React from 'react'
import './Slider.css'

import { Carousel } from 'react-responsive-carousel';

import Kilim1 from '../assets/kilim1.jpg'
import Kilim2 from '../assets/kilim2.jpg'
import Kilim3 from '../assets/kilim3.jpg'

function Slider() {
    return (
        <div className='slider'>
            <div className='slider__content'>
                <Carousel
                    autoPlay={true}
                    showThumbs={false}
                    showArrows={true}
                    infiniteLoop={true}
                    interval={2000}
                    autoFocus={true}
                >
                    <div className='slider__image'>
                        <img src={Kilim1} alt='Kilim-1' />
                    </div>
                    <div className='slider__image'>
                        <img src={Kilim2} alt='Kilim-2' />
                    </div>
                    <div className='slider__image'>
                        <img src={Kilim3} alt='Kilim-3' />
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default Slider
