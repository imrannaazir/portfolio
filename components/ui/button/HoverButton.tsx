import { cn } from '@lib/utils'
import { FC } from 'react'

interface HoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string,
    children?: React.ReactNode
    labelclassName?: string,
}

const HoverButton: FC<HoverButtonProps> = ({ children, labelclassName, className, label, ...props }) => {
    return <button className={cn("cursor-pointer relative inline-flex items-center justify-center overflow-hidden  font-medium  rounded-[10px] group px-5 py-2 text-white bg-gray-600 lg:text-lg", className)} {...props}>
        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-blue-600 rounded-full group-hover:w-56 group-hover:h-56" />
        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg" />
        <span className={cn('relative transition-colors duration-200', labelclassName)}>{label}</span>
        {children}
    </button>
}

export default HoverButton