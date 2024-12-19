import { FC } from 'react'

const SocialVariants: FC = () => {
  return <div className='w-full mt-[30px]'>
    <div className='flex items-center space-x-2'>
        <div className='w-full h-[1px] bg-Gray'></div>
        <div className='text-Gray'>или</div>
        <div className='w-full h-[1px] bg-Gray'></div>
    </div>
    <div className='flex space-x-7 mx-auto w-fit mt-3'>
        <div className='w-[50px] h-[50px] rounded-md bg-Red'></div>
        <div className='w-[50px] h-[50px] rounded-md bg-Red'></div>
    </div>
  </div>
}

export default SocialVariants