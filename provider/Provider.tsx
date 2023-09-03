'use client'
import { FC } from 'react'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';



interface ProviderProps {
    children: React.ReactNode
}

const Provider: FC<ProviderProps> = ({ children }) => {
    return <>
        {children}
        <ProgressBar
            height="2px"
            color="#00EDED"
            options={{ showSpinner: false }}
            shallowRouting
        />
    </>
}

export default Provider