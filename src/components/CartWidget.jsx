/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { sumaQuantities } from '../utils/sumQuantitiesCart';
import CartContext from '../context/CartContext';

function CartWidget() {
  const { itemsCart } = useContext(CartContext)
  return (
    <span href='' className='cart-w flex justify-center items-center py-3 rounded-full w-14 hover:bg-[#dbdbdb] hover:text-[#034494] transition-color duration-200 ease-in-out'>
        <ShoppingCartIcon />
        <span className='text-lg'>{sumaQuantities(itemsCart)}</span>
    </span>
  )
}

export default CartWidget