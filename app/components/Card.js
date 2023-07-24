import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Card({ data }) {
  return (
    <div style={{ padding: "1rem", border: "1px dotted #ccc", margin: "0.7rem 0", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <div style={{ width: "50px", height: "50px", position: "relative", borderRadius: "50%", overflow: "hidden" }}>
        <Image src={data.avatar_url} fill alt={data.avatar_url} />
      </div>
      <h3>{data.login}</h3>
      <div className='my-1 text-white bg-dark opacity-100 hover:opacity-80 transition-opacity duration-200'>
        <Link href={`/user/${data.login}`} legacyBehavior>
          <a className='w-full py-2 px-4 text-xs leading-7'>
            More
          </a>
        </Link>
      </div>
    </div>
  )
}