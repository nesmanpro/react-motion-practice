'use client'

import { useRef } from 'react';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';


export default function LocomotiveWrapper({ children }) {
    const containerRef = useRef(null)

    return (
        <LocomotiveScrollProvider
            options={
                {
                    smooth: true,
                    multiplier: .8,
                }
            }
            watch={
                [

                ]
            }
            containerRef={containerRef}
        >
            <div data-scroll-container ref={containerRef}>
                {children}
            </div>
        </LocomotiveScrollProvider>
    )
}
