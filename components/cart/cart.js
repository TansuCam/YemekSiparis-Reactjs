import React from 'react'
import CoolTabs from 'react-cool-tabs'
import ContentOne from './table-price'
import ContentTwo from './cart-table'

import styles from './cart.module.css'

function Cart({ href, children, className, ...props }) {
    return (
        <div className={styles.cartIndex}>
            <CoolTabs
                tabKey={'1'}
                style={{
                    width: '50%',
                    height: 2000,
                    background: 'white',
                    marginLeft: '2%',
                }}
                activeTabStyle={{ background: '#f5f5f5', color: 'black' }}
                unActiveTabStyle={{ background: 'white', color: 'black' }}
                activeLeftTabBorderBottomStyle={{
                    background: '#dd3333',
                    height: 4,
                }}
                activeRightTabBorderBottomStyle={{
                    background: '#dd3333',
                    height: 4,
                }}
                tabsBorderBottomStyle={{ background: '#dd3333', height: 2 }}
                leftTabTitle={'Sepetim'}
                rightTabTitle={'Siparişlerim'}
                contentContainerStyle={{ width: '185%' }}
                leftContent={<ContentOne />}
                rightContent={<ContentTwo />}
                contentTransitionStyle={'transform 0.4s ease-in'}
                borderTransitionStyle={'all 0.4s ease-in'}
            />
        </div>
    )
}

export default Cart
