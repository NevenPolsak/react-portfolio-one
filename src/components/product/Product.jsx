import React from 'react'
import "./Product.css"

function Product({img,link}) {
  return (
    <div className='product'>
      <div className="product-browser">
        <div className="product-circle"></div>
        <div className="product-circle"></div>
        <div className="product-circle"></div>
      </div>
      <a href={link} target="_blank">
        <img className="product-img" src={img}/>
      </a>
    </div>
  )
}

export default Product