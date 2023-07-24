import Link from 'next/link'
import React from 'react'
import { FaGithub } from 'react-icons/fa'

export default function Header() {
  return (
    <header className='bg-primary flex justify-between items-center w-full opacity-90 py-[0.7rem] px-[2rem] text-white fixed top-0 z-10'>
      <div className='flex items-center justify-center'>
        <FaGithub size={20} className='mr-2' />
        <h1>Github Search</h1>
      </div>
      <ul className='flex'>
        <li className='px-[0.45rem]'><Link href={'/'}>Home</Link></li>
        <li className='px-[0.45rem]'><Link href={'/about'}>About</Link></li>
      </ul>
    </header>
  )
}