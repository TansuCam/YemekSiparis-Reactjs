import React from 'react'

import styles from './card.module.css'
import Photo from './photo'
import IconButton from './icon-button'
import * as Icon from './icon'

function Card({ href, name, ...props }) {
    return (
        <article className={styles.card} href={href} {...props}>
            {/* avatar */}
            <div className={styles.avatar}>
                <Photo className={styles.avatarPhoto} />
            </div>

            {/* body */}
            <div className={styles.body}>
                <header className={styles.header}>
                    <span className={styles.name}>{name}</span>{' '}
                </header>

                <footer className={styles.footer}>
                    {/* reply */}
                    <div className={styles.footerButton}>
                        <IconButton className={styles.actionButton}>
                            <Icon.İconComment style={{ color: 'green' }} />
                        </IconButton>
                        <span>3</span>
                    </div>

                    {/* like */}
                    <div className={styles.footerButton}>
                        <IconButton className={styles.actionButton}>
                            <Icon.Like style={{ color: 'var(--c-theme)' }} />
                        </IconButton>
                        <span>5</span>
                    </div>
                </footer>
            </div>
        </article>
    )
}

export default Card
