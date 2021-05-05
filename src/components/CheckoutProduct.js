import React from 'react'
import './CheckoutProduct.css'

function CheckoutProduct({ image, title, price, rating }) {
    return (
        <div className='checkout__product'>
            <img src={image} className='checkoutProduct__image' />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutProduct__rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <strong>☆</strong>
                        ))
                    }
                </div>
                <button className='btn__removeFromBasket'>Remove From Basket</button>
            </div>

        </div>
    )
}

export default CheckoutProduct
