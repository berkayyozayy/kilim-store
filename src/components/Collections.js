import React from 'react'
import './Collections.css'
import Product from './Product'

import Kilim1 from '../assets/kilim1.jpg'
import Kilim2 from '../assets/kilim2.jpg'
import Kilim3 from '../assets/kilim3.jpg'

function Collections() {
    return (
        <div className='collections'>
            <div>
                <h2 className='title'>Collections</h2>
            </div>
            <div className='collection__products'>
                <Product title='Anatolian' image={Kilim1} price={1200} rating={2} />
                <Product title='Persian' image={Kilim2} price={1700} rating={3} />
                <Product title='Azerbeijan' image={Kilim3} price={2700} rating={5} />
                {/* <Product image={Kilim1} price={1200} rating={2} />
                <Product image={Kilim2} price={1700} rating={3} />
                <Product image={Kilim3} price={2700} rating={5} />
                <Product image={Kilim1} price={1200} rating={2} />
                <Product image={Kilim2} price={1700} rating={3} />
                <Product image={Kilim3} price={2700} rating={5} />
                <Product image={Kilim1} price={1200} rating={2} />
                <Product image={Kilim2} price={1700} rating={3} />
                <Product image={Kilim3} price={2700} rating={5} /> */}
            </div>

        </div>
    )
}

export default Collections
