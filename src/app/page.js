'use client'
import { motion } from 'framer-motion';
import Link from 'next/link';
import PageWrapper from '../components/PageWrapper';

export default function Home() {

  return (

    <PageWrapper className='home-container' >
      <h1 className="">Welcome to my Portfolio</h1>
      <p className="">
        We craft furniture by utilising what mother earth gave us. And we
        build websites on the side ;).
      </p>

      <div>

        <Link
          href="/work"
          className="button"
        >
          More about me
        </Link>
      </div>
    </PageWrapper >

  );
}
