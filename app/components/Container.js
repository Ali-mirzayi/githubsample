import React from 'react'

export default function Container(props) {
  return (
    <main {...props} className="flex min-h-screen flex-col items-center justify-start py-8">
        {props.children}
    </main>
  )
}