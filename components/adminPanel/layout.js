import React from 'react'
import cn from 'classnames'
import useWindowSize from '../../hooks/useWindowSize'

import styles from './layout.module.css'
import CONST from '../../constants'
import Sidebar from './sidebar'
import Main from './main'

function Layout({ children }) {
    const size = useWindowSize()
    return (
        <div>
            <div className={cn([styles.layout])}>
                <Sidebar>sidebar</Sidebar>

                <Main>{children}</Main>
            </div>
        </div>
    )
}
export default Layout
