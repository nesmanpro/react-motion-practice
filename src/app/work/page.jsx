'use client'
import PageWrapper from '@/components/PageWrapper';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons';



export default function Page() {

    const [isHovered, setHovered] = useState(false);

    return (
        <PageWrapper className='scroll-container'>
            <section className='section-description'>
                <div>
                    <h1>Foldy</h1>
                    <h3>$3,033</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
                <div>
                    <h3>Description</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur fugit, dolorem corrupti totam quaerat sit eius nemo, eos aperiam molestiae dignissimos provident ex modi sapiente. Quod alias doloremque expedita pariatur?</p>
                </div>
            </section>
            <section
                className='section-images'
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}>
                <motion.div
                    className='arrow-container'
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        y: isHovered ? 0 : 10
                    }}>
                    <ArrowLeftIcon className='arrow arrow-left' />
                    <ArrowRightIcon className='arrow arrow-right' />
                </motion.div>
                <motion.div
                    className='carousel-container'>
                    <motion.div className='inner-carousel'
                    >
                        <motion.img
                            initial={{ x: 20, opacity: 0, }}
                            animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
                            exit={{ x: 20, opacity: 0, }}
                            src='/sofaverde.jpg' alt="Chair number 1" />
                        <motion.img
                            initial={{ x: 1500, opacity: 0, }}
                            animate={{ x: 1500, opacity: 1, transition: { delay: 0.3 } }}
                            exit={{ x: 20, opacity: 0, }}
                            src='/sofarojo.jpg' alt="Chair number 2" />
                    </motion.div>
                </motion.div>
            </section>
        </PageWrapper>
    )
}
