import React from 'react'
import './Checkout.css'

import { useStateValue } from '../StateProvider'
import Product from './Product'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'



function Checkout() {

    const [{ basket }, dispatch] = useStateValue()

    return (
        <div className='checkout'>
            <div className='checkout__left'>
                <div>
                    <p className='checkout__title'>Your Shopping Basket</p>
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            image={item.image}
                            title={item?.title}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}

                </div>
            </div>

            <div className='checkout__right'>
                <Subtotal />
            </div>


        </div>
    )
}

export default Checkout
