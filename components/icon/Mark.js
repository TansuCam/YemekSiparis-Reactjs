import * as React from 'react'

function SvgMark(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 20 20"
            fill="none"
            {...props}
        >
            <path
                d="M16.583 19.583a.629.629 0 01-.368-.12L10 14.94l-6.215 4.525a.625.625 0 01-.993-.506V4.667c0-1.034.841-1.875 1.875-1.875h10.665c1.033 0 1.875.841 1.875 1.875v14.291a.624.624 0 01-.625.625h.001zM10 13.542c.13 0 .258.04.367.12l5.591 4.069V4.667a.627.627 0 00-.625-.625H4.667a.627.627 0 00-.625.625V17.73l5.591-4.07a.617.617 0 01.367-.12z"
                fill="currentColor"
            />
        </svg>
    )
}

export default SvgMark
