import * as React from 'react'

function SvgCourier(props) {
    return (
        <svg height="1em" viewBox="0 0 64 64" width="1em" {...props}>
            <path d="M58 44.14V61H36V44.14L47 41z" fill="#ff7956" />
            <path
                d="M36 8c0 2.21-4 8-4 8s-4-5.79-4-8a4 4 0 018 0z"
                fill="#ffda44"
            />
            <path d="M44 51h6v10h-6z" fill="#cd2a00" />
            <path d="M61 41v4l-14-4-14 4v-4l14-4z" fill="#ff5023" />
            <path
                d="M24 54h-1.5a11.5 11.5 0 010-23H43a5 5 0 000-10h-4v-2h4a7 7 0 010 14H22.5a9.5 9.5 0 000 19H24z"
                fill="#1a6fb0"
            />
            <path d="M32 10a2 2 0 112-2 2 2 0 01-2 2z" fill="#fff" />
            <g fill="#1a6fb0">
                <path d="M26 52h2v2h-2zM30 52h2v2h-2zM31 19h2v2h-2zM35 19h2v2h-2z" />
            </g>
            <path d="M14 3h7v3h-7zM3 3h7v3H3z" fill="#ff9811" />
            <path d="M3 6h18v15H3z" fill="#ffda44" />
            <path d="M6 15h4v2H6z" fill="#fff" />
            <path d="M3 6h18v1H3z" fill="#cc7400" />
            <path d="M14 6v2l-4 1V3h4z" fill="#d80027" />
        </svg>
    )
}

export default SvgCourier
