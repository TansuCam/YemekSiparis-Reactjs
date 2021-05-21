import React from 'react'
import styles from './button.module.css'
import Link from 'next/link'

function Button({ href, children, ...props }) {
    return (
        <Link href={href}>
            <a className={styles.link} {...props}>
                <div className={styles.button} href={href} {...props}>
                    {children}
                </div>
            </a>
        </Link>
    )
}
export default Button
