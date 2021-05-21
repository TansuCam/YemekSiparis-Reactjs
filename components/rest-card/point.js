import React from 'react'
import cn from 'classnames'
import Link from 'next/link'
import Photo from '../photo'

import styles from './point.module.css'

function Point({ pointName, point, ...props }) {
    return (
        <div className={styles.pointCard}>
            <p>{pointName}</p>
            <h1>{point}</h1>
        </div>
    )
}

export default Point
