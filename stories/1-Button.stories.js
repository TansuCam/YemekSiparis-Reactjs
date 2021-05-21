import React from 'react'
import Button from '../components/button'
import NavigationButton from '../components/navigation/navigation-button'
import Navigation from '../components/navigation/navigation'
import { HomeFill } from '../components/icon'
import TitleBold from '../components/text-title'
import ThemeButton from '../components/theme-button'
import Stack from '../components/stack'

import IconBar from '../components/iconbar/iconbar'

export default {
    title: 'Button',
}
export const Normal = () => <Button>Save</Button>

export const Theme = () => (
    <Stack column>
        <ThemeButton>Save</ThemeButton>
        <ThemeButton full>Save Full</ThemeButton>
        <ThemeButton full big>
            Save Full And Big
        </ThemeButton>
    </Stack>
)

export const NavButton = () => (
    <NavigationButton>
        <HomeFill />
        <TitleBold>Ana Sayfa</TitleBold>
    </NavigationButton>
)

export const Nav = () => <Navigation selectedKey="home" />

export const Icon = () => <IconBar></IconBar>
