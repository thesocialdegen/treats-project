// Copyright 2019-2025 @polkassembly/polkassembly authors & contributors
// This software may be modified and distributed under the terms
// of the Apache-2.0 license. See the LICENSE file for details.
'use client';
import React, { useEffect } from 'react';
import SponsorCard from './SponsorCard';
import { useCampaignsSelector } from '@/redux/selectors';

const CampaignSponsor = () => {
	const { campaigns } = useCampaignsSelector();

	useEffect(() => {
		console.log('CampaignSponsor render:', campaigns);
	}, [campaigns]);

	return (
		<section>
			<div
				className='flex h-[100vh] w-full px-4 py-6'
				style={{
					backgroundImage: 'url(/assets/Frames/sponsor-frame.svg)',
					backgroundPosition: 'center',
					border: '5px solid #000',
					borderRadius: '30px'
				}}
			></div>
			<article
				className='flex max-h-[4000px] w-full flex-col px-4 py-6'
				style={{
					backgroundImage: 'url(/assets/Frames/social-good-bg.svg)',
					backgroundPosition: 'center',
					border: '5px solid #000',
					borderRadius: '30px'
				}}
			>
				<div className='grid grid-cols-1 gap-x-2 gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
					{campaigns?.data?.events?.map((campaign: any, index: number) => (
						<SponsorCard
							key={index}
							campaign={campaign}
						/>
					))}
				</div>
			</article>
		</section>
	);
};

export default CampaignSponsor;
