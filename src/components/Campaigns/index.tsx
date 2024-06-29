import { bangers } from '@/utils/fonts'
import { Button } from 'antd'
import React from 'react'
import CampaignSocialGood from './contents/CampaignSocialGood'
import CampaignProjects from './contents/CampaignProjects'

const CampaignsPage = () => {

    const scrollToSocialGood = () => {
        const element = document.getElementById('social-good');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    const scrollToProjects = () => {
        const element = document.getElementById('projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const scrollToUpcoming = () => {
        const element = document.getElementById('projects');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className='mb-2 flex flex-col gap-y-6 justify-center items-center px-2 mx-auto w-full overflow-x-hidden h-full'>
            <article className='h-[810px]'>
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
                            onClick={scrollToSocialGood}
                        >
                            Social good
                        </Button>
                        <Button
                            className={`${bangers.className} h-[77px] w-[468px] flex justify-center items-center rounded-[72px] bg-sky_blue_secondary px-10 py-3 text-5xl text-black border-none`}
                            onClick={scrollToProjects}
                        >
                            Dev project/grants
                        </Button>
                        <Button
                            className={`${bangers.className} h-[77px] w-[265px] flex justify-center items-center rounded-[72px] bg-green_primary px-10 py-3 text-5xl text-black border-none`}
                            onClick={scrollToUpcoming}
                        >
                            upcoming
                        </Button>
                    </div>
                </div>
            </article>
            <article id='social-good' className='h-[810px]'>
                <CampaignSocialGood />
            </article>
            <article id='projects' className='h-[810px]'>
                <CampaignProjects />
            </article>
            <article id='upcoming' className='h-[810px]'>
                <div
                    className='rounded-3xl h-[810px] w-[1428px]'
                    style={{
                        border: '5px solid #000',
                        backgroundImage: 'url(/assets/GIFs/more-campaigns.gif)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                </div>
            </article>
        </section>
  )
}

export default CampaignsPage