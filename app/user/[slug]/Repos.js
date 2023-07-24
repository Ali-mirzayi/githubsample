import Link from 'next/link'
import React from 'react'

export default function Repos({repos}) {
  return (
    <>{
        repos.map(repo => (
            <div key={repo.id} className='my-2 border-dotted border border-[#ccc] w-full py-3 px-3'>
                <Link href={repo.html_url} legacyBehavior><a className='text-danger hover:text-slate-500 font-semibold'>{repo.name}</a></Link>
            </div>
        ))
    }</>
  )
}