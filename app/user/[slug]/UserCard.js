import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Badges from './Badges'

export default function UserCard({user}) {
  return (
    <>
    <section className='grid grid-cols-2 p-4 my-3 border-dotted border border-[#ccc] w-full'>
        <div className='flex flex-col items-center justify-center text-center'>
          <div className='relative w-[150px] h-[150px] rounded-full overflow-hidden'>
            <Image src={user.avatar_url} fill/>
          </div>
          <p>{user.login}</p>
          <p>{user.location}</p>
        </div>
        <div>
          {user.bio ? <h3>Bio :</h3> : <h3 style={{height:"30px"}}/>}
          <p>{user.bio}</p>
          <div className='my-4'>
            <Link href={user.html_url} legacyBehavior><a className='text-white bg-dark leading-7 hover:bg-[#555] px-5 py-3'>Visit Github Page</a></Link>
          </div>
            <p>{`Login : ${user.login}`}</p>
            <p>{user.company && `company : ${user.company}`}</p>
            <p>{user.blog && `website : ${user.blog}`}</p>
        </div>
    </section>
    <section className='my-1 border-dotted border border-[#ccc] w-full py-5 flex justify-center items-center cursor-default'>
      <Badges user={user} />
    </section>
    </>
  )
}