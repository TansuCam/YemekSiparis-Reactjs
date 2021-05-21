import React from 'react'
import Adress from '../components/user-profile/adress'
import User from '../components/user-profile/user'
import Layout from '../components/user-profile/layout'

export default {
    title: 'Profile',
}
export const ProfilePage = () => (
    <Adress
        adressTitle="Ev"
        adress="Akşemsettin mah. Su Kenarı Cd Ova Sokak No:4 Akşemsettin
mah. Su Kenarı Cd Ova Sokak No:4 Sultanbeyli/İstanbul"
        phone="5550003405"
        mail="tansu.cam.98@gmail.com"
    ></Adress>
)

export const UserCard = () => <User></User>
export const ProfileLayout = () => <Layout></Layout>
