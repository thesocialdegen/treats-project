import ImageIcon from '@/ui-components/ImageIcon'
import { bangers, poppins } from '@/utils/fonts'
import { Button } from 'antd'
import React from 'react'

const CampaignProjects = () => {
  return (
    <section>
        <div
            className='rounded-3xl h-[810px] w-[1428px]'
            style={{
                border: '5px solid #000',
                backgroundImage: 'url(/assets/GIFs/projects.gif)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
        </div>
        <div className='relative -top-[665px]'>
            <div className={`flex justify-center items-center gap-x-[60px]`}>
                <h1 className='text-7xl capitalize'>support a project or smth</h1>
            </div>
        </div>
        <article className='relative -top-[520px]'>
            <div className={`flex justify-center items-center gap-x-[150px]`}>
                <div className='flex flex-col gap-y-6'>
                    <p className={`${poppins.className} text-3xl w-[494px]`}>
                        Join a supportive, collaborative ecosystem with a greater purpose – permissionless, flexible, and dedicated to defining the future of Ethereum.
                    </p>
                    <Button className={`${bangers.className} h-[67px] w-[365px] flex justify-center items-center text-[40px] bg-yellow_primary border-solid border-black border-[3px] rounded-[72px]`}>
                        Sponsor a project
                    </Button>
                </div>
                <div className='flex flex-col gap-y-4'>
                    <p className={`${poppins.className} text-3xl w-[494px]`}>
                        Join a supportive, collaborative ecosystem with a greater purpose – permissionless, flexible, and dedicated to defining the future of Ethereum.
                    </p>
                    <Button className={`${bangers.className} h-[67px] w-[345px] flex justify-center items-center text-[40px] bg-yellow_primary border-solid border-black border-[3px] rounded-[72px]`}>
                        list your project
                    </Button>
                </div>
            </div>
            <div className='flex justify-end'>
                <ImageIcon src='/assets/icons/stars-icon.svg' alt='stars-icon' imgClassName='ml-auto relative -left-[28px] -top-[60px]'/>
            </div>
        </article>
    </section>
  )
}

export default CampaignProjects