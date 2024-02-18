/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./cartWidget.css"
import { sumaQuantities } from '../../utils/sumQuantitiesCart';
import CartContext from '../../context/CartContext';

function CartWidget({ number, clickEnCarrito, isShowModal }) {
  const { itemsCart } = useContext(CartContext)
  return (
    <a href='' className='cart-w rounded-full w-14 hover:text-[#034494]'>
        <ShoppingCartIcon />
        <span className='text-lg'>{sumaQuantities(itemsCart)}</span>
    </a>
  )
}

export default CartWidget