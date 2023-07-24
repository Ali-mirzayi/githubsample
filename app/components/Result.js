'use client'
import { useContext } from 'react'
import Card from './Card'
import { Loader } from '@mantine/core'
import { userContext } from '../context';

export default function Result() {
    const { data, setData,status } = useContext(userContext);
    return (
        <>
            {
                status.isOK && data.items ? <div><div className='px-5 py-3 bg-light w-full text-center hover:bg-gray-300 cursor-pointer' onClick={() => setData({})}>Clear</div><div className='grid grid-cols-3 gap-6'>{data.items.map(e => (
                    <Card key={e.id} data={e} />
                ))}</div></div>
                    : status.loading ? <div className='w-full h-72 flex justify-center items-center'><Loader variant="dots" color='#555' size={50} /></div> :
                <div />
            }
        </>
    )
}
