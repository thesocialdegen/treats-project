// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
import React from 'react';
import { bangers } from '@/utils/fonts';
import { Button } from 'antd';
import CampaignCard from './CampaignCard';
import { modalActions } from '@/redux/modal';
import { EContentType, EFooterType, ETitleType } from '@/redux/modal/@types';
import { useDispatch } from 'react-redux';
import { useCampaignsSelector } from '@/redux/selectors';

const CampaignSocialGood = () => {
	const dispatch = useDispatch();
	const { campaigns } = useCampaignsSelector();
	console.log('All Campaign Details --> ', campaigns?.data?.events);

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
				<div className='flex w-[1136px] items-center justify-between gap-x-[60px]'>
					<h1 className='text-8xl tracking-wider'>SOCIAL GOOD</h1>
					<Button
						className={`${bangers.className} flex h-[77px] w-[430px] items-center justify-center rounded-[72px] border-4 border-black bg-sky_blue_secondary px-10 py-3 text-5xl text-black hover:shadow-lg`}
						onClick={() => {
							dispatch(
								modalActions.setModal({
									contentType: EContentType.CAMPAIGN_DETAILS,
									footerType: EFooterType.NONE,
									open: true,
									titleType: ETitleType.NONE
								})
							);
						}}
					>
						Start an initiative
					</Button>
				</div>
			</div>
			<article className='relative -top-[650px]'>
				<div className='flex justify-center gap-x-[90px]'>
					<CampaignCard
						title='Plantation drive'
						treats={100}
						progress={30}
						description='make a difference! one $treat a time!'
						buttonText='contribute'
						iconSrc='/assets/icons/treats-mini-icon.svg'
						iconAlt='treats-icon'
					/>
					<CampaignCard
						title='Clean the river'
						treats={100}
						progress={30}
						description='one $treat = one happy face / one full stomach'
						buttonText='contribute'
						iconSrc='/assets/icons/treats-mini-icon.svg'
						iconAlt='treats-icon'
					/>
					<CampaignCard
						title='Feed and make someone smile'
						treats={100}
						progress={30}
						description='goal: 10,000 $treats'
						buttonText='contribute'
						iconSrc='/assets/icons/treats-mini-icon.svg'
						iconAlt='treats-icon'
					/>
				</div>
			</article>
		</section>
	);
};

export default CampaignSocialGood;
