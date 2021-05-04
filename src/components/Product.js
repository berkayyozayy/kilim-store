import React from 'react'
import { useStateValue } from '../StateProvider'
import './Product.css'


function Product({ image, price, rating }) {

    const [{ basket }, dispatch] = useStateValue()

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                image: image,
                price: price,
                rating: rating
            }
        })
    }

    return (
        <div className='product'>
            <img src={image} alt='Product' />
            <div className='product__info'>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p>Anatolian Kilim</p>
                <div className='product__rating'>
                    {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <strong>☆</strong>
                        ))
                    }
                </div>
            </div>
            <button onClick={addToBasket} className='btn__addToBasket'>Add to Basket</button>
        </div>
    )
}

export default Product
