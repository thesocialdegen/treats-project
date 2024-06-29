import ImageIcon from '@/ui-components/ImageIcon'
import { bangers, poppins } from '@/utils/fonts'
import { Button, Progress } from 'antd'
import React from 'react'

const CampaignSocialGood = () => {
    return (
        <section>
            <div
                className='rounded-3xl h-[810px] w-[1428px]'
                style={{
                    border: '5px solid #000',
                    backgroundImage: 'url(/assets/GIFs/social-good.gif)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
            </div>
            <div className='relative -top-[750px] left-[250px]'>
                <div className={`w-[1136px] flex justify-between items-center gap-x-[60px]`}>
                    <h1 className='text-8xl'>SOCIAL GOOD</h1>
                    <Button
                        className={`${bangers.className} h-[77px] w-[430px] flex justify-center items-center rounded-[72px] bg-sky_blue_secondary px-10 py-3 text-5xl text-black border-none`}
                    >
                        Start an initiative
                    </Button>
                </div>
            </div>
            <article className='relative -top-[650px]'>
                <div className={`flex justify-center  gap-x-[120px]`}>
                    <div className='flex flex-col gap-y-4'>
                        <div className='flex justify-center items-center gap-x-4'>
                            <ImageIcon src='/assets/icons/treats-mini-icon.svg' alt='treats-icon'/>
                            <div>
                                <h1 className='text-[40px]'>
                                    100/400 $treats 
                                </h1>
                                <Progress percent={30} />
                            </div>

                        </div>
                        <h1 className='text-6xl w-[326px] tracking-wider'>
                            Plantation drive
                        </h1>
                        <p className={`${poppins.className} text-4xl w-[242px]`}>
                            make a difference!one $treat a time!
                        </p>
                        <Button className={`${bangers.className} h-[45px] w-[164px] flex justify-center items-center text-[28px] bg-yellow_primary border-solid border-black border-[3px] rounded-[72px]`}>
                            contirbute
                        </Button>
                        <ImageIcon src='/assets/icons/thunder-icon.svg' alt='thunder-icon' imgClassName='relative z-100 left-[290px] -top-[46px]'/>
                    </div>
                    <div className='ml-1 flex flex-col gap-y-4 '>
                        <div className='flex justify-center items-center gap-x-4'>
                            <ImageIcon src='/assets/icons/treats-mini-icon.svg' alt='treats-icon'/>
                            <div>
                                <h1 className='text-[40px]'>
                                    100/400 $treats 
                                </h1>
                                <Progress percent={30} />
                            </div>

                        </div>
                        <h1 className='text-6xl w-[343px] tracking-wider'>
                            Clean the river
                        </h1>
                        <p className={`${poppins.className} text-4xl w-[242px]`}>
                            one $treats= =one happy face/ one full stomach
                        </p>
                        <Button className={`${bangers.className} h-[45px] w-[164px] flex justify-center items-center text-[28px] bg-yellow_primary border-solid border-black border-[3px] rounded-[72px]`}>
                            contirbute
                        </Button>
                    </div>
                    <div className='flex flex-col gap-y-4'>
                        <div className='flex justify-center items-center gap-x-4'>
                            <ImageIcon src='/assets/icons/treats-mini-icon.svg' alt='treats-icon'/>
                            <div>
                                <h1 className='text-[40px]'>
                                    100/400 $treats 
                                </h1>
                                <Progress percent={30} />
                            </div>

                        </div>
                        <h1 className='text-6xl w-[345px] tracking-wider'>
                            feed and make someone smile
                        </h1>
                        <p className={`${poppins.className} text-4xl w-[242px]`}>
                            goal: 10,000 $treats
                        </p>
                        <Button className={`${bangers.className} h-[45px] w-[164px] flex justify-center items-center text-[28px] bg-yellow_primary border-solid border-black border-[3px] rounded-[72px]`}>
                            contirbute
                        </Button>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default CampaignSocialGood
