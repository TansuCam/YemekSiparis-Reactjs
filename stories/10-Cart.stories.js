import React from 'react'
import Cart from '../components/cart/cart'
import Price from '../components/cart/table-price'
import Nav from '../components/iconbar/iconbar'

export default {
    title: 'Cart',
}
export const CartPage = () => <Cart></Cart>
export const TablePrice = () => <Price></Price>
export const IconBar = () => <Nav></Nav>
