import React from 'react'
import './Product.css'

function Product({ title, image, price, rating }) {
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
            <button className='btn__addToBasket'>Add to Basket</button>
        </div>
    )
}

export default Product
