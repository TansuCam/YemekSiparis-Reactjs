import React from 'react'
import Search from '../components/navbar/search-box'
import Logo from '../components/navbar/logo'
import Navbar from '../components/navbar/navbar'
import Mobile from '../components/mobile-navbar/search'

export default {
    title: 'Navigationbar',
}
export const SearchBox = () => <Search></Search>
export const LogoBox = () => <Logo></Logo>
export const Navigation = () => <Navbar></Navbar>
export const MobileNav = () => <Mobile></Mobile>
