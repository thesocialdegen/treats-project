// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import ImageIcon from '@/ui-components/ImageIcon';
import { bangers, poppins } from '@/utils/fonts';
import { Button, Progress } from 'antd';
import React from 'react';

const CampaignSocialGood = () => {
	return (
		<section>
			<div
				className='h-[810px] w-[1428px] rounded-3xl'
				style={{
					backgroundImage: 'url(/assets/GIFs/social-good.gif)',
					backgroundPosition: 'center',
					backgroundSize: 'cover',
					border: '5px solid #000'
				}}
			></div>
			<div className='relative -top-[750px] left-[250px]'>
				<div className={'flex w-[1136px] items-center justify-between gap-x-[60px]'}>
					<h1 className='text-8xl'>SOCIAL GOOD</h1>
					<Button
						className={`${bangers.className} flex h-[77px] w-[430px] items-center justify-center rounded-[72px] border-none bg-sky_blue_secondary px-10 py-3 text-5xl text-black`}
					>
						Start an initiative
					</Button>
				</div>
			</div>
			<article className='relative -top-[650px]'>
				<div className={'flex justify-center  gap-x-[120px]'}>
					<div className='flex flex-col gap-y-4'>
						<div className='flex items-center justify-center gap-x-4'>
							<ImageIcon
								src='/assets/icons/treats-mini-icon.svg'
								alt='treats-icon'
							/>
							<div>
								<h1 className='text-[40px]'>100/400 $treats</h1>
								<Progress percent={30} />
							</div>
						</div>
						<h1 className='w-[326px] text-6xl tracking-wider'>Plantation drive</h1>
						<p className={`${poppins.className} w-[242px] text-4xl`}>make a difference!one $treat a time!</p>
						<Button
							className={`${bangers.className} flex h-[45px] w-[164px] items-center justify-center rounded-[72px] border-[3px] border-solid border-black bg-yellow_primary text-[28px] hover:text-black`}
						>
							contirbute
						</Button>
						<ImageIcon
							src='/assets/icons/thunder-icon.svg'
							alt='thunder-icon'
							imgClassName='relative z-100 left-[290px] -top-[46px]'
						/>
					</div>
					<div className='ml-1 flex flex-col gap-y-4 '>
						<div className='flex items-center justify-center gap-x-4'>
							<ImageIcon
								src='/assets/icons/treats-mini-icon.svg'
								alt='treats-icon'
							/>
							<div>
								<h1 className='text-[40px]'>100/400 $treats</h1>
								<Progress percent={30} />
							</div>
						</div>
						<h1 className='w-[343px] text-6xl tracking-wider'>Clean the river</h1>
						<p className={`${poppins.className} w-[242px] text-4xl`}>one $treats= =one happy face/ one full stomach</p>
						<Button
							className={`${bangers.className} flex h-[45px] w-[164px] items-center justify-center rounded-[72px] border-[3px] border-solid border-black bg-yellow_primary text-[28px] hover:text-black`}
						>
							contirbute
						</Button>
					</div>
					<div className='flex flex-col gap-y-4'>
						<div className='flex items-center justify-center gap-x-4'>
							<ImageIcon
								src='/assets/icons/treats-mini-icon.svg'
								alt='treats-icon'
							/>
							<div>
								<h1 className='text-[40px]'>100/400 $treats</h1>
								<Progress percent={30} />
							</div>
						</div>
						<h1 className='w-[345px] text-6xl tracking-wider'>feed and make someone smile</h1>
						<p className={`${poppins.className} w-[242px] text-4xl`}>goal: 10,000 $treats</p>
						<Button
							className={`${bangers.className} flex h-[45px] w-[164px] items-center justify-center rounded-[72px] border-[3px] border-solid border-black bg-yellow_primary text-[28px] hover:text-black`}
						>
							contirbute
						</Button>
					</div>
				</div>
			</article>
		</section>
	);
};

export default CampaignSocialGood;
