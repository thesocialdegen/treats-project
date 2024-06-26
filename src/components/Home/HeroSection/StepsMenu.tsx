import { poppins } from '@/utils/fonts'
import ImageIcon from '@/ui-components/ImageIcon'
import React from 'react'

const StepsMenu = () => {
  return (
    <article className='-ml-[104px] -mt-[248px] w-full relative flex justify-center'>
        <div>
            <ImageIcon src='/assets/icons/steps.png' alt='treats-steps' imgClassName='w-[1578px]'/>
            <div className='-mt-[530px] ml-[100px] absolute flex scale-[15%] w-[1570px]'>
            <ImageIcon src='/assets/GIFs/1.gif' alt='step-1' imgClassName='absolute -left-[1920px]'/>
            <ImageIcon src='/assets/GIFs/2.gif' alt='step-2' imgClassName='absolute -top-[192px] left-[425px]'/>
            <ImageIcon src='/assets/GIFs/3.gif' alt='step-3' imgClassName='absolute -top-[330px] left-[2650px]'/>
            </div>
            <div className='-mt-[400px] ml-[570px] absolute flex'>
                <div className=''>
                <h1 className='text-4xl text-black'>
                    Earn TREATS
                </h1>
                <p className={`${poppins.className} mt-4 w-[230px] text-black text-2xl`}>
                    Participate in our campaigns, compete for leaderboard , or get tipped by others. 
                </p>
                </div>
                <div className='ml-[110px]'>
                <h1 className='text-4xl text-black'>
                    Tip Others
                </h1>
                <p className={`${poppins.className} mt-4 w-[230px] text-black text-2xl`}>
                    Show your appreciation for great content by sending $TREATS directly to builders and projects. 
                </p>
                </div>
                <div className='ml-[110px]'>
                <h1 className='text-4xl text-black'>
                    Redeem TREATS
                </h1>
                <p className={`${poppins.className} mt-4 w-[230px] text-black text-2xl`}>
                    Trade TREATS or hold them for Rewards
                </p>
                </div>
            </div>
        </div>
      </article>
  )
}

export default StepsMenu