import React from 'react'
import cn from 'classnames'

import styles from './photo.module.css'

function Photo({
    src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Burger_King_logo.svg/1012px-Burger_King_logo.svg.png',
    alt,
    size = 55,
}) {
    return (
        <div
            className={cn([styles.photo])}
            style={{ width: size, height: size }}
        >
            <img className={styles.img} src={src} alt={alt} />
        </div>
    )
}
export default Photo
