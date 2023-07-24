'use client'

import { createContext, useState } from 'react';
import { MantineProvider } from '@mantine/core';

export const userContext = createContext({});

export default function UserProvider({ children }) {
    const [data, setData] = useState({ });
    const [status, setStatus] = useState({ loading: false, isOK: undefined, isEmpty: false });

    return <userContext.Provider value={{ data, setData,status, setStatus}}>
        <MantineProvider theme={{ colorScheme: 'light' }}>
            {children}
        </MantineProvider>
    </userContext.Provider>
}