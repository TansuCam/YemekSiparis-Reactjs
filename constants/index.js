import * as Icon from '../components/icon'
import React from 'react'

export default {
    MOBILE_SIZE: 700,
    TABLET_SIZE: 925,
}
export const SIDENAV = [
    {
        key: 'home',
        path: '/main',
        icon: <Icon.Home />,
        iconSelected: <Icon.HomeFill />,
        title: 'Ana Sayfa',
    },
    {
        key: 'basket',
        path: '/cart',
        icon: <Icon.Basket />,
        iconSelected: <Icon.BasketFill />,
        title: 'Sepetim',
    },
    {
        key: 'notification',
        path: '/notifications',
        icon: <Icon.Notification />,
        iconSelected: <Icon.NotificationFill />,
        title: 'Bildirimler',
    },
    {
        key: 'profile',
        path: '/profile',
        icon: <Icon.Profile />,
        iconSelected: <Icon.ProfileFill />,
        title: 'Profil',
    },
    {
        key: 'settings',
        path: '/settings',
        icon: <Icon.Settings />,
        iconSelected: <Icon.SettingsFill />,
        title: 'Ayarlar',
    },
]

export const CONTENT = [
    {
        key: 1,
        name: 'Bursa İskender',
        cont: 'acılı',
        deger: 18,
    },
    {
        key: 2,
        name: 'Tavuk Dürüm',
        cont: 'turşu,domates,marul',
        deger: 6,
    },
    {
        key: 3,
        name: 'Et Dürüm',
        cont: 'turşu,domates,marul',
        deger: 8,
    },
    {
        key: 4,
        name: 'Lahmacun',
        cont: 'yeşillik ile',
        deger: 6,
    },
]

export const ICONBAR = [
    {
        key: 'home',
        path: '/main',
        icon: <Icon.Home />,
        iconSelected: <Icon.HomeFill style={{ color: 'var(--c-theme)' }} />,
    },
    {
        key: 'basket',
        path: '/cart',
        icon: <Icon.Basket />,
        iconSelected: <Icon.BasketFill style={{ color: 'var(--c-theme)' }} />,
    },
    {
        key: 'profile',
        path: '/profile',
        icon: <Icon.Profile />,
        iconSelected: <Icon.ProfileFill style={{ color: 'var(--c-theme)' }} />,
    },
    {
        key: 'settings',
        path: '/settings',
        icon: <Icon.Settings />,
        iconSelected: <Icon.SettingsFill style={{ color: 'var(--c-theme)' }} />,
    },
]

export const ADMINSIDEBAR = [
    {
        key: 'home',
        path: '/adminHome',
        icon: <Icon.Home />,
        iconSelected: <Icon.HomeFill />,
        title: 'Ana Sayfa',
    },
    {
        key: 'products',
        path: '/adminProduct',
        icon: <Icon.Products />,
        iconSelected: <Icon.ProductsFill />,
        title: 'Ürünler',
    },
    {
        key: 'basket',
        path: '/adminCart',
        icon: <Icon.Basket />,
        iconSelected: <Icon.BasketFill />,
        title: 'Siparişler',
    },
    {
        key: 'notification',
        path: '/adminComment',
        icon: <Icon.Notification />,
        iconSelected: <Icon.NotificationFill />,
        title: 'Yorumlar',
    },
]
