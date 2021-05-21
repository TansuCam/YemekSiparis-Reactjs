import * as React from 'react'

function SvgNotification(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 20 20"
            fill="none"
            {...props}
        >
            <path
                d="M18.08 13.723c-.016-.013-1.782-1.366-1.752-5.025.017-2.11-.676-3.985-1.955-5.279-1.146-1.16-2.698-1.802-4.369-1.81h-.01c-1.67.008-3.222.65-4.369 1.811C4.347 4.714 3.652 6.588 3.67 8.698c.03 3.609-1.683 4.973-1.752 5.025a.626.626 0 00.373 1.128h4.1a3.62 3.62 0 003.608 3.466c1.944 0 3.522-1.541 3.606-3.466h4.102a.621.621 0 00.591-.429.623.623 0 00-.219-.698h.002zM10 17.065a2.367 2.367 0 01-2.357-2.215h4.714A2.37 2.37 0 0110 17.067v-.002zM3.65 13.6c.617-.943 1.29-2.523 1.27-4.913-.015-1.8.537-3.319 1.594-4.39.911-.922 2.15-1.433 3.486-1.439 1.336.007 2.572.517 3.483 1.44 1.059 1.071 1.611 2.589 1.596 4.39-.02 2.39.654 3.97 1.271 4.913H3.65V13.6z"
                fill="currentColor"
            />
        </svg>
    )
}

export default SvgNotification
