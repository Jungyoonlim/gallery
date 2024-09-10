import React from 'react';

const ArrowIcon: React.FC<{ direction: 'left' | 'right' }> = ({ direction }) => {
    return (
        direction === 'left' ? (
            <svg width="64" height="42" viewBox="0 0 64 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_i_0_1)">
                    <path d="M63.5 21L1 21" stroke="black"/>
                </g>
                <path d="M19 1L1.03769 21.0339L19.0753 40.9999" stroke="black"/>
                <defs>
                    <filter id="filter0_i_0_1" x="1" y="20.5" width="62.5" height="5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_1"/>
                    </filter>
                </defs>
            </svg>
        ) : (
            <svg width="64" height="42" viewBox="0 0 64 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_i_0_1)">
                    <path d="M0.00299072 21.4497L62.4975 20.6179" stroke="black"/>
                </g>
                <path d="M44.7652 40.8557L62.4593 20.5846L44.1575 0.860331" stroke="black"/>
                <defs>
                    <filter id="filter0_i_0_1" x="-0.00366211" y="20.118" width="62.5078" height="5.83167" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="shape" result="effect1_innerShadow_0_1"/>
                    </filter>
                </defs>
            </svg>
        )
    );
}

export default ArrowIcon;