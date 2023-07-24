'use client';

import { useContext } from 'react';
import Result from './Result';
import { userContext } from '../context';
import { Notification } from '@mantine/core';
import { PiWarningCircleFill } from 'react-icons/pi';
import { useTimeout } from '@mantine/hooks';

export default function FormGit() {
  const { setData, status, setStatus } = useContext(userContext);
  const { start } = useTimeout(() => setStatus(prevState => ({ ...prevState, isEmpty: false })), 2500);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (e.target.text.value.trim() === "") {
      return setStatus(prevState => ({ ...prevState, isEmpty: true }));
    };
    setStatus(prevState => ({ ...prevState, loading: true }));
    try {
      await fetch(`https://api.github.com/search/users?q=${e.target.text.value}&client_id=undefined&client_secret=undefined`)
        .then((res) => {
          if (!res.ok) throw new Error("Failed to send message");
          return res.json();
        }).then(res => setData(res));
      setStatus(prevState => ({ ...prevState, loading: false, isOK: true }));
    } catch (error) {
      setStatus(prevState => ({ ...prevState, loading: false, isOK: false }));
      console.log(error);
    }
  };

  if (status.isEmpty) {
    start();
  }

  return (
    <>
      {status.isEmpty ? <Notification className='mb-5 bg-light' withCloseButton={false} color="gray" withBorder icon={<PiWarningCircleFill size={50} />}>Please enter somthing</Notification> : <div />}
      <form className='w-full' onSubmit={(e) => onSubmit(e)}>
        <input type='text' name='text' placeholder='Search Users...' autoComplete='off' className='w-full border-[#ccc] border px-[0.6rem] py-[0.4rem] text-base' />
        <input type='submit' className='bg-dark w-full my-4 text-white py-2 cursor-pointer opacity-100 hover:opacity-80 transition-opacity duration-200' />
      </form>
      <Result />
    </>
  )
}