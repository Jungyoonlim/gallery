import React from 'react';

const ArrowIcon: React.FC<{ direction: 'left' | 'right' }> = ({ direction }) => {
    return (
        <svg width="64" height="40" viewBox="0 0 64 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_i_0_1)">
                <path d="M63.5 20L1 20" stroke="black"/>
                <line x1="0.616978" y1="20.2127" x2="17.0081" y2="0.67859" stroke="black"/>
                <line x1="0.383022" y1="19.6786" x2="16.771" y2="39.209" stroke="black"/>
            </g>
            <defs>
                <filter id="filter0_i_0_1" x="1" y="19.5" width="62.5" height="5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
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
}

export default ArrowIcon;