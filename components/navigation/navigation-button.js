import React from 'react'
import styles from './navigation-button.module.css'
import Button from '../button'
import cn from 'classnames'

function NavigationButton({ href, selected, children, className, ...props }) {
    return (
        <Button
            className={cn(
                styles.navButton,
                selected && styles.navButtonSelected
            )}
            href={href}
            {...props}
        >
            {children}
        </Button>
    )
}
export default NavigationButton
