import React from 'react'
import cn from 'classnames'
import useWindowSize from '../../hooks/useWindowSize'

import styles from './layout.module.css'
import CONST from '../../constants'
import Sidebar from '../col/col-sidebar'
import Main from '../col/col-main'
import Extra from '../col/col-extra'
import Navbar from '../navbar/navbar'
import IconBar from '../iconbar/iconbar'
import MobileNav from '../mobile-navbar/search'

function Layout({ children }) {
    const size = useWindowSize()
    return (
        <div>
            {size.width < CONST.MOBILE_SIZE && <MobileNav />}
            {size.width > CONST.MOBILE_SIZE && <Navbar />}
            <div className={cn([styles.layout])}>
                <Sidebar>sidebar</Sidebar>

                <Main>{children}</Main>

                {size.width > CONST.TABLET_SIZE && <Extra>extra</Extra>}
                {size.width < CONST.MOBILE_SIZE && <IconBar></IconBar>}
            </div>
        </div>
    )
}
export default Layout
