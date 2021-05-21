import React from 'react'
import Point from '../components/rest-card/point'
import PointBox from '../components/rest-card/point-box'
import Min from '../components/rest-card/min'
import Rest from '../components/rest-card/rest-card'

export default {
    title: 'Restaurant',
}
export const PointCard = () => <Point pointName="Servis" point="7,5"></Point>
export const PointCardBox = () => <PointBox></PointBox>
export const RestaurantCard = () => <Rest></Rest>
