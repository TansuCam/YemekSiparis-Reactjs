import * as React from 'react'

function SvgMarkFill(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 20 20"
            fill="none"
            {...props}
        >
            <path
                d="M16.583 19.583c-.166 0-.25 0-.333-.083L10 14.917l-6.25 4.5c-.167.166-.417.166-.667.083-.166-.083-.333-.333-.333-.583V4.667c0-1 .833-1.834 1.833-1.834H15.25c1 0 1.833.834 1.833 1.834v14.25c0 .25-.166.416-.333.583 0 .083-.083.083-.167.083z"
                fill="currentColor"
            />
        </svg>
    )
}

export default SvgMarkFill
