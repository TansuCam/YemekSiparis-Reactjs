import * as React from 'react'

function SvgClock(props) {
    return (
        <svg
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            fill="none"
            {...props}
        >
            <path
                d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z"
                fill="url(#clock_svg__paint0_linear)"
            />
            <path
                d="M12 23.611c6.413 0 11.61-5.198 11.61-11.611S18.414.389 12 .389C5.587.389.389 5.587.389 12s5.198 11.611 11.61 11.611z"
                fill="url(#clock_svg__paint1_linear)"
            />
            <path
                d="M12 22.471c5.783 0 10.472-4.688 10.472-10.471S17.783 1.528 12 1.528C6.217 1.528 1.53 6.217 1.53 12c0 5.783 4.688 10.471 10.471 10.471z"
                fill="url(#clock_svg__paint2_linear)"
            />
            <path
                d="M12 22.471c5.783 0 10.472-4.688 10.472-10.471S17.783 1.528 12 1.528C6.217 1.528 1.53 6.217 1.53 12c0 5.783 4.688 10.471 10.471 10.471z"
                fill="url(#clock_svg__paint3_radial)"
            />
            <path
                d="M22.353 13.581l-3.5-3.471-.993.244-5.076-5.032a.51.51 0 00-.247-.247.51.51 0 00-.461-.295h-.152a.51.51 0 00-.51.51v5.94a.965.965 0 00-.34 1.05l-3.3 3.3a.51.51 0 000 .72l6.025 6.017a10.48 10.48 0 008.554-8.736z"
                fill="url(#clock_svg__paint4_linear)"
            />
            <path
                d="M22.352 13.581a10.479 10.479 0 01-8.553 8.736l-5.91-5.902a.51.51 0 00.714-.007l3.442-3.443a.966.966 0 00.922-.96l5.988-1.474a.217.217 0 00.16-.161l3.237 3.211z"
                fill="url(#clock_svg__paint5_linear)"
            />
            <path
                d="M12.076 12h-.152a.51.51 0 01-.51-.51v-6.2a.51.51 0 01.51-.51h.152a.51.51 0 01.51.51v6.2a.51.51 0 01-.51.51z"
                fill="url(#clock_svg__paint6_linear)"
            />
            <path
                d="M12.076 12l.107.107c.199.199.199.522 0 .72l-3.58 3.58a.51.51 0 01-.721 0l-.107-.106a.51.51 0 010-.721l3.58-3.58a.51.51 0 01.72 0z"
                fill="url(#clock_svg__paint7_linear)"
            />
            <path
                d="M19.114 10.268a.217.217 0 01-.158.262l-6.848 1.687a.217.217 0 01-.103-.421l6.847-1.686a.217.217 0 01.262.158z"
                fill="url(#clock_svg__paint8_linear)"
            />
            <path
                d="M12 12.968a.968.968 0 100-1.936.968.968 0 000 1.936z"
                fill="url(#clock_svg__paint9_linear)"
            />
            <path
                d="M12.037 4.163h-.074a.548.548 0 01-.548-.548v-.682c0-.303.245-.548.548-.548h.074c.303 0 .548.245.548.548v.682a.548.548 0 01-.548.548z"
                fill="url(#clock_svg__paint10_linear)"
            />
            <path
                d="M12.037 21.615h-.074a.548.548 0 01-.548-.548v-.681c0-.303.245-.549.548-.549h.074c.303 0 .548.246.548.549v.681a.548.548 0 01-.548.548z"
                fill="url(#clock_svg__paint11_linear)"
            />
            <path
                d="M19.837 12.037v-.074c0-.303.246-.548.548-.548h.682c.303 0 .548.245.548.548v.074a.548.548 0 01-.548.548h-.682a.548.548 0 01-.548-.548z"
                fill="url(#clock_svg__paint12_linear)"
            />
            <path
                d="M2.385 12.037v-.074c0-.303.245-.548.548-.548h.682c.302 0 .548.245.548.548v.074a.548.548 0 01-.548.548h-.682a.548.548 0 01-.548-.548z"
                fill="url(#clock_svg__paint13_linear)"
            />
            <defs>
                <linearGradient
                    id="clock_svg__paint0_linear"
                    x1={12}
                    y1={29.29}
                    x2={12}
                    y2={-1.136}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#fff" />
                    <stop offset={1} stopColor="#E8EFEE" />
                </linearGradient>
                <linearGradient
                    id="clock_svg__paint1_linear"
                    x1={12}
                    y1={-4.73}
                    x2={12}
                    y2={24.709}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#fff" />
                    <stop offset={1} stopColor="#E8EFEE" />
                </linearGradient>
                <linearGradient
                    id="clock_svg__paint2_linear"
                    x1={6.313}
                    y1={6.312}
                    x2={17.136}
                    y2={17.135}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#1ACEB8" />
                    <stop offset={1} stopColor="#0BBFBA" />
                </linearGradient>
                <linearGradient
                    id="clock_svg__paint4_linear"
                    x1={13.514}
                    y1={13.391}
                    x2={8.347}
                    y2={8.224}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#1ACEB8" stopOpacity={0} />
                    <stop offset={1} stopColor="#04959C" />
                </linearGradient>
                <linearGradient
                    id="clock_svg__paint5_linear"
                    x1={18.352}
                    y1={19.298}
                    x2={11.023}
                    y2={9.542}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={0} stopColor="#1ACEB8" stopOpacity={0} />
                    <stop offset={1} stopColor="#04959C" />
                </linearGradient>
                <linearGradient
                    id="clock_svg__paint6_linear"
                    x1={12}
                    y1={2.081}
                    x2={12}
                    y2={12.616}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#fff" />
                    <stop offset={1} stopColor="#E8EFEE" />
                </linearGradient>
                <linearGradient
                    id="clock_svg__paint7_linear"
                    x1={10.986}
                    y1={13.197}
                    x2={7.471}
                    y2={16.711}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#fff" />
                    <stop offset={1} stopColor="#E8EFEE" />
                </linearGradient>
                <linearGradient
                    id="clock_svg__paint8_linear"
                    x1={11.83}
                    y1={12.031}
                    x2={20.428}
                    y2={9.986}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#D63305" />
                    <stop offset={0.366} stopColor="#CF3004" />
                    <stop offset={0.899} stopColor="#BC2602" />
                    <stop offset={1} stopColor="#B72401" />
                </linearGradient>
                <linearGradient
                    id="clock_svg__paint9_linear"
                    x1={12}
                    y1={14.016}
                    x2={12}
                    y2={10.962}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#97AAAA" />
                    <stop offset={1} stopColor="#E8EFEE" />
                </linearGradient>
                <linearGradient
                    id="clock_svg__paint10_linear"
                    x1={12}
                    y1={1.719}
                    x2={12}
                    y2={4.314}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#fff" />
                    <stop offset={1} stopColor="#E8EFEE" />
                </linearGradient>
                <linearGradient
                    id="clock_svg__paint11_linear"
                    x1={12}
                    y1={19.173}
                    x2={12}
                    y2={21.767}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#fff" />
                    <stop offset={1} stopColor="#E8EFEE" />
                </linearGradient>
                <linearGradient
                    id="clock_svg__paint12_linear"
                    x1={22.202}
                    y1={29.296}
                    x2={19.607}
                    y2={-1.13}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#fff" />
                    <stop offset={1} stopColor="#E8EFEE" />
                </linearGradient>
                <linearGradient
                    id="clock_svg__paint13_linear"
                    x1={4.748}
                    y1={29.296}
                    x2={2.154}
                    y2={-1.13}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#fff" />
                    <stop offset={1} stopColor="#E8EFEE" />
                </linearGradient>
                <radialGradient
                    id="clock_svg__paint3_radial"
                    cx={0}
                    cy={0}
                    r={1}
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(12.706 12.916) scale(11.3059)"
                >
                    <stop offset={0} stopColor="#1ACEB8" stopOpacity={0} />
                    <stop
                        offset={0.504}
                        stopColor="#19CCB7"
                        stopOpacity={0.503}
                    />
                    <stop
                        offset={0.685}
                        stopColor="#17C5B4"
                        stopOpacity={0.685}
                    />
                    <stop
                        offset={0.814}
                        stopColor="#12BAAE"
                        stopOpacity={0.814}
                    />
                    <stop
                        offset={0.918}
                        stopColor="#0CA9A6"
                        stopOpacity={0.918}
                    />
                    <stop offset={1} stopColor="#04959C" />
                </radialGradient>
            </defs>
        </svg>
    )
}

export default SvgClock
