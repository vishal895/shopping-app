import React from 'react'
import { useSelector } from 'react-redux'
import DetailPage from './DetailPage'

const CartPage = () => {
    const addcartdata = useSelector((store)=> store.cart.value)
  return (
    <><div className='p-20 text-center mt-10'>CartPage</div><div>
          {/* <DetailPage /> */}
      </div></>
  )
}

export default CartPage