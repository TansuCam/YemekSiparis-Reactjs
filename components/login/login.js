import React from 'react'
import styles from './login.module.css'
import Modal from '../modal-forms/modal'
import Nav from './nav'
import Courier from '../icon/Courier'
function Login() {
    return (
        <div className={styles.loginPage}>
            <Nav />
            <div className={styles.container}>
                <div className={styles.content}>
                    <h1>Yemek Sipariş</h1>
                    <h2>Hızlı ve Güvenli Alışverişin Adresi</h2>
                    <Modal />
                </div>
                <div className={styles.content}>
                    <Courier style={{ fontSize: 200 }} />
                </div>
            </div>
        </div>
    )
}
export default Login
