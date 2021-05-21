import React from 'react'

import styles from './user.module.css'

function User({ name, adress, children, ...props }) {
    return (
        <div className={styles.userCard}>
            <h2>{name}</h2>
            <p>{adress}</p>
        </div>
    )
}

export default User
