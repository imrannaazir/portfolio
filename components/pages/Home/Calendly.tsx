'use client'
import { useNavigation } from '@hooks/useNavigation'
import { FC, useEffect, useState } from 'react'
import { PopupModal } from 'react-calendly'



const Calendly: FC = () => {
    const [element, setelement] = useState<any>()
    const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL

    useEffect(() => {
        const rootElement = document.getElementById('render_calendly');
        if (rootElement) {
            setelement(rootElement)
        }
    }, [])


    const { IsOpen, setIsOpen } = useNavigation(state => ({
        IsOpen: state.IsOpen,
        setIsOpen: state.setIsOpen
    }))

    return (
        <div id='render_calendly'>
            <PopupModal
                url={calendlyUrl!}
                rootElement={element}
                open={IsOpen}
                onModalClose={setIsOpen}
            />
        </div>
    )
}

export default Calendly