import * as React from 'react'

function SvgMessageFill(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 20 20"
            fill="none"
            {...props}
        >
            <path
                d="M9.625 10.068a.675.675 0 00.75 0l7.958-5.305v-.18a1.878 1.878 0 00-1.875-1.875H3.542a1.878 1.878 0 00-1.875 1.875v.164l7.958 5.321z"
                fill="currentColor"
            />
            <path
                d="M11.05 11.08a1.888 1.888 0 01-2.1-.002L1.667 6.21v9.725c0 1.033.841 1.875 1.875 1.875h12.916a1.878 1.878 0 001.875-1.875v-9.71l-7.283 4.853v.001z"
                fill="currentColor"
            />
        </svg>
    )
}

export default SvgMessageFill
