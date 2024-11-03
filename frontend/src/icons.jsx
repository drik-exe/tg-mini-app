import React from 'react';
import { Icon } from "@chakra-ui/react";

const icons = {
    burger: ({ color }) => (
        <Icon viewBox="0 0 18 14" color={color} boxSize="18px">
            <svg>
                <line
                    x1="1.625"
                    y1="1"
                    x2="16.625"
                    y2="1"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <line
                    x1="1.625"
                    y1="7"
                    x2="16.625"
                    y2="7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
                <line
                    x1="1.625"
                    y1="13"
                    x2="16.625"
                    y2="13"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                />
            </svg>
        </Icon>
    ),
    search: ({ color }) => (
        <Icon viewBox="0 0 17 17" color={color} boxSize="18px">
            <svg>
                <g clipPath="url(#clip0_8_84)">
                    <circle cx="7.71429" cy="7.71429" r="6.71429" stroke="currentColor" strokeWidth="2" fill="none" />
                    <path d="M12.9999 13L16.9999 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </g>
                <defs>
                    <clipPath id="clip0_8_84">
                        <rect width="18" height="18" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </Icon>
    ),
    profile: ({ color }) => (
        <Icon viewBox="0 0 17 21" color={color} boxSize="22px">
            <svg>
                <circle cx="8.54884" cy="6.95338" r="5.95338" stroke="currentColor" strokeWidth="2" fill="none" />
                <path fillRule="evenodd" clipRule="evenodd" d="M16.3647 20.3222C16.8416 20.0409 16.9868 19.424 16.6693 18.9704C14.8665 16.394 11.8768 14.7091 8.4936 14.7091C5.11041 14.7091 2.12074 16.394 0.317891 18.9704C0.000446365 19.424 0.145615 20.0409 0.622483 20.3222C1.11463 20.6126 1.73499 20.4134 2.07419 19.9536C3.52577 17.9856 5.86061 16.7091 8.4936 16.7091C11.1266 16.7091 13.4614 17.9856 14.913 19.9536C15.2522 20.4134 15.8726 20.6126 16.3647 20.3222Z" fill="currentColor" />
            </svg>
        </Icon>
    ),
    changePicture: ({ color }) => (
        <Icon viewBox="0 0 26 20" color={color} boxSize="32px">
            <svg>
                <path d="M1.5 6.75C1.5 5.09315 2.84315 3.75 4.5 3.75H5.34688C6.48223 3.75 7.58379 3.3636 8.47035 2.65434L9.40404 1.90739C9.93598 1.48184 10.5969 1.25 11.2781 1.25H13H14.7219C15.4031 1.25 16.064 1.48184 16.596 1.90739L17.5296 2.65434C18.4162 3.3636 19.5178 3.75 20.6531 3.75H21.5C23.1569 3.75 24.5 5.09315 24.5 6.75V15.75C24.5 17.4069 23.1569 18.75 21.5 18.75H4.5C2.84315 18.75 1.5 17.4069 1.5 15.75V6.75Z" stroke="currentColor" strokeWidth="2" fill="none" />
                <circle cx="13" cy="10.25" r="4.5" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
        </Icon>
    ),
};

export default icons;
