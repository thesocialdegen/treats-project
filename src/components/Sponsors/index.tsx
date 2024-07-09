// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
'use client';
import React, { useEffect } from 'react';
import SponsorCard from './SponsorCard';
import { useCampaignsSelector } from '@/redux/selectors';
import { useDispatch } from 'react-redux';
import { getCampaigns } from '@/redux/campaigns/actions';
import ImageIcon from '@/ui-components/ImageIcon';
import { Button } from 'antd';
import { bangers } from '@/utils/fonts';
import { modalActions } from '@/redux/modal';
import { EContentType, EFooterType, ETitleType } from '@/redux/modal/@types';

const CampaignSponsor = () => {
	const { campaigns } = useCampaignsSelector();
	const dispatch = useDispatch();

	useEffect(() => {
		if (!campaigns) {
			dispatch(getCampaigns({}, true));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [campaigns]);

	return (
		<section className='flex w-[1440px] flex-col items-center gap-y-4'>
			<article
				className='flex h-[303px] w-full px-4 py-6'
				style={{
					backgroundImage: 'url(/assets/Frames/sponsor-frame.svg)',
					borderRadius: '30px'
				}}
			>
				<div className='ml-[10px] flex w-full items-center justify-center'>
					<ImageIcon
						src='/assets/GIFs/tip-project.gif'
						alt='tip-a-project'
						imgWrapperClassName='relative scale-[50%] top-[70px]'
					/>
				</div>
			</article>
			<div
				className='w-full px-4 pb-8 pt-8'
				style={{
					backgroundImage: 'url(/assets/Frames/social-good-bg.svg)',
					backgroundPosition: 'center',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					border: '5px solid #000',
					borderRadius: '30px'
				}}
			>
				<div className='mt-8 flex w-full items-center justify-between'>
					<ImageIcon
						src='/assets/GIFs/tag.gif'
						alt='tag-gif'
						imgWrapperClassName='absolute scale-[30%] p-0 m-0 top-[80px] -ml-[615px]'
					/>
					<h1 className='relative left-[40px] top-[6px] z-50 text-6xl'>ALL Projects</h1>
					<Button
						className={`ml-auto h-[67px] w-[289px] ${bangers.className} rounded-[72px] border-[3px] border-solid border-black bg-yellow_primary text-4xl hover:text-black`}
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
						List A Project
					</Button>
				</div>
				<div className='mt-6 flex justify-center'>
					<div className='grid grid-cols-1 gap-x-[20px] gap-y-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
						{campaigns?.data?.events?.map((campaign: any, index: number) => (
							<SponsorCard
								key={index}
								campaign={campaign}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default CampaignSponsor;
