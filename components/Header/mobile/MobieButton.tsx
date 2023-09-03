import { FC } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { memo } from 'react'

interface MobieButtonProps {
    handleClick: () => void
}

const MobieButton: FC<MobieButtonProps> = ({ handleClick }) => {
    return <div
        className='flex justify-center items-center gap-2'>
        <span
            onClick={() => handleClick()}
            className=" xl:hidden block hover:bg-slate-600 transition-all duration-200 rounded-full cursor-pointer p-2 bg-slate-700">
            <AiOutlineMenu
                size={25}
                color='rgb(203 213 225)'
            />
        </span>
    </div>
}

export default memo(MobieButton)