'use client'
import { useNavigation } from '@hooks/useNavigation'
import { FC, useEffect, useState } from 'react'
import { PopupModal } from 'react-calendly'

interface CalendlyProps {

}




const Calendly: FC<CalendlyProps> = ({ }) => {
    const [element, setelement] = useState<any>()

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
                url="https://calendly.com/nayangit000"
                rootElement={element}
                open={IsOpen}
                onModalClose={setIsOpen}
            />
        </div>
    )
}

export default Calendly