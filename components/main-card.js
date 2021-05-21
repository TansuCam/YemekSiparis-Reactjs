import React from 'react'
import Card from './card'

import style from './main-card.module.css'

function MainCard({ name }) {
    return (
        <div className={style.layout}>
            <div className={style.row}>
                <div className={style.column}>
                    <Card name={name} />
                </div>
                <div className={style.column}>
                    <Card name={name} />
                </div>
                <div className={style.column}>
                    <Card name={name} />
                </div>
                <div className={style.column}>
                    <Card name={name} />
                </div>
                <div className={style.column}>
                    <Card name={name} />
                </div>
                <div className={style.column}>
                    <Card name={name} />
                </div>
                <div className={style.column}>
                    <Card name={name} />
                </div>
                <div className={style.column}>
                    <Card name={name} />
                </div>
                <div className={style.column}>
                    <Card name={name} />
                </div>
                <div className={style.column}>
                    <Card name={name} />
                </div>
                <div className={style.column}>
                    <Card name={name} />
                </div>
                <div className={style.column}>
                    <Card name={name} />
                </div>
                <div className={style.column}>
                    <Card name={name} />
                </div>
                <div className={style.column}>
                    <Card name={name} />
                </div>
                <div className={style.column}>
                    <Card name={name} />
                </div>
                <div className={style.column}>
                    <Card name={name} />
                </div>
                <div className={style.column}>
                    <Card name={name} />
                </div>
                <div className={style.column}>
                    <Card name={name} />
                </div>
            </div>
        </div>
    )
}
export default MainCard
