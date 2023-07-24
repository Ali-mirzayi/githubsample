'use client'
import { Badge } from '@mantine/core';

export default function Badges({user}) {
  return (
    <div className='flex justify-center items-center'>
        <Badge className='mx-2' size="lg" radius="sm" color='red' variant="filled">Folowers : {user.followers}</Badge>
        <Badge className='mx-2 text-dark bg-[#f4f4f4]' size="lg" radius="sm" variant="outline" color="gray">Following : {user.following}</Badge>
        <Badge className='mx-2' size="lg" radius="sm" color='green' variant="filled">Public Repos : {user.public_repos}</Badge>
        <Badge className='mx-2' size="lg" radius="sm" color='dark' variant="filled">Public Gists : {user.public_gists}</Badge>
    </div>
  )
}
