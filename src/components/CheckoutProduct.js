import React from 'react'
import { useStateValue } from '../StateProvider'
import './CheckoutProduct.css'

function CheckoutProduct({ id, image, title, price, rating }) {

    const [{ basket }, dispatch] = useStateValue()

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }

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
                <button onClick={removeFromBasket} className='btn__removeFromBasket'>Remove From Basket</button>
            </div>

        </div>
    )
}

export default CheckoutProduct
