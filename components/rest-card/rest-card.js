import React from 'react'
import Photo from '../photo'
import Point from './point-box'
import Min from './min'

import styles from './rest-card.module.css'

function RestCard({ href, children, ...props }) {
    return (
        <div className={styles.layout}>
            <Photo />
            <Point />
            <Min minPrice="15" />
        </div>
    )
}

export default RestCard
