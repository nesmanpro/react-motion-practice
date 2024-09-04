'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { usePathname } from 'next/navigation';

const links = [
    { href: '/', label: 'home' },
    { href: '/work', label: 'work' },
    { href: '/about', label: 'about' },
    { href: '/news', label: 'news' },
    { href: '/thinking', label: 'thinking' },
    { href: '/pledge', label: 'pledge' },
    { href: '/contact', label: 'contact' },
];


export default function Header() {
    const path = usePathname();

    return (
        <div className='menu-container'>
            <h1><Link href='/'>Bam</Link></h1>
            <div className='menu-links'>
                <ul>
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className='link'>
                                {link.href === path &&
                                    (<motion.span
                                        layoutId='underline'
                                        className='span-link' />)}
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <button>
                <p><DotsHorizontalIcon /></p>
            </button>
        </div>
    )
}
