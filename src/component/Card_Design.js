import React from 'react'

const Card_Design = ({image,title,price}) => {
  return (
    <div className="card_small text-center" >
                <div className="image_card">
                <img src={image} className="card-img-top card_img" alt=""/>
                </div>
                <div className="card-body">
                  <h5 className="card-title mb-0 font-t">{title}</h5>
                  <p className="card-text font-p">{price}</p>
                  <button href="#" className="btn btn-primary">Buy Now</button>
                </div>
              </div>
  )
}

export default Card_Design