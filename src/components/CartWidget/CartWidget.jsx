/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./cartWidget.css"

function CartWidget() {
  return (
    <a href='#' className='cart-w rounded-full w-14'>
        <ShoppingCartIcon/>
        <span className='text-lg'>2</span>
    </a>
  )
}

export default CartWidget