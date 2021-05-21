import React from 'react'
import Side from '../components/adminPanel/layout'
import Button from '../components/adminPanel/button'
import Comment from '../components/adminPanel/admincomments'

export default {
    title: 'Admin',
}
export const Sidebar = () => <Side></Side>
export const ButtonS = () => <Button name="home"></Button>
export const Comments = () => <Comment></Comment>
