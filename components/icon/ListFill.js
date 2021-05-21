import * as React from 'react'

function SvgListFill(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 20 20"
            fill="none"
            {...props}
        >
            <path
                d="M16.458 1.667H3.542c-1.031 0-1.875.844-1.875 1.875v12.916c0 1.031.844 1.875 1.875 1.875h12.916c1.031 0 1.875-.844 1.875-1.875V3.542c0-1.031-.844-1.875-1.875-1.875zM9.167 13.958H5.833a.625.625 0 010-1.25h3.334a.625.625 0 010 1.25zm5-3.333H5.833a.625.625 0 010-1.25h8.334a.625.625 0 010 1.25zm0-3.333H5.833a.625.625 0 010-1.25h8.334a.625.625 0 010 1.25z"
                fill="currentColor"
            />
        </svg>
    )
}

export default SvgListFill
