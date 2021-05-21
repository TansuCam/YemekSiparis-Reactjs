import React from 'react'
import Layout from '../components/layout/layout'
import Menu from '../components/menu-content'
import Rest from '../components/rest-card/rest-card'

function MenuPage() {
    return (
        <Layout>
            <Rest />
            <Menu
                tableName="Kebap Çeşitleri"
                foodName="Bursa İskender "
                foodContent="Özel sos, yoğurt, soğan, kıvırcık marul, domates, salata"
                price="25"
            />
            <Menu
                tableName="Salata Çeşitleri"
                foodName="Mevsim Salata"
                foodContent="Havuç, kıvırcık marul, domates, biber, isteğe göre soğan"
                price="10"
            />
        </Layout>
    )
}

export default MenuPage
