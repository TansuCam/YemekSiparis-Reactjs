import React from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import ThemeButton from '../theme-button'

import Button from '../button'
import styles from './modal.module.css'
import Link from 'next/link'

function ModalForm({ children, ...props }) {
    return (
        <div>
            <Popup
                trigger={
                    <ThemeButton className={styles.button}>
                        {' '}
                        Üye Olun{' '}
                    </ThemeButton>
                }
                modal
                nested
            >
                {(close) => (
                    <div className={styles.modal}>
                        <Button className={styles.close} onClick={close}>
                            &times;
                        </Button>
                        <div className={cn(styles.header)}> KAYDOL </div>
                        <div className={cn(styles.content)}>
                            {' '}
                            <form>
                                <div className={styles.gridContainer}>
                                    <input
                                        type="text"
                                        id="lname"
                                        name="lname"
                                        placeholder="Ad"
                                    />
                                    <input
                                        type="text"
                                        id="lname"
                                        name="lname"
                                        placeholder="Soyad"
                                    />
                                </div>
                                <div className={styles.gridContainer}>
                                    <input
                                        type="text"
                                        id="lname"
                                        name="lname"
                                        placeholder="E-posta"
                                    />
                                    <input
                                        type="password"
                                        id="lname"
                                        name="lname"
                                        placeholder="Parola"
                                    />
                                </div>
                                <select className={styles.cins}>
                                    <option value="0"> Cinsiyet </option>
                                    <option value="1"> Erkek </option>
                                    <option value="1"> Kadın </option>
                                </select>

                                <div className={styles.gridContainer}>
                                    <select>
                                        {' '}
                                        <option value="0">
                                            Lütfen Bir İl Seçiniz
                                        </option>
                                    </select>
                                    <select>
                                        {' '}
                                        <option value="0">
                                            Lütfen Bir İl Seçiniz
                                        </option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div className={styles.actions}>
                            <ThemeButton className={styles.register}>
                                Kayıt Ol
                            </ThemeButton>
                        </div>
                    </div>
                )}
            </Popup>

            <Popup
                trigger={
                    <p className={styles.buttonLogin}>
                        Zaten üye misiniz? <small> Giriş Yapın</small>{' '}
                    </p>
                }
                modal
                nested
            >
                {(close) => (
                    <div className={styles.modal}>
                        <Button className={styles.close} onClick={close}>
                            &times;
                        </Button>
                        <div className={styles.header}> GİRİŞ YAP </div>
                        <div className={cn(styles.content, styles.clogin)}>
                            {' '}
                            <form>
                                <div className={styles.gridContainerLogin}>
                                    <input
                                        type="text"
                                        id="lname"
                                        name="lname"
                                        placeholder="E-posta"
                                    />
                                    <input
                                        type="password"
                                        id="lname"
                                        name="lname"
                                        placeholder="Parola"
                                    />
                                </div>
                            </form>
                        </div>
                        <div className={styles.actions}>
                            <Link href="/main">
                                <a style={{ textDecoration: 'none' }}>
                                    <ThemeButton className={styles.register}>
                                        Giriş Yap
                                    </ThemeButton>
                                </a>
                            </Link>
                        </div>
                    </div>
                )}
            </Popup>
        </div>
    )
}

export default ModalForm
