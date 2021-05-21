import React from 'react'
import Link from 'next/link'
import Layout from '../components/layout/layout'
import MainCard from '../components/main-card'

function MainPage() {
    return (
        <Layout>
            <Link href="/menu">
                <a>
                    <MainCard name="Burger King" />
                </a>
            </Link>
        </Layout>
    )
}

export default MainPage
