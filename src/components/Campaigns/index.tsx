import { bangers } from '@/utils/fonts'
import { Button } from 'antd'
import React from 'react'

const CampaignsPage = () => {
  return (
    <section className='flex flex-col justify-center items-center px-2 mx-auto w-full overflow-x-hidden'>
        <article>
            <div
                className='rounded-3xl h-[810px] w-[1428px]'
                style={{
                    border: '5px solid #000',
                    backgroundImage: 'url(/assets/GIFs/campaign.gif)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
            >
            </div>
            <div className='relative -top-[120px]'>
                <div className={`flex justify-center items-center gap-x-[60px]`}>
                    <Button
                        className={`${bangers.className} h-[77px] w-[315px] flex justify-center items-center rounded-[72px] bg-yellow_primary px-10 py-3 text-5xl text-black border-none`}
                    >
                        Social good
                    </Button>
                    <Button
                        className={`${bangers.className} h-[77px] w-[468px] flex justify-center items-center rounded-[72px] bg-sky_blue_secondary px-10 py-3 text-5xl text-black border-none`}
                    >
                        Dev project/grants
                    </Button>
                    <Button
                        className={`${bangers.className} h-[77px] w-[265px] flex justify-center items-center rounded-[72px] bg-green_primary px-10 py-3 text-5xl text-black border-none`}
                    >
                        upcoming
                    </Button>
                </div>
            </div>
        </article>

    </section>
  )
}

export default CampaignsPage